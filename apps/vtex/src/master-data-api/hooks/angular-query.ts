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

export function getPostApiDataentitiesAddressDocumentsMutationKey() {
  return ['api', '/api/dataentities/Address/documents', 'POST'] as const
}

export function getPostApiDataentitiesAddressDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.dataentities.Address.documents.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.dataentities.Address.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataentitiesAddressDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.dataentities.Address.documents.$post>,
    ) {
      return parseResponse(client.api.dataentities.Address.documents.$post(args, options))
    },
  })
}

export function injectPostApiDataentitiesAddressDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.dataentities.Address.documents.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.dataentities.Address.documents.$post>,
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
    const mutationDefaults = getPostApiDataentitiesAddressDocumentsMutationOptions<
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

export function getDeleteApiDataentitiesAddressDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/Address/documents/:id', 'DELETE'] as const
}

export function getDeleteApiDataentitiesAddressDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities.Address.documents)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataentitiesAddressDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.dataentities.Address.documents[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiDataentitiesAddressDocumentsId<
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
                ReturnType<(typeof client.api.dataentities.Address.documents)[':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiDataentitiesAddressDocumentsIdMutationOptions<
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

export function getPatchApiDataentitiesAddressDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/Address/documents/:id', 'PATCH'] as const
}

export function getPatchApiDataentitiesAddressDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities.Address.documents)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiDataentitiesAddressDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.dataentities.Address.documents[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiDataentitiesAddressDocumentsId<
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
                ReturnType<(typeof client.api.dataentities.Address.documents)[':id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiDataentitiesAddressDocumentsIdMutationOptions<
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

export function getPostApiDataentitiesClientDocumentsMutationKey() {
  return ['api', '/api/dataentities/Client/documents', 'POST'] as const
}

export function getPostApiDataentitiesClientDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.dataentities.Client.documents.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.dataentities.Client.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataentitiesClientDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.dataentities.Client.documents.$post>,
    ) {
      return parseResponse(client.api.dataentities.Client.documents.$post(args, options))
    },
  })
}

export function injectPostApiDataentitiesClientDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.dataentities.Client.documents.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.dataentities.Client.documents.$post>,
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
    const mutationDefaults = getPostApiDataentitiesClientDocumentsMutationOptions<
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

export function getDeleteApiDataentitiesClientDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/Client/documents/:id', 'DELETE'] as const
}

export function getDeleteApiDataentitiesClientDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities.Client.documents)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataentitiesClientDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.dataentities.Client.documents[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiDataentitiesClientDocumentsId<
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
                ReturnType<(typeof client.api.dataentities.Client.documents)[':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiDataentitiesClientDocumentsIdMutationOptions<
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

export function getPatchApiDataentitiesClientDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/Client/documents/:id', 'PATCH'] as const
}

export function getPatchApiDataentitiesClientDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities.Client.documents)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiDataentitiesClientDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.dataentities.Client.documents[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiDataentitiesClientDocumentsId<
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
                ReturnType<(typeof client.api.dataentities.Client.documents)[':id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$patch']>,
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
    const mutationDefaults = getPatchApiDataentitiesClientDocumentsIdMutationOptions<
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

export function getPostApiDataentitiesDataEntityNameDocumentsMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents', 'POST'] as const
}

export function getPostApiDataentitiesDataEntityNameDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':dataEntityName']['documents']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataentitiesDataEntityNameDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['documents']['$post']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents.$post(args, options),
      )
    },
  })
}

export function injectPostApiDataentitiesDataEntityNameDocuments<
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
                  (typeof client.api.dataentities)[':dataEntityName']['documents']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['documents']['$post']>,
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
    const mutationDefaults = getPostApiDataentitiesDataEntityNameDocumentsMutationOptions<
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

export function getPatchApiDataentitiesDataEntityNameDocumentsMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents', 'PATCH'] as const
}

export function getPatchApiDataentitiesDataEntityNameDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':dataEntityName']['documents']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['documents']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiDataentitiesDataEntityNameDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['documents']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents.$patch(args, options),
      )
    },
  })
}

export function injectPatchApiDataentitiesDataEntityNameDocuments<
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
                  (typeof client.api.dataentities)[':dataEntityName']['documents']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['documents']['$patch']
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
    const mutationDefaults = getPatchApiDataentitiesDataEntityNameDocumentsMutationOptions<
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

export function getApiDataentitiesDataEntityNameDocumentsIdQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/documents/:id', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameDocumentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameDocumentsIdQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameDocumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDataentitiesDataEntityNameDocumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameDocumentsIdQueryKey>
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
      ...getApiDataentitiesDataEntityNameDocumentsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApiDataentitiesDataEntityNameDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents/:id', 'PUT'] as const
}

export function getPutApiDataentitiesDataEntityNameDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesDataEntityNameDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].$put(args, options),
      )
    },
  })
}

export function injectPutApiDataentitiesDataEntityNameDocumentsId<
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
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$put']
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
    const mutationDefaults = getPutApiDataentitiesDataEntityNameDocumentsIdMutationOptions<
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

export function getDeleteApiDataentitiesDataEntityNameDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents/:id', 'DELETE'] as const
}

export function getDeleteApiDataentitiesDataEntityNameDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataentitiesDataEntityNameDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiDataentitiesDataEntityNameDocumentsId<
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
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$delete']
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
    const mutationDefaults = getDeleteApiDataentitiesDataEntityNameDocumentsIdMutationOptions<
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

export function getPatchApiDataentitiesDataEntityNameDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents/:id', 'PATCH'] as const
}

export function getPatchApiDataentitiesDataEntityNameDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiDataentitiesDataEntityNameDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].$patch(args, options),
      )
    },
  })
}

