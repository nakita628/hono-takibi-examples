import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIdentitypoolsKey() {
  return ['identitypools'] as const
}

export function getPostIdentitypoolsIdentityPoolIdBulkpublishKey() {
  return ['identitypools', '/identitypools/:IdentityPoolId/bulkpublish', 'POST'] as const
}

export function usePostIdentitypoolsIdentityPoolIdBulkpublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.identitypools)[':IdentityPoolId']['bulkpublish']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['bulkpublish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentitypoolsIdentityPoolIdBulkpublishKey()
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
            (typeof client.identitypools)[':IdentityPoolId']['bulkpublish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.identitypools[':IdentityPoolId'].bulkpublish.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameKey(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'identitypools',
    '/identitypools/:IdentityPoolId/identities/:IdentityId/datasets/:DatasetName',
    keyArgs,
  ] as const
}

export function useGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$get']
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
        ? getGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameKey(args)
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
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$get']
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
          client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
            ':DatasetName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$get']
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
        ? getGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameKey(args)
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
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$get']
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
          client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
            ':DatasetName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameKey() {
  return [
    'identitypools',
    '/identitypools/:IdentityPoolId/identities/:IdentityId/datasets/:DatasetName',
    'POST',
  ] as const
}

export function usePostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameKey()
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
            (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
            ':DatasetName'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameKey() {
  return [
    'identitypools',
    '/identitypools/:IdentityPoolId/identities/:IdentityId/datasets/:DatasetName',
    'DELETE',
  ] as const
}

export function useDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameKey()
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
            (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
            ':DatasetName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIdentitypoolsIdentityPoolIdKey(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['identitypools', '/identitypools/:IdentityPoolId', keyArgs] as const
}

export function useGetIdentitypoolsIdentityPoolId<TError = unknown>(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['$get']>>
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
        ? getGetIdentitypoolsIdentityPoolIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.identitypools[':IdentityPoolId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdentitypoolsIdentityPoolId<TError = unknown>(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['$get']>>
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
        ? getGetIdentitypoolsIdentityPoolIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.identitypools[':IdentityPoolId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdKey(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'identitypools',
    '/identitypools/:IdentityPoolId/identities/:IdentityId',
    keyArgs,
  ] as const
}

export function useGetIdentitypoolsIdentityPoolIdIdentitiesIdentityId<TError = unknown>(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['$get']
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
        ? getGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdKey(args)
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
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['$get']
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
          client.identitypools[':IdentityPoolId'].identities[':IdentityId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdentitypoolsIdentityPoolIdIdentitiesIdentityId<TError = unknown>(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['$get']
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
        ? getGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdKey(args)
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
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['$get']
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
          client.identitypools[':IdentityPoolId'].identities[':IdentityId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostIdentitypoolsIdentityPoolIdGetBulkPublishDetailsKey() {
  return ['identitypools', '/identitypools/:IdentityPoolId/getBulkPublishDetails', 'POST'] as const
}

export function usePostIdentitypoolsIdentityPoolIdGetBulkPublishDetails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.identitypools)[':IdentityPoolId']['getBulkPublishDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.identitypools)[':IdentityPoolId']['getBulkPublishDetails']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentitypoolsIdentityPoolIdGetBulkPublishDetailsKey()
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
            (typeof client.identitypools)[':IdentityPoolId']['getBulkPublishDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client.identitypools[':IdentityPoolId'].getBulkPublishDetails.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIdentitypoolsIdentityPoolIdEventsKey(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['identitypools', '/identitypools/:IdentityPoolId/events', keyArgs] as const
}

export function useGetIdentitypoolsIdentityPoolIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['events']['$get']>>
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
        ? getGetIdentitypoolsIdentityPoolIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.identitypools[':IdentityPoolId'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdentitypoolsIdentityPoolIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['events']['$get']>>
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
        ? getGetIdentitypoolsIdentityPoolIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.identitypools[':IdentityPoolId'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIdentitypoolsIdentityPoolIdEventsKey() {
  return ['identitypools', '/identitypools/:IdentityPoolId/events', 'POST'] as const
}

export function usePostIdentitypoolsIdentityPoolIdEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['events']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentitypoolsIdentityPoolIdEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['events']['$post']>
        },
      ) => parseResponse(client.identitypools[':IdentityPoolId'].events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIdentitypoolsIdentityPoolIdConfigurationKey(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['identitypools', '/identitypools/:IdentityPoolId/configuration', keyArgs] as const
}

export function useGetIdentitypoolsIdentityPoolIdConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$get']>
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
        ? getGetIdentitypoolsIdentityPoolIdConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.identitypools[':IdentityPoolId'].configuration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdentitypoolsIdentityPoolIdConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$get']>
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
        ? getGetIdentitypoolsIdentityPoolIdConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.identitypools[':IdentityPoolId'].configuration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostIdentitypoolsIdentityPoolIdConfigurationKey() {
  return ['identitypools', '/identitypools/:IdentityPoolId/configuration', 'POST'] as const
}

export function usePostIdentitypoolsIdentityPoolIdConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentitypoolsIdentityPoolIdConfigurationKey()
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
            (typeof client.identitypools)[':IdentityPoolId']['configuration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.identitypools[':IdentityPoolId'].configuration.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsKey(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'identitypools',
    '/identitypools/:IdentityPoolId/identities/:IdentityId/datasets',
    keyArgs,
  ] as const
}

export function useGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasets<TError = unknown>(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets']['$get']
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
        ? getGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsKey(args)
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
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets']['$get']
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
          client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasets<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets']['$get']
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
        ? getGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsKey(args)
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
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets']['$get']
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
          client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIdentitypoolsKey(args: InferRequestType<typeof client.identitypools.$get>) {
  const { header: _, ...keyArgs } = args
  return ['identitypools', '/identitypools', keyArgs] as const
}

export function useGetIdentitypools<TError = unknown>(
  args: InferRequestType<typeof client.identitypools.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identitypools.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIdentitypoolsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identitypools.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.identitypools.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdentitypools<TError = unknown>(
  args: InferRequestType<typeof client.identitypools.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identitypools.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIdentitypoolsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identitypools.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.identitypools.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecordsKey(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['records']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'identitypools',
    '/identitypools/:IdentityPoolId/identities/:IdentityId/datasets/:DatasetName/records',
    keyArgs,
  ] as const
}

export function useGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecords<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['records']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['records']['$get']
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
        ? getGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecordsKey(args)
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
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['records']['$get']
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
          client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
            ':DatasetName'
          ].records.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecords<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['records']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['records']['$get']
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
        ? getGetIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecordsKey(args)
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
                (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['records']['$get']
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
          client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
            ':DatasetName'
          ].records.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostIdentitypoolsIdentityPoolIdIdentityIdentityIdDeviceKey() {
  return [
    'identitypools',
    '/identitypools/:IdentityPoolId/identity/:IdentityId/device',
    'POST',
  ] as const
}

export function usePostIdentitypoolsIdentityPoolIdIdentityIdentityIdDevice<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.identitypools)[':IdentityPoolId']['identity'][':IdentityId']['device']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.identitypools)[':IdentityPoolId']['identity'][':IdentityId']['device']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentitypoolsIdentityPoolIdIdentityIdentityIdDeviceKey()
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
            (typeof client.identitypools)[':IdentityPoolId']['identity'][':IdentityId']['device']['$post']
          >
        },
      ) =>
        parseResponse(
          client.identitypools[':IdentityPoolId'].identity[':IdentityId'].device.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdKey() {
  return [
    'identitypools',
    '/identitypools/:IdentityPoolId/identities/:IdentityId/datasets/:DatasetName/subscriptions/:DeviceId',
    'POST',
  ] as const
}

export function usePostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['subscriptions'][':DeviceId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['subscriptions'][':DeviceId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdKey()
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
            (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['subscriptions'][':DeviceId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
            ':DatasetName'
          ].subscriptions[':DeviceId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdKey() {
  return [
    'identitypools',
    '/identitypools/:IdentityPoolId/identities/:IdentityId/datasets/:DatasetName/subscriptions/:DeviceId',
    'DELETE',
  ] as const
}

export function useDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['subscriptions'][':DeviceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['subscriptions'][':DeviceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdKey()
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
            (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['subscriptions'][':DeviceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
            ':DatasetName'
          ].subscriptions[':DeviceId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
