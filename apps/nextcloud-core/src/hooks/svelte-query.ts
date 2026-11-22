import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getOcsKey() {
  return ['ocs'] as const
}

export function getStatusPhpKey() {
  return ['status.php'] as const
}

export function getOcsV2PhpCoreGetapppasswordQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['getapppassword']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/core/getapppassword', keyArgs] as const
}

export function getOcsV2PhpCoreGetapppasswordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['getapppassword']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['getapppassword']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['getapppassword']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCoreGetapppasswordQueryKey>
  >({
    queryKey: getOcsV2PhpCoreGetapppasswordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].core.getapppassword.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpCoreGetapppassword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['getapppassword']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ocs)['v2.php']['core']['getapppassword']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['getapppassword']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpCoreGetapppasswordQueryKey>
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
      ...getOcsV2PhpCoreGetapppasswordQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpCoreApppasswordMutationKey() {
  return ['ocs', '/ocs/v2.php/core/apppassword', 'DELETE'] as const
}

export function getDeleteOcsV2PhpCoreApppasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['apppassword']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['core']['apppassword']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpCoreApppasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['core']['apppassword']['$delete']>,
    ) {
      return parseResponse(client.ocs['v2.php'].core.apppassword.$delete(args, options))
    },
  })
}

export function createDeleteOcsV2PhpCoreApppassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['apppassword']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['core']['apppassword']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpCoreApppasswordMutationOptions<
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

export function getPostOcsV2PhpCoreApppasswordRotateMutationKey() {
  return ['ocs', '/ocs/v2.php/core/apppassword/rotate', 'POST'] as const
}

export function getPostOcsV2PhpCoreApppasswordRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['core']['apppassword']['rotate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['core']['apppassword']['rotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCoreApppasswordRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['core']['apppassword']['rotate']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].core.apppassword.rotate.$post(args, options))
    },
  })
}

export function createPostOcsV2PhpCoreApppasswordRotate<
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
                ReturnType<(typeof client.ocs)['v2.php']['core']['apppassword']['rotate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['core']['apppassword']['rotate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpCoreApppasswordRotateMutationOptions<
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

export function getPutOcsV2PhpCoreApppasswordConfirmMutationKey() {
  return ['ocs', '/ocs/v2.php/core/apppassword/confirm', 'PUT'] as const
}

export function getPutOcsV2PhpCoreApppasswordConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['core']['apppassword']['confirm']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['core']['apppassword']['confirm']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpCoreApppasswordConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['core']['apppassword']['confirm']['$put']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].core.apppassword.confirm.$put(args, options))
    },
  })
}

export function createPutOcsV2PhpCoreApppasswordConfirm<
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
                ReturnType<(typeof client.ocs)['v2.php']['core']['apppassword']['confirm']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['core']['apppassword']['confirm']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpCoreApppasswordConfirmMutationOptions<
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

export function getOcsV2PhpCoreGetapppasswordOnetimeQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['getapppassword-onetime']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/core/getapppassword-onetime', keyArgs] as const
}

export function getOcsV2PhpCoreGetapppasswordOnetimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['getapppassword-onetime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['getapppassword-onetime']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['core']['getapppassword-onetime']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCoreGetapppasswordOnetimeQueryKey>
  >({
    queryKey: getOcsV2PhpCoreGetapppasswordOnetimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].core['getapppassword-onetime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpCoreGetapppasswordOnetime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['getapppassword-onetime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['core']['getapppassword-onetime']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocs)['v2.php']['core']['getapppassword-onetime']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpCoreGetapppasswordOnetimeQueryKey>
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
      ...getOcsV2PhpCoreGetapppasswordOnetimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpCoreAutocompleteGetQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['autocomplete']['get']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/core/autocomplete/get', keyArgs] as const
}

export function getOcsV2PhpCoreAutocompleteGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['autocomplete']['get']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['autocomplete']['get']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['autocomplete']['get']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCoreAutocompleteGetQueryKey>
  >({
    queryKey: getOcsV2PhpCoreAutocompleteGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].core.autocomplete.get.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpCoreAutocompleteGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['autocomplete']['get']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['core']['autocomplete']['get']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocs)['v2.php']['core']['autocomplete']['get']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpCoreAutocompleteGetQueryKey>
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
      ...getOcsV2PhpCoreAutocompleteGetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpCollaborationResourcesCollectionsCollectionIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/collaboration/resources/collections/:collectionId', keyArgs] as const
}

