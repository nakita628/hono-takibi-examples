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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['core']['getapppassword']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/core/getapppassword', keyArgs] as const
}

export function getOcsV2PhpCoreGetapppasswordQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['core']['getapppassword']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCoreGetapppasswordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].core.getapppassword.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCoreGetapppassword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['getapppassword']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['core']['getapppassword']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['getapppassword']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['getapppassword']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCoreGetapppasswordQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['getapppassword']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCoreGetapppasswordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCoreGetapppasswordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].core.getapppassword.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOcsV2PhpCoreApppassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOcsV2PhpCoreApppasswordMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostOcsV2PhpCoreApppasswordRotate<
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
                    (typeof client.ocs)['v2.php']['core']['apppassword']['rotate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['core']['apppassword']['rotate']['$post']>,
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
  const mutationDefaults = getPostOcsV2PhpCoreApppasswordRotateMutationOptions<
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

export function usePutOcsV2PhpCoreApppasswordConfirm<
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
                    (typeof client.ocs)['v2.php']['core']['apppassword']['confirm']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['core']['apppassword']['confirm']['$put']>,
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
  const mutationDefaults = getPutOcsV2PhpCoreApppasswordConfirmMutationOptions<
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

export function getOcsV2PhpCoreGetapppasswordOnetimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['core']['getapppassword-onetime']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/core/getapppassword-onetime', keyArgs] as const
}

export function getOcsV2PhpCoreGetapppasswordOnetimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['core']['getapppassword-onetime']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCoreGetapppasswordOnetimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].core['getapppassword-onetime'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCoreGetapppasswordOnetime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['getapppassword-onetime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['core']['getapppassword-onetime']['$get']>
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
                    (typeof client.ocs)['v2.php']['core']['getapppassword-onetime']['$get']
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
                    (typeof client.ocs)['v2.php']['core']['getapppassword-onetime']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCoreGetapppasswordOnetimeQueryKey>
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
            ReturnType<(typeof client.ocs)['v2.php']['core']['getapppassword-onetime']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCoreGetapppasswordOnetimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCoreGetapppasswordOnetimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].core['getapppassword-onetime'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCoreAutocompleteGetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['core']['autocomplete']['get']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/core/autocomplete/get', keyArgs] as const
}

export function getOcsV2PhpCoreAutocompleteGetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['core']['autocomplete']['get']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCoreAutocompleteGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].core.autocomplete.get.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCoreAutocompleteGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['autocomplete']['get']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['core']['autocomplete']['get']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['core']['autocomplete']['get']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCoreAutocompleteGetQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['autocomplete']['get']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCoreAutocompleteGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCoreAutocompleteGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].core.autocomplete.get.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCollaborationResourcesCollectionsCollectionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/collaboration/resources/collections/:collectionId', keyArgs] as const
}

