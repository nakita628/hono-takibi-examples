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

export function getTagsKey() {
  return ['tags'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdKey() {
  return [
    'v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id',
  ] as const
}

export function getV1JobsJobIdQueryKey(
  args: InferRequestType<(typeof client.v1.jobs)[':JobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/jobs/:JobId', keyArgs] as const
}

export function getV1JobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':JobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.jobs)[':JobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':JobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1JobsJobIdQueryKey>
  >({
    queryKey: getV1JobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.jobs[':JobId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1JobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':JobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.jobs)[':JobId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':JobId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1JobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1JobsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV1JobsJobIdMutationKey() {
  return ['v1', '/v1/jobs/:JobId', 'DELETE'] as const
}

export function getDeleteV1JobsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':JobId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.jobs)[':JobId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1JobsJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.jobs)[':JobId']['$delete']>) {
      return parseResponse(client.v1.jobs[':JobId'].$delete(args, options))
    },
  })
}

export function injectDeleteV1JobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.jobs)[':JobId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.jobs)[':JobId']['$delete']>,
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
    const mutationDefaults = getDeleteV1JobsJobIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1JobsJobIdMutationKey() {
  return ['v1', '/v1/jobs/:JobId', 'PATCH'] as const
}

export function getPatchV1JobsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':JobId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.jobs)[':JobId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1JobsJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.jobs)[':JobId']['$patch']>) {
      return parseResponse(client.v1.jobs[':JobId'].$patch(args, options))
    },
  })
}

export function injectPatchV1JobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':JobId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.jobs)[':JobId']['$patch']>,
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
    const mutationDefaults = getPatchV1JobsJobIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1DataSetsQueryKey(
  args: InferRequestType<(typeof client.v1)['data-sets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/data-sets', keyArgs] as const
}

export function getV1DataSetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sets']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)['data-sets']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sets']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DataSetsQueryKey>
  >({
    queryKey: getV1DataSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['data-sets'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1DataSets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sets']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['data-sets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sets']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DataSetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DataSetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1DataSetsMutationKey() {
  return ['v1', '/v1/data-sets', 'POST'] as const
}

export function getPostV1DataSetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sets']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['data-sets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataSetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['data-sets']['$post']>) {
      return parseResponse(client.v1['data-sets'].$post(args, options))
    },
  })
}

export function injectPostV1DataSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sets']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['data-sets']['$post']>,
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
    const mutationDefaults = getPostV1DataSetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1EventActionsQueryKey(
  args: InferRequestType<(typeof client.v1)['event-actions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/event-actions', keyArgs] as const
}

export function getV1EventActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['event-actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventActionsQueryKey>
  >({
    queryKey: getV1EventActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['event-actions'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1EventActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['event-actions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-actions']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EventActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EventActionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1EventActionsMutationKey() {
  return ['v1', '/v1/event-actions', 'POST'] as const
}

export function getPostV1EventActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-actions']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['event-actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EventActionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['event-actions']['$post']>) {
      return parseResponse(client.v1['event-actions'].$post(args, options))
    },
  })
}

export function injectPostV1EventActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-actions']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['event-actions']['$post']>,
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
    const mutationDefaults = getPostV1EventActionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1JobsQueryKey(args: InferRequestType<typeof client.v1.jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/jobs', keyArgs] as const
}

export function getV1JobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1JobsQueryKey>
  >({
    queryKey: getV1JobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Jobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.jobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1JobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1JobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1JobsMutationKey() {
  return ['v1', '/v1/jobs', 'POST'] as const
}

export function getPostV1JobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.$post>) {
      return parseResponse(client.v1.jobs.$post(args, options))
    },
  })
}

export function injectPostV1Jobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$post>>>>>,
        TError,
        InferRequestType<typeof client.v1.jobs.$post>,
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
    const mutationDefaults = getPostV1JobsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1DataSetsDataSetIdRevisionsQueryKey(
  args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/data-sets/:DataSetId/revisions', keyArgs] as const
}

