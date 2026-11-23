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

export function getGetApiV1SettingsPublicKey(
  args: InferRequestType<(typeof client.api.v1)['settings.public']['$get']>,
) {
  return ['api', '/api/v1/settings.public', args] as const
}

export function useGetApiV1SettingsPublic<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['settings.public']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['settings.public']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SettingsPublicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['settings.public']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['settings.public'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SettingsPublic<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['settings.public']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['settings.public']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SettingsPublicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['settings.public']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['settings.public'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SettingsOauthKey() {
  return ['api', '/api/v1/settings.oauth'] as const
}

export function useGetApiV1SettingsOauth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['settings.oauth']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SettingsOauthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['settings.oauth']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['settings.oauth'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SettingsOauth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['settings.oauth']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SettingsOauthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['settings.oauth']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['settings.oauth'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SettingsKey(args: InferRequestType<typeof client.api.v1.settings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/settings', keyArgs] as const
}

export function useGetApiV1Settings<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Settings<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SettingsKey() {
  return ['api', '/api/v1/settings', 'POST'] as const
}

export function usePostApiV1Settings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.settings.$post> }) =>
        parseResponse(client.api.v1.settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SettingsAddCustomOAuthKey() {
  return ['api', '/api/v1/settings.addCustomOAuth', 'POST'] as const
}

export function usePostApiV1SettingsAddCustomOAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['settings.addCustomOAuth']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['settings.addCustomOAuth']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SettingsAddCustomOAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['settings.addCustomOAuth']['$post']> },
      ) => parseResponse(client.api.v1['settings.addCustomOAuth'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SettingsRemoveCustomOAuthKey() {
  return ['api', '/api/v1/settings.removeCustomOAuth', 'POST'] as const
}

export function usePostApiV1SettingsRemoveCustomOAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['settings.removeCustomOAuth']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['settings.removeCustomOAuth']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SettingsRemoveCustomOAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['settings.removeCustomOAuth']['$post']> },
      ) => parseResponse(client.api.v1['settings.removeCustomOAuth'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SettingsRefreshOAuthServicesKey() {
  return ['api', '/api/v1/settings.refreshOAuthServices', 'POST'] as const
}

export function usePostApiV1SettingsRefreshOAuthServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['settings.refreshOAuthServices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['settings.refreshOAuthServices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SettingsRefreshOAuthServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1)['settings.refreshOAuthServices']['$post']>
        },
      ) => parseResponse(client.api.v1['settings.refreshOAuthServices'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SettingsIdKey(
  args: InferRequestType<(typeof client.api.v1.settings)[':_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/settings/:_id', keyArgs] as const
}

export function useGetApiV1SettingsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.settings)[':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.settings)[':_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SettingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.settings)[':_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.settings[':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SettingsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.settings)[':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.settings)[':_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SettingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.settings)[':_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.settings[':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SettingsIdKey() {
  return ['api', '/api/v1/settings/:_id', 'POST'] as const
}

export function usePostApiV1SettingsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.settings)[':_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.settings)[':_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SettingsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.settings)[':_id']['$post']> },
      ) => parseResponse(client.api.v1.settings[':_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SetupWizardParametersKey() {
  return ['api', '/api/v1/setupWizard.parameters'] as const
}

export function useGetApiV1SetupWizardParameters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['setupWizard.parameters']['$get']>>
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
        ? getGetApiV1SetupWizardParametersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['setupWizard.parameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['setupWizard.parameters'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SetupWizardParameters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['setupWizard.parameters']['$get']>>
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
        ? getGetApiV1SetupWizardParametersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['setupWizard.parameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['setupWizard.parameters'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ServiceConfigurationsKey() {
  return ['api', '/api/v1/service.configurations'] as const
}

export function useGetApiV1ServiceConfigurations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['service.configurations']['$get']>>
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
        ? getGetApiV1ServiceConfigurationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['service.configurations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['service.configurations'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ServiceConfigurations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['service.configurations']['$get']>>
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
        ? getGetApiV1ServiceConfigurationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['service.configurations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['service.configurations'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1CloudConnectWorkspaceKey() {
  return ['api', '/api/v1/cloud.connectWorkspace', 'POST'] as const
}

export function usePostApiV1CloudConnectWorkspace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['cloud.connectWorkspace']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['cloud.connectWorkspace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CloudConnectWorkspaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['cloud.connectWorkspace']['$post']> },
      ) => parseResponse(client.api.v1['cloud.connectWorkspace'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1CloudManualRegisterKey() {
  return ['api', '/api/v1/cloud.manualRegister', 'POST'] as const
}

export function usePostApiV1CloudManualRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['cloud.manualRegister']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['cloud.manualRegister']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CloudManualRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['cloud.manualRegister']['$post']> },
      ) => parseResponse(client.api.v1['cloud.manualRegister'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CloudRegistrationStatusKey(
  args: InferRequestType<(typeof client.api.v1)['cloud.registrationStatus']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/cloud.registrationStatus', keyArgs] as const
}

export function useGetApiV1CloudRegistrationStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['cloud.registrationStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['cloud.registrationStatus']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1CloudRegistrationStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['cloud.registrationStatus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['cloud.registrationStatus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CloudRegistrationStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['cloud.registrationStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['cloud.registrationStatus']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1CloudRegistrationStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['cloud.registrationStatus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['cloud.registrationStatus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1CloudWorkspaceRegisterDataKey(
  args: InferRequestType<(typeof client.api.v1)['cloud.workspaceRegisterData']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/cloud.workspaceRegisterData', keyArgs] as const
}

export function useGetApiV1CloudWorkspaceRegisterData<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['cloud.workspaceRegisterData']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['cloud.workspaceRegisterData']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1CloudWorkspaceRegisterDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['cloud.workspaceRegisterData']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['cloud.workspaceRegisterData'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CloudWorkspaceRegisterData<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['cloud.workspaceRegisterData']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['cloud.workspaceRegisterData']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1CloudWorkspaceRegisterDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['cloud.workspaceRegisterData']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['cloud.workspaceRegisterData'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1DnsResolveTxtKey() {
  return ['api', '/api/v1/dns.resolve.txt', 'POST'] as const
}

export function usePostApiV1DnsResolveTxt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['dns.resolve.txt']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['dns.resolve.txt']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1DnsResolveTxtKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['dns.resolve.txt']['$post']> },
      ) => parseResponse(client.api.v1['dns.resolve.txt'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1DnsResolveSrvKey() {
  return ['api', '/api/v1/dns.resolve.srv', 'POST'] as const
}

export function usePostApiV1DnsResolveSrv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['dns.resolve.srv']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['dns.resolve.srv']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1DnsResolveSrvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['dns.resolve.srv']['$post']> },
      ) => parseResponse(client.api.v1['dns.resolve.srv'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1E2eFetchMyKeysKey(
  args: InferRequestType<(typeof client.api.v1)['e2e.fetchMyKeys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/e2e.fetchMyKeys', keyArgs] as const
}

export function useGetApiV1E2eFetchMyKeys<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['e2e.fetchMyKeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['e2e.fetchMyKeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1E2eFetchMyKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['e2e.fetchMyKeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['e2e.fetchMyKeys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1E2eFetchMyKeys<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['e2e.fetchMyKeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['e2e.fetchMyKeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1E2eFetchMyKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['e2e.fetchMyKeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['e2e.fetchMyKeys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1E2eGetUsersOfRoomWithoutKeyKey(
  args: InferRequestType<(typeof client.api.v1)['e2e.getUsersOfRoomWithoutKey']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/e2e.getUsersOfRoomWithoutKey', keyArgs] as const
}

export function useGetApiV1E2eGetUsersOfRoomWithoutKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['e2e.getUsersOfRoomWithoutKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['e2e.getUsersOfRoomWithoutKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1E2eGetUsersOfRoomWithoutKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['e2e.getUsersOfRoomWithoutKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['e2e.getUsersOfRoomWithoutKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1E2eGetUsersOfRoomWithoutKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['e2e.getUsersOfRoomWithoutKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['e2e.getUsersOfRoomWithoutKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1E2eGetUsersOfRoomWithoutKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['e2e.getUsersOfRoomWithoutKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['e2e.getUsersOfRoomWithoutKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1E2eSetRoomKeyIDKey() {
  return ['api', '/api/v1/e2e.setRoomKeyID', 'POST'] as const
}

export function usePostApiV1E2eSetRoomKeyID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.setRoomKeyID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['e2e.setRoomKeyID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1E2eSetRoomKeyIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['e2e.setRoomKeyID']['$post']> },
      ) => parseResponse(client.api.v1['e2e.setRoomKeyID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1E2eSetUserPublicAndPrivateKeysKey() {
  return ['api', '/api/v1/e2e.setUserPublicAndPrivateKeys', 'POST'] as const
}

export function usePostApiV1E2eSetUserPublicAndPrivateKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.setUserPublicAndPrivateKeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['e2e.setUserPublicAndPrivateKeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1E2eSetUserPublicAndPrivateKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1)['e2e.setUserPublicAndPrivateKeys']['$post']>
        },
      ) =>
        parseResponse(client.api.v1['e2e.setUserPublicAndPrivateKeys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1E2eUpdateGroupKeyKey() {
  return ['api', '/api/v1/e2e.updateGroupKey', 'POST'] as const
}

export function usePostApiV1E2eUpdateGroupKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.updateGroupKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['e2e.updateGroupKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1E2eUpdateGroupKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['e2e.updateGroupKey']['$post']> },
      ) => parseResponse(client.api.v1['e2e.updateGroupKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1E2eRequestSubscriptionKeysKey() {
  return ['api', '/api/v1/e2e.requestSubscriptionKeys', 'POST'] as const
}

export function usePostApiV1E2eRequestSubscriptionKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.requestSubscriptionKeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['e2e.requestSubscriptionKeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1E2eRequestSubscriptionKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1)['e2e.requestSubscriptionKeys']['$post']>
        },
      ) => parseResponse(client.api.v1['e2e.requestSubscriptionKeys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1E2eAcceptSuggestedGroupKeyKey() {
  return ['api', '/api/v1/e2e.acceptSuggestedGroupKey', 'POST'] as const
}

export function usePostApiV1E2eAcceptSuggestedGroupKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.acceptSuggestedGroupKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['e2e.acceptSuggestedGroupKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1E2eAcceptSuggestedGroupKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1)['e2e.acceptSuggestedGroupKey']['$post']>
        },
      ) => parseResponse(client.api.v1['e2e.acceptSuggestedGroupKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1E2eRejectSuggestedGroupKeyKey() {
  return ['api', '/api/v1/e2e.rejectSuggestedGroupKey', 'POST'] as const
}

export function usePostApiV1E2eRejectSuggestedGroupKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.rejectSuggestedGroupKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['e2e.rejectSuggestedGroupKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1E2eRejectSuggestedGroupKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1)['e2e.rejectSuggestedGroupKey']['$post']>
        },
      ) => parseResponse(client.api.v1['e2e.rejectSuggestedGroupKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1E2eFetchUsersWaitingForGroupKeyKey(
  args: InferRequestType<(typeof client.api.v1)['e2e.fetchUsersWaitingForGroupKey']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/e2e.fetchUsersWaitingForGroupKey', keyArgs] as const
}

export function useGetApiV1E2eFetchUsersWaitingForGroupKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['e2e.fetchUsersWaitingForGroupKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['e2e.fetchUsersWaitingForGroupKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1E2eFetchUsersWaitingForGroupKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['e2e.fetchUsersWaitingForGroupKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['e2e.fetchUsersWaitingForGroupKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1E2eFetchUsersWaitingForGroupKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['e2e.fetchUsersWaitingForGroupKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['e2e.fetchUsersWaitingForGroupKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1E2eFetchUsersWaitingForGroupKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['e2e.fetchUsersWaitingForGroupKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['e2e.fetchUsersWaitingForGroupKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1E2eProvideUsersSuggestedGroupKeysKey() {
  return ['api', '/api/v1/e2e.provideUsersSuggestedGroupKeys', 'POST'] as const
}

export function usePostApiV1E2eProvideUsersSuggestedGroupKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.provideUsersSuggestedGroupKeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['e2e.provideUsersSuggestedGroupKeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1E2eProvideUsersSuggestedGroupKeysKey()
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
            (typeof client.api.v1)['e2e.provideUsersSuggestedGroupKeys']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1['e2e.provideUsersSuggestedGroupKeys'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1E2eResetRoomKeyKey() {
  return ['api', '/api/v1/e2e.resetRoomKey', 'POST'] as const
}

export function usePostApiV1E2eResetRoomKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['e2e.resetRoomKey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['e2e.resetRoomKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1E2eResetRoomKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['e2e.resetRoomKey']['$post']> },
      ) => parseResponse(client.api.v1['e2e.resetRoomKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1UploadImportFileKey() {
  return ['api', '/api/v1/uploadImportFile', 'POST'] as const
}

export function usePostApiV1UploadImportFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.uploadImportFile.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.uploadImportFile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1UploadImportFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.uploadImportFile.$post> },
      ) => parseResponse(client.api.v1.uploadImportFile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1DownloadPublicImportFileKey() {
  return ['api', '/api/v1/downloadPublicImportFile', 'POST'] as const
}

export function usePostApiV1DownloadPublicImportFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.downloadPublicImportFile.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.downloadPublicImportFile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1DownloadPublicImportFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.downloadPublicImportFile.$post> },
      ) => parseResponse(client.api.v1.downloadPublicImportFile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1StartImportKey() {
  return ['api', '/api/v1/startImport', 'POST'] as const
}

export function usePostApiV1StartImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.startImport.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.startImport.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1StartImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.startImport.$post> }) =>
        parseResponse(client.api.v1.startImport.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1GetImportFileDataKey(
  args: InferRequestType<typeof client.api.v1.getImportFileData.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/getImportFileData', keyArgs] as const
}

export function useGetApiV1GetImportFileData<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.getImportFileData.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportFileData.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1GetImportFileDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportFileData.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.getImportFileData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GetImportFileData<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.getImportFileData.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportFileData.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1GetImportFileDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportFileData.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.getImportFileData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1GetImportProgressKey(
  args: InferRequestType<typeof client.api.v1.getImportProgress.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/getImportProgress', keyArgs] as const
}

export function useGetApiV1GetImportProgress<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.getImportProgress.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportProgress.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1GetImportProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportProgress.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.getImportProgress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GetImportProgress<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.getImportProgress.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportProgress.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1GetImportProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.getImportProgress.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.getImportProgress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1GetLatestImportOperationsKey(
  args: InferRequestType<typeof client.api.v1.getLatestImportOperations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/getLatestImportOperations', keyArgs] as const
}

export function useGetApiV1GetLatestImportOperations<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.getLatestImportOperations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.getLatestImportOperations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1GetLatestImportOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.getLatestImportOperations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.getLatestImportOperations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GetLatestImportOperations<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.getLatestImportOperations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.getLatestImportOperations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1GetLatestImportOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.getLatestImportOperations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.getLatestImportOperations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1DownloadPendingFilesKey() {
  return ['api', '/api/v1/downloadPendingFiles', 'POST'] as const
}

export function usePostApiV1DownloadPendingFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadPendingFiles.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.downloadPendingFiles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1DownloadPendingFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.downloadPendingFiles.$post> },
      ) => parseResponse(client.api.v1.downloadPendingFiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1DownloadPendingAvatarsKey() {
  return ['api', '/api/v1/downloadPendingAvatars', 'POST'] as const
}

export function usePostApiV1DownloadPendingAvatars<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadPendingAvatars.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.downloadPendingAvatars.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1DownloadPendingAvatarsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.downloadPendingAvatars.$post> },
      ) => parseResponse(client.api.v1.downloadPendingAvatars.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1GetCurrentImportOperationKey(
  args: InferRequestType<typeof client.api.v1.getCurrentImportOperation.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/getCurrentImportOperation', keyArgs] as const
}

export function useGetApiV1GetCurrentImportOperation<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.getCurrentImportOperation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.getCurrentImportOperation.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1GetCurrentImportOperationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.getCurrentImportOperation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.getCurrentImportOperation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1GetCurrentImportOperation<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.getCurrentImportOperation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.getCurrentImportOperation.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1GetCurrentImportOperationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.getCurrentImportOperation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.getCurrentImportOperation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ImportersListKey(
  args: InferRequestType<(typeof client.api.v1)['importers.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/importers.list', keyArgs] as const
}

export function useGetApiV1ImportersList<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['importers.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['importers.list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ImportersListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['importers.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['importers.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ImportersList<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['importers.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['importers.list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ImportersListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['importers.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['importers.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ImportNewKey() {
  return ['api', '/api/v1/import.new', 'POST'] as const
}

export function usePostApiV1ImportNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['import.new']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['import.new']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ImportNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['import.new']['$post']> },
      ) => parseResponse(client.api.v1['import.new'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ImportAddUsersKey() {
  return ['api', '/api/v1/import.addUsers', 'POST'] as const
}

export function usePostApiV1ImportAddUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['import.addUsers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['import.addUsers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ImportAddUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['import.addUsers']['$post']> },
      ) => parseResponse(client.api.v1['import.addUsers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ImportRunKey() {
  return ['api', '/api/v1/import.run', 'POST'] as const
}

export function usePostApiV1ImportRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['import.run']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['import.run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ImportRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['import.run']['$post']> },
      ) => parseResponse(client.api.v1['import.run'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ImportStatusKey(
  args: InferRequestType<(typeof client.api.v1)['import.status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/import.status', keyArgs] as const
}

export function useGetApiV1ImportStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['import.status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['import.status']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ImportStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['import.status']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['import.status'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ImportStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['import.status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['import.status']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ImportStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['import.status']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['import.status'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ImportClearKey() {
  return ['api', '/api/v1/import.clear', 'POST'] as const
}

export function usePostApiV1ImportClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['import.clear']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['import.clear']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ImportClearKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['import.clear']['$post']> },
      ) => parseResponse(client.api.v1['import.clear'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1InstancesGetKey(
  args: InferRequestType<(typeof client.api.v1)['instances.get']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/instances.get', keyArgs] as const
}

export function useGetApiV1InstancesGet<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['instances.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['instances.get']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1InstancesGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['instances.get']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['instances.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1InstancesGet<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['instances.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['instances.get']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1InstancesGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['instances.get']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['instances.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ModerationReportsByUsersKey(
  args: InferRequestType<(typeof client.api.v1)['moderation.reportsByUsers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/moderation.reportsByUsers', keyArgs] as const
}

export function useGetApiV1ModerationReportsByUsers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['moderation.reportsByUsers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.reportsByUsers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ModerationReportsByUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.reportsByUsers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['moderation.reportsByUsers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ModerationReportsByUsers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['moderation.reportsByUsers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.reportsByUsers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ModerationReportsByUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.reportsByUsers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['moderation.reportsByUsers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ModerationUserReportedMessagesKey(
  args: InferRequestType<(typeof client.api.v1)['moderation.user.reportedMessages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/moderation.user.reportedMessages', keyArgs] as const
}

export function useGetApiV1ModerationUserReportedMessages<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['moderation.user.reportedMessages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.user.reportedMessages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ModerationUserReportedMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.user.reportedMessages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['moderation.user.reportedMessages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ModerationUserReportedMessages<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['moderation.user.reportedMessages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.user.reportedMessages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ModerationUserReportedMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.user.reportedMessages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['moderation.user.reportedMessages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ModerationReportsKey(
  args: InferRequestType<(typeof client.api.v1)['moderation.reports']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/moderation.reports', keyArgs] as const
}

export function useGetApiV1ModerationReports<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['moderation.reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.reports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ModerationReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['moderation.reports'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ModerationReports<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['moderation.reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.reports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ModerationReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['moderation.reports'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ModerationReportInfoKey(
  args: InferRequestType<(typeof client.api.v1)['moderation.reportInfo']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/moderation.reportInfo', keyArgs] as const
}

export function useGetApiV1ModerationReportInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['moderation.reportInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.reportInfo']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ModerationReportInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.reportInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['moderation.reportInfo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ModerationReportInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['moderation.reportInfo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.reportInfo']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ModerationReportInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.reportInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['moderation.reportInfo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ModerationDismissReportsKey() {
  return ['api', '/api/v1/moderation.dismissReports', 'POST'] as const
}

export function usePostApiV1ModerationDismissReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['moderation.dismissReports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['moderation.dismissReports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ModerationDismissReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['moderation.dismissReports']['$post']> },
      ) => parseResponse(client.api.v1['moderation.dismissReports'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ModerationUserDeleteReportedMessagesKey() {
  return ['api', '/api/v1/moderation.user.deleteReportedMessages', 'POST'] as const
}

export function usePostApiV1ModerationUserDeleteReportedMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['moderation.user.deleteReportedMessages']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['moderation.user.deleteReportedMessages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ModerationUserDeleteReportedMessagesKey()
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
            (typeof client.api.v1)['moderation.user.deleteReportedMessages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1['moderation.user.deleteReportedMessages'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ModerationDismissUserReportsKey() {
  return ['api', '/api/v1/moderation.dismissUserReports', 'POST'] as const
}

export function usePostApiV1ModerationDismissUserReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['moderation.dismissUserReports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['moderation.dismissUserReports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ModerationDismissUserReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1)['moderation.dismissUserReports']['$post']>
        },
      ) => parseResponse(client.api.v1['moderation.dismissUserReports'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ModerationUserReportsByUserIdKey(
  args: InferRequestType<(typeof client.api.v1)['moderation.user.reportsByUserId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/moderation.user.reportsByUserId', keyArgs] as const
}

export function useGetApiV1ModerationUserReportsByUserId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['moderation.user.reportsByUserId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.user.reportsByUserId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ModerationUserReportsByUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.user.reportsByUserId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['moderation.user.reportsByUserId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ModerationUserReportsByUserId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['moderation.user.reportsByUserId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.user.reportsByUserId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ModerationUserReportsByUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.user.reportsByUserId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['moderation.user.reportsByUserId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ModerationUserReportsKey(
  args: InferRequestType<(typeof client.api.v1)['moderation.userReports']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/moderation.userReports', keyArgs] as const
}

export function useGetApiV1ModerationUserReports<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['moderation.userReports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.userReports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ModerationUserReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.userReports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['moderation.userReports'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ModerationUserReports<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['moderation.userReports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.userReports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ModerationUserReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['moderation.userReports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['moderation.userReports'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SessionsListKey(
  args: InferRequestType<typeof client.api.v1.sessions.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/sessions/list', keyArgs] as const
}

export function useGetApiV1SessionsList<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.sessions.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SessionsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.sessions.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SessionsList<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.sessions.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SessionsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.sessions.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SessionsListAllKey(
  args: InferRequestType<(typeof client.api.v1.sessions)['list.all']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/sessions/list.all', keyArgs] as const
}

export function useGetApiV1SessionsListAll<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.sessions)['list.all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.sessions)['list.all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SessionsListAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.sessions)['list.all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.sessions['list.all'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SessionsListAll<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.sessions)['list.all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.sessions)['list.all']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SessionsListAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.sessions)['list.all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.sessions['list.all'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SessionsInfoKey(
  args: InferRequestType<typeof client.api.v1.sessions.info.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/sessions/info', keyArgs] as const
}

export function useGetApiV1SessionsInfo<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.sessions.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.info.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SessionsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.sessions.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SessionsInfo<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.sessions.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.info.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SessionsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.sessions.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SessionsInfoAdminKey(
  args: InferRequestType<(typeof client.api.v1.sessions)['info.admin']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/sessions/info.admin', keyArgs] as const
}

export function useGetApiV1SessionsInfoAdmin<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.sessions)['info.admin']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.sessions)['info.admin']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SessionsInfoAdminKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.sessions)['info.admin']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.sessions['info.admin'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SessionsInfoAdmin<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.sessions)['info.admin']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.sessions)['info.admin']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1SessionsInfoAdminKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.sessions)['info.admin']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.sessions['info.admin'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SessionsLogoutMeKey() {
  return ['api', '/api/v1/sessions/logout.me', 'POST'] as const
}

export function usePostApiV1SessionsLogoutMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.sessions)['logout.me']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.sessions)['logout.me']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SessionsLogoutMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.sessions)['logout.me']['$post']> },
      ) => parseResponse(client.api.v1.sessions['logout.me'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SessionsLogoutKey() {
  return ['api', '/api/v1/sessions/logout', 'POST'] as const
}

export function usePostApiV1SessionsLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sessions.logout.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.sessions.logout.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SessionsLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.sessions.logout.$post> },
      ) => parseResponse(client.api.v1.sessions.logout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PwGetPolicyKey(
  args: InferRequestType<(typeof client.api.v1)['pw.getPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/pw.getPolicy', keyArgs] as const
}

export function useGetApiV1PwGetPolicy<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['pw.getPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['pw.getPolicy']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PwGetPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['pw.getPolicy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['pw.getPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PwGetPolicy<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['pw.getPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['pw.getPolicy']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1PwGetPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['pw.getPolicy']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['pw.getPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1VideoConferenceCapabilitiesKey(
  args: InferRequestType<(typeof client.api.v1)['video-conference.capabilities']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/video-conference.capabilities', keyArgs] as const
}

export function useGetApiV1VideoConferenceCapabilities<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['video-conference.capabilities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.capabilities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1VideoConferenceCapabilitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.capabilities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['video-conference.capabilities'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1VideoConferenceCapabilities<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['video-conference.capabilities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.capabilities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1VideoConferenceCapabilitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.capabilities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['video-conference.capabilities'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1VideoConferenceListKey(
  args: InferRequestType<(typeof client.api.v1)['video-conference.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/video-conference.list', keyArgs] as const
}

export function useGetApiV1VideoConferenceList<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['video-conference.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1VideoConferenceListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['video-conference.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1VideoConferenceList<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['video-conference.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1VideoConferenceListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['video-conference.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1VideoConferenceInfoKey(
  args: InferRequestType<(typeof client.api.v1)['video-conference.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/video-conference.info', keyArgs] as const
}

export function useGetApiV1VideoConferenceInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['video-conference.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.info']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1VideoConferenceInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['video-conference.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1VideoConferenceInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['video-conference.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.info']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1VideoConferenceInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['video-conference.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1VideoConferenceProvidersKey(
  args: InferRequestType<(typeof client.api.v1)['video-conference.providers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/video-conference.providers', keyArgs] as const
}

export function useGetApiV1VideoConferenceProviders<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['video-conference.providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.providers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1VideoConferenceProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['video-conference.providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1VideoConferenceProviders<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['video-conference.providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.providers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1VideoConferenceProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['video-conference.providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1VideoConferenceStartKey() {
  return ['api', '/api/v1/video-conference.start', 'POST'] as const
}

export function usePostApiV1VideoConferenceStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.start']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['video-conference.start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1VideoConferenceStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['video-conference.start']['$post']> },
      ) => parseResponse(client.api.v1['video-conference.start'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1VideoConferenceJoinKey() {
  return ['api', '/api/v1/video-conference.join', 'POST'] as const
}

export function usePostApiV1VideoConferenceJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.join']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['video-conference.join']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1VideoConferenceJoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['video-conference.join']['$post']> },
      ) => parseResponse(client.api.v1['video-conference.join'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1VideoConferenceCancelKey() {
  return ['api', '/api/v1/video-conference.cancel', 'POST'] as const
}

export function usePostApiV1VideoConferenceCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['video-conference.cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1VideoConferenceCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['video-conference.cancel']['$post']> },
      ) => parseResponse(client.api.v1['video-conference.cancel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1VideoConferenceDeclineKey() {
  return ['api', '/api/v1/video-conference.decline', 'POST'] as const
}

export function usePostApiV1VideoConferenceDecline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.decline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['video-conference.decline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1VideoConferenceDeclineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['video-conference.decline']['$post']> },
      ) => parseResponse(client.api.v1['video-conference.decline'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1VideoConferenceLeaveKey() {
  return ['api', '/api/v1/video-conference.leave', 'POST'] as const
}

export function usePostApiV1VideoConferenceLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.leave']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['video-conference.leave']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1VideoConferenceLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['video-conference.leave']['$post']> },
      ) => parseResponse(client.api.v1['video-conference.leave'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1VideoConferenceHeartbeatKey() {
  return ['api', '/api/v1/video-conference.heartbeat', 'POST'] as const
}

export function usePostApiV1VideoConferenceHeartbeat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.heartbeat']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['video-conference.heartbeat']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1VideoConferenceHeartbeatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['video-conference.heartbeat']['$post']> },
      ) => parseResponse(client.api.v1['video-conference.heartbeat'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1VideoConferenceRingKey() {
  return ['api', '/api/v1/video-conference.ring', 'POST'] as const
}

export function usePostApiV1VideoConferenceRing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.ring']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['video-conference.ring']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1VideoConferenceRingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['video-conference.ring']['$post']> },
      ) => parseResponse(client.api.v1['video-conference.ring'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1VideoConferenceAddParticipantsKey() {
  return ['api', '/api/v1/video-conference.add-participants', 'POST'] as const
}

export function usePostApiV1VideoConferenceAddParticipants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.add-participants']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['video-conference.add-participants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1VideoConferenceAddParticipantsKey()
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
            (typeof client.api.v1)['video-conference.add-participants']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1['video-conference.add-participants'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1VideoConferenceRenameKey() {
  return ['api', '/api/v1/video-conference.rename', 'POST'] as const
}

export function usePostApiV1VideoConferenceRename<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.rename']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['video-conference.rename']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1VideoConferenceRenameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['video-conference.rename']['$post']> },
      ) => parseResponse(client.api.v1['video-conference.rename'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1VideoConferenceShareChatKey() {
  return ['api', '/api/v1/video-conference.share-chat', 'POST'] as const
}

export function usePostApiV1VideoConferenceShareChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['video-conference.share-chat']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['video-conference.share-chat']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1VideoConferenceShareChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1)['video-conference.share-chat']['$post']>
        },
      ) => parseResponse(client.api.v1['video-conference.share-chat'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1VideoConferenceJoinableKey(
  args: InferRequestType<(typeof client.api.v1)['video-conference.joinable']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/video-conference.joinable', keyArgs] as const
}

export function useGetApiV1VideoConferenceJoinable<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['video-conference.joinable']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.joinable']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1VideoConferenceJoinableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.joinable']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['video-conference.joinable'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1VideoConferenceJoinable<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['video-conference.joinable']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.joinable']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1VideoConferenceJoinableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['video-conference.joinable']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['video-conference.joinable'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1MediaCallsStateKey(
  args: InferRequestType<(typeof client.api.v1)['media-calls.state']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/media-calls.state', keyArgs] as const
}

export function useGetApiV1MediaCallsState<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['media-calls.state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['media-calls.state']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1MediaCallsStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['media-calls.state']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['media-calls.state'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1MediaCallsState<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['media-calls.state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['media-calls.state']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1MediaCallsStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['media-calls.state']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['media-calls.state'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1MediaCallsInfoKey(
  args: InferRequestType<(typeof client.api.v1)['media-calls.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/media-calls.info', keyArgs] as const
}

export function useGetApiV1MediaCallsInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['media-calls.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['media-calls.info']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1MediaCallsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['media-calls.info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['media-calls.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1MediaCallsInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['media-calls.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['media-calls.info']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1MediaCallsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['media-calls.info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['media-calls.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AuditAuditionsKey(
  args: InferRequestType<(typeof client.api.v1)['audit.auditions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/audit.auditions', keyArgs] as const
}

export function useGetApiV1AuditAuditions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['audit.auditions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['audit.auditions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AuditAuditionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['audit.auditions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['audit.auditions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AuditAuditions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['audit.auditions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['audit.auditions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1AuditAuditionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['audit.auditions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['audit.auditions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AuditMessagesKey() {
  return ['api', '/api/v1/audit.messages', 'POST'] as const
}

export function usePostApiV1AuditMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['audit.messages']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['audit.messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AuditMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['audit.messages']['$post']> },
      ) => parseResponse(client.api.v1['audit.messages'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AuditOmnichannelMessagesKey() {
  return ['api', '/api/v1/audit.omnichannelMessages', 'POST'] as const
}

export function usePostApiV1AuditOmnichannelMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['audit.omnichannelMessages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['audit.omnichannelMessages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AuditOmnichannelMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['audit.omnichannelMessages']['$post']> },
      ) => parseResponse(client.api.v1['audit.omnichannelMessages'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
