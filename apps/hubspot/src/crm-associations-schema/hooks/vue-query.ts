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

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmAssociations202609DefinitionsConfigurationsAllQueryKey() {
  return ['crm', '/crm/associations/2026-09/definitions/configurations/all'] as const
}

export function getCrmAssociations202609DefinitionsConfigurationsAllQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getCrmAssociations202609DefinitionsConfigurationsAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.associations['2026-09'].definitions.configurations.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmAssociations202609DefinitionsConfigurationsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.associations)['2026-09']['definitions']['configurations']['all']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.associations)['2026-09']['definitions']['configurations']['all']['$get']
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
                    (typeof client.crm.associations)['2026-09']['definitions']['configurations']['all']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCrmAssociations202609DefinitionsConfigurationsAllQueryKey>
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
              (typeof client.crm.associations)['2026-09']['definitions']['configurations']['all']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmAssociations202609DefinitionsConfigurationsAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrmAssociations202609DefinitionsConfigurationsAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.associations['2026-09'].definitions.configurations.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
    >
  >,
) {
  return [
    'crm',
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType',
    toValue(args),
  ] as const
}

export function getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.associations['2026-09'].definitions.configurations[':fromObjectType'][
          ':toObjectType'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
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
                    (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
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
                    (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeQueryKey
          >
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
              (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.associations['2026-09'].definitions.configurations[':fromObjectType'][
            ':toObjectType'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreateMutationKey() {
  return [
    'crm',
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType/batch/create',
    'POST',
  ] as const
}

export function getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.associations['2026-09'].definitions.configurations[':fromObjectType'][
          ':toObjectType'
        ].batch.create.$post(args, options),
      )
    },
  })
}

export function usePostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreate<
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
                    (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
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
    getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreateMutationOptions<
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

export function getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurgeMutationKey() {
  return [
    'crm',
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType/batch/purge',
    'POST',
  ] as const
}

export function getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['purge']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['purge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurgeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['purge']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.associations['2026-09'].definitions.configurations[':fromObjectType'][
          ':toObjectType'
        ].batch.purge.$post(args, options),
      )
    },
  })
}

export function usePostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurge<
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
                    (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['purge']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['purge']['$post']
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
    getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurgeMutationOptions<
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

export function getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdateMutationKey() {
  return [
    'crm',
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType/batch/update',
    'POST',
  ] as const
}

export function getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.associations['2026-09'].definitions.configurations[':fromObjectType'][
          ':toObjectType'
        ].batch.update.$post(args, options),
      )
    },
  })
}

export function usePostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdate<
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
                    (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['update']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['update']['$post']
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
    getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdateMutationOptions<
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

export function getCrmAssociations202609FromObjectTypeToObjectTypeLabelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
    >
  >,
) {
  return [
    'crm',
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/labels',
    toValue(args),
  ] as const
}

export function getCrmAssociations202609FromObjectTypeToObjectTypeLabelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCrmAssociations202609FromObjectTypeToObjectTypeLabelsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].labels.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCrmAssociations202609FromObjectTypeToObjectTypeLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
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
                    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
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
                    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCrmAssociations202609FromObjectTypeToObjectTypeLabelsQueryKey>
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
              (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmAssociations202609FromObjectTypeToObjectTypeLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCrmAssociations202609FromObjectTypeToObjectTypeLabelsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].labels.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutCrmAssociations202609FromObjectTypeToObjectTypeLabelsMutationKey() {
  return ['crm', '/crm/associations/2026-09/:fromObjectType/:toObjectType/labels', 'PUT'] as const
}

export function getPutCrmAssociations202609FromObjectTypeToObjectTypeLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCrmAssociations202609FromObjectTypeToObjectTypeLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].labels.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCrmAssociations202609FromObjectTypeToObjectTypeLabels<
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
                      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$put']
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
    getPutCrmAssociations202609FromObjectTypeToObjectTypeLabelsMutationOptions<
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

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeLabelsMutationKey() {
  return ['crm', '/crm/associations/2026-09/:fromObjectType/:toObjectType/labels', 'POST'] as const
}

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmAssociations202609FromObjectTypeToObjectTypeLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].labels.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCrmAssociations202609FromObjectTypeToObjectTypeLabels<
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
                    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$post']
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
    getPostCrmAssociations202609FromObjectTypeToObjectTypeLabelsMutationOptions<
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

export function getDeleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeIdMutationKey() {
  return [
    'crm',
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/labels/:associationTypeId',
    'DELETE',
  ] as const
}

export function getDeleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels'][':associationTypeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels'][':associationTypeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels'][':associationTypeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].labels[
          ':associationTypeId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeId<
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
                      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels'][':associationTypeId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels'][':associationTypeId']['$delete']
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
    getDeleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeIdMutationOptions<
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