export function getV1DataSetsDataSetIdRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DataSetsDataSetIdRevisionsQueryKey>
  >({
    queryKey: getV1DataSetsDataSetIdRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['data-sets'][':DataSetId'].revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DataSetsDataSetIdRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DataSetsDataSetIdRevisionsQueryKey>
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
      ...getV1DataSetsDataSetIdRevisionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1DataSetsDataSetIdRevisionsMutationKey() {
  return ['v1', '/v1/data-sets/:DataSetId/revisions', 'POST'] as const
}

export function getPostV1DataSetsDataSetIdRevisionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataSetsDataSetIdRevisionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$post']>,
    ) {
      return parseResponse(client.v1['data-sets'][':DataSetId'].revisions.$post(args, options))
    },
  })
}

export function injectPostV1DataSetsDataSetIdRevisions<
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
                ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$post']>,
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
    const mutationDefaults = getPostV1DataSetsDataSetIdRevisionsMutationOptions<
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

export function getV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdQueryKey(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId/assets/:AssetId', keyArgs] as const
}

export function getV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdQueryKey>
  >({
    queryKey: getV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].assets[':AssetId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdQueryKey>
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
      ...getV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdMutationKey() {
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId/assets/:AssetId', 'DELETE'] as const
}

export function getDeleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].assets[':AssetId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetId<
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
                    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$delete']
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
      getDeleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdMutationOptions<
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

export function getPatchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdMutationKey() {
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId/assets/:AssetId', 'PATCH'] as const
}

export function getPatchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].assets[':AssetId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetId<
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
                  (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$patch']
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
      getPatchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdMutationOptions<
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

export function getV1DataSetsDataSetIdQueryKey(
  args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/data-sets/:DataSetId', keyArgs] as const
}

export function getV1DataSetsDataSetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DataSetsDataSetIdQueryKey>
  >({
    queryKey: getV1DataSetsDataSetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['data-sets'][':DataSetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DataSetsDataSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DataSetsDataSetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DataSetsDataSetIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV1DataSetsDataSetIdMutationKey() {
  return ['v1', '/v1/data-sets/:DataSetId', 'DELETE'] as const
}

export function getDeleteV1DataSetsDataSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DataSetsDataSetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$delete']>,
    ) {
      return parseResponse(client.v1['data-sets'][':DataSetId'].$delete(args, options))
    },
  })
}

export function injectDeleteV1DataSetsDataSetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$delete']>,
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
    const mutationDefaults = getDeleteV1DataSetsDataSetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1DataSetsDataSetIdMutationKey() {
  return ['v1', '/v1/data-sets/:DataSetId', 'PATCH'] as const
}

export function getPatchV1DataSetsDataSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DataSetsDataSetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$patch']>,
    ) {
      return parseResponse(client.v1['data-sets'][':DataSetId'].$patch(args, options))
    },
  })
}

export function injectPatchV1DataSetsDataSetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$patch']>,
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
    const mutationDefaults = getPatchV1DataSetsDataSetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1EventActionsEventActionIdQueryKey(
  args: InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/event-actions/:EventActionId', keyArgs] as const
}

export function getV1EventActionsEventActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['event-actions'][':EventActionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['event-actions'][':EventActionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventActionsEventActionIdQueryKey>
  >({
    queryKey: getV1EventActionsEventActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['event-actions'][':EventActionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1EventActionsEventActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['event-actions'][':EventActionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['event-actions'][':EventActionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EventActionsEventActionIdQueryKey>
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
      ...getV1EventActionsEventActionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1EventActionsEventActionIdMutationKey() {
  return ['v1', '/v1/event-actions/:EventActionId', 'DELETE'] as const
}

export function getDeleteV1EventActionsEventActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['event-actions'][':EventActionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1EventActionsEventActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$delete']>,
    ) {
      return parseResponse(client.v1['event-actions'][':EventActionId'].$delete(args, options))
    },
  })
}

export function injectDeleteV1EventActionsEventActionId<
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
                  ReturnType<(typeof client.v1)['event-actions'][':EventActionId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$delete']>,
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
    const mutationDefaults = getDeleteV1EventActionsEventActionIdMutationOptions<
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

export function getPatchV1EventActionsEventActionIdMutationKey() {
  return ['v1', '/v1/event-actions/:EventActionId', 'PATCH'] as const
}

export function getPatchV1EventActionsEventActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['event-actions'][':EventActionId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1EventActionsEventActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$patch']>,
    ) {
      return parseResponse(client.v1['event-actions'][':EventActionId'].$patch(args, options))
    },
  })
}

