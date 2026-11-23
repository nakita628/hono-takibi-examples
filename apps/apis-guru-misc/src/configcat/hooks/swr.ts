import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1CodeReferencesKey() {
  return ['v1', '/v1/code-references', 'POST'] as const
}

export function usePostV1CodeReferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['code-references']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['code-references']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CodeReferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['code-references']['$post']> },
      ) => parseResponse(client.v1['code-references'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CodeReferencesDeleteReportsKey() {
  return ['v1', '/v1/code-references/delete-reports', 'POST'] as const
}

export function usePostV1CodeReferencesDeleteReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['code-references']['delete-reports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['code-references']['delete-reports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CodeReferencesDeleteReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['code-references']['delete-reports']['$post']>
        },
      ) => parseResponse(client.v1['code-references']['delete-reports'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConfigsConfigIdKey(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['$get']>,
) {
  return ['v1', '/v1/configs/:configId', args] as const
}

export function useGetV1ConfigsConfigId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConfigsConfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs[':configId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigsConfigId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConfigsConfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs[':configId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ConfigsConfigIdKey() {
  return ['v1', '/v1/configs/:configId', 'PUT'] as const
}

export function usePutV1ConfigsConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.configs)[':configId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConfigsConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.configs)[':configId']['$put']> },
      ) => parseResponse(client.v1.configs[':configId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConfigsConfigIdKey() {
  return ['v1', '/v1/configs/:configId', 'DELETE'] as const
}

export function useDeleteV1ConfigsConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.configs)[':configId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConfigsConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.configs)[':configId']['$delete']> },
      ) => parseResponse(client.v1.configs[':configId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConfigsConfigIdDeletedSettingsKey(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>,
) {
  return ['v1', '/v1/configs/:configId/deleted-settings', args] as const
}

export function useGetV1ConfigsConfigIdDeletedSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConfigsConfigIdDeletedSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.configs[':configId']['deleted-settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigsConfigIdDeletedSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConfigsConfigIdDeletedSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.configs[':configId']['deleted-settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConfigsConfigIdEnvironmentsEnvironmentIdKey(
  args: InferRequestType<
    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
  >,
) {
  return ['v1', '/v1/configs/:configId/environments/:environmentId', args] as const
}

export function useGetV1ConfigsConfigIdEnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
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
        ? getGetV1ConfigsConfigIdEnvironmentsEnvironmentIdKey(args)
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
                (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
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
          client.v1.configs[':configId'].environments[':environmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigsConfigIdEnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
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
        ? getGetV1ConfigsConfigIdEnvironmentsEnvironmentIdKey(args)
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
                (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
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
          client.v1.configs[':configId'].environments[':environmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesKey(
  args: InferRequestType<
    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
  >,
) {
  return ['v1', '/v1/configs/:configId/environments/:environmentId/values', args] as const
}

export function useGetV1ConfigsConfigIdEnvironmentsEnvironmentIdValues<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
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
        ? getGetV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesKey(args)
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
                (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
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
          client.v1.configs[':configId'].environments[':environmentId'].values.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigsConfigIdEnvironmentsEnvironmentIdValues<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
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
        ? getGetV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesKey(args)
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
                (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
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
          client.v1.configs[':configId'].environments[':environmentId'].values.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConfigsConfigIdSettingsKey(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$get']>,
) {
  return ['v1', '/v1/configs/:configId/settings', args] as const
}

export function useGetV1ConfigsConfigIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConfigsConfigIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs[':configId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigsConfigIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConfigsConfigIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs[':configId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConfigsConfigIdSettingsKey() {
  return ['v1', '/v1/configs/:configId/settings', 'POST'] as const
}

export function usePostV1ConfigsConfigIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsConfigIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$post']> },
      ) => parseResponse(client.v1.configs[':configId'].settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EnvironmentsEnvironmentIdKey(
  args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$get']>,
) {
  return ['v1', '/v1/environments/:environmentId', args] as const
}

export function useGetV1EnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EnvironmentsEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.environments[':environmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EnvironmentsEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.environments[':environmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1EnvironmentsEnvironmentIdKey() {
  return ['v1', '/v1/environments/:environmentId', 'PUT'] as const
}

export function usePutV1EnvironmentsEnvironmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.environments)[':environmentId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EnvironmentsEnvironmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.environments)[':environmentId']['$put']> },
      ) => parseResponse(client.v1.environments[':environmentId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1EnvironmentsEnvironmentIdKey() {
  return ['v1', '/v1/environments/:environmentId', 'DELETE'] as const
}

export function useDeleteV1EnvironmentsEnvironmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.environments)[':environmentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EnvironmentsEnvironmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.environments)[':environmentId']['$delete']> },
      ) => parseResponse(client.v1.environments[':environmentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyKey() {
  return [
    'v1',
    '/v1/environments/:environmentId/settings/:settingId/integrationLinks/:integrationLinkType/:key',
    'POST',
  ] as const
}

export function usePostV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyKey()
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
            (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.environments[':environmentId'].settings[':settingId'].integrationLinks[
            ':integrationLinkType'
          ][':key'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyKey() {
  return [
    'v1',
    '/v1/environments/:environmentId/settings/:settingId/integrationLinks/:integrationLinkType/:key',
    'DELETE',
  ] as const
}

export function useDeleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyKey()
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
            (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.environments[':environmentId'].settings[':settingId'].integrationLinks[
            ':integrationLinkType'
          ][':key'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1EnvironmentsEnvironmentIdSettingsSettingIdValueKey(
  args: InferRequestType<
    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
  >,
) {
  return ['v1', '/v1/environments/:environmentId/settings/:settingId/value', args] as const
}

export function useGetV1EnvironmentsEnvironmentIdSettingsSettingIdValue<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
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
        ? getGetV1EnvironmentsEnvironmentIdSettingsSettingIdValueKey(args)
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
                (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
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
          client.v1.environments[':environmentId'].settings[':settingId'].value.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EnvironmentsEnvironmentIdSettingsSettingIdValue<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
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
        ? getGetV1EnvironmentsEnvironmentIdSettingsSettingIdValueKey(args)
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
                (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
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
          client.v1.environments[':environmentId'].settings[':settingId'].value.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1EnvironmentsEnvironmentIdSettingsSettingIdValueKey() {
  return ['v1', '/v1/environments/:environmentId/settings/:settingId/value', 'PUT'] as const
}

export function usePutV1EnvironmentsEnvironmentIdSettingsSettingIdValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EnvironmentsEnvironmentIdSettingsSettingIdValueKey()
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
            (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.environments[':environmentId'].settings[':settingId'].value.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1EnvironmentsEnvironmentIdSettingsSettingIdValueKey() {
  return ['v1', '/v1/environments/:environmentId/settings/:settingId/value', 'PATCH'] as const
}

export function usePatchV1EnvironmentsEnvironmentIdSettingsSettingIdValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1EnvironmentsEnvironmentIdSettingsSettingIdValueKey()
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
            (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.environments[':environmentId'].settings[':settingId'].value.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1IntegrationLinkIntegrationLinkTypeKeyDetailsKey(
  args: InferRequestType<
    (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
  >,
) {
  return ['v1', '/v1/integrationLink/:integrationLinkType/:key/details', args] as const
}

export function useGetV1IntegrationLinkIntegrationLinkTypeKeyDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
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
        ? getGetV1IntegrationLinkIntegrationLinkTypeKeyDetailsKey(args)
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
                (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
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
          client.v1.integrationLink[':integrationLinkType'][':key'].details.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IntegrationLinkIntegrationLinkTypeKeyDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
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
        ? getGetV1IntegrationLinkIntegrationLinkTypeKeyDetailsKey(args)
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
                (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
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
          client.v1.integrationLink[':integrationLinkType'][':key'].details.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1JiraConnectKey() {
  return ['v1', '/v1/jira/Connect', 'POST'] as const
}

export function usePostV1JiraConnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jira.Connect.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jira.Connect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JiraConnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jira.Connect.$post> }) =>
        parseResponse(client.v1.jira.Connect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyKey() {
  return [
    'v1',
    '/v1/jira/environments/:environmentId/settings/:settingId/integrationLinks/:key',
    'POST',
  ] as const
}

export function usePostV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.jira.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':key']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.jira.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':key']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyKey()
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
            (typeof client.v1.jira.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':key']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.jira.environments[':environmentId'].settings[':settingId'].integrationLinks[
            ':key'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1MeKey() {
  return ['v1', '/v1/me'] as const
}

export function useGetV1Me<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetV1MeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Me<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetV1MeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsKey() {
  return ['v1', '/v1/organizations'] as const
}

export function useGetV1Organizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OrganizationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Organizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OrganizationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdAuditlogsKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/auditlogs', args] as const
}

export function useGetV1OrganizationsOrganizationIdAuditlogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdAuditlogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].auditlogs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdAuditlogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdAuditlogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.organizations[':organizationId'].auditlogs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdMembersKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/members', args] as const
}

export function useGetV1OrganizationsOrganizationIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdMembersUserIdKey() {
  return ['v1', '/v1/organizations/:organizationId/members/:userId', 'POST'] as const
}

export function usePostV1OrganizationsOrganizationIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdMembersUserIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].members[':userId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdMembersUserIdKey() {
  return ['v1', '/v1/organizations/:organizationId/members/:userId', 'DELETE'] as const
}

export function useDeleteV1OrganizationsOrganizationIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1OrganizationsOrganizationIdMembersUserIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].members[':userId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdProductsKey() {
  return ['v1', '/v1/organizations/:organizationId/products', 'POST'] as const
}

export function usePostV1OrganizationsOrganizationIdProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.organizations)[':organizationId']['products']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['products']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdProductsKey()
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
            (typeof client.v1.organizations)[':organizationId']['products']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].products.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PermissionsPermissionGroupIdKey(
  args: InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>,
) {
  return ['v1', '/v1/permissions/:permissionGroupId', args] as const
}

export function useGetV1PermissionsPermissionGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PermissionsPermissionGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.permissions[':permissionGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PermissionsPermissionGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PermissionsPermissionGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.permissions[':permissionGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PermissionsPermissionGroupIdKey() {
  return ['v1', '/v1/permissions/:permissionGroupId', 'PUT'] as const
}

export function usePutV1PermissionsPermissionGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PermissionsPermissionGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$put']> },
      ) => parseResponse(client.v1.permissions[':permissionGroupId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PermissionsPermissionGroupIdKey() {
  return ['v1', '/v1/permissions/:permissionGroupId', 'DELETE'] as const
}

export function useDeleteV1PermissionsPermissionGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PermissionsPermissionGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$delete']>
        },
      ) => parseResponse(client.v1.permissions[':permissionGroupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsKey() {
  return ['v1', '/v1/products'] as const
}

export function useGetV1Products<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProductsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Products<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProductsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProductsProductIdKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['$get']>,
) {
  return ['v1', '/v1/products/:productId', args] as const
}

export function useGetV1ProductsProductId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products[':productId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsProductId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products[':productId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProductsProductIdKey() {
  return ['v1', '/v1/products/:productId', 'PUT'] as const
}

export function usePutV1ProductsProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':productId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.products)[':productId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProductsProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.products)[':productId']['$put']> },
      ) => parseResponse(client.v1.products[':productId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProductsProductIdKey() {
  return ['v1', '/v1/products/:productId', 'DELETE'] as const
}

export function useDeleteV1ProductsProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.products)[':productId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.products)[':productId']['$delete']> },
      ) => parseResponse(client.v1.products[':productId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsProductIdAuditlogsKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>,
) {
  return ['v1', '/v1/products/:productId/auditlogs', args] as const
}

export function useGetV1ProductsProductIdAuditlogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdAuditlogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.products[':productId'].auditlogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsProductIdAuditlogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdAuditlogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.products[':productId'].auditlogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProductsProductIdConfigsKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['configs']['$get']>,
) {
  return ['v1', '/v1/products/:productId/configs', args] as const
}

export function useGetV1ProductsProductIdConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products[':productId'].configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsProductIdConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products[':productId'].configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsProductIdConfigsKey() {
  return ['v1', '/v1/products/:productId/configs', 'POST'] as const
}

export function usePostV1ProductsProductIdConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.products)[':productId']['configs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsProductIdConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.products)[':productId']['configs']['$post']> },
      ) => parseResponse(client.v1.products[':productId'].configs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsProductIdEnvironmentsKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['environments']['$get']>,
) {
  return ['v1', '/v1/products/:productId/environments', args] as const
}

export function useGetV1ProductsProductIdEnvironments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['environments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['environments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['environments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.products[':productId'].environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsProductIdEnvironments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['environments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['environments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['environments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.products[':productId'].environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsProductIdEnvironmentsKey() {
  return ['v1', '/v1/products/:productId/environments', 'POST'] as const
}

export function usePostV1ProductsProductIdEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['environments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.products)[':productId']['environments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsProductIdEnvironmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.products)[':productId']['environments']['$post']>
        },
      ) => parseResponse(client.v1.products[':productId'].environments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsProductIdMembersKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['members']['$get']>,
) {
  return ['v1', '/v1/products/:productId/members', args] as const
}

export function useGetV1ProductsProductIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products[':productId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsProductIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products[':productId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsProductIdMembersInviteKey() {
  return ['v1', '/v1/products/:productId/members/invite', 'POST'] as const
}

export function usePostV1ProductsProductIdMembersInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.products)[':productId']['members']['invite']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.products)[':productId']['members']['invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsProductIdMembersInviteKey()
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
            (typeof client.v1.products)[':productId']['members']['invite']['$post']
          >
        },
      ) => parseResponse(client.v1.products[':productId'].members.invite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProductsProductIdMembersUserIdKey() {
  return ['v1', '/v1/products/:productId/members/:userId', 'DELETE'] as const
}

export function useDeleteV1ProductsProductIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.products)[':productId']['members'][':userId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.products)[':productId']['members'][':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsProductIdMembersUserIdKey()
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
            (typeof client.v1.products)[':productId']['members'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.products[':productId'].members[':userId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsProductIdPermissionsKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$get']>,
) {
  return ['v1', '/v1/products/:productId/permissions', args] as const
}

export function useGetV1ProductsProductIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.products[':productId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsProductIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.products[':productId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsProductIdPermissionsKey() {
  return ['v1', '/v1/products/:productId/permissions', 'POST'] as const
}

export function usePostV1ProductsProductIdPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['permissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsProductIdPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$post']>
        },
      ) => parseResponse(client.v1.products[':productId'].permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsProductIdSegmentsKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['segments']['$get']>,
) {
  return ['v1', '/v1/products/:productId/segments', args] as const
}

export function useGetV1ProductsProductIdSegments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['segments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.products[':productId'].segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsProductIdSegments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['segments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.products[':productId'].segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsProductIdSegmentsKey() {
  return ['v1', '/v1/products/:productId/segments', 'POST'] as const
}

export function usePostV1ProductsProductIdSegments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.products)[':productId']['segments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsProductIdSegmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.products)[':productId']['segments']['$post']>
        },
      ) => parseResponse(client.v1.products[':productId'].segments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsProductIdTagsKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['tags']['$get']>,
) {
  return ['v1', '/v1/products/:productId/tags', args] as const
}

export function useGetV1ProductsProductIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products[':productId'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsProductIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProductsProductIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products[':productId'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsProductIdTagsKey() {
  return ['v1', '/v1/products/:productId/tags', 'POST'] as const
}

export function usePostV1ProductsProductIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.products)[':productId']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsProductIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.products)[':productId']['tags']['$post']> },
      ) => parseResponse(client.v1.products[':productId'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SegmentsSegmentIdKey(
  args: InferRequestType<(typeof client.v1.segments)[':segmentId']['$get']>,
) {
  return ['v1', '/v1/segments/:segmentId', args] as const
}

export function useGetV1SegmentsSegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.segments)[':segmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SegmentsSegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.segments[':segmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SegmentsSegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.segments)[':segmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SegmentsSegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.segments[':segmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SegmentsSegmentIdKey() {
  return ['v1', '/v1/segments/:segmentId', 'PUT'] as const
}

export function usePutV1SegmentsSegmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.segments)[':segmentId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SegmentsSegmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.segments)[':segmentId']['$put']> },
      ) => parseResponse(client.v1.segments[':segmentId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SegmentsSegmentIdKey() {
  return ['v1', '/v1/segments/:segmentId', 'DELETE'] as const
}

export function useDeleteV1SegmentsSegmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.segments)[':segmentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SegmentsSegmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.segments)[':segmentId']['$delete']> },
      ) => parseResponse(client.v1.segments[':segmentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SettingsSettingIdKey(
  args: InferRequestType<(typeof client.v1.settings)[':settingId']['$get']>,
) {
  return ['v1', '/v1/settings/:settingId', args] as const
}

export function useGetV1SettingsSettingId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.settings)[':settingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SettingsSettingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.settings[':settingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SettingsSettingId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.settings)[':settingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SettingsSettingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.settings[':settingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1SettingsSettingIdKey() {
  return ['v1', '/v1/settings/:settingId', 'DELETE'] as const
}

export function useDeleteV1SettingsSettingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.settings)[':settingId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SettingsSettingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.settings)[':settingId']['$delete']> },
      ) => parseResponse(client.v1.settings[':settingId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1SettingsSettingIdKey() {
  return ['v1', '/v1/settings/:settingId', 'PATCH'] as const
}

export function usePatchV1SettingsSettingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.settings)[':settingId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1SettingsSettingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.settings)[':settingId']['$patch']> },
      ) => parseResponse(client.v1.settings[':settingId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SettingsSettingKeyOrIdValueKey(
  args: InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/settings/:settingKeyOrId/value', keyArgs] as const
}

export function useGetV1SettingsSettingKeyOrIdValue<TError = unknown>(
  args: InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SettingsSettingKeyOrIdValueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.settings[':settingKeyOrId'].value.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SettingsSettingKeyOrIdValue<TError = unknown>(
  args: InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SettingsSettingKeyOrIdValueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.settings[':settingKeyOrId'].value.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SettingsSettingKeyOrIdValueKey() {
  return ['v1', '/v1/settings/:settingKeyOrId/value', 'PUT'] as const
}

export function usePutV1SettingsSettingKeyOrIdValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SettingsSettingKeyOrIdValueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$put']>
        },
      ) => parseResponse(client.v1.settings[':settingKeyOrId'].value.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1SettingsSettingKeyOrIdValueKey() {
  return ['v1', '/v1/settings/:settingKeyOrId/value', 'PATCH'] as const
}

export function usePatchV1SettingsSettingKeyOrIdValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1SettingsSettingKeyOrIdValueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$patch']>
        },
      ) => parseResponse(client.v1.settings[':settingKeyOrId'].value.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TagsTagIdKey(
  args: InferRequestType<(typeof client.v1.tags)[':tagId']['$get']>,
) {
  return ['v1', '/v1/tags/:tagId', args] as const
}

export function useGetV1TagsTagId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tags)[':tagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TagsTagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags[':tagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TagsTagId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tags)[':tagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TagsTagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags[':tagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1TagsTagIdKey() {
  return ['v1', '/v1/tags/:tagId', 'PUT'] as const
}

export function usePutV1TagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tags)[':tagId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TagsTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.tags)[':tagId']['$put']> },
      ) => parseResponse(client.v1.tags[':tagId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TagsTagIdKey() {
  return ['v1', '/v1/tags/:tagId', 'DELETE'] as const
}

export function useDeleteV1TagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tags)[':tagId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TagsTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.tags)[':tagId']['$delete']> },
      ) => parseResponse(client.v1.tags[':tagId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TagsTagIdSettingsKey(
  args: InferRequestType<(typeof client.v1.tags)[':tagId']['settings']['$get']>,
) {
  return ['v1', '/v1/tags/:tagId/settings', args] as const
}

export function useGetV1TagsTagIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tags)[':tagId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TagsTagIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags[':tagId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TagsTagIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tags)[':tagId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TagsTagIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags[':tagId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
