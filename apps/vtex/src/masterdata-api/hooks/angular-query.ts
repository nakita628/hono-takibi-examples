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

export function getApiKey() {
  return ['api'] as const
}

export function getApiDataentitiesQueryKey(
  args: InferRequestType<typeof client.api.dataentities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities', keyArgs] as const
}

export function getApiDataentitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.dataentities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.dataentities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.dataentities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesQueryKey>
  >({
    queryKey: getApiDataentitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiDataentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.dataentities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.dataentities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.dataentities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDataentitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiDataentitiesAcronymQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym', keyArgs] as const
}

export function getApiDataentitiesAcronymQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesAcronymQueryKey>
  >({
    queryKey: getApiDataentitiesAcronymQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':acronym'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDataentitiesAcronym<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.dataentities)[':acronym']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymQueryKey>
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
      ...getApiDataentitiesAcronymQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutApiDataentitiesAcronymDocumentsMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents', 'PUT'] as const
}

export function getPutApiDataentitiesAcronymDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['documents']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesAcronymDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$put']>,
    ) {
      return parseResponse(client.api.dataentities[':acronym'].documents.$put(args, options))
    },
  })
}

export function injectPutApiDataentitiesAcronymDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['documents']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$put']>,
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
    const mutationDefaults = getPutApiDataentitiesAcronymDocumentsMutationOptions<
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

export function getPostApiDataentitiesAcronymDocumentsMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents', 'POST'] as const
}

export function getPostApiDataentitiesAcronymDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['documents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataentitiesAcronymDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$post']>,
    ) {
      return parseResponse(client.api.dataentities[':acronym'].documents.$post(args, options))
    },
  })
}

export function injectPostApiDataentitiesAcronymDocuments<
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
                ReturnType<(typeof client.api.dataentities)[':acronym']['documents']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$post']>,
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
    const mutationDefaults = getPostApiDataentitiesAcronymDocumentsMutationOptions<
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

export function getPatchApiDataentitiesAcronymDocumentsMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents', 'PATCH'] as const
}

export function getPatchApiDataentitiesAcronymDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['documents']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiDataentitiesAcronymDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$patch']>,
    ) {
      return parseResponse(client.api.dataentities[':acronym'].documents.$patch(args, options))
    },
  })
}

export function injectPatchApiDataentitiesAcronymDocuments<
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
                ReturnType<(typeof client.api.dataentities)[':acronym']['documents']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$patch']>,
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
    const mutationDefaults = getPatchApiDataentitiesAcronymDocumentsMutationOptions<
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

export function getApiDataentitiesAcronymDocumentsIdQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym/documents/:id', keyArgs] as const
}

export function getApiDataentitiesAcronymDocumentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesAcronymDocumentsIdQueryKey>
  >({
    queryKey: getApiDataentitiesAcronymDocumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDataentitiesAcronymDocumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymDocumentsIdQueryKey>
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
      ...getApiDataentitiesAcronymDocumentsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutApiDataentitiesAcronymDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id', 'PUT'] as const
}

export function getPutApiDataentitiesAcronymDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesAcronymDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['$put']
      >,
    ) {
      return parseResponse(client.api.dataentities[':acronym'].documents[':id'].$put(args, options))
    },
  })
}

export function injectPutApiDataentitiesAcronymDocumentsId<
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
                ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$put']>,
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
    const mutationDefaults = getPutApiDataentitiesAcronymDocumentsIdMutationOptions<
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

export function getDeleteApiDataentitiesAcronymDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id', 'DELETE'] as const
}

export function getDeleteApiDataentitiesAcronymDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataentitiesAcronymDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiDataentitiesAcronymDocumentsId<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id']['$delete']
        >,
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
    const mutationDefaults = getDeleteApiDataentitiesAcronymDocumentsIdMutationOptions<
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

export function getPatchApiDataentitiesAcronymDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id', 'PATCH'] as const
}

export function getPatchApiDataentitiesAcronymDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiDataentitiesAcronymDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].$patch(args, options),
      )
    },
  })
}

export function injectPatchApiDataentitiesAcronymDocumentsId<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id']['$patch']
        >,
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
    const mutationDefaults = getPatchApiDataentitiesAcronymDocumentsIdMutationOptions<
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

export function getPostApiDataentitiesAcronymDocumentsIdClustersMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/clusters', 'POST'] as const
}

export function getPostApiDataentitiesAcronymDocumentsIdClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['clusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id']['clusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataentitiesAcronymDocumentsIdClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['clusters']['$post']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].clusters.$post(args, options),
      )
    },
  })
}