export function getOcsV2PhpCollaborationResourcesCollectionsCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCollaborationResourcesCollectionsCollectionIdQueryKey>
  >({
    queryKey: getOcsV2PhpCollaborationResourcesCollectionsCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].collaboration.resources.collections[':collectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpCollaborationResourcesCollectionsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpCollaborationResourcesCollectionsCollectionIdQueryKey>
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
      ...getOcsV2PhpCollaborationResourcesCollectionsCollectionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOcsV2PhpCollaborationResourcesCollectionsCollectionIdMutationKey() {
  return ['ocs', '/ocs/v2.php/collaboration/resources/collections/:collectionId', 'PUT'] as const
}

export function getPutOcsV2PhpCollaborationResourcesCollectionsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpCollaborationResourcesCollectionsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].collaboration.resources.collections[':collectionId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpCollaborationResourcesCollectionsCollectionId<
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
                  (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$put']
        >,
        TOnMutateResult
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
      getPutOcsV2PhpCollaborationResourcesCollectionsCollectionIdMutationOptions<
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

export function getPostOcsV2PhpCollaborationResourcesCollectionsCollectionIdMutationKey() {
  return ['ocs', '/ocs/v2.php/collaboration/resources/collections/:collectionId', 'POST'] as const
}

export function getPostOcsV2PhpCollaborationResourcesCollectionsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCollaborationResourcesCollectionsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].collaboration.resources.collections[':collectionId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpCollaborationResourcesCollectionsCollectionId<
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
                  (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$post']
        >,
        TOnMutateResult
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
      getPostOcsV2PhpCollaborationResourcesCollectionsCollectionIdMutationOptions<
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

export function getDeleteOcsV2PhpCollaborationResourcesCollectionsCollectionIdMutationKey() {
  return ['ocs', '/ocs/v2.php/collaboration/resources/collections/:collectionId', 'DELETE'] as const
}

export function getDeleteOcsV2PhpCollaborationResourcesCollectionsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpCollaborationResourcesCollectionsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].collaboration.resources.collections[':collectionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpCollaborationResourcesCollectionsCollectionId<
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
                  (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$delete']
        >,
        TOnMutateResult
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
      getDeleteOcsV2PhpCollaborationResourcesCollectionsCollectionIdMutationOptions<
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

export function getOcsV2PhpCollaborationResourcesCollectionsSearchFilterQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources']['collections']['search'][':filter']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/collaboration/resources/collections/search/:filter', keyArgs] as const
}

export function getOcsV2PhpCollaborationResourcesCollectionsSearchFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['collaboration']['resources']['collections']['search'][':filter']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources']['collections']['search'][':filter']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['collaboration']['resources']['collections']['search'][':filter']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCollaborationResourcesCollectionsSearchFilterQueryKey>
  >({
    queryKey: getOcsV2PhpCollaborationResourcesCollectionsSearchFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].collaboration.resources.collections.search[':filter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpCollaborationResourcesCollectionsSearchFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['collaboration']['resources']['collections']['search'][':filter']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources']['collections']['search'][':filter']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['collaboration']['resources']['collections']['search'][':filter']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpCollaborationResourcesCollectionsSearchFilterQueryKey>
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
      ...getOcsV2PhpCollaborationResourcesCollectionsSearchFilterQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpCollaborationResourcesResourceTypeResourceIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources'][':resourceType'][':resourceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/collaboration/resources/:resourceType/:resourceId', keyArgs] as const
}

export function getOcsV2PhpCollaborationResourcesResourceTypeResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['collaboration']['resources'][':resourceType'][':resourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources'][':resourceType'][':resourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['collaboration']['resources'][':resourceType'][':resourceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCollaborationResourcesResourceTypeResourceIdQueryKey>
  >({
    queryKey: getOcsV2PhpCollaborationResourcesResourceTypeResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].collaboration.resources[':resourceType'][':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpCollaborationResourcesResourceTypeResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['collaboration']['resources'][':resourceType'][':resourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources'][':resourceType'][':resourceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['collaboration']['resources'][':resourceType'][':resourceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpCollaborationResourcesResourceTypeResourceIdQueryKey>
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
      ...getOcsV2PhpCollaborationResourcesResourceTypeResourceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/collaboration/resources/:baseResourceType/:baseResourceId',
    'POST',
  ] as const
}

export function getPostOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['collaboration']['resources'][':baseResourceType'][':baseResourceId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['collaboration']['resources'][':baseResourceType'][':baseResourceId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['collaboration']['resources'][':baseResourceType'][':baseResourceId']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].collaboration.resources[':baseResourceType'][':baseResourceId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceId<
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
                  (typeof client.ocs)['v2.php']['collaboration']['resources'][':baseResourceType'][':baseResourceId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['collaboration']['resources'][':baseResourceType'][':baseResourceId']['$post']
        >,
        TOnMutateResult
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
      getPostOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceIdMutationOptions<
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

export function getOcsV2PhpHovercardV1UserIdQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['hovercard']['v1'][':userId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/hovercard/v1/:userId', keyArgs] as const
}

export function getOcsV2PhpHovercardV1UserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['hovercard']['v1'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['hovercard']['v1'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['hovercard']['v1'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpHovercardV1UserIdQueryKey>
  >({
    queryKey: getOcsV2PhpHovercardV1UserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].hovercard.v1[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpHovercardV1UserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['hovercard']['v1'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ocs)['v2.php']['hovercard']['v1'][':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocs)['v2.php']['hovercard']['v1'][':userId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpHovercardV1UserIdQueryKey>
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
      ...getOcsV2PhpHovercardV1UserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpCoreNavigationAppsQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['navigation']['apps']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/core/navigation/apps', keyArgs] as const
}

export function getOcsV2PhpCoreNavigationAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['navigation']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['navigation']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['navigation']['apps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCoreNavigationAppsQueryKey>
  >({
    queryKey: getOcsV2PhpCoreNavigationAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].core.navigation.apps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpCoreNavigationApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['navigation']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ocs)['v2.php']['core']['navigation']['apps']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocs)['v2.php']['core']['navigation']['apps']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpCoreNavigationAppsQueryKey>
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
      ...getOcsV2PhpCoreNavigationAppsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpCoreNavigationSettingsQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['navigation']['settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/core/navigation/settings', keyArgs] as const
}

export function getOcsV2PhpCoreNavigationSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['navigation']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['navigation']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['core']['navigation']['settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCoreNavigationSettingsQueryKey>
  >({
    queryKey: getOcsV2PhpCoreNavigationSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].core.navigation.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpCoreNavigationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['navigation']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['core']['navigation']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocs)['v2.php']['core']['navigation']['settings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpCoreNavigationSettingsQueryKey>
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
      ...getOcsV2PhpCoreNavigationSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpCloudCapabilitiesQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['capabilities']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/cloud/capabilities', keyArgs] as const
}

export function getOcsV2PhpCloudCapabilitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['capabilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['capabilities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['capabilities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudCapabilitiesQueryKey>
  >({
    queryKey: getOcsV2PhpCloudCapabilitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].cloud.capabilities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpCloudCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['capabilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ocs)['v2.php']['cloud']['capabilities']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['capabilities']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpCloudCapabilitiesQueryKey>
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
      ...getOcsV2PhpCloudCapabilitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpProfileTargetUserIdQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/profile/:targetUserId', keyArgs] as const
}

export function getOcsV2PhpProfileTargetUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpProfileTargetUserIdQueryKey>
  >({
    queryKey: getOcsV2PhpProfileTargetUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].profile[':targetUserId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpProfileTargetUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpProfileTargetUserIdQueryKey>
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
      ...getOcsV2PhpProfileTargetUserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutOcsV2PhpProfileTargetUserIdMutationKey() {
  return ['ocs', '/ocs/v2.php/profile/:targetUserId', 'PUT'] as const
}

export function getPutOcsV2PhpProfileTargetUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpProfileTargetUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$put']>,
    ) {
      return parseResponse(client.ocs['v2.php'].profile[':targetUserId'].$put(args, options))
    },
  })
}

export function createPutOcsV2PhpProfileTargetUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpProfileTargetUserIdMutationOptions<
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

export function getPostOcsV2PhpReferencesExtractMutationKey() {
  return ['ocs', '/ocs/v2.php/references/extract', 'POST'] as const
}

export function getPostOcsV2PhpReferencesExtractMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['extract']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['references']['extract']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpReferencesExtractMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['references']['extract']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].references.extract.$post(args, options))
    },
  })
}

export function createPostOcsV2PhpReferencesExtract<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['extract']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['references']['extract']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpReferencesExtractMutationOptions<
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

export function getPostOcsV2PhpReferencesExtractPublicMutationKey() {
  return ['ocs', '/ocs/v2.php/references/extractPublic', 'POST'] as const
}

export function getPostOcsV2PhpReferencesExtractPublicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['extractPublic']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['references']['extractPublic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpReferencesExtractPublicMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['references']['extractPublic']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].references.extractPublic.$post(args, options))
    },
  })
}

export function createPostOcsV2PhpReferencesExtractPublic<
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
                ReturnType<(typeof client.ocs)['v2.php']['references']['extractPublic']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['references']['extractPublic']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpReferencesExtractPublicMutationOptions<
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

export function getOcsV2PhpReferencesResolveQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['references']['resolve']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/references/resolve', keyArgs] as const
}

export function getOcsV2PhpReferencesResolveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolve']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['references']['resolve']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolve']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpReferencesResolveQueryKey>
  >({
    queryKey: getOcsV2PhpReferencesResolveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].references.resolve.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpReferencesResolve<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolve']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ocs)['v2.php']['references']['resolve']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolve']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpReferencesResolveQueryKey>
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
      ...getOcsV2PhpReferencesResolveQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpReferencesResolveMutationKey() {
  return ['ocs', '/ocs/v2.php/references/resolve', 'POST'] as const
}

export function getPostOcsV2PhpReferencesResolveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['references']['resolve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpReferencesResolveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['references']['resolve']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].references.resolve.$post(args, options))
    },
  })
}

