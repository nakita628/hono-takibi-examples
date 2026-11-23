import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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
        ReturnType<typeof getCrmAssociations202609DefinitionsConfigurationsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmAssociations202609DefinitionsConfigurationsAllQueryOptions<TData, TError>(
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmAssociations202609DefinitionsConfigurationsAll<
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
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmAssociations202609DefinitionsConfigurationsAllQueryOptions<TData, TError>(
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectType<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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

export function getPostCrmAssociations202609UsageHighUsageReportUserIdMutationKey() {
  return ['crm', '/crm/associations/2026-09/usage/high-usage-report/:userId', 'POST'] as const
}

export function getPostCrmAssociations202609UsageHighUsageReportUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.associations)['2026-09']['usage']['high-usage-report'][':userId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.associations)['2026-09']['usage']['high-usage-report'][':userId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmAssociations202609UsageHighUsageReportUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.associations)['2026-09']['usage']['high-usage-report'][':userId']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.associations['2026-09'].usage['high-usage-report'][':userId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCrmAssociations202609UsageHighUsageReportUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.associations)['2026-09']['usage']['high-usage-report'][':userId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.associations)['2026-09']['usage']['high-usage-report'][':userId']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmAssociations202609UsageHighUsageReportUserIdMutationOptions<
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

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchArchiveMutationKey() {
  return [
    'crm',
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/batch/archive',
    'POST',
  ] as const
}

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['archive']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].batch.archive.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCrmAssociations202609FromObjectTypeToObjectTypeBatchArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['archive']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['archive']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchArchiveMutationOptions<
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

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchAssociateDefaultMutationKey() {
  return [
    'crm',
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/batch/associate/default',
    'POST',
  ] as const
}

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchAssociateDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['associate']['default']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['associate']['default']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchAssociateDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['associate']['default']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.associations['2026-09'][':fromObjectType'][
          ':toObjectType'
        ].batch.associate.default.$post(args, options),
      )
    },
  })
}

export function usePostCrmAssociations202609FromObjectTypeToObjectTypeBatchAssociateDefault<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['associate']['default']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['associate']['default']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchAssociateDefaultMutationOptions<
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

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchCreateMutationKey() {
  return [
    'crm',
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/batch/create',
    'POST',
  ] as const
}

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].batch.create.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCrmAssociations202609FromObjectTypeToObjectTypeBatchCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchCreateMutationOptions<
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

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchLabelsArchiveMutationKey() {
  return [
    'crm',
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/batch/labels/archive',
    'POST',
  ] as const
}

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchLabelsArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['labels']['archive']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['labels']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchLabelsArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['labels']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.associations['2026-09'][':fromObjectType'][
          ':toObjectType'
        ].batch.labels.archive.$post(args, options),
      )
    },
  })
}

export function usePostCrmAssociations202609FromObjectTypeToObjectTypeBatchLabelsArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['labels']['archive']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['labels']['archive']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchLabelsArchiveMutationOptions<
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

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchReadMutationKey() {
  return [
    'crm',
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/batch/read',
    'POST',
  ] as const
}

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].batch.read.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCrmAssociations202609FromObjectTypeToObjectTypeBatchRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['read']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['read']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchReadMutationOptions<
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
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getCrmAssociations202609FromObjectTypeToObjectTypeLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmAssociations202609FromObjectTypeToObjectTypeLabelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmAssociations202609FromObjectTypeToObjectTypeLabels<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmAssociations202609FromObjectTypeToObjectTypeLabelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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

export function getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdMutationKey() {
  return [
    'crm',
    '/crm/objects/2026-09/:fromObjectType/:fromObjectId/associations/default/:toObjectType/:toObjectId',
    'PUT',
  ] as const
}

export function getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':fromObjectType'][':fromObjectId'].associations.default[
          ':toObjectType'
        ][':toObjectId'].$put(args, options),
      )
    },
  })
}

export function usePutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdMutationOptions<
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

export function getCrmObjects202609ObjectTypeQueryKey(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
) {
  return ['crm', '/crm/objects/2026-09/:objectType', args] as const
}

export function getCrmObjects202609ObjectTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjects202609ObjectTypeQueryKey>
  >({
    queryKey: getCrmObjects202609ObjectTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmObjects202609ObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609ObjectTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmObjects202609ObjectTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmObjects202609ObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609ObjectTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmObjects202609ObjectTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCrmObjects202609ObjectTypeMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>,
    ) {
      return parseResponse(client.crm.objects['2026-09'][':objectType'].$post(args, options))
    },
  })
}

