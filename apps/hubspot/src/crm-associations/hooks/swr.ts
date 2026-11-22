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

export function getGetCrmAssociations202609DefinitionsConfigurationsAllKey() {
  return ['crm', '/crm/associations/2026-09/definitions/configurations/all'] as const
}

export function useGetCrmAssociations202609DefinitionsConfigurationsAll<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
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
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmAssociations202609DefinitionsConfigurationsAllKey()
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
                (typeof client.crm.associations)['2026-09']['definitions']['configurations']['all']['$get']
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
          client.crm.associations['2026-09'].definitions.configurations.all.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmAssociations202609DefinitionsConfigurationsAll<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
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
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmAssociations202609DefinitionsConfigurationsAllKey()
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
                (typeof client.crm.associations)['2026-09']['definitions']['configurations']['all']['$get']
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
          client.crm.associations['2026-09'].definitions.configurations.all.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeKey(
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

export function useGetCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeKey(args)
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
                (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
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
          client.crm.associations['2026-09'].definitions.configurations[':fromObjectType'][
            ':toObjectType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeKey(args)
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
                (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['$get']
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
          client.crm.associations['2026-09'].definitions.configurations[':fromObjectType'][
            ':toObjectType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreateKey() {
  return [
    'crm',
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType/batch/create',
    'POST',
  ] as const
}

export function usePostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchCreateKey()
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
            (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.associations['2026-09'].definitions.configurations[':fromObjectType'][
            ':toObjectType'
          ].batch.create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurgeKey() {
  return [
    'crm',
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType/batch/purge',
    'POST',
  ] as const
}

export function usePostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurge<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['purge']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchPurgeKey()
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
            (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['purge']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.associations['2026-09'].definitions.configurations[':fromObjectType'][
            ':toObjectType'
          ].batch.purge.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdateKey() {
  return [
    'crm',
    '/crm/associations/2026-09/definitions/configurations/:fromObjectType/:toObjectType/batch/update',
    'POST',
  ] as const
}

export function usePostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostCrmAssociations202609DefinitionsConfigurationsFromObjectTypeToObjectTypeBatchUpdateKey()
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
            (typeof client.crm.associations)['2026-09']['definitions']['configurations'][':fromObjectType'][':toObjectType']['batch']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.associations['2026-09'].definitions.configurations[':fromObjectType'][
            ':toObjectType'
          ].batch.update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmAssociations202609UsageHighUsageReportUserIdKey() {
  return ['crm', '/crm/associations/2026-09/usage/high-usage-report/:userId', 'POST'] as const
}

export function usePostCrmAssociations202609UsageHighUsageReportUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.associations)['2026-09']['usage']['high-usage-report'][':userId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmAssociations202609UsageHighUsageReportUserIdKey()
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
            (typeof client.crm.associations)['2026-09']['usage']['high-usage-report'][':userId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.associations['2026-09'].usage['high-usage-report'][':userId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchArchiveKey() {
  return [
    'crm',
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/batch/archive',
    'POST',
  ] as const
}

export function usePostCrmAssociations202609FromObjectTypeToObjectTypeBatchArchive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchArchiveKey()
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
            (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.associations['2026-09'][':fromObjectType'][
            ':toObjectType'
          ].batch.archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchAssociateDefaultKey() {
  return [
    'crm',
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/batch/associate/default',
    'POST',
  ] as const
}

export function usePostCrmAssociations202609FromObjectTypeToObjectTypeBatchAssociateDefault<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['associate']['default']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchAssociateDefaultKey()
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
            (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['associate']['default']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.associations['2026-09'][':fromObjectType'][
            ':toObjectType'
          ].batch.associate.default.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchCreateKey() {
  return [
    'crm',
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/batch/create',
    'POST',
  ] as const
}

export function usePostCrmAssociations202609FromObjectTypeToObjectTypeBatchCreate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchCreateKey()
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
            (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].batch.create.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchLabelsArchiveKey() {
  return [
    'crm',
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/batch/labels/archive',
    'POST',
  ] as const
}

export function usePostCrmAssociations202609FromObjectTypeToObjectTypeBatchLabelsArchive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['labels']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchLabelsArchiveKey()
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
            (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['labels']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.associations['2026-09'][':fromObjectType'][
            ':toObjectType'
          ].batch.labels.archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchReadKey() {
  return [
    'crm',
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/batch/read',
    'POST',
  ] as const
}

export function usePostCrmAssociations202609FromObjectTypeToObjectTypeBatchRead<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmAssociations202609FromObjectTypeToObjectTypeBatchReadKey()
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
            (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].batch.read.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmAssociations202609FromObjectTypeToObjectTypeLabelsKey(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
  >,
) {
  return ['crm', '/crm/associations/2026-09/:fromObjectType/:toObjectType/labels', args] as const
}

export function useGetCrmAssociations202609FromObjectTypeToObjectTypeLabels<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmAssociations202609FromObjectTypeToObjectTypeLabelsKey(args)
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
                (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
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
          client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].labels.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmAssociations202609FromObjectTypeToObjectTypeLabels<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmAssociations202609FromObjectTypeToObjectTypeLabelsKey(args)
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
                (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$get']
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
          client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].labels.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCrmAssociations202609FromObjectTypeToObjectTypeLabelsKey() {
  return ['crm', '/crm/associations/2026-09/:fromObjectType/:toObjectType/labels', 'PUT'] as const
}

export function usePutCrmAssociations202609FromObjectTypeToObjectTypeLabels<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmAssociations202609FromObjectTypeToObjectTypeLabelsKey()
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
            (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].labels.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmAssociations202609FromObjectTypeToObjectTypeLabelsKey() {
  return ['crm', '/crm/associations/2026-09/:fromObjectType/:toObjectType/labels', 'POST'] as const
}

export function usePostCrmAssociations202609FromObjectTypeToObjectTypeLabels<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmAssociations202609FromObjectTypeToObjectTypeLabelsKey()
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
            (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].labels.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeIdKey() {
  return [
    'crm',
    '/crm/associations/2026-09/:fromObjectType/:toObjectType/labels/:associationTypeId',
    'DELETE',
  ] as const
}

export function useDeleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels'][':associationTypeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteCrmAssociations202609FromObjectTypeToObjectTypeLabelsAssociationTypeIdKey()
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
            (typeof client.crm.associations)['2026-09'][':fromObjectType'][':toObjectType']['labels'][':associationTypeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.associations['2026-09'][':fromObjectType'][':toObjectType'].labels[
            ':associationTypeId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
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

export function getGetCrmObjects202609ObjectTypeKey(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
) {
  return ['crm', '/crm/objects/2026-09/:objectType', args] as const
}

export function useGetCrmObjects202609ObjectType<TError = unknown>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
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
        ? getGetCrmObjects202609ObjectTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.objects['2026-09'][':objectType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjects202609ObjectType<TError = unknown>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
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
        ? getGetCrmObjects202609ObjectTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.objects['2026-09'][':objectType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeKey() {
  return ['crm', '/crm/objects/2026-09/:objectType', 'POST'] as const
}

export function usePostCrmObjects202609ObjectType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>
        },
      ) => parseResponse(client.crm.objects['2026-09'][':objectType'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeBatchArchiveKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/archive', 'POST'] as const
}

export function usePostCrmObjects202609ObjectTypeBatchArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeBatchArchiveKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'].batch.archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeBatchCreateKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/create', 'POST'] as const
}

export function usePostCrmObjects202609ObjectTypeBatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeBatchCreateKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'].batch.create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeBatchReadKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/read', 'POST'] as const
}

export function usePostCrmObjects202609ObjectTypeBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeBatchReadKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'].batch.read.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeBatchUpdateKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/update', 'POST'] as const
}

export function usePostCrmObjects202609ObjectTypeBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeBatchUpdateKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'].batch.update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeBatchUpsertKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/upsert', 'POST'] as const
}

export function usePostCrmObjects202609ObjectTypeBatchUpsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeBatchUpsertKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'].batch.upsert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeGdprDeleteKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/gdpr-delete', 'POST'] as const
}

export function usePostCrmObjects202609ObjectTypeGdprDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['gdpr-delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeGdprDeleteKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType']['gdpr-delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType']['gdpr-delete'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeMergeKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/merge', 'POST'] as const
}

export function usePostCrmObjects202609ObjectTypeMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeMergeKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']
          >
        },
      ) =>
        parseResponse(client.crm.objects['2026-09'][':objectType'].merge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeSearchKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/search', 'POST'] as const
}