export function getOcsV2PhpCollaborationResourcesCollectionsCollectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOcsV2PhpCollaborationResourcesCollectionsCollectionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].collaboration.resources.collections[':collectionId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOcsV2PhpCollaborationResourcesCollectionsCollectionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$get']
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
                    (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$get']
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
                    (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCollaborationResourcesCollectionsCollectionIdQueryKey>
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
              (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCollaborationResourcesCollectionsCollectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOcsV2PhpCollaborationResourcesCollectionsCollectionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].collaboration.resources.collections[':collectionId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutOcsV2PhpCollaborationResourcesCollectionsCollectionId<
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
    getPutOcsV2PhpCollaborationResourcesCollectionsCollectionIdMutationOptions<
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

export function usePostOcsV2PhpCollaborationResourcesCollectionsCollectionId<
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
    getPostOcsV2PhpCollaborationResourcesCollectionsCollectionIdMutationOptions<
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

export function useDeleteOcsV2PhpCollaborationResourcesCollectionsCollectionId<
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
    getDeleteOcsV2PhpCollaborationResourcesCollectionsCollectionIdMutationOptions<
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

export function getOcsV2PhpCollaborationResourcesCollectionsSearchFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['collaboration']['resources']['collections']['search'][':filter']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/collaboration/resources/collections/search/:filter', keyArgs] as const
}

export function getOcsV2PhpCollaborationResourcesCollectionsSearchFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['collaboration']['resources']['collections']['search'][':filter']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOcsV2PhpCollaborationResourcesCollectionsSearchFilterQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].collaboration.resources.collections.search[':filter'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOcsV2PhpCollaborationResourcesCollectionsSearchFilter<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['collaboration']['resources']['collections']['search'][':filter']['$get']
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
                    (typeof client.ocs)['v2.php']['collaboration']['resources']['collections']['search'][':filter']['$get']
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
                    (typeof client.ocs)['v2.php']['collaboration']['resources']['collections']['search'][':filter']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCollaborationResourcesCollectionsSearchFilterQueryKey>
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
              (typeof client.ocs)['v2.php']['collaboration']['resources']['collections']['search'][':filter']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCollaborationResourcesCollectionsSearchFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOcsV2PhpCollaborationResourcesCollectionsSearchFilterQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].collaboration.resources.collections.search[':filter'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCollaborationResourcesResourceTypeResourceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['collaboration']['resources'][':resourceType'][':resourceId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/collaboration/resources/:resourceType/:resourceId', keyArgs] as const
}

export function getOcsV2PhpCollaborationResourcesResourceTypeResourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['collaboration']['resources'][':resourceType'][':resourceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCollaborationResourcesResourceTypeResourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].collaboration.resources[':resourceType'][':resourceId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOcsV2PhpCollaborationResourcesResourceTypeResourceId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['collaboration']['resources'][':resourceType'][':resourceId']['$get']
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
                    (typeof client.ocs)['v2.php']['collaboration']['resources'][':resourceType'][':resourceId']['$get']
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
                    (typeof client.ocs)['v2.php']['collaboration']['resources'][':resourceType'][':resourceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCollaborationResourcesResourceTypeResourceIdQueryKey>
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
              (typeof client.ocs)['v2.php']['collaboration']['resources'][':resourceType'][':resourceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCollaborationResourcesResourceTypeResourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOcsV2PhpCollaborationResourcesResourceTypeResourceIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].collaboration.resources[':resourceType'][':resourceId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceId<
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
    getPostOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceIdMutationOptions<
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

export function getOcsV2PhpHovercardV1UserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['hovercard']['v1'][':userId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/hovercard/v1/:userId', keyArgs] as const
}

export function getOcsV2PhpHovercardV1UserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['hovercard']['v1'][':userId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpHovercardV1UserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].hovercard.v1[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpHovercardV1UserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['hovercard']['v1'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['hovercard']['v1'][':userId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['hovercard']['v1'][':userId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpHovercardV1UserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['hovercard']['v1'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpHovercardV1UserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpHovercardV1UserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].hovercard.v1[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCoreNavigationAppsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['core']['navigation']['apps']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/core/navigation/apps', keyArgs] as const
}

export function getOcsV2PhpCoreNavigationAppsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['core']['navigation']['apps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCoreNavigationAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].core.navigation.apps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCoreNavigationApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['navigation']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['core']['navigation']['apps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['core']['navigation']['apps']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCoreNavigationAppsQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['navigation']['apps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCoreNavigationAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCoreNavigationAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].core.navigation.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCoreNavigationSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['core']['navigation']['settings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/core/navigation/settings', keyArgs] as const
}

export function getOcsV2PhpCoreNavigationSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['core']['navigation']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCoreNavigationSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].core.navigation.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCoreNavigationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['core']['navigation']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['core']['navigation']['settings']['$get']>
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
                    (typeof client.ocs)['v2.php']['core']['navigation']['settings']['$get']
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
                    (typeof client.ocs)['v2.php']['core']['navigation']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCoreNavigationSettingsQueryKey>
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
            ReturnType<(typeof client.ocs)['v2.php']['core']['navigation']['settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCoreNavigationSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCoreNavigationSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].core.navigation.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpCloudCapabilitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['capabilities']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/capabilities', keyArgs] as const
}

export function getOcsV2PhpCloudCapabilitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['capabilities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudCapabilitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud.capabilities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['capabilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['capabilities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['capabilities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['capabilities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudCapabilitiesQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['capabilities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudCapabilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudCapabilitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud.capabilities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpProfileTargetUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/profile/:targetUserId', keyArgs] as const
}

export function getOcsV2PhpProfileTargetUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpProfileTargetUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].profile[':targetUserId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpProfileTargetUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$get']>
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
                  ReturnType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpProfileTargetUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpProfileTargetUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpProfileTargetUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].profile[':targetUserId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOcsV2PhpProfileTargetUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$put']>,
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
  const mutationDefaults = getPutOcsV2PhpProfileTargetUserIdMutationOptions<
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

export function usePostOcsV2PhpReferencesExtract<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpReferencesExtractMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostOcsV2PhpReferencesExtractPublic<
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
                  ReturnType<(typeof client.ocs)['v2.php']['references']['extractPublic']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['references']['extractPublic']['$post']>,
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
  const mutationDefaults = getPostOcsV2PhpReferencesExtractPublicMutationOptions<
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

export function getOcsV2PhpReferencesResolveQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['references']['resolve']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/references/resolve', keyArgs] as const
}

export function getOcsV2PhpReferencesResolveQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['references']['resolve']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpReferencesResolveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].references.resolve.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpReferencesResolve<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolve']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['references']['resolve']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolve']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolve']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpReferencesResolveQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolve']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpReferencesResolveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpReferencesResolveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].references.resolve.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOcsV2PhpReferencesResolve<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpReferencesResolveMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOcsV2PhpReferencesResolvePublicQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/references/resolvePublic', keyArgs] as const
}

export function getOcsV2PhpReferencesResolvePublicQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpReferencesResolvePublicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].references.resolvePublic.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpReferencesResolvePublic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpReferencesResolvePublicQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpReferencesResolvePublicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpReferencesResolvePublicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].references.resolvePublic.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOcsV2PhpReferencesResolvePublic<
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
                  ReturnType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$post']>,
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
  const mutationDefaults = getPostOcsV2PhpReferencesResolvePublicMutationOptions<
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

export function getOcsV2PhpReferencesProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['references']['providers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/references/providers', keyArgs] as const
}

export function getOcsV2PhpReferencesProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['references']['providers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpReferencesProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].references.providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpReferencesProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['references']['providers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['references']['providers']['$get']>
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
                  ReturnType<(typeof client.ocs)['v2.php']['references']['providers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpReferencesProvidersQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['references']['providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpReferencesProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpReferencesProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].references.providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOcsV2PhpReferencesProviderProviderId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOcsV2PhpReferencesProviderProviderIdMutationOptions<
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

export function getOcsV2PhpTaskprocessingTasktypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['tasktypes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/taskprocessing/tasktypes', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasktypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['tasktypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTaskprocessingTasktypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasktypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTaskprocessingTasktypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['tasktypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['tasktypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['tasktypes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTaskprocessingTasktypesQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['tasktypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasktypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTaskprocessingTasktypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].taskprocessing.tasktypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOcsV2PhpTaskprocessingSchedule<
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
                  ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['schedule']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['schedule']['$post']>,
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
  const mutationDefaults = getPostOcsV2PhpTaskprocessingScheduleMutationOptions<
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

export function getOcsV2PhpTaskprocessingTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/taskprocessing/task/:id', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTaskprocessingTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.task[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTaskprocessingTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTaskprocessingTaskIdQueryKey>
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
            ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTaskprocessingTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].taskprocessing.task[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOcsV2PhpTaskprocessingTaskId<
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpTaskprocessingTaskIdMutationOptions<
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

export function getOcsV2PhpTaskprocessingTasksAppAppIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks']['app'][':appId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks/app/:appId', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksAppAppIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks']['app'][':appId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTaskprocessingTasksAppAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks.app[':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTaskprocessingTasksAppAppId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks']['app'][':appId']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks']['app'][':appId']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks']['app'][':appId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTaskprocessingTasksAppAppIdQueryKey>
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
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks']['app'][':appId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksAppAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTaskprocessingTasksAppAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].taskprocessing.tasks.app[':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpTaskprocessingTasksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['tasks']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['tasks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTaskprocessingTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTaskprocessingTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['tasks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['tasks']['$get']>
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
                  ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['tasks']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTaskprocessingTasksQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTaskprocessingTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].taskprocessing.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['file'][':fileId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks/:taskId/file/:fileId', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['file'][':fileId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks[':taskId'].file[':fileId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTaskprocessingTasksTaskIdFileFileId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['file'][':fileId']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['file'][':fileId']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['file'][':fileId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdQueryKey>
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
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['file'][':fileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].taskprocessing.tasks[':taskId'].file[':fileId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOcsV2PhpTaskprocessingTasksTaskIdCancel<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpTaskprocessingTasksTaskIdCancelMutationOptions<
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

export function getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['queue_position']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks/:taskId/queue_position', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['queue_position']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks[':taskId'].queue_position.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTaskprocessingTasksTaskIdQueuePosition<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['queue_position']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['queue_position']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['queue_position']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionQueryKey>
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
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['queue_position']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].taskprocessing.tasks[':taskId'].queue_position.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpTeamsTeamIdResourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['teams'][':teamId']['resources']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/teams/:teamId/resources', keyArgs] as const
}

export function getOcsV2PhpTeamsTeamIdResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['teams'][':teamId']['resources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTeamsTeamIdResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].teams[':teamId'].resources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTeamsTeamIdResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['teams'][':teamId']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['teams'][':teamId']['resources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['teams'][':teamId']['resources']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTeamsTeamIdResourcesQueryKey>
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
            ReturnType<(typeof client.ocs)['v2.php']['teams'][':teamId']['resources']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTeamsTeamIdResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTeamsTeamIdResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].teams[':teamId'].resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpTeamsResourcesProviderIdResourceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['teams']['resources'][':providerId'][':resourceId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/teams/resources/:providerId/:resourceId', keyArgs] as const
}

export function getOcsV2PhpTeamsResourcesProviderIdResourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['teams']['resources'][':providerId'][':resourceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTeamsResourcesProviderIdResourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].teams.resources[':providerId'][':resourceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTeamsResourcesProviderIdResourceId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['teams']['resources'][':providerId'][':resourceId']['$get']
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
                    (typeof client.ocs)['v2.php']['teams']['resources'][':providerId'][':resourceId']['$get']
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
                    (typeof client.ocs)['v2.php']['teams']['resources'][':providerId'][':resourceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTeamsResourcesProviderIdResourceIdQueryKey>
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
              (typeof client.ocs)['v2.php']['teams']['resources'][':providerId'][':resourceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTeamsResourcesProviderIdResourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTeamsResourcesProviderIdResourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].teams.resources[':providerId'][':resourceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpTextprocessingTasktypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['tasktypes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/textprocessing/tasktypes', keyArgs] as const
}

export function getOcsV2PhpTextprocessingTasktypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['tasktypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTextprocessingTasktypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].textprocessing.tasktypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTextprocessingTasktypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['tasktypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['tasktypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['tasktypes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTextprocessingTasktypesQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['tasktypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTextprocessingTasktypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTextprocessingTasktypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].textprocessing.tasktypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOcsV2PhpTextprocessingSchedule<
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
                  ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['schedule']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['schedule']['$post']>,
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
  const mutationDefaults = getPostOcsV2PhpTextprocessingScheduleMutationOptions<
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

export function getOcsV2PhpTextprocessingTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/textprocessing/task/:id', keyArgs] as const
}

export function getOcsV2PhpTextprocessingTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTextprocessingTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].textprocessing.task[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTextprocessingTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTextprocessingTaskIdQueryKey>
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
            ReturnType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTextprocessingTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTextprocessingTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].textprocessing.task[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOcsV2PhpTextprocessingTaskId<
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
                    (typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpTextprocessingTaskIdMutationOptions<
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

export function getOcsV2PhpTextprocessingTasksAppAppIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['textprocessing']['tasks']['app'][':appId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/textprocessing/tasks/app/:appId', keyArgs] as const
}

export function getOcsV2PhpTextprocessingTasksAppAppIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['textprocessing']['tasks']['app'][':appId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTextprocessingTasksAppAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].textprocessing.tasks.app[':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTextprocessingTasksAppAppId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['textprocessing']['tasks']['app'][':appId']['$get']
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
                    (typeof client.ocs)['v2.php']['textprocessing']['tasks']['app'][':appId']['$get']
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
                    (typeof client.ocs)['v2.php']['textprocessing']['tasks']['app'][':appId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTextprocessingTasksAppAppIdQueryKey>
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
              (typeof client.ocs)['v2.php']['textprocessing']['tasks']['app'][':appId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTextprocessingTasksAppAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTextprocessingTasksAppAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].textprocessing.tasks.app[':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpText2imageIsAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['text2image']['is_available']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/text2image/is_available', keyArgs] as const
}

export function getOcsV2PhpText2imageIsAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['text2image']['is_available']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpText2imageIsAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].text2image.is_available.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpText2imageIsAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['text2image']['is_available']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['text2image']['is_available']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['text2image']['is_available']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpText2imageIsAvailableQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['text2image']['is_available']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpText2imageIsAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpText2imageIsAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].text2image.is_available.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOcsV2PhpText2imageSchedule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['text2image']['schedule']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['text2image']['schedule']['$post']>,
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
  const mutationDefaults = getPostOcsV2PhpText2imageScheduleMutationOptions<
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

export function getOcsV2PhpText2imageTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/text2image/task/:id', keyArgs] as const
}

export function getOcsV2PhpText2imageTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpText2imageTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].text2image.task[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpText2imageTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpText2imageTaskIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpText2imageTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpText2imageTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].text2image.task[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOcsV2PhpText2imageTaskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOcsV2PhpText2imageTaskIdMutationOptions<
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

export function getOcsV2PhpText2imageTaskIdImageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['text2image']['task'][':id']['image'][':index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/text2image/task/:id/image/:index', keyArgs] as const
}

export function getOcsV2PhpText2imageTaskIdImageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['text2image']['task'][':id']['image'][':index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpText2imageTaskIdImageIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].text2image.task[':id'].image[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpText2imageTaskIdImageIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['text2image']['task'][':id']['image'][':index']['$get']
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
                    (typeof client.ocs)['v2.php']['text2image']['task'][':id']['image'][':index']['$get']
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
                    (typeof client.ocs)['v2.php']['text2image']['task'][':id']['image'][':index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpText2imageTaskIdImageIndexQueryKey>
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
              (typeof client.ocs)['v2.php']['text2image']['task'][':id']['image'][':index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpText2imageTaskIdImageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpText2imageTaskIdImageIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].text2image.task[':id'].image[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpText2imageTasksAppAppIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['text2image']['tasks']['app'][':appId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/text2image/tasks/app/:appId', keyArgs] as const
}

export function getOcsV2PhpText2imageTasksAppAppIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['text2image']['tasks']['app'][':appId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpText2imageTasksAppAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].text2image.tasks.app[':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpText2imageTasksAppAppId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['text2image']['tasks']['app'][':appId']['$get']>
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
                    (typeof client.ocs)['v2.php']['text2image']['tasks']['app'][':appId']['$get']
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
                    (typeof client.ocs)['v2.php']['text2image']['tasks']['app'][':appId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpText2imageTasksAppAppIdQueryKey>
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
              (typeof client.ocs)['v2.php']['text2image']['tasks']['app'][':appId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpText2imageTasksAppAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpText2imageTasksAppAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].text2image.tasks.app[':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpTranslationLanguagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['translation']['languages']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/translation/languages', keyArgs] as const
}

export function getOcsV2PhpTranslationLanguagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['translation']['languages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTranslationLanguagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].translation.languages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTranslationLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['translation']['languages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['translation']['languages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['translation']['languages']['$get']>
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
                  ReturnType<(typeof client.ocs)['v2.php']['translation']['languages']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTranslationLanguagesQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['translation']['languages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTranslationLanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTranslationLanguagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].translation.languages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOcsV2PhpTranslationTranslate<
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
                  ReturnType<(typeof client.ocs)['v2.php']['translation']['translate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['translation']['translate']['$post']>,
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
  const mutationDefaults = getPostOcsV2PhpTranslationTranslateMutationOptions<
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

export function getOcsV2PhpSearchProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['search']['providers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/search/providers', keyArgs] as const
}

export function getOcsV2PhpSearchProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['search']['providers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpSearchProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].search.providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpSearchProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['search']['providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['search']['providers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['search']['providers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['search']['providers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpSearchProvidersQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['search']['providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpSearchProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpSearchProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].search.providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpSearchProvidersProviderIdSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['search']['providers'][':providerId']['search']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/search/providers/:providerId/search', keyArgs] as const
}

export function getOcsV2PhpSearchProvidersProviderIdSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['search']['providers'][':providerId']['search']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpSearchProvidersProviderIdSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].search.providers[':providerId'].search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpSearchProvidersProviderIdSearch<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['search']['providers'][':providerId']['search']['$get']
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
                    (typeof client.ocs)['v2.php']['search']['providers'][':providerId']['search']['$get']
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
                    (typeof client.ocs)['v2.php']['search']['providers'][':providerId']['search']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpSearchProvidersProviderIdSearchQueryKey>
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
              (typeof client.ocs)['v2.php']['search']['providers'][':providerId']['search']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpSearchProvidersProviderIdSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpSearchProvidersProviderIdSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].search.providers[':providerId'].search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndexPhpAvatarUserIdSizeDarkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['avatar'][':userId'][':size']['dark']['$get']>
  >,
) {
  return ['index.php', '/index.php/avatar/:userId/:size/dark', toValue(args)] as const
}

export function getIndexPhpAvatarUserIdSizeDarkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['avatar'][':userId'][':size']['dark']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpAvatarUserIdSizeDarkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].avatar[':userId'][':size'].dark.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpAvatarUserIdSizeDark<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['avatar'][':userId'][':size']['dark']['$get']>
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
                    (typeof client)['index.php']['avatar'][':userId'][':size']['dark']['$get']
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
                    (typeof client)['index.php']['avatar'][':userId'][':size']['dark']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndexPhpAvatarUserIdSizeDarkQueryKey>
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
            ReturnType<(typeof client)['index.php']['avatar'][':userId'][':size']['dark']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAvatarUserIdSizeDarkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpAvatarUserIdSizeDarkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].avatar[':userId'][':size'].dark.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndexPhpAvatarUserIdSizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['avatar'][':userId'][':size']['$get']>
  >,
) {
  return ['index.php', '/index.php/avatar/:userId/:size', toValue(args)] as const
}

export function getIndexPhpAvatarUserIdSizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['avatar'][':userId'][':size']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpAvatarUserIdSizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].avatar[':userId'][':size'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpAvatarUserIdSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['avatar'][':userId'][':size']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['avatar'][':userId'][':size']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['index.php']['avatar'][':userId'][':size']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIndexPhpAvatarUserIdSizeQueryKey>
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
          Awaited<ReturnType<(typeof client)['index.php']['avatar'][':userId'][':size']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAvatarUserIdSizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpAvatarUserIdSizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].avatar[':userId'][':size'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndexPhpCsrftokenQueryKey() {
  return ['index.php', '/index.php/csrftoken'] as const
}

export function getIndexPhpCsrftokenQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIndexPhpCsrftokenQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].csrftoken.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpCsrftoken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['index.php']['csrftoken']['$get']>>>
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
                Awaited<ReturnType<(typeof client)['index.php']['csrftoken']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['index.php']['csrftoken']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIndexPhpCsrftokenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['index.php']['csrftoken']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpCsrftokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndexPhpCsrftokenQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].csrftoken.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIndexPhpLoginV2Poll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexPhpLoginV2PollMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostIndexPhpLoginV2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexPhpLoginV2MutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexPhpAvatarGuestGuestNameSizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['$get']>
  >,
) {
  return ['index.php', '/index.php/avatar/guest/:guestName/:size', toValue(args)] as const
}

export function getIndexPhpAvatarGuestGuestNameSizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpAvatarGuestGuestNameSizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].avatar.guest[':guestName'][':size'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpAvatarGuestGuestNameSize<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['$get']>
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
                    (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['$get']
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
                    (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndexPhpAvatarGuestGuestNameSizeQueryKey>
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
              (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAvatarGuestGuestNameSizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpAvatarGuestGuestNameSizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].avatar.guest[':guestName'][':size'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndexPhpAvatarGuestGuestNameSizeDarkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['dark']['$get']
    >
  >,
) {
  return ['index.php', '/index.php/avatar/guest/:guestName/:size/dark', toValue(args)] as const
}

export function getIndexPhpAvatarGuestGuestNameSizeDarkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['dark']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpAvatarGuestGuestNameSizeDarkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].avatar.guest[':guestName'][':size'].dark.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpAvatarGuestGuestNameSizeDark<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['dark']['$get']
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
                    (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['dark']['$get']
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
                    (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['dark']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndexPhpAvatarGuestGuestNameSizeDarkQueryKey>
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
              (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['dark']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAvatarGuestGuestNameSizeDarkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpAvatarGuestGuestNameSizeDarkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].avatar.guest[':guestName'][':size'].dark.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIndexPhpLoginConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexPhpLoginConfirmMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexPhpOcmProviderQueryKey() {
  return ['index.php', '/index.php/ocm-provider'] as const
}

export function getIndexPhpOcmProviderQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIndexPhpOcmProviderQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php']['ocm-provider'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpOcmProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['ocm-provider']['$get']>>
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
                Awaited<ReturnType<(typeof client)['index.php']['ocm-provider']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['index.php']['ocm-provider']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIndexPhpOcmProviderQueryKey>
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
          Awaited<ReturnType<(typeof client)['index.php']['ocm-provider']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpOcmProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndexPhpOcmProviderQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php']['ocm-provider'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndexPhpCorePreviewPngQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['core']['preview.png']['$get']>
  >,
) {
  return ['index.php', '/index.php/core/preview.png', toValue(args)] as const
}

export function getIndexPhpCorePreviewPngQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['core']['preview.png']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpCorePreviewPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].core['preview.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpCorePreviewPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['core']['preview.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['core']['preview.png']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['index.php']['core']['preview.png']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['index.php']['core']['preview.png']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIndexPhpCorePreviewPngQueryKey>
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
          Awaited<ReturnType<(typeof client)['index.php']['core']['preview.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpCorePreviewPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpCorePreviewPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].core['preview.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndexPhpCorePreviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['index.php']['core']['preview']['$get']>>,
) {
  return ['index.php', '/index.php/core/preview', toValue(args)] as const
}

export function getIndexPhpCorePreviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['index.php']['core']['preview']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpCorePreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].core.preview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpCorePreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['core']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['index.php']['core']['preview']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['index.php']['core']['preview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['index.php']['core']['preview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIndexPhpCorePreviewQueryKey>
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
          Awaited<ReturnType<(typeof client)['index.php']['core']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpCorePreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpCorePreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].core.preview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndexPhpCoreMimeiconQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['core']['mimeicon']['$get']>
  >,
) {
  return ['index.php', '/index.php/core/mimeicon', toValue(args)] as const
}

export function getIndexPhpCoreMimeiconQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['core']['mimeicon']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpCoreMimeiconQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].core.mimeicon.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpCoreMimeicon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['core']['mimeicon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['core']['mimeicon']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['index.php']['core']['mimeicon']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['index.php']['core']['mimeicon']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIndexPhpCoreMimeiconQueryKey>
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
          Awaited<ReturnType<(typeof client)['index.php']['core']['mimeicon']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpCoreMimeiconQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpCoreMimeiconQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].core.mimeicon.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndexPhpCoreReferencesPreviewReferenceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['index.php']['core']['references']['preview'][':referenceId']['$get']
    >
  >,
) {
  return ['index.php', '/index.php/core/references/preview/:referenceId', toValue(args)] as const
}

export function getIndexPhpCoreReferencesPreviewReferenceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['index.php']['core']['references']['preview'][':referenceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpCoreReferencesPreviewReferenceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].core.references.preview[':referenceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpCoreReferencesPreviewReferenceId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['index.php']['core']['references']['preview'][':referenceId']['$get']
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
                    (typeof client)['index.php']['core']['references']['preview'][':referenceId']['$get']
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
                    (typeof client)['index.php']['core']['references']['preview'][':referenceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndexPhpCoreReferencesPreviewReferenceIdQueryKey>
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
              (typeof client)['index.php']['core']['references']['preview'][':referenceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpCoreReferencesPreviewReferenceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpCoreReferencesPreviewReferenceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].core.references.preview[':referenceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIndexPhpCoreWipeCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexPhpCoreWipeCheckMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostIndexPhpCoreWipeSuccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['index.php']['core']['wipe']['success']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['index.php']['core']['wipe']['success']['$post']>,
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
  const mutationDefaults = getPostIndexPhpCoreWipeSuccessMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStatusPhpQueryKey() {
  return ['status.php', '/status.php'] as const
}

export function getStatusPhpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusPhpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['status.php'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatusPhp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['status.php']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['status.php']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['status.php']['$get']>>>
            >
          >,
          ReturnType<typeof getStatusPhpQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['status.php']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusPhpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['status.php'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpTaskprocessingTasksConsumerTasktypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasktypes']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_consumer/tasktypes', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksConsumerTasktypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasktypes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTaskprocessingTasksConsumerTasktypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_consumer.tasktypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTaskprocessingTasksConsumerTasktypes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasktypes']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasktypes']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasktypes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTaskprocessingTasksConsumerTasktypesQueryKey>
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
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasktypes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksConsumerTasktypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTaskprocessingTasksConsumerTasktypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].taskprocessing.tasks_consumer.tasktypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOcsV2PhpTaskprocessingTasksConsumerSchedule<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpTaskprocessingTasksConsumerScheduleMutationOptions<
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

export function getOcsV2PhpTaskprocessingTasksConsumerTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_consumer/task/:id', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksConsumerTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTaskprocessingTasksConsumerTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_consumer.task[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTaskprocessingTasksConsumerTaskId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTaskprocessingTasksConsumerTaskIdQueryKey>
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
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksConsumerTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTaskprocessingTasksConsumerTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].taskprocessing.tasks_consumer.task[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOcsV2PhpTaskprocessingTasksConsumerTaskId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOcsV2PhpTaskprocessingTasksConsumerTaskIdMutationOptions<
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

export function getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file'][':fileId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_provider/:taskId/file/:fileId', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file'][':fileId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_provider[':taskId'].file[':fileId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file'][':fileId']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file'][':fileId']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file'][':fileId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdQueryKey>
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
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file'][':fileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].taskprocessing.tasks_provider[':taskId'].file[':fileId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostOcsV2PhpTaskprocessingTasksProviderTaskIdFile<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpTaskprocessingTasksProviderTaskIdFileMutationOptions<
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

export function usePostOcsV2PhpTaskprocessingTasksProviderTaskIdProgress<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpTaskprocessingTasksProviderTaskIdProgressMutationOptions<
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

export function usePostOcsV2PhpTaskprocessingTasksProviderTaskIdResult<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpTaskprocessingTasksProviderTaskIdResultMutationOptions<
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

export function usePostOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResult<
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
    getPostOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResultMutationOptions<
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

export function usePostOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancel<
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
    getPostOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancelMutationOptions<
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

export function getOcsV2PhpTaskprocessingTasksProviderNextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_provider/next', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksProviderNextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTaskprocessingTasksProviderNextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_provider.next.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTaskprocessingTasksProviderNext<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTaskprocessingTasksProviderNextQueryKey>
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
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksProviderNextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTaskprocessingTasksProviderNextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].taskprocessing.tasks_provider.next.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpTaskprocessingTasksProviderNextBatchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next_batch']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/taskprocessing/tasks_provider/next_batch', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingTasksProviderNextBatchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next_batch']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTaskprocessingTasksProviderNextBatchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.tasks_provider.next_batch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTaskprocessingTasksProviderNextBatch<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next_batch']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next_batch']['$get']
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
                    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next_batch']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTaskprocessingTasksProviderNextBatchQueryKey>
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
              (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next_batch']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingTasksProviderNextBatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTaskprocessingTasksProviderNextBatchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].taskprocessing.tasks_provider.next_batch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpTaskprocessingQueueStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['queue_stats']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/taskprocessing/queue_stats', keyArgs] as const
}

export function getOcsV2PhpTaskprocessingQueueStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['queue_stats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTaskprocessingQueueStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].taskprocessing.queue_stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTaskprocessingQueueStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['queue_stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['queue_stats']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['queue_stats']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTaskprocessingQueueStatsQueryKey>
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
            ReturnType<(typeof client.ocs)['v2.php']['taskprocessing']['queue_stats']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTaskprocessingQueueStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTaskprocessingQueueStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].taskprocessing.queue_stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOcsV2PhpTwofactorStateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['twofactor']['state']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/twofactor/state', keyArgs] as const
}

export function getOcsV2PhpTwofactorStateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['twofactor']['state']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpTwofactorStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].twofactor.state.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpTwofactorState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['twofactor']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['twofactor']['state']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['twofactor']['state']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['twofactor']['state']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpTwofactorStateQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['twofactor']['state']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpTwofactorStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpTwofactorStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].twofactor.state.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOcsV2PhpTwofactorEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpTwofactorEnableMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostOcsV2PhpTwofactorDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpTwofactorDisableMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
