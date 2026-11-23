import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1CodeReferencesMutationKey() {
  return ['v1', '/v1/code-references', 'POST'] as const
}

export function getPostV1CodeReferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['code-references']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['code-references']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CodeReferencesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['code-references']['$post']>) {
      return parseResponse(client.v1['code-references'].$post(args, options))
    },
  })
}

export function createPostV1CodeReferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['code-references']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['code-references']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CodeReferencesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1CodeReferencesDeleteReportsMutationKey() {
  return ['v1', '/v1/code-references/delete-reports', 'POST'] as const
}

export function getPostV1CodeReferencesDeleteReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['code-references']['delete-reports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['code-references']['delete-reports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CodeReferencesDeleteReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['code-references']['delete-reports']['$post']>,
    ) {
      return parseResponse(client.v1['code-references']['delete-reports'].$post(args, options))
    },
  })
}

export function createPostV1CodeReferencesDeleteReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['code-references']['delete-reports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['code-references']['delete-reports']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CodeReferencesDeleteReportsMutationOptions<
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

export function getV1ConfigsConfigIdQueryKey(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['$get']>,
) {
  return ['v1', '/v1/configs/:configId', args] as const
}

export function getV1ConfigsConfigIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigsConfigIdQueryKey>
  >({
    queryKey: getV1ConfigsConfigIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.configs[':configId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConfigsConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.configs)[':configId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ConfigsConfigIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ConfigsConfigIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1ConfigsConfigIdMutationKey() {
  return ['v1', '/v1/configs/:configId', 'PUT'] as const
}

export function getPutV1ConfigsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.configs)[':configId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ConfigsConfigIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.configs)[':configId']['$put']>) {
      return parseResponse(client.v1.configs[':configId'].$put(args, options))
    },
  })
}

export function createPutV1ConfigsConfigId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.configs)[':configId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ConfigsConfigIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ConfigsConfigIdMutationKey() {
  return ['v1', '/v1/configs/:configId', 'DELETE'] as const
}

export function getDeleteV1ConfigsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.configs)[':configId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConfigsConfigIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.configs)[':configId']['$delete']>) {
      return parseResponse(client.v1.configs[':configId'].$delete(args, options))
    },
  })
}