export function usePostCrmObjects202609ObjectTypeSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeSearchKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'].search.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmObjects202609ObjectTypeObjectIdKey(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
) {
  return ['crm', '/crm/objects/2026-09/:objectType/:objectId', args] as const
}

export function useGetCrmObjects202609ObjectTypeObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
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
        ? getGetCrmObjects202609ObjectTypeObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'][':objectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjects202609ObjectTypeObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
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
        ? getGetCrmObjects202609ObjectTypeObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'][':objectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmObjects202609ObjectTypeObjectIdKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/:objectId', 'DELETE'] as const
}

export function useDeleteCrmObjects202609ObjectTypeObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmObjects202609ObjectTypeObjectIdKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'][':objectId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmObjects202609ObjectTypeObjectIdKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/:objectId', 'PATCH'] as const
}

export function usePatchCrmObjects202609ObjectTypeObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmObjects202609ObjectTypeObjectIdKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'][':objectId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeKey(
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

export function useGetCrmObjects202609ObjectTypeObjectIdAssociationsToObjectType<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeKey(args)
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
                (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType']['$get']
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
          client.crm.objects['2026-09'][':objectType'][':objectId'].associations[
            ':toObjectType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjects202609ObjectTypeObjectIdAssociationsToObjectType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeKey(args)
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
                (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType']['$get']
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
          client.crm.objects['2026-09'][':objectType'][':objectId'].associations[
            ':toObjectType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
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
