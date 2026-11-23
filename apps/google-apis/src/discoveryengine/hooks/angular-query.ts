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

export function getV1betaKey() {
  return ['v1beta'] as const
}

export function getV1betaNameQueryKey(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
) {
  return ['v1beta', '/v1beta/:name', args] as const
}

export function getV1betaNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1beta)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaNameQueryKey>
  >({
    queryKey: getV1betaNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1betaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1betaNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV1betaNameMutationKey() {
  return ['v1beta', '/v1beta/:name', 'DELETE'] as const
}

export function getDeleteV1betaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1betaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name']['$delete']>) {
      return parseResponse(client.v1beta[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteV1betaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1betaNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1betaNameMutationKey() {
  return ['v1beta', '/v1beta/:name', 'PATCH'] as const
}

export function getPatchV1betaNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1betaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name']['$patch']>) {
      return parseResponse(client.v1beta[':name'].$patch(args, options))
    },
  })
}

export function injectPatchV1betaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':name']['$patch']>,
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
    const mutationDefaults = getPatchV1betaNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1betaNameOperationsQueryKey(
  args: InferRequestType<(typeof client.v1beta)[':name']['operations']['$get']>,
) {
  return ['v1beta', '/v1beta/:name/operations', args] as const
}

export function getV1betaNameOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaNameOperationsQueryKey>
  >({
    queryKey: getV1betaNameOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta[':name'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1betaNameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta)[':name']['operations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaNameOperationsQueryKey>
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
      ...getV1betaNameOperationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1betaParentDocumentsQueryKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['documents']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/documents', args] as const
}

export function getV1betaParentDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['documents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentDocumentsQueryKey>
  >({
    queryKey: getV1betaParentDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta[':parent'].documents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1betaParentDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta)[':parent']['documents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['documents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaParentDocumentsQueryKey>
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
      ...getV1betaParentDocumentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1betaParentDocumentsMutationKey() {
  return ['v1beta', '/v1beta/:parent/documents', 'POST'] as const
}

export function getPostV1betaParentDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['documents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['documents']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent'].documents.$post(args, options))
    },
  })
}

export function injectPostV1betaParentDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['documents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':parent']['documents']['$post']>,
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
    const mutationDefaults = getPostV1betaParentDocumentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1betaParentDocumentsImportMutationKey() {
  return ['v1beta', '/v1beta/:parent/documents:import', 'POST'] as const
}

export function getPostV1betaParentDocumentsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['documents:import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['documents:import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentDocumentsImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['documents:import']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent']['documents:import'].$post(args, options))
    },
  })
}

export function injectPostV1betaParentDocumentsImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['documents:import']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':parent']['documents:import']['$post']>,
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
    const mutationDefaults = getPostV1betaParentDocumentsImportMutationOptions<
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

export function getV1betaParentUserEventsCollectQueryKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['userEvents:collect']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/userEvents:collect', args] as const
}

export function getV1betaParentUserEventsCollectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['userEvents:collect']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['userEvents:collect']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['userEvents:collect']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentUserEventsCollectQueryKey>
  >({
    queryKey: getV1betaParentUserEventsCollectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta[':parent']['userEvents:collect'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1betaParentUserEventsCollect<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['userEvents:collect']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta)[':parent']['userEvents:collect']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['userEvents:collect']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaParentUserEventsCollectQueryKey>
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
      ...getV1betaParentUserEventsCollectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1betaParentUserEventsImportMutationKey() {
  return ['v1beta', '/v1beta/:parent/userEvents:import', 'POST'] as const
}

export function getPostV1betaParentUserEventsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['userEvents:import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['userEvents:import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentUserEventsImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['userEvents:import']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent']['userEvents:import'].$post(args, options))
    },
  })
}

export function injectPostV1betaParentUserEventsImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['userEvents:import']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':parent']['userEvents:import']['$post']>,
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
    const mutationDefaults = getPostV1betaParentUserEventsImportMutationOptions<
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

export function getPostV1betaParentUserEventsWriteMutationKey() {
  return ['v1beta', '/v1beta/:parent/userEvents:write', 'POST'] as const
}

export function getPostV1betaParentUserEventsWriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['userEvents:write']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['userEvents:write']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentUserEventsWriteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['userEvents:write']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent']['userEvents:write'].$post(args, options))
    },
  })
}

export function injectPostV1betaParentUserEventsWrite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['userEvents:write']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':parent']['userEvents:write']['$post']>,
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
    const mutationDefaults = getPostV1betaParentUserEventsWriteMutationOptions<
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

export function getPostV1betaServingConfigRecommendMutationKey() {
  return ['v1beta', '/v1beta/:servingConfig:recommend', 'POST'] as const
}

export function getPostV1betaServingConfigRecommendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':servingConfig:recommend']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':servingConfig:recommend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaServingConfigRecommendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':servingConfig:recommend']['$post']>,
    ) {
      return parseResponse(client.v1beta[':servingConfig:recommend'].$post(args, options))
    },
  })
}

export function injectPostV1betaServingConfigRecommend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':servingConfig:recommend']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':servingConfig:recommend']['$post']>,
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
    const mutationDefaults = getPostV1betaServingConfigRecommendMutationOptions<
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