export function createDeleteV1ConfigsConfigId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.configs)[':configId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.configs)[':configId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ConfigsConfigIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ConfigsConfigIdDeletedSettingsQueryKey(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>,
) {
  return ['v1', '/v1/configs/:configId/deleted-settings', args] as const
}

export function getV1ConfigsConfigIdDeletedSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigsConfigIdDeletedSettingsQueryKey>
  >({
    queryKey: getV1ConfigsConfigIdDeletedSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.configs[':configId']['deleted-settings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConfigsConfigIdDeletedSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ConfigsConfigIdDeletedSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConfigsConfigIdDeletedSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ConfigsConfigIdEnvironmentsEnvironmentIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
  >,
) {
  return ['v1', '/v1/configs/:configId/environments/:environmentId', args] as const
}

export function getV1ConfigsConfigIdEnvironmentsEnvironmentIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ConfigsConfigIdEnvironmentsEnvironmentIdQueryKey>
  >({
    queryKey: getV1ConfigsConfigIdEnvironmentsEnvironmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.configs[':configId'].environments[':environmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConfigsConfigIdEnvironmentsEnvironmentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ConfigsConfigIdEnvironmentsEnvironmentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConfigsConfigIdEnvironmentsEnvironmentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesQueryKey(
  args: InferRequestType<
    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
  >,
) {
  return ['v1', '/v1/configs/:configId/environments/:environmentId/values', args] as const
}

export function getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesQueryKey>
  >({
    queryKey: getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.configs[':configId'].environments[':environmentId'].values.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConfigsConfigIdEnvironmentsEnvironmentIdValues<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConfigsConfigIdEnvironmentsEnvironmentIdValuesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1ConfigsConfigIdSettingsQueryKey(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$get']>,
) {
  return ['v1', '/v1/configs/:configId/settings', args] as const
}

export function getV1ConfigsConfigIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConfigsConfigIdSettingsQueryKey>
  >({
    queryKey: getV1ConfigsConfigIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.configs[':configId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConfigsConfigIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ConfigsConfigIdSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConfigsConfigIdSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ConfigsConfigIdSettingsMutationKey() {
  return ['v1', '/v1/configs/:configId/settings', 'POST'] as const
}

export function getPostV1ConfigsConfigIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConfigsConfigIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$post']>,
    ) {
      return parseResponse(client.v1.configs[':configId'].settings.$post(args, options))
    },
  })
}

export function createPostV1ConfigsConfigIdSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.configs)[':configId']['settings']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConfigsConfigIdSettingsMutationOptions<
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

export function getV1EnvironmentsEnvironmentIdQueryKey(
  args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$get']>,
) {
  return ['v1', '/v1/environments/:environmentId', args] as const
}

export function getV1EnvironmentsEnvironmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentsEnvironmentIdQueryKey>
  >({
    queryKey: getV1EnvironmentsEnvironmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.environments[':environmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EnvironmentsEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.environments)[':environmentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentsEnvironmentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1EnvironmentsEnvironmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1EnvironmentsEnvironmentIdMutationKey() {
  return ['v1', '/v1/environments/:environmentId', 'PUT'] as const
}

export function getPutV1EnvironmentsEnvironmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.environments)[':environmentId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EnvironmentsEnvironmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$put']>,
    ) {
      return parseResponse(client.v1.environments[':environmentId'].$put(args, options))
    },
  })
}

export function createPutV1EnvironmentsEnvironmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.environments)[':environmentId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1EnvironmentsEnvironmentIdMutationOptions<
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

export function getDeleteV1EnvironmentsEnvironmentIdMutationKey() {
  return ['v1', '/v1/environments/:environmentId', 'DELETE'] as const
}

export function getDeleteV1EnvironmentsEnvironmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.environments)[':environmentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1EnvironmentsEnvironmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$delete']>,
    ) {
      return parseResponse(client.v1.environments[':environmentId'].$delete(args, options))
    },
  })
}

export function createDeleteV1EnvironmentsEnvironmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.environments)[':environmentId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1EnvironmentsEnvironmentIdMutationOptions<
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

export function getPostV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationKey() {
  return [
    'v1',
    '/v1/environments/:environmentId/settings/:settingId/integrationLinks/:integrationLinkType/:key',
    'POST',
  ] as const
}

export function getPostV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.environments[':environmentId'].settings[':settingId'].integrationLinks[
          ':integrationLinkType'
        ][':key'].$post(args, options),
      )
    },
  })
}

export function createPostV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationOptions<
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

export function getDeleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationKey() {
  return [
    'v1',
    '/v1/environments/:environmentId/settings/:settingId/integrationLinks/:integrationLinkType/:key',
    'DELETE',
  ] as const
}

export function getDeleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.environments[':environmentId'].settings[':settingId'].integrationLinks[
          ':integrationLinkType'
        ][':key'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyMutationOptions<
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

export function getV1EnvironmentsEnvironmentIdSettingsSettingIdValueQueryKey(
  args: InferRequestType<
    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
  >,
) {
  return ['v1', '/v1/environments/:environmentId/settings/:settingId/value', args] as const
}

export function getV1EnvironmentsEnvironmentIdSettingsSettingIdValueQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentsEnvironmentIdSettingsSettingIdValueQueryKey>
  >({
    queryKey: getV1EnvironmentsEnvironmentIdSettingsSettingIdValueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.environments[':environmentId'].settings[':settingId'].value.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EnvironmentsEnvironmentIdSettingsSettingIdValue<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentsEnvironmentIdSettingsSettingIdValueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1EnvironmentsEnvironmentIdSettingsSettingIdValueQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationKey() {
  return ['v1', '/v1/environments/:environmentId/settings/:settingId/value', 'PUT'] as const
}

export function getPutV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.environments[':environmentId'].settings[':settingId'].value.$put(args, options),
      )
    },
  })
}

