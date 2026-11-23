import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIdentitypoolsKey() {
  return ['identitypools'] as const
}

export function getPostIdentitypoolsIdentityPoolIdBulkpublishMutationKey() {
  return ['identitypools', '/identitypools/:IdentityPoolId/bulkpublish', 'POST'] as const
}

export function getPostIdentitypoolsIdentityPoolIdBulkpublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['bulkpublish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIdentitypoolsIdentityPoolIdBulkpublishMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.identitypools)[':IdentityPoolId']['bulkpublish']['$post']
      >,
    ) {
      return parseResponse(client.identitypools[':IdentityPoolId'].bulkpublish.$post(args, options))
    },
  })
}

export function createPostIdentitypoolsIdentityPoolIdBulkpublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.identitypools)[':IdentityPoolId']['bulkpublish']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.identitypools)[':IdentityPoolId']['bulkpublish']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIdentitypoolsIdentityPoolIdBulkpublishMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameQueryKey(
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

export function getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameQueryKey>
  >({
    queryKey: getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
          ':DatasetName'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameMutationKey() {
  return [
    'identitypools',
    '/identitypools/:IdentityPoolId/identities/:IdentityId/datasets/:DatasetName',
    'POST',
  ] as const
}

export function getPostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$post']
      >,
    ) {
      return parseResponse(
        client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
          ':DatasetName'
        ].$post(args, options),
      )
    },
  })
}

export function createPostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameMutationKey() {
  return [
    'identitypools',
    '/identitypools/:IdentityPoolId/identities/:IdentityId/datasets/:DatasetName',
    'DELETE',
  ] as const
}

export function getDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$delete']
      >,
    ) {
      return parseResponse(
        client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
          ':DatasetName'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIdentitypoolsIdentityPoolIdQueryKey(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['identitypools', '/identitypools/:IdentityPoolId', keyArgs] as const
}

export function getIdentitypoolsIdentityPoolIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdentitypoolsIdentityPoolIdQueryKey>
  >({
    queryKey: getIdentitypoolsIdentityPoolIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.identitypools[':IdentityPoolId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIdentitypoolsIdentityPoolId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIdentitypoolsIdentityPoolIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIdentitypoolsIdentityPoolIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdQueryKey(
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

export function getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdQueryKey>
  >({
    queryKey: getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.identitypools[':IdentityPoolId'].identities[':IdentityId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIdentitypoolsIdentityPoolIdIdentitiesIdentityId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostIdentitypoolsIdentityPoolIdGetBulkPublishDetailsMutationKey() {
  return ['identitypools', '/identitypools/:IdentityPoolId/getBulkPublishDetails', 'POST'] as const
}

export function getPostIdentitypoolsIdentityPoolIdGetBulkPublishDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.identitypools)[':IdentityPoolId']['getBulkPublishDetails']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostIdentitypoolsIdentityPoolIdGetBulkPublishDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.identitypools)[':IdentityPoolId']['getBulkPublishDetails']['$post']
      >,
    ) {
      return parseResponse(
        client.identitypools[':IdentityPoolId'].getBulkPublishDetails.$post(args, options),
      )
    },
  })
}

export function createPostIdentitypoolsIdentityPoolIdGetBulkPublishDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.identitypools)[':IdentityPoolId']['getBulkPublishDetails']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIdentitypoolsIdentityPoolIdGetBulkPublishDetailsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIdentitypoolsIdentityPoolIdEventsQueryKey(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['identitypools', '/identitypools/:IdentityPoolId/events', keyArgs] as const
}

export function getIdentitypoolsIdentityPoolIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdentitypoolsIdentityPoolIdEventsQueryKey>
  >({
    queryKey: getIdentitypoolsIdentityPoolIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.identitypools[':IdentityPoolId'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIdentitypoolsIdentityPoolIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['events']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.identitypools)[':IdentityPoolId']['events']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIdentitypoolsIdentityPoolIdEventsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIdentitypoolsIdentityPoolIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostIdentitypoolsIdentityPoolIdEventsMutationKey() {
  return ['identitypools', '/identitypools/:IdentityPoolId/events', 'POST'] as const
}

export function getPostIdentitypoolsIdentityPoolIdEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.identitypools)[':IdentityPoolId']['events']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['events']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIdentitypoolsIdentityPoolIdEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['events']['$post']>,
    ) {
      return parseResponse(client.identitypools[':IdentityPoolId'].events.$post(args, options))
    },
  })
}