export function usePostCrmObjects202609ObjectType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609ObjectTypeMutationOptions<
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

export function getPostCrmObjects202609ObjectTypeBatchArchiveMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/archive', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeBatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeBatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'].batch.archive.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609ObjectTypeBatchArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609ObjectTypeBatchArchiveMutationOptions<
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

export function getPostCrmObjects202609ObjectTypeBatchCreateMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/create', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'].batch.create.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609ObjectTypeBatchCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609ObjectTypeBatchCreateMutationOptions<
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

export function getPostCrmObjects202609ObjectTypeBatchReadMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/read', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'].batch.read.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609ObjectTypeBatchRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609ObjectTypeBatchReadMutationOptions<
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

export function getPostCrmObjects202609ObjectTypeBatchUpdateMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/update', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'].batch.update.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609ObjectTypeBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609ObjectTypeBatchUpdateMutationOptions<
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

export function getPostCrmObjects202609ObjectTypeBatchUpsertMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/upsert', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeBatchUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeBatchUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'].batch.upsert.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609ObjectTypeBatchUpsert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609ObjectTypeBatchUpsertMutationOptions<
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

export function getPostCrmObjects202609ObjectTypeGdprDeleteMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/gdpr-delete', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeGdprDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09'][':objectType']['gdpr-delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['gdpr-delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeGdprDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType']['gdpr-delete']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType']['gdpr-delete'].$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609ObjectTypeGdprDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.objects)['2026-09'][':objectType']['gdpr-delete']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType']['gdpr-delete']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609ObjectTypeGdprDeleteMutationOptions<
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

export function getPostCrmObjects202609ObjectTypeMergeMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/merge', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeMergeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']
      >,
    ) {
      return parseResponse(client.crm.objects['2026-09'][':objectType'].merge.$post(args, options))
    },
  })
}

export function usePostCrmObjects202609ObjectTypeMerge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609ObjectTypeMergeMutationOptions<
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

export function getPostCrmObjects202609ObjectTypeSearchMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/search', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']
      >,
    ) {
      return parseResponse(client.crm.objects['2026-09'][':objectType'].search.$post(args, options))
    },
  })
}

export function usePostCrmObjects202609ObjectTypeSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609ObjectTypeSearchMutationOptions<
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

export function getCrmObjects202609ObjectTypeObjectIdQueryKey(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
) {
  return ['crm', '/crm/objects/2026-09/:objectType/:objectId', args] as const
}

export function getCrmObjects202609ObjectTypeObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjects202609ObjectTypeObjectIdQueryKey>
  >({
    queryKey: getCrmObjects202609ObjectTypeObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'][':objectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmObjects202609ObjectTypeObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609ObjectTypeObjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmObjects202609ObjectTypeObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmObjects202609ObjectTypeObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609ObjectTypeObjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmObjects202609ObjectTypeObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCrmObjects202609ObjectTypeObjectIdMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/:objectId', 'DELETE'] as const
}

export function getDeleteCrmObjects202609ObjectTypeObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmObjects202609ObjectTypeObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'][':objectId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCrmObjects202609ObjectTypeObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCrmObjects202609ObjectTypeObjectIdMutationOptions<
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

export function getPatchCrmObjects202609ObjectTypeObjectIdMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/:objectId', 'PATCH'] as const
}

export function getPatchCrmObjects202609ObjectTypeObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmObjects202609ObjectTypeObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'][':objectId'].$patch(args, options),
      )
    },
  })
}

export function usePatchCrmObjects202609ObjectTypeObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCrmObjects202609ObjectTypeObjectIdMutationOptions<
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

export function getCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeQueryKey(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType']['$get']
  >,
) {
  return [
    'crm',
    '/crm/objects/2026-09/:objectType/:objectId/associations/:toObjectType',
    args,
  ] as const
}

export function getCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeQueryKey>
  >({
    queryKey: getCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'][':objectId'].associations[
          ':toObjectType'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCrmObjects202609ObjectTypeObjectIdAssociationsToObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmObjects202609ObjectTypeObjectIdAssociationsToObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationKey() {
  return [
    'crm',
    '/crm/objects/2026-09/:objectType/:objectId/associations/:toObjectType/:toObjectId',
    'PUT',
  ] as const
}

export function getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
          ':toObjectId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationOptions<
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

export function getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationKey() {
  return [
    'crm',
    '/crm/objects/2026-09/:objectType/:objectId/associations/:toObjectType/:toObjectId',
    'DELETE',
  ] as const
}

export function getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
          ':toObjectId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationOptions<
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
