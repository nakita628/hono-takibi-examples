import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmObjectSchemasKey() {
  return ['crm-object-schemas'] as const
}

export function getGetCrmObjectSchemas202609SchemasKey(
  args: InferRequestType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>,
) {
  return ['crm-object-schemas', '/crm-object-schemas/2026-09/schemas', args] as const
}

export function useGetCrmObjectSchemas202609Schemas<TError = unknown>(
  args: InferRequestType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>>
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
        ? getGetCrmObjectSchemas202609SchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['crm-object-schemas']['2026-09'].schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjectSchemas202609Schemas<TError = unknown>(
  args: InferRequestType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>>
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
        ? getGetCrmObjectSchemas202609SchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['crm-object-schemas']['2026-09'].schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmObjectSchemas202609SchemasKey() {
  return ['crm-object-schemas', '/crm-object-schemas/2026-09/schemas', 'POST'] as const
}

export function usePostCrmObjectSchemas202609Schemas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['crm-object-schemas']['2026-09']['schemas']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjectSchemas202609SchemasKey()
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
            (typeof client)['crm-object-schemas']['2026-09']['schemas']['$post']
          >
        },
      ) => parseResponse(client['crm-object-schemas']['2026-09'].schemas.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjectSchemas202609SchemasBatchReadKey() {
  return ['crm-object-schemas', '/crm-object-schemas/2026-09/schemas/batch/read', 'POST'] as const
}

export function usePostCrmObjectSchemas202609SchemasBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['crm-object-schemas']['2026-09']['schemas']['batch']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjectSchemas202609SchemasBatchReadKey()
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
            (typeof client)['crm-object-schemas']['2026-09']['schemas']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client['crm-object-schemas']['2026-09'].schemas.batch.read.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmObjectSchemas202609SchemasObjectTypeKey(
  args: InferRequestType<
    (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
  >,
) {
  return ['crm-object-schemas', '/crm-object-schemas/2026-09/schemas/:objectType', args] as const
}

export function useGetCrmObjectSchemas202609SchemasObjectType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmObjectSchemas202609SchemasObjectTypeKey(args)
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
                (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
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
          client['crm-object-schemas']['2026-09'].schemas[':objectType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjectSchemas202609SchemasObjectType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmObjectSchemas202609SchemasObjectTypeKey(args)
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
                (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$get']
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
          client['crm-object-schemas']['2026-09'].schemas[':objectType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmObjectSchemas202609SchemasObjectTypeKey() {
  return [
    'crm-object-schemas',
    '/crm-object-schemas/2026-09/schemas/:objectType',
    'DELETE',
  ] as const
}

export function useDeleteCrmObjectSchemas202609SchemasObjectType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmObjectSchemas202609SchemasObjectTypeKey()
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
            (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['crm-object-schemas']['2026-09'].schemas[':objectType'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmObjectSchemas202609SchemasObjectTypeKey() {
  return ['crm-object-schemas', '/crm-object-schemas/2026-09/schemas/:objectType', 'PATCH'] as const
}

export function usePatchCrmObjectSchemas202609SchemasObjectType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmObjectSchemas202609SchemasObjectTypeKey()
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
            (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['crm-object-schemas']['2026-09'].schemas[':objectType'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjectSchemas202609SchemasObjectTypeAssociationsKey() {
  return [
    'crm-object-schemas',
    '/crm-object-schemas/2026-09/schemas/:objectType/associations',
    'POST',
  ] as const
}

export function usePostCrmObjectSchemas202609SchemasObjectTypeAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjectSchemas202609SchemasObjectTypeAssociationsKey()
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
            (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['crm-object-schemas']['2026-09'].schemas[':objectType'].associations.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifierKey() {
  return [
    'crm-object-schemas',
    '/crm-object-schemas/2026-09/schemas/:objectType/associations/:associationIdentifier',
    'DELETE',
  ] as const
}

export function useDeleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifier<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations'][':associationIdentifier']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifierKey()
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
            (typeof client)['crm-object-schemas']['2026-09']['schemas'][':objectType']['associations'][':associationIdentifier']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['crm-object-schemas']['2026-09'].schemas[':objectType'].associations[
            ':associationIdentifier'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