export function createPutV1EnvironmentsEnvironmentIdSettingsSettingIdValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationOptions<
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

export function getPatchV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationKey() {
  return ['v1', '/v1/environments/:environmentId/settings/:settingId/value', 'PATCH'] as const
}

export function getPatchV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.environments[':environmentId'].settings[':settingId'].value.$patch(args, options),
      )
    },
  })
}

export function createPatchV1EnvironmentsEnvironmentIdSettingsSettingIdValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchV1EnvironmentsEnvironmentIdSettingsSettingIdValueMutationOptions<
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

export function getV1IntegrationLinkIntegrationLinkTypeKeyDetailsQueryKey(
  args: InferRequestType<
    (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
  >,
) {
  return ['v1', '/v1/integrationLink/:integrationLinkType/:key/details', args] as const
}

export function getV1IntegrationLinkIntegrationLinkTypeKeyDetailsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1IntegrationLinkIntegrationLinkTypeKeyDetailsQueryKey>
  >({
    queryKey: getV1IntegrationLinkIntegrationLinkTypeKeyDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.integrationLink[':integrationLinkType'][':key'].details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IntegrationLinkIntegrationLinkTypeKeyDetails<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1IntegrationLinkIntegrationLinkTypeKeyDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1IntegrationLinkIntegrationLinkTypeKeyDetailsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1JiraConnectMutationKey() {
  return ['v1', '/v1/jira/Connect', 'POST'] as const
}

export function getPostV1JiraConnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jira.Connect.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.jira.Connect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JiraConnectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jira.Connect.$post>) {
      return parseResponse(client.v1.jira.Connect.$post(args, options))
    },
  })
}

export function createPostV1JiraConnect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jira.Connect.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.jira.Connect.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1JiraConnectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyMutationKey() {
  return [
    'v1',
    '/v1/jira/environments/:environmentId/settings/:settingId/integrationLinks/:key',
    'POST',
  ] as const
}

export function getPostV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.jira.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':key']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.jira.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':key']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.jira.environments[':environmentId'].settings[':settingId'].integrationLinks[
          ':key'
        ].$post(args, options),
      )
    },
  })
}

export function createPostV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.jira.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':key']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyMutationOptions<
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

export function getV1MeQueryKey() {
  return ['v1', '/v1/me'] as const
}

export function getV1MeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1MeQueryKey>
  >({
    queryKey: getV1MeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Me<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1MeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1MeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1OrganizationsQueryKey() {
  return ['v1', '/v1/organizations'] as const
}

export function getV1OrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsQueryKey>
  >({
    queryKey: getV1OrganizationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Organizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OrganizationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdAuditlogsQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/auditlogs', args] as const
}

export function getV1OrganizationsOrganizationIdAuditlogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdAuditlogsQueryKey>
  >({
    queryKey: getV1OrganizationsOrganizationIdAuditlogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].auditlogs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdAuditlogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsOrganizationIdAuditlogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1OrganizationsOrganizationIdAuditlogsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1OrganizationsOrganizationIdMembersQueryKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/members', args] as const
}

export function getV1OrganizationsOrganizationIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OrganizationsOrganizationIdMembersQueryKey>
  >({
    queryKey: getV1OrganizationsOrganizationIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.organizations[':organizationId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OrganizationsOrganizationIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OrganizationsOrganizationIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1OrganizationsOrganizationIdMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1OrganizationsOrganizationIdMembersUserIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/members/:userId', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].members[':userId'].$post(args, options),
      )
    },
  })
}

export function createPostV1OrganizationsOrganizationIdMembersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrganizationsOrganizationIdMembersUserIdMutationOptions<
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

export function getDeleteV1OrganizationsOrganizationIdMembersUserIdMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/members/:userId', 'DELETE'] as const
}

