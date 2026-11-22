import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['__admin'] as const
}

export function getAdminMappingsQueryKey(
  args: InferRequestType<typeof client.__admin.mappings.$get>,
) {
  return ['__admin', '/__admin/mappings', args] as const
}

export function getAdminMappingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.__admin.mappings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminMappingsQueryKey>
  >({
    queryKey: getAdminMappingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.__admin.mappings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdminMappings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.__admin.mappings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminMappingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminMappingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAdminMappingsMutationKey() {
  return ['__admin', '/__admin/mappings', 'POST'] as const
}

export function getPostAdminMappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.__admin.mappings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminMappingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.__admin.mappings.$post>) {
      return parseResponse(client.__admin.mappings.$post(args, options))
    },
  })
}

export function injectPostAdminMappings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.__admin.mappings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminMappingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdminMappingsMutationKey() {
  return ['__admin', '/__admin/mappings', 'DELETE'] as const
}

export function getDeleteAdminMappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminMappingsMutationKey(),
    async mutationFn() {
      return parseResponse(client.__admin.mappings.$delete(undefined, options))
    },
  })
}

export function injectDeleteAdminMappings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.$delete>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminMappingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminMappingsFindByMetadataMutationKey() {
  return ['__admin', '/__admin/mappings/find-by-metadata', 'POST'] as const
}

export function getPostAdminMappingsFindByMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.mappings)['find-by-metadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.__admin.mappings)['find-by-metadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminMappingsFindByMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.__admin.mappings)['find-by-metadata']['$post']>,
    ) {
      return parseResponse(client.__admin.mappings['find-by-metadata'].$post(args, options))
    },
  })
}

export function injectPostAdminMappingsFindByMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.__admin.mappings)['find-by-metadata']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.__admin.mappings)['find-by-metadata']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminMappingsFindByMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminMappingsImportMutationKey() {
  return ['__admin', '/__admin/mappings/import', 'POST'] as const
}

export function getPostAdminMappingsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.import.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminMappingsImportMutationKey(),
    async mutationFn() {
      return parseResponse(client.__admin.mappings.import.$post(undefined, options))
    },
  })
}

export function injectPostAdminMappingsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.import.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminMappingsImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminMappingsRemoveByMetadataMutationKey() {
  return ['__admin', '/__admin/mappings/remove-by-metadata', 'POST'] as const
}

export function getPostAdminMappingsRemoveByMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.mappings)['remove-by-metadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.__admin.mappings)['remove-by-metadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminMappingsRemoveByMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.__admin.mappings)['remove-by-metadata']['$post']>,
    ) {
      return parseResponse(client.__admin.mappings['remove-by-metadata'].$post(args, options))
    },
  })
}

export function injectPostAdminMappingsRemoveByMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.__admin.mappings)['remove-by-metadata']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.__admin.mappings)['remove-by-metadata']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminMappingsRemoveByMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminMappingsResetMutationKey() {
  return ['__admin', '/__admin/mappings/reset', 'POST'] as const
}

export function getPostAdminMappingsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.reset.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminMappingsResetMutationKey(),
    async mutationFn() {
      return parseResponse(client.__admin.mappings.reset.$post(undefined, options))
    },
  })
}

export function injectPostAdminMappingsReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.reset.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminMappingsResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminMappingsSaveMutationKey() {
  return ['__admin', '/__admin/mappings/save', 'POST'] as const
}

export function getPostAdminMappingsSaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.save.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminMappingsSaveMutationKey(),
    async mutationFn() {
      return parseResponse(client.__admin.mappings.save.$post(undefined, options))
    },
  })
}

export function injectPostAdminMappingsSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.mappings.save.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminMappingsSaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminMappingsStubMappingIdQueryKey(
  args: InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$get']>,
) {
  return ['__admin', '/__admin/mappings/:stubMappingId', args] as const
}

export function getAdminMappingsStubMappingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.__admin.mappings)[':stubMappingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.mappings)[':stubMappingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminMappingsStubMappingIdQueryKey>
  >({
    queryKey: getAdminMappingsStubMappingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.__admin.mappings[':stubMappingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminMappingsStubMappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.__admin.mappings)[':stubMappingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.__admin.mappings)[':stubMappingId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminMappingsStubMappingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminMappingsStubMappingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutAdminMappingsStubMappingIdMutationKey() {
  return ['__admin', '/__admin/mappings/:stubMappingId', 'PUT'] as const
}

export function getPutAdminMappingsStubMappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.mappings)[':stubMappingId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminMappingsStubMappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$put']>,
    ) {
      return parseResponse(client.__admin.mappings[':stubMappingId'].$put(args, options))
    },
  })
}

export function injectPutAdminMappingsStubMappingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.__admin.mappings)[':stubMappingId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminMappingsStubMappingIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdminMappingsStubMappingIdMutationKey() {
  return ['__admin', '/__admin/mappings/:stubMappingId', 'DELETE'] as const
}

export function getDeleteAdminMappingsStubMappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.mappings)[':stubMappingId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminMappingsStubMappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$delete']>,
    ) {
      return parseResponse(client.__admin.mappings[':stubMappingId'].$delete(args, options))
    },
  })
}

export function injectDeleteAdminMappingsStubMappingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.__admin.mappings)[':stubMappingId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.__admin.mappings)[':stubMappingId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminMappingsStubMappingIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminNearMissesRequestMutationKey() {
  return ['__admin', '/__admin/near-misses/request', 'POST'] as const
}

export function getPostAdminNearMissesRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin)['near-misses']['request']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.__admin)['near-misses']['request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminNearMissesRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.__admin)['near-misses']['request']['$post']>,
    ) {
      return parseResponse(client.__admin['near-misses'].request.$post(args, options))
    },
  })
}

export function injectPostAdminNearMissesRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.__admin)['near-misses']['request']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.__admin)['near-misses']['request']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminNearMissesRequestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminNearMissesRequestPatternMutationKey() {
  return ['__admin', '/__admin/near-misses/request-pattern', 'POST'] as const
}

export function getPostAdminNearMissesRequestPatternMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin)['near-misses']['request-pattern']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.__admin)['near-misses']['request-pattern']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminNearMissesRequestPatternMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.__admin)['near-misses']['request-pattern']['$post']>,
    ) {
      return parseResponse(client.__admin['near-misses']['request-pattern'].$post(args, options))
    },
  })
}

export function injectPostAdminNearMissesRequestPattern<
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
                ReturnType<(typeof client.__admin)['near-misses']['request-pattern']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.__admin)['near-misses']['request-pattern']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminNearMissesRequestPatternMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminRecordingsSnapshotMutationKey() {
  return ['__admin', '/__admin/recordings/snapshot', 'POST'] as const
}

export function getPostAdminRecordingsSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.snapshot.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.__admin.recordings.snapshot.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRecordingsSnapshotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.__admin.recordings.snapshot.$post>) {
      return parseResponse(client.__admin.recordings.snapshot.$post(args, options))
    },
  })
}

export function injectPostAdminRecordingsSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.__admin.recordings.snapshot.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.__admin.recordings.snapshot.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminRecordingsSnapshotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminRecordingsStartMutationKey() {
  return ['__admin', '/__admin/recordings/start', 'POST'] as const
}

export function getPostAdminRecordingsStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.start.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.__admin.recordings.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRecordingsStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.__admin.recordings.start.$post>) {
      return parseResponse(client.__admin.recordings.start.$post(args, options))
    },
  })
}

export function injectPostAdminRecordingsStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.start.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.__admin.recordings.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminRecordingsStartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminRecordingsStatusQueryKey() {
  return ['__admin', '/__admin/recordings/status'] as const
}

