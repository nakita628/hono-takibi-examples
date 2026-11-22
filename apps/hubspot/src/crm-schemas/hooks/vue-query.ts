import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmObjectSchemasKey() {
  return ['crm-object-schemas'] as const
}

export function getCrmObjectSchemas202609SchemasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>
  >,
) {
  return ['crm-object-schemas', '/crm-object-schemas/2026-09/schemas', toValue(args)] as const
}

export function getCrmObjectSchemas202609SchemasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmObjectSchemas202609SchemasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['crm-object-schemas']['2026-09'].schemas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmObjectSchemas202609Schemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCrmObjectSchemas202609SchemasQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmObjectSchemas202609SchemasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['crm-object-schemas']['2026-09'].schemas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCrmObjectSchemas202609Schemas<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjectSchemas202609SchemasMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostCrmObjectSchemas202609SchemasBatchRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjectSchemas202609SchemasBatchReadMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrmObjectSchemas202609SchemasObjectTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
    >
  >,
) {
  return [
    'crm-object-schemas',
    '/crm-object-schemas/2026-09/schemas/:objectType',
    toValue(args),
  ] as const
}

export function getCrmObjectSchemas202609SchemasObjectTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmObjectSchemas202609SchemasObjectTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['crm-object-schemas']['2026-09'].schemas[':objectType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmObjectSchemas202609SchemasObjectType<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getCrmObjectSchemas202609SchemasObjectTypeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmObjectSchemas202609SchemasObjectTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['crm-object-schemas']['2026-09'].schemas[':objectType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCrmObjectSchemas202609SchemasObjectType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCrmObjectSchemas202609SchemasObjectTypeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchCrmObjectSchemas202609SchemasObjectType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCrmObjectSchemas202609SchemasObjectTypeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostCrmObjectSchemas202609SchemasObjectTypeAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostCrmObjectSchemas202609SchemasObjectTypeAssociationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifierMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
