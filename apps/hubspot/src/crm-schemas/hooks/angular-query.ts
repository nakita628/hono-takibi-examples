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

export function getCrmObjectSchemasKey() {
  return ['crm-object-schemas'] as const
}

export function getCrmObjectSchemas202609SchemasQueryKey(
  args: InferRequestType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>,
) {
  return ['crm-object-schemas', '/crm-object-schemas/2026-09/schemas', args] as const
}

export function getCrmObjectSchemas202609SchemasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjectSchemas202609SchemasQueryKey>
  >({
    queryKey: getCrmObjectSchemas202609SchemasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['crm-object-schemas']['2026-09'].schemas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrmObjectSchemas202609Schemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjectSchemas202609SchemasQueryKey>
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
      ...getCrmObjectSchemas202609SchemasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostCrmObjectSchemas202609SchemasMutationKey() {
  return ['crm-object-schemas', '/crm-object-schemas/2026-09/schemas', 'POST'] as const
}

export function getPostCrmObjectSchemas202609SchemasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjectSchemas202609SchemasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$post']>,
    ) {
      return parseResponse(client['crm-object-schemas']['2026-09'].schemas.$post(args, options))
    },
  })
}

export function injectPostCrmObjectSchemas202609Schemas<
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
                ReturnType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$post']>,
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
    const mutationDefaults = getPostCrmObjectSchemas202609SchemasMutationOptions<
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

export function getPostCrmObjectSchemas202609SchemasBatchReadMutationKey() {
  return ['crm-object-schemas', '/crm-object-schemas/2026-09/schemas/batch/read', 'POST'] as const
}

export function getPostCrmObjectSchemas202609SchemasBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['crm-object-schemas']['2026-09']['schemas']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['crm-object-schemas']['2026-09']['schemas']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjectSchemas202609SchemasBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['crm-object-schemas']['2026-09']['schemas']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client['crm-object-schemas']['2026-09'].schemas.batch.read.$post(args, options),
      )
    },
  })
}

export function injectPostCrmObjectSchemas202609SchemasBatchRead<
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
                  (typeof client)['crm-object-schemas']['2026-09']['schemas']['batch']['read']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['crm-object-schemas']['2026-09']['schemas']['batch']['read']['$post']
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
    const mutationDefaults = getPostCrmObjectSchemas202609SchemasBatchReadMutationOptions<
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

export function getCrmObjectSchemas202609SchemasObjectTypeQueryKey(
  args: InferRequestType<
    (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
  >,
) {
  return ['crm-object-schemas', '/crm-object-schemas/2026-09/schemas/:objectType', args] as const
}

export function getCrmObjectSchemas202609SchemasObjectTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjectSchemas202609SchemasObjectTypeQueryKey>
  >({
    queryKey: getCrmObjectSchemas202609SchemasObjectTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['crm-object-schemas']['2026-09'].schemas[':objectType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrmObjectSchemas202609SchemasObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjectSchemas202609SchemasObjectTypeQueryKey>
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
      ...getCrmObjectSchemas202609SchemasObjectTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteCrmObjectSchemas202609SchemasObjectTypeMutationKey() {
  return [
    'crm-object-schemas',
    '/crm-object-schemas/2026-09/schemas/:objectType',
    'DELETE',
  ] as const
}

export function getDeleteCrmObjectSchemas202609SchemasObjectTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmObjectSchemas202609SchemasObjectTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$delete']
      >,
    ) {
      return parseResponse(
        client['crm-object-schemas']['2026-09'].schemas[':objectType'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteCrmObjectSchemas202609SchemasObjectType<
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
                    (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$delete']
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
    const mutationDefaults = getDeleteCrmObjectSchemas202609SchemasObjectTypeMutationOptions<
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

export function getPatchCrmObjectSchemas202609SchemasObjectTypeMutationKey() {
  return ['crm-object-schemas', '/crm-object-schemas/2026-09/schemas/:objectType', 'PATCH'] as const
}

export function getPatchCrmObjectSchemas202609SchemasObjectTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmObjectSchemas202609SchemasObjectTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$patch']
      >,
    ) {
      return parseResponse(
        client['crm-object-schemas']['2026-09'].schemas[':objectType'].$patch(args, options),
      )
    },
  })
}

export function injectPatchCrmObjectSchemas202609SchemasObjectType<
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
                  (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$patch']
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
    const mutationDefaults = getPatchCrmObjectSchemas202609SchemasObjectTypeMutationOptions<
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

export function getPostCrmObjectSchemas202609SchemasObjectTypeAssociationsMutationKey() {
  return [
    'crm-object-schemas',
    '/crm-object-schemas/2026-09/schemas/:objectType/associations',
    'POST',
  ] as const
}

export function getPostCrmObjectSchemas202609SchemasObjectTypeAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjectSchemas202609SchemasObjectTypeAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations']['$post']
      >,
    ) {
      return parseResponse(
        client['crm-object-schemas']['2026-09'].schemas[':objectType'].associations.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostCrmObjectSchemas202609SchemasObjectTypeAssociations<
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
                  (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations']['$post']
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
      getPostCrmObjectSchemas202609SchemasObjectTypeAssociationsMutationOptions<
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

export function getDeleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifierMutationKey() {
  return [
    'crm-object-schemas',
    '/crm-object-schemas/2026-09/schemas/:objectType/associations/:associationIdentifier',
    'DELETE',
  ] as const
}

export function getDeleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations'][':associationIdentifier']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations'][':associationIdentifier']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations'][':associationIdentifier']['$delete']
      >,
    ) {
      return parseResponse(
        client['crm-object-schemas']['2026-09'].schemas[':objectType'].associations[
          ':associationIdentifier'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifier<
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
                    (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations'][':associationIdentifier']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations'][':associationIdentifier']['$delete']
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
      getDeleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifierMutationOptions<
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