export function getAdminRecordingsStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.status.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRecordingsStatusQueryKey>
  >({
    queryKey: getAdminRecordingsStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.__admin.recordings.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminRecordingsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminRecordingsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminRecordingsStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostAdminRecordingsStopMutationKey() {
  return ['__admin', '/__admin/recordings/stop', 'POST'] as const
}

export function getPostAdminRecordingsStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.stop.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRecordingsStopMutationKey(),
    async mutationFn() {
      return parseResponse(client.__admin.recordings.stop.$post(undefined, options))
    },
  })
}

export function injectPostAdminRecordingsStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.recordings.stop.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminRecordingsStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminRequestsQueryKey(
  args: InferRequestType<typeof client.__admin.requests.$get>,
) {
  return ['__admin', '/__admin/requests', args] as const
}

export function getAdminRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.__admin.requests.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRequestsQueryKey>
  >({
    queryKey: getAdminRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.__admin.requests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdminRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.__admin.requests.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminRequestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteAdminRequestsMutationKey() {
  return ['__admin', '/__admin/requests', 'DELETE'] as const
}

export function getDeleteAdminRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminRequestsMutationKey(),
    async mutationFn() {
      return parseResponse(client.__admin.requests.$delete(undefined, options))
    },
  })
}

export function injectDeleteAdminRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.$delete>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminRequestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminRequestsCountMutationKey() {
  return ['__admin', '/__admin/requests/count', 'POST'] as const
}

export function getPostAdminRequestsCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.count.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.__admin.requests.count.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRequestsCountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.__admin.requests.count.$post>) {
      return parseResponse(client.__admin.requests.count.$post(args, options))
    },
  })
}

export function injectPostAdminRequestsCount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.count.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.__admin.requests.count.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminRequestsCountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminRequestsFindMutationKey() {
  return ['__admin', '/__admin/requests/find', 'POST'] as const
}

export function getPostAdminRequestsFindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.find.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.__admin.requests.find.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRequestsFindMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.__admin.requests.find.$post>) {
      return parseResponse(client.__admin.requests.find.$post(args, options))
    },
  })
}

export function injectPostAdminRequestsFind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.find.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.__admin.requests.find.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminRequestsFindMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminRequestsRemoveMutationKey() {
  return ['__admin', '/__admin/requests/remove', 'POST'] as const
}

export function getPostAdminRequestsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.__admin.requests.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRequestsRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.__admin.requests.remove.$post>) {
      return parseResponse(client.__admin.requests.remove.$post(args, options))
    },
  })
}

export function injectPostAdminRequestsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.__admin.requests.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminRequestsRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminRequestsRemoveByMetadataMutationKey() {
  return ['__admin', '/__admin/requests/remove-by-metadata', 'POST'] as const
}

export function getPostAdminRequestsRemoveByMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.requests)['remove-by-metadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.__admin.requests)['remove-by-metadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRequestsRemoveByMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.__admin.requests)['remove-by-metadata']['$post']>,
    ) {
      return parseResponse(client.__admin.requests['remove-by-metadata'].$post(args, options))
    },
  })
}

export function injectPostAdminRequestsRemoveByMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.__admin.requests)['remove-by-metadata']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.__admin.requests)['remove-by-metadata']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminRequestsRemoveByMetadataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminRequestsResetMutationKey() {
  return ['__admin', '/__admin/requests/reset', 'POST'] as const
}

export function getPostAdminRequestsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.reset.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRequestsResetMutationKey(),
    async mutationFn() {
      return parseResponse(client.__admin.requests.reset.$post(undefined, options))
    },
  })
}

export function injectPostAdminRequestsReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.reset.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminRequestsResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminRequestsUnmatchedQueryKey() {
  return ['__admin', '/__admin/requests/unmatched'] as const
}

export function getAdminRequestsUnmatchedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.unmatched.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.unmatched.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRequestsUnmatchedQueryKey>
  >({
    queryKey: getAdminRequestsUnmatchedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.__admin.requests.unmatched.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminRequestsUnmatched<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.unmatched.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.requests.unmatched.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminRequestsUnmatchedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminRequestsUnmatchedQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getAdminRequestsUnmatchedNearMissesQueryKey() {
  return ['__admin', '/__admin/requests/unmatched/near-misses'] as const
}

export function getAdminRequestsUnmatchedNearMissesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.__admin.requests.unmatched)['near-misses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.requests.unmatched)['near-misses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRequestsUnmatchedNearMissesQueryKey>
  >({
    queryKey: getAdminRequestsUnmatchedNearMissesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.__admin.requests.unmatched['near-misses'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminRequestsUnmatchedNearMisses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.__admin.requests.unmatched)['near-misses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.__admin.requests.unmatched)['near-misses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminRequestsUnmatchedNearMissesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminRequestsUnmatchedNearMissesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdminRequestsRequestIdQueryKey(
  args: InferRequestType<(typeof client.__admin.requests)[':requestId']['$get']>,
) {
  return ['__admin', '/__admin/requests/:requestId', args] as const
}

export function getAdminRequestsRequestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.__admin.requests)[':requestId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.__admin.requests)[':requestId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.requests)[':requestId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRequestsRequestIdQueryKey>
  >({
    queryKey: getAdminRequestsRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.__admin.requests[':requestId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminRequestsRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.__admin.requests)[':requestId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.__admin.requests)[':requestId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.__admin.requests)[':requestId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminRequestsRequestIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminRequestsRequestIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAdminRequestsRequestIdMutationKey() {
  return ['__admin', '/__admin/requests/:requestId', 'DELETE'] as const
}

export function getDeleteAdminRequestsRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.__admin.requests)[':requestId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.__admin.requests)[':requestId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminRequestsRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.__admin.requests)[':requestId']['$delete']>,
    ) {
      return parseResponse(client.__admin.requests[':requestId'].$delete(args, options))
    },
  })
}

export function injectDeleteAdminRequestsRequestId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.__admin.requests)[':requestId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.__admin.requests)[':requestId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminRequestsRequestIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminResetMutationKey() {
  return ['__admin', '/__admin/reset', 'POST'] as const
}

export function getPostAdminResetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.reset.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminResetMutationKey(),
    async mutationFn() {
      return parseResponse(client.__admin.reset.$post(undefined, options))
    },
  })
}

export function injectPostAdminReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.reset.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminScenariosQueryKey() {
  return ['__admin', '/__admin/scenarios'] as const
}

export function getAdminScenariosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.scenarios.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.scenarios.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminScenariosQueryKey>
  >({
    queryKey: getAdminScenariosQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.__admin.scenarios.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminScenarios<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.scenarios.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.scenarios.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminScenariosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminScenariosQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostAdminScenariosResetMutationKey() {
  return ['__admin', '/__admin/scenarios/reset', 'POST'] as const
}

export function getPostAdminScenariosResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.__admin.scenarios.reset.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminScenariosResetMutationKey(),
    async mutationFn() {
      return parseResponse(client.__admin.scenarios.reset.$post(undefined, options))
    },
  })
}

export function injectPostAdminScenariosReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.scenarios.reset.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminScenariosResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminSettingsMutationKey() {
  return ['__admin', '/__admin/settings', 'POST'] as const
}

export function getPostAdminSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.settings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.__admin.settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.__admin.settings.$post>) {
      return parseResponse(client.__admin.settings.$post(args, options))
    },
  })
}

export function injectPostAdminSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.settings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.__admin.settings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminShutdownMutationKey() {
  return ['__admin', '/__admin/shutdown', 'POST'] as const
}

export function getPostAdminShutdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.__admin.shutdown.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminShutdownMutationKey(),
    async mutationFn() {
      return parseResponse(client.__admin.shutdown.$post(undefined, options))
    },
  })
}

export function injectPostAdminShutdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.__admin.shutdown.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminShutdownMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