export function createPostOcsV2PhpReferencesResolve<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['references']['resolve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpReferencesResolveMutationOptions<
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

export function getOcsV2PhpReferencesResolvePublicQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/references/resolvePublic', keyArgs] as const
}

export function getOcsV2PhpReferencesResolvePublicQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpReferencesResolvePublicQueryKey>
  >({
    queryKey: getOcsV2PhpReferencesResolvePublicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].references.resolvePublic.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpReferencesResolvePublic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['references']['resolvePublic']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpReferencesResolvePublicQueryKey>
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
      ...getOcsV2PhpReferencesResolvePublicQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpReferencesResolvePublicMutationKey() {
  return ['ocs', '/ocs/v2.php/references/resolvePublic', 'POST'] as const
}

export function getPostOcsV2PhpReferencesResolvePublicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpReferencesResolvePublicMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].references.resolvePublic.$post(args, options))
    },
  })
}

export function createPostOcsV2PhpReferencesResolvePublic<
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
                ReturnType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpReferencesResolvePublicMutationOptions<
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

export function getOcsV2PhpReferencesProvidersQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['references']['providers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/references/providers', keyArgs] as const
}

export function getOcsV2PhpReferencesProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['references']['providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpReferencesProvidersQueryKey>
  >({
    queryKey: getOcsV2PhpReferencesProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].references.providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpReferencesProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ocs)['v2.php']['references']['providers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['providers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpReferencesProvidersQueryKey>
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
      ...getOcsV2PhpReferencesProvidersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutOcsV2PhpReferencesProviderProviderIdMutationKey() {
  return ['ocs', '/ocs/v2.php/references/provider/:providerId', 'PUT'] as const
}

export function getPutOcsV2PhpReferencesProviderProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['references']['provider'][':providerId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['references']['provider'][':providerId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpReferencesProviderProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['references']['provider'][':providerId']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].references.provider[':providerId'].$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpReferencesProviderProviderId<
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
                  (typeof client.ocs)['v2.php']['references']['provider'][':providerId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['references']['provider'][':providerId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpReferencesProviderProviderIdMutationOptions<
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

export function getOcsV2PhpTaskprocessingTasktypesQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['tasktypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/taskprocessing/tasktypes', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasktypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['tasktypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['tasktypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['tasktypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasktypesQueryKey>
  >({
    queryKey: getOcsV2PhpTaskprocessingTasktypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasktypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTaskprocessingTasktypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['tasktypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasktypes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['tasktypes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTaskprocessingTasktypesQueryKey>
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
      ...getOcsV2PhpTaskprocessingTasktypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpTaskprocessingScheduleMutationKey() {
  return ['ocs', '/ocs/v2.php/taskprocessing/schedule', 'POST'] as const
}

export function getPostOcsV2PhpTaskprocessingScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['schedule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['schedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpTaskprocessingScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['schedule']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].taskprocessing.schedule.$post(args, options))
    },
  })
}

export function createPostOcsV2PhpTaskprocessingSchedule<
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
                ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['schedule']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['schedule']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpTaskprocessingScheduleMutationOptions<
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

export function getOcsV2PhpTaskprocessingTaskIdQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/taskprocessing/task/:id', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTaskIdQueryKey>
  >({
    queryKey: getOcsV2PhpTaskprocessingTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.task[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTaskprocessingTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTaskprocessingTaskIdQueryKey>
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
      ...getOcsV2PhpTaskprocessingTaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpTaskprocessingTaskIdMutationKey() {
  return ['ocs', '/ocs/v2.php/taskprocessing/task/:id', 'DELETE'] as const
}

export function getDeleteOcsV2PhpTaskprocessingTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpTaskprocessingTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$delete']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].taskprocessing.task[':id'].$delete(args, options))
    },
  })
}

export function createDeleteOcsV2PhpTaskprocessingTaskId<
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
                  (typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpTaskprocessingTaskIdMutationOptions<
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

export function getOcsV2PhpTaskprocessingTasksAppAppIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks']['app'][':appId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks/app/:appId', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksAppAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks']['app'][':appId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks']['app'][':appId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks']['app'][':appId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksAppAppIdQueryKey>
  >({
    queryKey: getOcsV2PhpTaskprocessingTasksAppAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks.app[':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTaskprocessingTasksAppAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks']['app'][':appId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks']['app'][':appId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks']['app'][':appId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTaskprocessingTasksAppAppIdQueryKey>
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
      ...getOcsV2PhpTaskprocessingTasksAppAppIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpTaskprocessingTasksQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['tasks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksQueryKey>
  >({
    queryKey: getOcsV2PhpTaskprocessingTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTaskprocessingTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['tasks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTaskprocessingTasksQueryKey>
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
      ...getOcsV2PhpTaskprocessingTasksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['file'][':fileId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks/:taskId/file/:fileId', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['file'][':fileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['file'][':fileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['file'][':fileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdQueryKey>
  >({
    queryKey: getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks[':taskId'].file[':fileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTaskprocessingTasksTaskIdFileFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['file'][':fileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['file'][':fileId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['file'][':fileId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdQueryKey>
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
      ...getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpTaskprocessingTasksTaskIdCancelMutationKey() {
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks/:taskId/cancel', 'POST'] as const
}

export function getPostOcsV2PhpTaskprocessingTasksTaskIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpTaskprocessingTasksTaskIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks[':taskId'].cancel.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpTaskprocessingTasksTaskIdCancel<
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
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['cancel']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpTaskprocessingTasksTaskIdCancelMutationOptions<
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

export function getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['queue_position']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks/:taskId/queue_position', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['queue_position']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['queue_position']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['queue_position']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionQueryKey>
  >({
    queryKey: getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks[':taskId'].queue_position.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTaskprocessingTasksTaskIdQueuePosition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['queue_position']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['queue_position']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['queue_position']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionQueryKey>
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
      ...getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpTeamsTeamIdResourcesQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['teams'][':teamId']['resources']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/teams/:teamId/resources', keyArgs] as const
}

export function getOcsV2PhpTeamsTeamIdResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['teams'][':teamId']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['teams'][':teamId']['resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['teams'][':teamId']['resources']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTeamsTeamIdResourcesQueryKey>
  >({
    queryKey: getOcsV2PhpTeamsTeamIdResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].teams[':teamId'].resources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTeamsTeamIdResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['teams'][':teamId']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['teams'][':teamId']['resources']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocs)['v2.php']['teams'][':teamId']['resources']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTeamsTeamIdResourcesQueryKey>
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
      ...getOcsV2PhpTeamsTeamIdResourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpTeamsResourcesProviderIdResourceIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['teams']['resources'][':providerId'][':resourceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/teams/resources/:providerId/:resourceId', keyArgs] as const
}

export function getOcsV2PhpTeamsResourcesProviderIdResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['teams']['resources'][':providerId'][':resourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['teams']['resources'][':providerId'][':resourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['teams']['resources'][':providerId'][':resourceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTeamsResourcesProviderIdResourceIdQueryKey>
  >({
    queryKey: getOcsV2PhpTeamsResourcesProviderIdResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].teams.resources[':providerId'][':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTeamsResourcesProviderIdResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['teams']['resources'][':providerId'][':resourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['teams']['resources'][':providerId'][':resourceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['teams']['resources'][':providerId'][':resourceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTeamsResourcesProviderIdResourceIdQueryKey>
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
      ...getOcsV2PhpTeamsResourcesProviderIdResourceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpTextprocessingTasktypesQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['tasktypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/textprocessing/tasktypes', keyArgs] as const
}

export function getOcsV2PhpTextprocessingTasktypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['tasktypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['tasktypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['tasktypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTextprocessingTasktypesQueryKey>
  >({
    queryKey: getOcsV2PhpTextprocessingTasktypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].textprocessing.tasktypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTextprocessingTasktypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['tasktypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['textprocessing']['tasktypes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['tasktypes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTextprocessingTasktypesQueryKey>
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
      ...getOcsV2PhpTextprocessingTasktypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpTextprocessingScheduleMutationKey() {
  return ['ocs', '/ocs/v2.php/textprocessing/schedule', 'POST'] as const
}

export function getPostOcsV2PhpTextprocessingScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['schedule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['schedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpTextprocessingScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['schedule']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].textprocessing.schedule.$post(args, options))
    },
  })
}

export function createPostOcsV2PhpTextprocessingSchedule<
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
                ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['schedule']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['schedule']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpTextprocessingScheduleMutationOptions<
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

export function getOcsV2PhpTextprocessingTaskIdQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/textprocessing/task/:id', keyArgs] as const
}

export function getOcsV2PhpTextprocessingTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTextprocessingTaskIdQueryKey>
  >({
    queryKey: getOcsV2PhpTextprocessingTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].textprocessing.task[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTextprocessingTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTextprocessingTaskIdQueryKey>
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
      ...getOcsV2PhpTextprocessingTaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpTextprocessingTaskIdMutationKey() {
  return ['ocs', '/ocs/v2.php/textprocessing/task/:id', 'DELETE'] as const
}

export function getDeleteOcsV2PhpTextprocessingTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpTextprocessingTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$delete']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].textprocessing.task[':id'].$delete(args, options))
    },
  })
}

export function createDeleteOcsV2PhpTextprocessingTaskId<
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
                  (typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpTextprocessingTaskIdMutationOptions<
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

export function getOcsV2PhpTextprocessingTasksAppAppIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['textprocessing']['tasks']['app'][':appId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/textprocessing/tasks/app/:appId', keyArgs] as const
}

export function getOcsV2PhpTextprocessingTasksAppAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['textprocessing']['tasks']['app'][':appId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['textprocessing']['tasks']['app'][':appId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['textprocessing']['tasks']['app'][':appId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTextprocessingTasksAppAppIdQueryKey>
  >({
    queryKey: getOcsV2PhpTextprocessingTasksAppAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].textprocessing.tasks.app[':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTextprocessingTasksAppAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['textprocessing']['tasks']['app'][':appId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['textprocessing']['tasks']['app'][':appId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['textprocessing']['tasks']['app'][':appId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTextprocessingTasksAppAppIdQueryKey>
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
      ...getOcsV2PhpTextprocessingTasksAppAppIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpText2imageIsAvailableQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['text2image']['is_available']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/text2image/is_available', keyArgs] as const
}

export function getOcsV2PhpText2imageIsAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['text2image']['is_available']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['text2image']['is_available']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['text2image']['is_available']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpText2imageIsAvailableQueryKey>
  >({
    queryKey: getOcsV2PhpText2imageIsAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].text2image.is_available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpText2imageIsAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['text2image']['is_available']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ocs)['v2.php']['text2image']['is_available']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocs)['v2.php']['text2image']['is_available']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpText2imageIsAvailableQueryKey>
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
      ...getOcsV2PhpText2imageIsAvailableQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpText2imageScheduleMutationKey() {
  return ['ocs', '/ocs/v2.php/text2image/schedule', 'POST'] as const
}

export function getPostOcsV2PhpText2imageScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['text2image']['schedule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['text2image']['schedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpText2imageScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['text2image']['schedule']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].text2image.schedule.$post(args, options))
    },
  })
}

export function createPostOcsV2PhpText2imageSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['text2image']['schedule']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['text2image']['schedule']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpText2imageScheduleMutationOptions<
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

export function getOcsV2PhpText2imageTaskIdQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/text2image/task/:id', keyArgs] as const
}

export function getOcsV2PhpText2imageTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpText2imageTaskIdQueryKey>
  >({
    queryKey: getOcsV2PhpText2imageTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].text2image.task[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpText2imageTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpText2imageTaskIdQueryKey>
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
      ...getOcsV2PhpText2imageTaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpText2imageTaskIdMutationKey() {
  return ['ocs', '/ocs/v2.php/text2image/task/:id', 'DELETE'] as const
}

export function getDeleteOcsV2PhpText2imageTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpText2imageTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$delete']>,
    ) {
      return parseResponse(client.ocs['v2.php'].text2image.task[':id'].$delete(args, options))
    },
  })
}

export function createDeleteOcsV2PhpText2imageTaskId<
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
                ReturnType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpText2imageTaskIdMutationOptions<
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

export function getOcsV2PhpText2imageTaskIdImageIndexQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['text2image']['task'][':id']['image'][':index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/text2image/task/:id/image/:index', keyArgs] as const
}

export function getOcsV2PhpText2imageTaskIdImageIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['text2image']['task'][':id']['image'][':index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['text2image']['task'][':id']['image'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['text2image']['task'][':id']['image'][':index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpText2imageTaskIdImageIndexQueryKey>
  >({
    queryKey: getOcsV2PhpText2imageTaskIdImageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].text2image.task[':id'].image[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpText2imageTaskIdImageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['text2image']['task'][':id']['image'][':index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['text2image']['task'][':id']['image'][':index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['text2image']['task'][':id']['image'][':index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpText2imageTaskIdImageIndexQueryKey>
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
      ...getOcsV2PhpText2imageTaskIdImageIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpText2imageTasksAppAppIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['text2image']['tasks']['app'][':appId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/text2image/tasks/app/:appId', keyArgs] as const
}

export function getOcsV2PhpText2imageTasksAppAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['text2image']['tasks']['app'][':appId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['text2image']['tasks']['app'][':appId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['text2image']['tasks']['app'][':appId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpText2imageTasksAppAppIdQueryKey>
  >({
    queryKey: getOcsV2PhpText2imageTasksAppAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].text2image.tasks.app[':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpText2imageTasksAppAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['text2image']['tasks']['app'][':appId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['text2image']['tasks']['app'][':appId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['text2image']['tasks']['app'][':appId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpText2imageTasksAppAppIdQueryKey>
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
      ...getOcsV2PhpText2imageTasksAppAppIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpTranslationLanguagesQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['translation']['languages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/translation/languages', keyArgs] as const
}

export function getOcsV2PhpTranslationLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['translation']['languages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['translation']['languages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['translation']['languages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTranslationLanguagesQueryKey>
  >({
    queryKey: getOcsV2PhpTranslationLanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].translation.languages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTranslationLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['translation']['languages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ocs)['v2.php']['translation']['languages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['translation']['languages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTranslationLanguagesQueryKey>
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
      ...getOcsV2PhpTranslationLanguagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpTranslationTranslateMutationKey() {
  return ['ocs', '/ocs/v2.php/translation/translate', 'POST'] as const
}

export function getPostOcsV2PhpTranslationTranslateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['translation']['translate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['translation']['translate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpTranslationTranslateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['translation']['translate']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].translation.translate.$post(args, options))
    },
  })
}

export function createPostOcsV2PhpTranslationTranslate<
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
                ReturnType<(typeof client.ocs)['v2.php']['translation']['translate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['translation']['translate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpTranslationTranslateMutationOptions<
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

export function getOcsV2PhpSearchProvidersQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['search']['providers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/search/providers', keyArgs] as const
}

export function getOcsV2PhpSearchProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['search']['providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['search']['providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['search']['providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpSearchProvidersQueryKey>
  >({
    queryKey: getOcsV2PhpSearchProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].search.providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpSearchProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['search']['providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ocs)['v2.php']['search']['providers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['search']['providers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpSearchProvidersQueryKey>
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
      ...getOcsV2PhpSearchProvidersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpSearchProvidersProviderIdSearchQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['search']['providers'][':providerId']['search']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/search/providers/:providerId/search', keyArgs] as const
}

export function getOcsV2PhpSearchProvidersProviderIdSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['search']['providers'][':providerId']['search']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['search']['providers'][':providerId']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['search']['providers'][':providerId']['search']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpSearchProvidersProviderIdSearchQueryKey>
  >({
    queryKey: getOcsV2PhpSearchProvidersProviderIdSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].search.providers[':providerId'].search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpSearchProvidersProviderIdSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['search']['providers'][':providerId']['search']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['search']['providers'][':providerId']['search']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['search']['providers'][':providerId']['search']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpSearchProvidersProviderIdSearchQueryKey>
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
      ...getOcsV2PhpSearchProvidersProviderIdSearchQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getIndexPhpAvatarUserIdSizeDarkQueryKey(
  args: InferRequestType<
    (typeof client)['index.php']['avatar'][':userId'][':size']['dark']['$get']
  >,
) {
  return ['index.php', '/index.php/avatar/:userId/:size/dark', args] as const
}

export function getIndexPhpAvatarUserIdSizeDarkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['avatar'][':userId'][':size']['dark']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['index.php']['avatar'][':userId'][':size']['dark']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['index.php']['avatar'][':userId'][':size']['dark']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAvatarUserIdSizeDarkQueryKey>
  >({
    queryKey: getIndexPhpAvatarUserIdSizeDarkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].avatar[':userId'][':size'].dark.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpAvatarUserIdSizeDark<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['avatar'][':userId'][':size']['dark']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['index.php']['avatar'][':userId'][':size']['dark']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['index.php']['avatar'][':userId'][':size']['dark']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexPhpAvatarUserIdSizeDarkQueryKey>
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
      ...getIndexPhpAvatarUserIdSizeDarkQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIndexPhpAvatarUserIdSizeQueryKey(
  args: InferRequestType<(typeof client)['index.php']['avatar'][':userId'][':size']['$get']>,
) {
  return ['index.php', '/index.php/avatar/:userId/:size', args] as const
}

export function getIndexPhpAvatarUserIdSizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['avatar'][':userId'][':size']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['index.php']['avatar'][':userId'][':size']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['avatar'][':userId'][':size']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAvatarUserIdSizeQueryKey>
  >({
    queryKey: getIndexPhpAvatarUserIdSizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].avatar[':userId'][':size'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpAvatarUserIdSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['avatar'][':userId'][':size']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['index.php']['avatar'][':userId'][':size']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['index.php']['avatar'][':userId'][':size']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexPhpAvatarUserIdSizeQueryKey>
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
      ...getIndexPhpAvatarUserIdSizeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIndexPhpCsrftokenQueryKey() {
  return ['index.php', '/index.php/csrftoken'] as const
}

export function getIndexPhpCsrftokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['index.php']['csrftoken']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['index.php']['csrftoken']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpCsrftokenQueryKey>
  >({
    queryKey: getIndexPhpCsrftokenQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].csrftoken.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpCsrftoken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['index.php']['csrftoken']['$get']>>>
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
              Awaited<ReturnType<(typeof client)['index.php']['csrftoken']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexPhpCsrftokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndexPhpCsrftokenQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostIndexPhpLoginV2PollMutationKey() {
  return ['index.php', '/index.php/login/v2/poll', 'POST'] as const
}

export function getPostIndexPhpLoginV2PollMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['login']['v2']['poll']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['index.php']['login']['v2']['poll']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexPhpLoginV2PollMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['index.php']['login']['v2']['poll']['$post']>,
    ) {
      return parseResponse(client['index.php'].login.v2.poll.$post(args, options))
    },
  })
}

export function createPostIndexPhpLoginV2Poll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['index.php']['login']['v2']['poll']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['index.php']['login']['v2']['poll']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndexPhpLoginV2PollMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIndexPhpLoginV2MutationKey() {
  return ['index.php', '/index.php/login/v2', 'POST'] as const
}

export function getPostIndexPhpLoginV2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['login']['v2']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['index.php']['login']['v2']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexPhpLoginV2MutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['index.php']['login']['v2']['$post']>) {
      return parseResponse(client['index.php'].login.v2.$post(args, options))
    },
  })
}

export function createPostIndexPhpLoginV2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['index.php']['login']['v2']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['index.php']['login']['v2']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndexPhpLoginV2MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIndexPhpAvatarGuestGuestNameSizeQueryKey(
  args: InferRequestType<
    (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['$get']
  >,
) {
  return ['index.php', '/index.php/avatar/guest/:guestName/:size', args] as const
}

export function getIndexPhpAvatarGuestGuestNameSizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAvatarGuestGuestNameSizeQueryKey>
  >({
    queryKey: getIndexPhpAvatarGuestGuestNameSizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].avatar.guest[':guestName'][':size'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpAvatarGuestGuestNameSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexPhpAvatarGuestGuestNameSizeQueryKey>
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
      ...getIndexPhpAvatarGuestGuestNameSizeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIndexPhpAvatarGuestGuestNameSizeDarkQueryKey(
  args: InferRequestType<
    (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['dark']['$get']
  >,
) {
  return ['index.php', '/index.php/avatar/guest/:guestName/:size/dark', args] as const
}

export function getIndexPhpAvatarGuestGuestNameSizeDarkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['dark']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['dark']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['dark']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAvatarGuestGuestNameSizeDarkQueryKey>
  >({
    queryKey: getIndexPhpAvatarGuestGuestNameSizeDarkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].avatar.guest[':guestName'][':size'].dark.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpAvatarGuestGuestNameSizeDark<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['dark']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['dark']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['dark']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexPhpAvatarGuestGuestNameSizeDarkQueryKey>
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
      ...getIndexPhpAvatarGuestGuestNameSizeDarkQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostIndexPhpLoginConfirmMutationKey() {
  return ['index.php', '/index.php/login/confirm', 'POST'] as const
}

export function getPostIndexPhpLoginConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['login']['confirm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['index.php']['login']['confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexPhpLoginConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['index.php']['login']['confirm']['$post']>,
    ) {
      return parseResponse(client['index.php'].login.confirm.$post(args, options))
    },
  })
}

export function createPostIndexPhpLoginConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['index.php']['login']['confirm']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['index.php']['login']['confirm']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndexPhpLoginConfirmMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIndexPhpOcmProviderQueryKey() {
  return ['index.php', '/index.php/ocm-provider'] as const
}

export function getIndexPhpOcmProviderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['ocm-provider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['ocm-provider']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpOcmProviderQueryKey>
  >({
    queryKey: getIndexPhpOcmProviderQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php']['ocm-provider'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpOcmProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['ocm-provider']['$get']>>
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
              Awaited<ReturnType<(typeof client)['index.php']['ocm-provider']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexPhpOcmProviderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndexPhpOcmProviderQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getIndexPhpCorePreviewPngQueryKey(
  args: InferRequestType<(typeof client)['index.php']['core']['preview.png']['$get']>,
) {
  return ['index.php', '/index.php/core/preview.png', args] as const
}

export function getIndexPhpCorePreviewPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['core']['preview.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['index.php']['core']['preview.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['core']['preview.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpCorePreviewPngQueryKey>
  >({
    queryKey: getIndexPhpCorePreviewPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].core['preview.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpCorePreviewPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['core']['preview.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['index.php']['core']['preview.png']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['index.php']['core']['preview.png']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexPhpCorePreviewPngQueryKey>
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
      ...getIndexPhpCorePreviewPngQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIndexPhpCorePreviewQueryKey(
  args: InferRequestType<(typeof client)['index.php']['core']['preview']['$get']>,
) {
  return ['index.php', '/index.php/core/preview', args] as const
}

export function getIndexPhpCorePreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['core']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['index.php']['core']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['core']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpCorePreviewQueryKey>
  >({
    queryKey: getIndexPhpCorePreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].core.preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpCorePreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['core']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['index.php']['core']['preview']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['index.php']['core']['preview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexPhpCorePreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndexPhpCorePreviewQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIndexPhpCoreMimeiconQueryKey(
  args: InferRequestType<(typeof client)['index.php']['core']['mimeicon']['$get']>,
) {
  return ['index.php', '/index.php/core/mimeicon', args] as const
}

export function getIndexPhpCoreMimeiconQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['core']['mimeicon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['index.php']['core']['mimeicon']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['core']['mimeicon']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpCoreMimeiconQueryKey>
  >({
    queryKey: getIndexPhpCoreMimeiconQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].core.mimeicon.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpCoreMimeicon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['core']['mimeicon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['index.php']['core']['mimeicon']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['index.php']['core']['mimeicon']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexPhpCoreMimeiconQueryKey>
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
      ...getIndexPhpCoreMimeiconQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIndexPhpCoreReferencesPreviewReferenceIdQueryKey(
  args: InferRequestType<
    (typeof client)['index.php']['core']['references']['preview'][':referenceId']['$get']
  >,
) {
  return ['index.php', '/index.php/core/references/preview/:referenceId', args] as const
}

export function getIndexPhpCoreReferencesPreviewReferenceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['index.php']['core']['references']['preview'][':referenceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['index.php']['core']['references']['preview'][':referenceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['index.php']['core']['references']['preview'][':referenceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpCoreReferencesPreviewReferenceIdQueryKey>
  >({
    queryKey: getIndexPhpCoreReferencesPreviewReferenceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].core.references.preview[':referenceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpCoreReferencesPreviewReferenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['index.php']['core']['references']['preview'][':referenceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['index.php']['core']['references']['preview'][':referenceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['index.php']['core']['references']['preview'][':referenceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexPhpCoreReferencesPreviewReferenceIdQueryKey>
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
      ...getIndexPhpCoreReferencesPreviewReferenceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostIndexPhpCoreWipeCheckMutationKey() {
  return ['index.php', '/index.php/core/wipe/check', 'POST'] as const
}

export function getPostIndexPhpCoreWipeCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['core']['wipe']['check']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['index.php']['core']['wipe']['check']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexPhpCoreWipeCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['index.php']['core']['wipe']['check']['$post']>,
    ) {
      return parseResponse(client['index.php'].core.wipe.check.$post(args, options))
    },
  })
}

export function createPostIndexPhpCoreWipeCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['index.php']['core']['wipe']['check']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['index.php']['core']['wipe']['check']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndexPhpCoreWipeCheckMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIndexPhpCoreWipeSuccessMutationKey() {
  return ['index.php', '/index.php/core/wipe/success', 'POST'] as const
}

export function getPostIndexPhpCoreWipeSuccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['core']['wipe']['success']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['index.php']['core']['wipe']['success']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexPhpCoreWipeSuccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['index.php']['core']['wipe']['success']['$post']>,
    ) {
      return parseResponse(client['index.php'].core.wipe.success.$post(args, options))
    },
  })
}

export function createPostIndexPhpCoreWipeSuccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['index.php']['core']['wipe']['success']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['index.php']['core']['wipe']['success']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIndexPhpCoreWipeSuccessMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStatusPhpQueryKey() {
  return ['status.php', '/status.php'] as const
}

export function getStatusPhpQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['status.php']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['status.php']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusPhpQueryKey>
  >({
    queryKey: getStatusPhpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['status.php'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatusPhp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['status.php']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['status.php']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatusPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatusPhpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOcsV2PhpTaskprocessingTasksConsumerTasktypesQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasktypes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_consumer/tasktypes', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksConsumerTasktypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasktypes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasktypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasktypes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksConsumerTasktypesQueryKey>
  >({
    queryKey: getOcsV2PhpTaskprocessingTasksConsumerTasktypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_consumer.tasktypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTaskprocessingTasksConsumerTasktypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasktypes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasktypes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasktypes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTaskprocessingTasksConsumerTasktypesQueryKey>
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
      ...getOcsV2PhpTaskprocessingTasksConsumerTasktypesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpTaskprocessingTasksConsumerScheduleMutationKey() {
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_consumer/schedule', 'POST'] as const
}

export function getPostOcsV2PhpTaskprocessingTasksConsumerScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['schedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['schedule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpTaskprocessingTasksConsumerScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['schedule']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_consumer.schedule.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpTaskprocessingTasksConsumerSchedule<
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
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['schedule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['schedule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpTaskprocessingTasksConsumerScheduleMutationOptions<
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

export function getOcsV2PhpTaskprocessingTasksConsumerTaskIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_consumer/task/:id', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksConsumerTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksConsumerTaskIdQueryKey>
  >({
    queryKey: getOcsV2PhpTaskprocessingTasksConsumerTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_consumer.task[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTaskprocessingTasksConsumerTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTaskprocessingTasksConsumerTaskIdQueryKey>
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
      ...getOcsV2PhpTaskprocessingTasksConsumerTaskIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpTaskprocessingTasksConsumerTaskIdMutationKey() {
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_consumer/task/:id', 'DELETE'] as const
}

export function getDeleteOcsV2PhpTaskprocessingTasksConsumerTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpTaskprocessingTasksConsumerTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_consumer.task[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpTaskprocessingTasksConsumerTaskId<
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
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpTaskprocessingTasksConsumerTaskIdMutationOptions<
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

export function getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file'][':fileId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_provider/:taskId/file/:fileId', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file'][':fileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file'][':fileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file'][':fileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdQueryKey>
  >({
    queryKey: getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_provider[':taskId'].file[':fileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file'][':fileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file'][':fileId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file'][':fileId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdQueryKey>
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
      ...getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpTaskprocessingTasksProviderTaskIdFileMutationKey() {
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_provider/:taskId/file', 'POST'] as const
}

export function getPostOcsV2PhpTaskprocessingTasksProviderTaskIdFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpTaskprocessingTasksProviderTaskIdFileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_provider[':taskId'].file.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpTaskprocessingTasksProviderTaskIdFile<
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
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpTaskprocessingTasksProviderTaskIdFileMutationOptions<
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

export function getPostOcsV2PhpTaskprocessingTasksProviderTaskIdProgressMutationKey() {
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_provider/:taskId/progress', 'POST'] as const
}

export function getPostOcsV2PhpTaskprocessingTasksProviderTaskIdProgressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['progress']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['progress']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpTaskprocessingTasksProviderTaskIdProgressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['progress']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_provider[':taskId'].progress.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpTaskprocessingTasksProviderTaskIdProgress<
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
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['progress']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['progress']['$post']
        >,
        TOnMutateResult
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
      getPostOcsV2PhpTaskprocessingTasksProviderTaskIdProgressMutationOptions<
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

export function getPostOcsV2PhpTaskprocessingTasksProviderTaskIdResultMutationKey() {
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_provider/:taskId/result', 'POST'] as const
}

export function getPostOcsV2PhpTaskprocessingTasksProviderTaskIdResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['result']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['result']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpTaskprocessingTasksProviderTaskIdResultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['result']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_provider[':taskId'].result.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpTaskprocessingTasksProviderTaskIdResult<
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
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['result']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['result']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpTaskprocessingTasksProviderTaskIdResultMutationOptions<
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

export function getPostOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResultMutationKey() {
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_provider/:taskId/stream-result', 'POST'] as const
}

export function getPostOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['stream-result']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['stream-result']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['stream-result']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_provider[':taskId']['stream-result'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResult<
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
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['stream-result']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['stream-result']['$post']
        >,
        TOnMutateResult
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
      getPostOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResultMutationOptions<
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

export function getPostOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancelMutationKey() {
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_consumer/tasks/:taskId/cancel', 'POST'] as const
}

export function getPostOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasks'][':taskId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasks'][':taskId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasks'][':taskId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_consumer.tasks[':taskId'].cancel.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancel<
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
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasks'][':taskId']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasks'][':taskId']['cancel']['$post']
        >,
        TOnMutateResult
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
      getPostOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancelMutationOptions<
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

export function getOcsV2PhpTaskprocessingTasksProviderNextQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_provider/next', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksProviderNextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksProviderNextQueryKey>
  >({
    queryKey: getOcsV2PhpTaskprocessingTasksProviderNextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_provider.next.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTaskprocessingTasksProviderNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTaskprocessingTasksProviderNextQueryKey>
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
      ...getOcsV2PhpTaskprocessingTasksProviderNextQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpTaskprocessingTasksProviderNextBatchQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next_batch']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_provider/next_batch', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksProviderNextBatchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next_batch']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next_batch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next_batch']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksProviderNextBatchQueryKey>
  >({
    queryKey: getOcsV2PhpTaskprocessingTasksProviderNextBatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_provider.next_batch.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTaskprocessingTasksProviderNextBatch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next_batch']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next_batch']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next_batch']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTaskprocessingTasksProviderNextBatchQueryKey>
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
      ...getOcsV2PhpTaskprocessingTasksProviderNextBatchQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpTaskprocessingQueueStatsQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['queue_stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/taskprocessing/queue_stats', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingQueueStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['queue_stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['queue_stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['queue_stats']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingQueueStatsQueryKey>
  >({
    queryKey: getOcsV2PhpTaskprocessingQueueStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.queue_stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTaskprocessingQueueStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['queue_stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['queue_stats']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['queue_stats']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTaskprocessingQueueStatsQueryKey>
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
      ...getOcsV2PhpTaskprocessingQueueStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpTwofactorStateQueryKey(
  args: InferRequestType<(typeof client.ocs)['v2.php']['twofactor']['state']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/twofactor/state', keyArgs] as const
}

export function getOcsV2PhpTwofactorStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['twofactor']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ocs)['v2.php']['twofactor']['state']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['twofactor']['state']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTwofactorStateQueryKey>
  >({
    queryKey: getOcsV2PhpTwofactorStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].twofactor.state.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpTwofactorState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['twofactor']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ocs)['v2.php']['twofactor']['state']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['twofactor']['state']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpTwofactorStateQueryKey>
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
      ...getOcsV2PhpTwofactorStateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpTwofactorEnableMutationKey() {
  return ['ocs', '/ocs/v2.php/twofactor/enable', 'POST'] as const
}

export function getPostOcsV2PhpTwofactorEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['twofactor']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['twofactor']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpTwofactorEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['twofactor']['enable']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].twofactor.enable.$post(args, options))
    },
  })
}

export function createPostOcsV2PhpTwofactorEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['twofactor']['enable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['twofactor']['enable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpTwofactorEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpTwofactorDisableMutationKey() {
  return ['ocs', '/ocs/v2.php/twofactor/disable', 'POST'] as const
}

export function getPostOcsV2PhpTwofactorDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['twofactor']['disable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['twofactor']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpTwofactorDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['twofactor']['disable']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].twofactor.disable.$post(args, options))
    },
  })
}

export function createPostOcsV2PhpTwofactorDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['twofactor']['disable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['twofactor']['disable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpTwofactorDisableMutationOptions<
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