export function createPostIdentitypoolsIdentityPoolIdEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.identitypools)[':IdentityPoolId']['events']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['events']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIdentitypoolsIdentityPoolIdEventsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIdentitypoolsIdentityPoolIdConfigurationQueryKey(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['identitypools', '/identitypools/:IdentityPoolId/configuration', keyArgs] as const
}

export function getIdentitypoolsIdentityPoolIdConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdentitypoolsIdentityPoolIdConfigurationQueryKey>
  >({
    queryKey: getIdentitypoolsIdentityPoolIdConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.identitypools[':IdentityPoolId'].configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIdentitypoolsIdentityPoolIdConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['configuration']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.identitypools)[':IdentityPoolId']['configuration']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIdentitypoolsIdentityPoolIdConfigurationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIdentitypoolsIdentityPoolIdConfigurationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostIdentitypoolsIdentityPoolIdConfigurationMutationKey() {
  return ['identitypools', '/identitypools/:IdentityPoolId/configuration', 'POST'] as const
}

export function getPostIdentitypoolsIdentityPoolIdConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIdentitypoolsIdentityPoolIdConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.identitypools)[':IdentityPoolId']['configuration']['$post']
      >,
    ) {
      return parseResponse(
        client.identitypools[':IdentityPoolId'].configuration.$post(args, options),
      )
    },
  })
}

export function createPostIdentitypoolsIdentityPoolIdConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.identitypools)[':IdentityPoolId']['configuration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.identitypools)[':IdentityPoolId']['configuration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIdentitypoolsIdentityPoolIdConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsQueryKey(
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

export function getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsQueryKey>
  >({
    queryKey: getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasets<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getIdentitypoolsQueryKey(args: InferRequestType<typeof client.identitypools.$get>) {
  const { header: _, ...keyArgs } = args
  return ['identitypools', '/identitypools', keyArgs] as const
}

export function getIdentitypoolsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identitypools.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.identitypools.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identitypools.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIdentitypoolsQueryKey>
  >({
    queryKey: getIdentitypoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.identitypools.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIdentitypools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identitypools.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.identitypools.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identitypools.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getIdentitypoolsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIdentitypoolsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecordsQueryKey(
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

export function getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecordsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['records']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecordsQueryKey
    >
  >({
    queryKey:
      getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
          ':DatasetName'
        ].records.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecords<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['records']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecordsQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecordsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostIdentitypoolsIdentityPoolIdIdentityIdentityIdDeviceMutationKey() {
  return [
    'identitypools',
    '/identitypools/:IdentityPoolId/identity/:IdentityId/device',
    'POST',
  ] as const
}

export function getPostIdentitypoolsIdentityPoolIdIdentityIdentityIdDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.identitypools)[':IdentityPoolId']['identity'][':IdentityId']['device']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostIdentitypoolsIdentityPoolIdIdentityIdentityIdDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.identitypools)[':IdentityPoolId']['identity'][':IdentityId']['device']['$post']
      >,
    ) {
      return parseResponse(
        client.identitypools[':IdentityPoolId'].identity[':IdentityId'].device.$post(args, options),
      )
    },
  })
}

export function createPostIdentitypoolsIdentityPoolIdIdentityIdentityIdDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.identitypools)[':IdentityPoolId']['identity'][':IdentityId']['device']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostIdentitypoolsIdentityPoolIdIdentityIdentityIdDeviceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdMutationKey() {
  return [
    'identitypools',
    '/identitypools/:IdentityPoolId/identities/:IdentityId/datasets/:DatasetName/subscriptions/:DeviceId',
    'POST',
  ] as const
}

export function getPostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['subscriptions'][':DeviceId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['subscriptions'][':DeviceId']['$post']
      >,
    ) {
      return parseResponse(
        client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
          ':DatasetName'
        ].subscriptions[':DeviceId'].$post(args, options),
      )
    },
  })
}

export function createPostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['subscriptions'][':DeviceId']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdMutationKey() {
  return [
    'identitypools',
    '/identitypools/:IdentityPoolId/identities/:IdentityId/datasets/:DatasetName/subscriptions/:DeviceId',
    'DELETE',
  ] as const
}

export function getDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['subscriptions'][':DeviceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['subscriptions'][':DeviceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
          ':DatasetName'
        ].subscriptions[':DeviceId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['subscriptions'][':DeviceId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
