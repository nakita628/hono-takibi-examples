import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getGetCrmObjects202609LeadsKey(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['$get']>,
) {
  return ['crm', '/crm/objects/2026-09/leads', args] as const
}

export function useGetCrmObjects202609Leads<TError = unknown>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['leads']['$get']>>
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
        ? getGetCrmObjects202609LeadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['leads']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.objects['2026-09'].leads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjects202609Leads<TError = unknown>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['leads']['$get']>>
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
        ? getGetCrmObjects202609LeadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['leads']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.objects['2026-09'].leads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmObjects202609LeadsKey() {
  return ['crm', '/crm/objects/2026-09/leads', 'POST'] as const
}

export function usePostCrmObjects202609Leads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['leads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609LeadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['$post']> },
      ) => parseResponse(client.crm.objects['2026-09'].leads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609LeadsBatchArchiveKey() {
  return ['crm', '/crm/objects/2026-09/leads/batch/archive', 'POST'] as const
}

export function usePostCrmObjects202609LeadsBatchArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['leads']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['batch']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609LeadsBatchArchiveKey()
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
            (typeof client.crm.objects)['2026-09']['leads']['batch']['archive']['$post']
          >
        },
      ) =>
        parseResponse(client.crm.objects['2026-09'].leads.batch.archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609LeadsBatchCreateKey() {
  return ['crm', '/crm/objects/2026-09/leads/batch/create', 'POST'] as const
}

export function usePostCrmObjects202609LeadsBatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['leads']['batch']['create']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['batch']['create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609LeadsBatchCreateKey()
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
            (typeof client.crm.objects)['2026-09']['leads']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(client.crm.objects['2026-09'].leads.batch.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609LeadsBatchReadKey() {
  return ['crm', '/crm/objects/2026-09/leads/batch/read', 'POST'] as const
}

export function usePostCrmObjects202609LeadsBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['leads']['batch']['read']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['batch']['read']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609LeadsBatchReadKey()
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
            (typeof client.crm.objects)['2026-09']['leads']['batch']['read']['$post']
          >
        },
      ) => parseResponse(client.crm.objects['2026-09'].leads.batch.read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609LeadsBatchUpdateKey() {
  return ['crm', '/crm/objects/2026-09/leads/batch/update', 'POST'] as const
}

export function usePostCrmObjects202609LeadsBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['leads']['batch']['update']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['batch']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609LeadsBatchUpdateKey()
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
            (typeof client.crm.objects)['2026-09']['leads']['batch']['update']['$post']
          >
        },
      ) =>
        parseResponse(client.crm.objects['2026-09'].leads.batch.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609LeadsBatchUpsertKey() {
  return ['crm', '/crm/objects/2026-09/leads/batch/upsert', 'POST'] as const
}

export function usePostCrmObjects202609LeadsBatchUpsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['leads']['batch']['upsert']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['batch']['upsert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609LeadsBatchUpsertKey()
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
            (typeof client.crm.objects)['2026-09']['leads']['batch']['upsert']['$post']
          >
        },
      ) =>
        parseResponse(client.crm.objects['2026-09'].leads.batch.upsert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609LeadsGdprDeleteKey() {
  return ['crm', '/crm/objects/2026-09/leads/gdpr-delete', 'POST'] as const
}

export function usePostCrmObjects202609LeadsGdprDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09']['leads']['gdpr-delete']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['gdpr-delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609LeadsGdprDeleteKey()
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
            (typeof client.crm.objects)['2026-09']['leads']['gdpr-delete']['$post']
          >
        },
      ) =>
        parseResponse(client.crm.objects['2026-09'].leads['gdpr-delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609LeadsMergeKey() {
  return ['crm', '/crm/objects/2026-09/leads/merge', 'POST'] as const
}

export function usePostCrmObjects202609LeadsMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['leads']['merge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['merge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609LeadsMergeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['merge']['$post']>
        },
      ) => parseResponse(client.crm.objects['2026-09'].leads.merge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609LeadsSearchKey() {
  return ['crm', '/crm/objects/2026-09/leads/search', 'POST'] as const
}

export function usePostCrmObjects202609LeadsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['leads']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609LeadsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.crm.objects)['2026-09']['leads']['search']['$post']>
        },
      ) => parseResponse(client.crm.objects['2026-09'].leads.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmObjects202609LeadsLeadsIdKey(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$get']>,
) {
  return ['crm', '/crm/objects/2026-09/leads/:leadsId', args] as const
}

export function useGetCrmObjects202609LeadsLeadsId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$get']>>
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
        ? getGetCrmObjects202609LeadsLeadsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.objects['2026-09'].leads[':leadsId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjects202609LeadsLeadsId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$get']>>
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
        ? getGetCrmObjects202609LeadsLeadsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.objects['2026-09'].leads[':leadsId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmObjects202609LeadsLeadsIdKey() {
  return ['crm', '/crm/objects/2026-09/leads/:leadsId', 'DELETE'] as const
}

export function useDeleteCrmObjects202609LeadsLeadsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmObjects202609LeadsLeadsIdKey()
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
            (typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$delete']
          >
        },
      ) =>
        parseResponse(client.crm.objects['2026-09'].leads[':leadsId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmObjects202609LeadsLeadsIdKey() {
  return ['crm', '/crm/objects/2026-09/leads/:leadsId', 'PATCH'] as const
}

export function usePatchCrmObjects202609LeadsLeadsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmObjects202609LeadsLeadsIdKey()
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
            (typeof client.crm.objects)['2026-09']['leads'][':leadsId']['$patch']
          >
        },
      ) =>
        parseResponse(client.crm.objects['2026-09'].leads[':leadsId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmObjects202609LeadsLeadsIdAssociationsToObjectTypeKey(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['leads'][':leadsId']['associations'][':toObjectType']['$get']
  >,
) {
  return ['crm', '/crm/objects/2026-09/leads/:leadsId/associations/:toObjectType', args] as const
}

export function useGetCrmObjects202609LeadsLeadsIdAssociationsToObjectType<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['leads'][':leadsId']['associations'][':toObjectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['leads'][':leadsId']['associations'][':toObjectType']['$get']
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
        ? getGetCrmObjects202609LeadsLeadsIdAssociationsToObjectTypeKey(args)
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
                (typeof client.crm.objects)['2026-09']['leads'][':leadsId']['associations'][':toObjectType']['$get']
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
          client.crm.objects['2026-09'].leads[':leadsId'].associations[':toObjectType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjects202609LeadsLeadsIdAssociationsToObjectType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['leads'][':leadsId']['associations'][':toObjectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['leads'][':leadsId']['associations'][':toObjectType']['$get']
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
        ? getGetCrmObjects202609LeadsLeadsIdAssociationsToObjectTypeKey(args)
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
                (typeof client.crm.objects)['2026-09']['leads'][':leadsId']['associations'][':toObjectType']['$get']
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
          client.crm.objects['2026-09'].leads[':leadsId'].associations[':toObjectType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdKey() {
  return [
    'crm',
    '/crm/objects/2026-09/:fromObjectType/:fromObjectId/associations/default/:toObjectType/:toObjectId',
    'PUT',
  ] as const
}

export function usePutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdKey()
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
            (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':fromObjectType'][':fromObjectId'].associations.default[
            ':toObjectType'
          ][':toObjectId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdKey() {
  return [
    'crm',
    '/crm/objects/2026-09/:objectType/:objectId/associations/:toObjectType/:toObjectId',
    'PUT',
  ] as const
}

export function usePutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
            ':toObjectId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdKey() {
  return [
    'crm',
    '/crm/objects/2026-09/:objectType/:objectId/associations/:toObjectType/:toObjectId',
    'DELETE',
  ] as const
}

export function useDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
            ':toObjectId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