export function getDeleteV1OrganizationsOrganizationIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1OrganizationsOrganizationIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.organizations[':organizationId'].members[':userId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1OrganizationsOrganizationIdMembersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1OrganizationsOrganizationIdMembersUserIdMutationOptions<
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

export function getPostV1OrganizationsOrganizationIdProductsMutationKey() {
  return ['v1', '/v1/organizations/:organizationId/products', 'POST'] as const
}

export function getPostV1OrganizationsOrganizationIdProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['products']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsOrganizationIdProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.organizations)[':organizationId']['products']['$post']
      >,
    ) {
      return parseResponse(client.v1.organizations[':organizationId'].products.$post(args, options))
    },
  })
}

export function createPostV1OrganizationsOrganizationIdProducts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.v1.organizations)[':organizationId']['products']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OrganizationsOrganizationIdProductsMutationOptions<
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

export function getV1PermissionsPermissionGroupIdQueryKey(
  args: InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>,
) {
  return ['v1', '/v1/permissions/:permissionGroupId', args] as const
}

export function getV1PermissionsPermissionGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PermissionsPermissionGroupIdQueryKey>
  >({
    queryKey: getV1PermissionsPermissionGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.permissions[':permissionGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PermissionsPermissionGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PermissionsPermissionGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1PermissionsPermissionGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1PermissionsPermissionGroupIdMutationKey() {
  return ['v1', '/v1/permissions/:permissionGroupId', 'PUT'] as const
}

export function getPutV1PermissionsPermissionGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PermissionsPermissionGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$put']>,
    ) {
      return parseResponse(client.v1.permissions[':permissionGroupId'].$put(args, options))
    },
  })
}

export function createPutV1PermissionsPermissionGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1PermissionsPermissionGroupIdMutationOptions<
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

export function getDeleteV1PermissionsPermissionGroupIdMutationKey() {
  return ['v1', '/v1/permissions/:permissionGroupId', 'DELETE'] as const
}

export function getDeleteV1PermissionsPermissionGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PermissionsPermissionGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$delete']>,
    ) {
      return parseResponse(client.v1.permissions[':permissionGroupId'].$delete(args, options))
    },
  })
}

export function createDeleteV1PermissionsPermissionGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.permissions)[':permissionGroupId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1PermissionsPermissionGroupIdMutationOptions<
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

export function getV1ProductsQueryKey() {
  return ['v1', '/v1/products'] as const
}

export function getV1ProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProductsQueryKey>
  >({
    queryKey: getV1ProductsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.products.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Products<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProductsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1ProductsProductIdQueryKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['$get']>,
) {
  return ['v1', '/v1/products/:productId', args] as const
}

export function getV1ProductsProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':productId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':productId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdQueryKey>
  >({
    queryKey: getV1ProductsProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.products[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':productId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.products)[':productId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.products)[':productId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsProductIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProductsProductIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1ProductsProductIdMutationKey() {
  return ['v1', '/v1/products/:productId', 'PUT'] as const
}

export function getPutV1ProductsProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':productId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProductsProductIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.products)[':productId']['$put']>) {
      return parseResponse(client.v1.products[':productId'].$put(args, options))
    },
  })
}

export function createPutV1ProductsProductId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.products)[':productId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.products)[':productId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProductsProductIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ProductsProductIdMutationKey() {
  return ['v1', '/v1/products/:productId', 'DELETE'] as const
}

export function getDeleteV1ProductsProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.products)[':productId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsProductIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.products)[':productId']['$delete']>) {
      return parseResponse(client.v1.products[':productId'].$delete(args, options))
    },
  })
}

export function createDeleteV1ProductsProductId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.products)[':productId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.products)[':productId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ProductsProductIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ProductsProductIdAuditlogsQueryKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>,
) {
  return ['v1', '/v1/products/:productId/auditlogs', args] as const
}

export function getV1ProductsProductIdAuditlogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdAuditlogsQueryKey>
  >({
    queryKey: getV1ProductsProductIdAuditlogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.products[':productId'].auditlogs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsProductIdAuditlogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsProductIdAuditlogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsProductIdAuditlogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ProductsProductIdConfigsQueryKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['configs']['$get']>,
) {
  return ['v1', '/v1/products/:productId/configs', args] as const
}

export function getV1ProductsProductIdConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdConfigsQueryKey>
  >({
    queryKey: getV1ProductsProductIdConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.products[':productId'].configs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsProductIdConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.products)[':productId']['configs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsProductIdConfigsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsProductIdConfigsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ProductsProductIdConfigsMutationKey() {
  return ['v1', '/v1/products/:productId/configs', 'POST'] as const
}

export function getPostV1ProductsProductIdConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsProductIdConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.products)[':productId']['configs']['$post']>,
    ) {
      return parseResponse(client.v1.products[':productId'].configs.$post(args, options))
    },
  })
}

export function createPostV1ProductsProductIdConfigs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.products)[':productId']['configs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.products)[':productId']['configs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsProductIdConfigsMutationOptions<
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

export function getV1ProductsProductIdEnvironmentsQueryKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['environments']['$get']>,
) {
  return ['v1', '/v1/products/:productId/environments', args] as const
}

export function getV1ProductsProductIdEnvironmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['environments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['environments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['environments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdEnvironmentsQueryKey>
  >({
    queryKey: getV1ProductsProductIdEnvironmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.products[':productId'].environments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsProductIdEnvironments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['environments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.products)[':productId']['environments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.products)[':productId']['environments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsProductIdEnvironmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsProductIdEnvironmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ProductsProductIdEnvironmentsMutationKey() {
  return ['v1', '/v1/products/:productId/environments', 'POST'] as const
}

export function getPostV1ProductsProductIdEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['environments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['environments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsProductIdEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.products)[':productId']['environments']['$post']>,
    ) {
      return parseResponse(client.v1.products[':productId'].environments.$post(args, options))
    },
  })
}

export function createPostV1ProductsProductIdEnvironments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.products)[':productId']['environments']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.products)[':productId']['environments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsProductIdEnvironmentsMutationOptions<
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

export function getV1ProductsProductIdMembersQueryKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['members']['$get']>,
) {
  return ['v1', '/v1/products/:productId/members', args] as const
}

export function getV1ProductsProductIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdMembersQueryKey>
  >({
    queryKey: getV1ProductsProductIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.products[':productId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsProductIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.products)[':productId']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.products)[':productId']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsProductIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsProductIdMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ProductsProductIdMembersInviteMutationKey() {
  return ['v1', '/v1/products/:productId/members/invite', 'POST'] as const
}

export function getPostV1ProductsProductIdMembersInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.products)[':productId']['members']['invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsProductIdMembersInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.products)[':productId']['members']['invite']['$post']
      >,
    ) {
      return parseResponse(client.v1.products[':productId'].members.invite.$post(args, options))
    },
  })
}

export function createPostV1ProductsProductIdMembersInvite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.v1.products)[':productId']['members']['invite']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsProductIdMembersInviteMutationOptions<
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

export function getDeleteV1ProductsProductIdMembersUserIdMutationKey() {
  return ['v1', '/v1/products/:productId/members/:userId', 'DELETE'] as const
}

export function getDeleteV1ProductsProductIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.products)[':productId']['members'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsProductIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.products)[':productId']['members'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.products[':productId'].members[':userId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1ProductsProductIdMembersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.products)[':productId']['members'][':userId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.products)[':productId']['members'][':userId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ProductsProductIdMembersUserIdMutationOptions<
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

export function getV1ProductsProductIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$get']>,
) {
  return ['v1', '/v1/products/:productId/permissions', args] as const
}

export function getV1ProductsProductIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdPermissionsQueryKey>
  >({
    queryKey: getV1ProductsProductIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.products[':productId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsProductIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.products)[':productId']['permissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsProductIdPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsProductIdPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ProductsProductIdPermissionsMutationKey() {
  return ['v1', '/v1/products/:productId/permissions', 'POST'] as const
}

export function getPostV1ProductsProductIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['permissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsProductIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$post']>,
    ) {
      return parseResponse(client.v1.products[':productId'].permissions.$post(args, options))
    },
  })
}

export function createPostV1ProductsProductIdPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.products)[':productId']['permissions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsProductIdPermissionsMutationOptions<
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

export function getV1ProductsProductIdSegmentsQueryKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['segments']['$get']>,
) {
  return ['v1', '/v1/products/:productId/segments', args] as const
}