export function injectPatchV1EventActionsEventActionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['event-actions'][':EventActionId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$patch']>,
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
    const mutationDefaults = getPatchV1EventActionsEventActionIdMutationOptions<
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

export function getV1DataSetsDataSetIdRevisionsRevisionIdQueryKey(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId', keyArgs] as const
}

export function getV1DataSetsDataSetIdRevisionsRevisionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DataSetsDataSetIdRevisionsRevisionIdQueryKey>
  >({
    queryKey: getV1DataSetsDataSetIdRevisionsRevisionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DataSetsDataSetIdRevisionsRevisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DataSetsDataSetIdRevisionsRevisionIdQueryKey>
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
      ...getV1DataSetsDataSetIdRevisionsRevisionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1DataSetsDataSetIdRevisionsRevisionIdMutationKey() {
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId', 'DELETE'] as const
}

export function getDeleteV1DataSetsDataSetIdRevisionsRevisionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DataSetsDataSetIdRevisionsRevisionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1DataSetsDataSetIdRevisionsRevisionId<
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
                    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$delete']
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
    const mutationDefaults = getDeleteV1DataSetsDataSetIdRevisionsRevisionIdMutationOptions<
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

export function getPatchV1DataSetsDataSetIdRevisionsRevisionIdMutationKey() {
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId', 'PATCH'] as const
}

export function getPatchV1DataSetsDataSetIdRevisionsRevisionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DataSetsDataSetIdRevisionsRevisionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchV1DataSetsDataSetIdRevisionsRevisionId<
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
                  (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$patch']
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
    const mutationDefaults = getPatchV1DataSetsDataSetIdRevisionsRevisionIdMutationOptions<
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

export function getV1DataSetsDataSetIdRevisionsRevisionIdAssetsQueryKey(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId/assets', keyArgs] as const
}

export function getV1DataSetsDataSetIdRevisionsRevisionIdAssetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DataSetsDataSetIdRevisionsRevisionIdAssetsQueryKey>
  >({
    queryKey: getV1DataSetsDataSetIdRevisionsRevisionIdAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].assets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1DataSetsDataSetIdRevisionsRevisionIdAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DataSetsDataSetIdRevisionsRevisionIdAssetsQueryKey>
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
      ...getV1DataSetsDataSetIdRevisionsRevisionIdAssetsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':ResourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:ResourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>) {
      return parseResponse(client.tags[':ResourceArn'].$post(args, options))
    },
  })
}

export function injectPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
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
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1DataSetsDataSetIdRevisionsRevisionIdRevokeMutationKey() {
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId/revoke', 'POST'] as const
}

export function getPostV1DataSetsDataSetIdRevisionsRevisionIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataSetsDataSetIdRevisionsRevisionIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['revoke']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].revoke.$post(args, options),
      )
    },
  })
}

export function injectPostV1DataSetsDataSetIdRevisionsRevisionIdRevoke<
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
                  (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['revoke']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['revoke']['$post']
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
    const mutationDefaults = getPostV1DataSetsDataSetIdRevisionsRevisionIdRevokeMutationOptions<
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

export function getPostV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdMutationKey() {
  return [
    'v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id',
    '/v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id',
    'POST',
  ] as const
}

export function getPostV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id']['$post']
      >,
    ) {
      return parseResponse(
        client[
          'v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionId<
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
                  (typeof client)['v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id']['$post']
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
      getPostV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdMutationOptions<
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function injectDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
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
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
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