export function injectPatchApiDataentitiesDataEntityNameDocumentsId<
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
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$patch']
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
    const mutationDefaults = getPatchApiDataentitiesDataEntityNameDocumentsIdMutationOptions<
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

export function getPostApiDataentitiesDataEntityNameDocumentsIdClustersMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents/:id/clusters', 'POST'] as const
}

export function getPostApiDataentitiesDataEntityNameDocumentsIdClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['clusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['clusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataentitiesDataEntityNameDocumentsIdClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['clusters']['$post']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].clusters.$post(args, options),
      )
    },
  })
}

export function injectPostApiDataentitiesDataEntityNameDocumentsIdClusters<
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
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['clusters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['clusters']['$post']
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
    const mutationDefaults = getPostApiDataentitiesDataEntityNameDocumentsIdClustersMutationOptions<
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

export function getApiDataentitiesDataEntityNameDocumentsIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/documents/:id/versions', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameDocumentsIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameDocumentsIdVersionsQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameDocumentsIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDataentitiesDataEntityNameDocumentsIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameDocumentsIdVersionsQueryKey>
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
      ...getApiDataentitiesDataEntityNameDocumentsIdVersionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/dataentities/:dataEntityName/documents/:id/versions/:versionId',
    keyArgs,
  ] as const
}

export function getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].versions[':versionId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectApiDataentitiesDataEntityNameDocumentsIdVersionsVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdQueryKey>
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
      ...getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdMutationKey() {
  return [
    'api',
    '/api/dataentities/:dataEntityName/documents/:id/versions/:versionId',
    'PUT',
  ] as const
}

export function getPutApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].versions[':versionId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutApiDataentitiesDataEntityNameDocumentsIdVersionsVersionId<
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
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$put']
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
      getPutApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdMutationOptions<
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

export function getApiDataentitiesDataEntityNameIndicesQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/indices', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameIndicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameIndicesQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameIndicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].indices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDataentitiesDataEntityNameIndices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['indices']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameIndicesQueryKey>
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
      ...getApiDataentitiesDataEntityNameIndicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutApiDataentitiesDataEntityNameIndicesMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/indices', 'PUT'] as const
}

export function getPutApiDataentitiesDataEntityNameIndicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesDataEntityNameIndicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['indices']['$put']
      >,
    ) {
      return parseResponse(client.api.dataentities[':dataEntityName'].indices.$put(args, options))
    },
  })
}

export function injectPutApiDataentitiesDataEntityNameIndices<
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
                ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$put']>,
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
    const mutationDefaults = getPutApiDataentitiesDataEntityNameIndicesMutationOptions<
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

export function getApiDataentitiesDataEntityNameIndicesIndexNameQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/indices/:index_name', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameIndicesIndexNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameIndicesIndexNameQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameIndicesIndexNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].indices[':index_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDataentitiesDataEntityNameIndicesIndexName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameIndicesIndexNameQueryKey>
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
      ...getApiDataentitiesDataEntityNameIndicesIndexNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiDataentitiesDataEntityNameIndicesIndexNameMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/indices/:index_name', 'DELETE'] as const
}

export function getDeleteApiDataentitiesDataEntityNameIndicesIndexNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataentitiesDataEntityNameIndicesIndexNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].indices[':index_name'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiDataentitiesDataEntityNameIndicesIndexName<
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
                  (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$delete']
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
    const mutationDefaults = getDeleteApiDataentitiesDataEntityNameIndicesIndexNameMutationOptions<
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

export function getApiDataentitiesDataEntityNameSchemasQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/schemas', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameSchemasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameSchemasQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameSchemasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].schemas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDataentitiesDataEntityNameSchemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameSchemasQueryKey>
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
      ...getApiDataentitiesDataEntityNameSchemasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiDataentitiesDataEntityNameSchemasSchemaNameQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/schemas/:schemaName', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameSchemasSchemaNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameSchemasSchemaNameQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameSchemasSchemaNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].schemas[':schemaName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDataentitiesDataEntityNameSchemasSchemaName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameSchemasSchemaNameQueryKey>
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
      ...getApiDataentitiesDataEntityNameSchemasSchemaNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutApiDataentitiesDataEntityNameSchemasSchemaNameMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/schemas/:schemaName', 'PUT'] as const
}

export function getPutApiDataentitiesDataEntityNameSchemasSchemaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesDataEntityNameSchemasSchemaNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$put']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].schemas[':schemaName'].$put(args, options),
      )
    },
  })
}

export function injectPutApiDataentitiesDataEntityNameSchemasSchemaName<
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
                  (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$put']
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
    const mutationDefaults = getPutApiDataentitiesDataEntityNameSchemasSchemaNameMutationOptions<
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

export function getDeleteApiDataentitiesDataEntityNameSchemasSchemaNameMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/schemas/:schemaName', 'DELETE'] as const
}

export function getDeleteApiDataentitiesDataEntityNameSchemasSchemaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataentitiesDataEntityNameSchemasSchemaNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].schemas[':schemaName'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiDataentitiesDataEntityNameSchemasSchemaName<
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
                    (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$delete']
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
    const mutationDefaults = getDeleteApiDataentitiesDataEntityNameSchemasSchemaNameMutationOptions<
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

export function getApiDataentitiesDataEntityNameScrollQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/scroll', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameScrollQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameScrollQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameScrollQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].scroll.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDataentitiesDataEntityNameScroll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameScrollQueryKey>
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
      ...getApiDataentitiesDataEntityNameScrollQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiDataentitiesDataEntityNameSearchQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/search', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameSearchQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDataentitiesDataEntityNameSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['search']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameSearchQueryKey>
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
      ...getApiDataentitiesDataEntityNameSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