export function getV1ProductsProductIdSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['segments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdSegmentsQueryKey>
  >({
    queryKey: getV1ProductsProductIdSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.products[':productId'].segments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsProductIdSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.products)[':productId']['segments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsProductIdSegmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsProductIdSegmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ProductsProductIdSegmentsMutationKey() {
  return ['v1', '/v1/products/:productId/segments', 'POST'] as const
}

export function getPostV1ProductsProductIdSegmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['segments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsProductIdSegmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.products)[':productId']['segments']['$post']>,
    ) {
      return parseResponse(client.v1.products[':productId'].segments.$post(args, options))
    },
  })
}

export function createPostV1ProductsProductIdSegments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.products)[':productId']['segments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.products)[':productId']['segments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsProductIdSegmentsMutationOptions<
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

export function getV1ProductsProductIdTagsQueryKey(
  args: InferRequestType<(typeof client.v1.products)[':productId']['tags']['$get']>,
) {
  return ['v1', '/v1/products/:productId/tags', args] as const
}

export function getV1ProductsProductIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.products)[':productId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProductsProductIdTagsQueryKey>
  >({
    queryKey: getV1ProductsProductIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.products[':productId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ProductsProductIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.products)[':productId']['tags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProductsProductIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProductsProductIdTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ProductsProductIdTagsMutationKey() {
  return ['v1', '/v1/products/:productId/tags', 'POST'] as const
}

export function getPostV1ProductsProductIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.products)[':productId']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsProductIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.products)[':productId']['tags']['$post']>,
    ) {
      return parseResponse(client.v1.products[':productId'].tags.$post(args, options))
    },
  })
}

export function createPostV1ProductsProductIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.products)[':productId']['tags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.products)[':productId']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProductsProductIdTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SegmentsSegmentIdQueryKey(
  args: InferRequestType<(typeof client.v1.segments)[':segmentId']['$get']>,
) {
  return ['v1', '/v1/segments/:segmentId', args] as const
}

export function getV1SegmentsSegmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.segments)[':segmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SegmentsSegmentIdQueryKey>
  >({
    queryKey: getV1SegmentsSegmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.segments[':segmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SegmentsSegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.segments)[':segmentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SegmentsSegmentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SegmentsSegmentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1SegmentsSegmentIdMutationKey() {
  return ['v1', '/v1/segments/:segmentId', 'PUT'] as const
}

export function getPutV1SegmentsSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.segments)[':segmentId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SegmentsSegmentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.segments)[':segmentId']['$put']>) {
      return parseResponse(client.v1.segments[':segmentId'].$put(args, options))
    },
  })
}

export function createPutV1SegmentsSegmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.segments)[':segmentId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1SegmentsSegmentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1SegmentsSegmentIdMutationKey() {
  return ['v1', '/v1/segments/:segmentId', 'DELETE'] as const
}

export function getDeleteV1SegmentsSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.segments)[':segmentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SegmentsSegmentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.segments)[':segmentId']['$delete']>) {
      return parseResponse(client.v1.segments[':segmentId'].$delete(args, options))
    },
  })
}

export function createDeleteV1SegmentsSegmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.segments)[':segmentId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.segments)[':segmentId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1SegmentsSegmentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SettingsSettingIdQueryKey(
  args: InferRequestType<(typeof client.v1.settings)[':settingId']['$get']>,
) {
  return ['v1', '/v1/settings/:settingId', args] as const
}

export function getV1SettingsSettingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.settings)[':settingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SettingsSettingIdQueryKey>
  >({
    queryKey: getV1SettingsSettingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.settings[':settingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SettingsSettingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.settings)[':settingId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SettingsSettingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SettingsSettingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1SettingsSettingIdMutationKey() {
  return ['v1', '/v1/settings/:settingId', 'DELETE'] as const
}

export function getDeleteV1SettingsSettingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.settings)[':settingId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SettingsSettingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.settings)[':settingId']['$delete']>) {
      return parseResponse(client.v1.settings[':settingId'].$delete(args, options))
    },
  })
}