export function injectPostApiDataentitiesAcronymDocumentsIdClusters<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['clusters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id']['clusters']['$post']
        >,
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
    const mutationDefaults = getPostApiDataentitiesAcronymDocumentsIdClustersMutationOptions<
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

export function getPutApiDataentitiesAcronymDocumentsIdScoreMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/score', 'PUT'] as const
}

export function getPutApiDataentitiesAcronymDocumentsIdScoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['score']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id']['score']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesAcronymDocumentsIdScoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['score']['$put']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].score.$put(args, options),
      )
    },
  })
}

export function injectPutApiDataentitiesAcronymDocumentsIdScore<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['score']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id']['score']['$put']
        >,
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
    const mutationDefaults = getPutApiDataentitiesAcronymDocumentsIdScoreMutationOptions<
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

export function getPutApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/score/:field-name', 'PUT'] as const
}

export function getPutApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$put']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].score[':field-name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutApiDataentitiesAcronymDocumentsIdScoreFieldName<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$put']
        >,
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
    const mutationDefaults = getPutApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationOptions<
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

export function getDeleteApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/score/:field-name', 'DELETE'] as const
}

export function getDeleteApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].score[':field-name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteApiDataentitiesAcronymDocumentsIdScoreFieldName<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationOptions<
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

export function getApiDataentitiesAcronymDocumentsIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym/documents/:id/versions', keyArgs] as const
}

export function getApiDataentitiesAcronymDocumentsIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesAcronymDocumentsIdVersionsQueryKey>
  >({
    queryKey: getApiDataentitiesAcronymDocumentsIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDataentitiesAcronymDocumentsIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymDocumentsIdVersionsQueryKey>
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
      ...getApiDataentitiesAcronymDocumentsIdVersionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiDataentitiesAcronymDocumentsIdVersionsVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym/documents/:id/versions/:versionId', keyArgs] as const
}

export function getApiDataentitiesAcronymDocumentsIdVersionsVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesAcronymDocumentsIdVersionsVersionIdQueryKey>
  >({
    queryKey: getApiDataentitiesAcronymDocumentsIdVersionsVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].versions[':versionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDataentitiesAcronymDocumentsIdVersionsVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymDocumentsIdVersionsVersionIdQueryKey>
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
      ...getApiDataentitiesAcronymDocumentsIdVersionsVersionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApiDataentitiesAcronymDocumentsIdVersionsVersionIdMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/versions/:versionId', 'PUT'] as const
}

export function getPutApiDataentitiesAcronymDocumentsIdVersionsVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesAcronymDocumentsIdVersionsVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].versions[':versionId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutApiDataentitiesAcronymDocumentsIdVersionsVersionId<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$put']
        >,
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
    const mutationDefaults =
      getPutApiDataentitiesAcronymDocumentsIdVersionsVersionIdMutationOptions<
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

export function getPostApiDataentitiesAcronymDocumentsIdFieldAttachmentsMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/:field/attachments', 'POST'] as const
}

export function getPostApiDataentitiesAcronymDocumentsIdFieldAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataentitiesAcronymDocumentsIdFieldAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'][':field'].attachments.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiDataentitiesAcronymDocumentsIdFieldAttachments<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments']['$post']
        >,
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
    const mutationDefaults =
      getPostApiDataentitiesAcronymDocumentsIdFieldAttachmentsMutationOptions<
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

export function getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
  >,
) {
  return [
    'api',
    '/api/dataentities/:acronym/documents/:id/:field/attachments/:file-name',
    args,
  ] as const
}

export function getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameQueryKey>
  >({
    queryKey: getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'][':field'].attachments[
          ':file-name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameQueryKey>
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
      ...getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiDataentitiesAcronymScrollQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym/scroll', keyArgs] as const
}

export function getApiDataentitiesAcronymScrollQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesAcronymScrollQueryKey>
  >({
    queryKey: getApiDataentitiesAcronymScrollQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':acronym'].scroll.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDataentitiesAcronymScroll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymScrollQueryKey>
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
      ...getApiDataentitiesAcronymScrollQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiDataentitiesAcronymSearchQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym/search', keyArgs] as const
}

export function getApiDataentitiesAcronymSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesAcronymSearchQueryKey>
  >({
    queryKey: getApiDataentitiesAcronymSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':acronym'].search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDataentitiesAcronymSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.dataentities)[':acronym']['search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymSearchQueryKey>
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
      ...getApiDataentitiesAcronymSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
