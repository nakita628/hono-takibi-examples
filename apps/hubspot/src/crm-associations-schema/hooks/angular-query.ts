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

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmAssociations202609DefinitionsConfigurationsAllQueryKey() {
  return ['crm', '/crm/associations/2026-09/definitions/configurations/all'] as const
}

export function getCrmAssociations202609DefinitionsConfigurationsAllQueryOptions<
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
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getCrmAssociations202609DefinitionsConfigurationsAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.associations['2026-09'].definitions.configurations.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrmAssociations202609DefinitionsConfigurationsAll<
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
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCrmAssociations202609DefinitionsConfigurationsAllQueryOptions<TData, TError>(
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeQueryKey(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
  >,
) {
  return [
    'crm',
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType',
    args,
  ] as const
}

export function getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.associations['2026-09'].definitions.configurations[':fromObjectType'][
          ':toObjectType'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectType<
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
  args: () => InferRequestType<
    (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreateMutationOptions<
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

export function injectPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurge<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurgeMutationOptions<
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

export function injectPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdateMutationOptions<
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

export function getCrmAssociations202609FromObjectTypeToObjectTypeLabelsQueryKey(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
  >,
) {
  return ['crm', '/crm/associations/2026-09/:fromObjectType/:toObjectType/labels', args] as const
}

export function getCrmAssociations202609FromObjectTypeToObjectTypeLabelsQueryOptions<
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
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCrmAssociations202609FromObjectTypeToObjectTypeLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrmAssociations202609FromObjectTypeToObjectTypeLabels<
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
  args: () => InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCrmAssociations202609FromObjectTypeToObjectTypeLabelsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutCrmAssociations202609FromObjectTypeToObjectTypeLabels<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCrmAssociations202609FromObjectTypeToObjectTypeLabelsMutationOptions<
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

export function injectPostCrmAssociations202609FromObjectTypeToObjectTypeLabels<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCrmAssociations202609FromObjectTypeToObjectTypeLabelsMutationOptions<
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

export function injectDeleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeIdMutationOptions<
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