export function createDeleteV1SettingsSettingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.settings)[':settingId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1SettingsSettingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV1SettingsSettingIdMutationKey() {
  return ['v1', '/v1/settings/:settingId', 'PATCH'] as const
}

export function getPatchV1SettingsSettingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.settings)[':settingId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1SettingsSettingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.settings)[':settingId']['$patch']>) {
      return parseResponse(client.v1.settings[':settingId'].$patch(args, options))
    },
  })
}

export function createPatchV1SettingsSettingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.settings)[':settingId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.settings)[':settingId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1SettingsSettingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SettingsSettingKeyOrIdValueQueryKey(
  args: InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/settings/:settingKeyOrId/value', keyArgs] as const
}

export function getV1SettingsSettingKeyOrIdValueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SettingsSettingKeyOrIdValueQueryKey>
  >({
    queryKey: getV1SettingsSettingKeyOrIdValueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.settings[':settingKeyOrId'].value.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SettingsSettingKeyOrIdValue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SettingsSettingKeyOrIdValueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SettingsSettingKeyOrIdValueQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1SettingsSettingKeyOrIdValueMutationKey() {
  return ['v1', '/v1/settings/:settingKeyOrId/value', 'PUT'] as const
}

export function getPutV1SettingsSettingKeyOrIdValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SettingsSettingKeyOrIdValueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$put']>,
    ) {
      return parseResponse(client.v1.settings[':settingKeyOrId'].value.$put(args, options))
    },
  })
}

export function createPutV1SettingsSettingKeyOrIdValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1SettingsSettingKeyOrIdValueMutationOptions<
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

export function getPatchV1SettingsSettingKeyOrIdValueMutationKey() {
  return ['v1', '/v1/settings/:settingKeyOrId/value', 'PATCH'] as const
}

export function getPatchV1SettingsSettingKeyOrIdValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1SettingsSettingKeyOrIdValueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$patch']>,
    ) {
      return parseResponse(client.v1.settings[':settingKeyOrId'].value.$patch(args, options))
    },
  })
}

export function createPatchV1SettingsSettingKeyOrIdValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$patch']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1SettingsSettingKeyOrIdValueMutationOptions<
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

export function getV1TagsTagIdQueryKey(
  args: InferRequestType<(typeof client.v1.tags)[':tagId']['$get']>,
) {
  return ['v1', '/v1/tags/:tagId', args] as const
}

export function getV1TagsTagIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tags)[':tagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TagsTagIdQueryKey>
  >({
    queryKey: getV1TagsTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tags[':tagId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TagsTagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.tags)[':tagId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TagsTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TagsTagIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1TagsTagIdMutationKey() {
  return ['v1', '/v1/tags/:tagId', 'PUT'] as const
}

export function getPutV1TagsTagIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tags)[':tagId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TagsTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tags)[':tagId']['$put']>) {
      return parseResponse(client.v1.tags[':tagId'].$put(args, options))
    },
  })
}

export function createPutV1TagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.tags)[':tagId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1TagsTagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1TagsTagIdMutationKey() {
  return ['v1', '/v1/tags/:tagId', 'DELETE'] as const
}

export function getDeleteV1TagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tags)[':tagId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TagsTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tags)[':tagId']['$delete']>) {
      return parseResponse(client.v1.tags[':tagId'].$delete(args, options))
    },
  })
}

export function createDeleteV1TagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.tags)[':tagId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TagsTagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TagsTagIdSettingsQueryKey(
  args: InferRequestType<(typeof client.v1.tags)[':tagId']['settings']['$get']>,
) {
  return ['v1', '/v1/tags/:tagId/settings', args] as const
}

export function getV1TagsTagIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tags)[':tagId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TagsTagIdSettingsQueryKey>
  >({
    queryKey: getV1TagsTagIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tags[':tagId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TagsTagIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.tags)[':tagId']['settings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.tags)[':tagId']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TagsTagIdSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TagsTagIdSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
