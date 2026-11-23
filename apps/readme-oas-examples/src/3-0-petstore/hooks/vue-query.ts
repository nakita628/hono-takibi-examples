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

export function getPetKey() {
  return ['pet'] as const
}

export function getStoreKey() {
  return ['store'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getPutPetMutationKey() {
  return ['pet', '/pet', 'PUT'] as const
}

export function getPutPetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.$put>>>>>,
    TError,
    InferRequestType<typeof client.pet.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutPetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pet.$put>) {
      return parseResponse(client.pet.$put(args, options))
    },
  })
}

export function usePutPet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.$put>>>>>,
          TError,
          InferRequestType<typeof client.pet.$put>,
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
  const mutationDefaults = getPutPetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPetMutationKey() {
  return ['pet', '/pet', 'POST'] as const
}

export function getPostPetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.$post>>>>>,
    TError,
    InferRequestType<typeof client.pet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pet.$post>) {
      return parseResponse(client.pet.$post(args, options))
    },
  })
}

export function usePostPet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.$post>>>>>,
          TError,
          InferRequestType<typeof client.pet.$post>,
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
  const mutationDefaults = getPostPetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPetFindByStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pet.findByStatus.$get>>,
) {
  return ['pet', '/pet/findByStatus', toValue(args)] as const
}

export function getPetFindByStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pet.findByStatus.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPetFindByStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pet.findByStatus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePetFindByStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByStatus.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pet.findByStatus.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByStatus.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByStatus.$get>>>
            >
          >,
          ReturnType<typeof getPetFindByStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByStatus.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPetFindByStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPetFindByStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pet.findByStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPetFindByTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pet.findByTags.$get>>,
) {
  return ['pet', '/pet/findByTags', toValue(args)] as const
}

export function getPetFindByTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pet.findByTags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPetFindByTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pet.findByTags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePetFindByTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByTags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pet.findByTags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByTags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByTags.$get>>>>
          >,
          ReturnType<typeof getPetFindByTagsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByTags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPetFindByTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPetFindByTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pet.findByTags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPetPetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pet)[':petId']['$get']>>,
) {
  return ['pet', '/pet/:petId', toValue(args)] as const
}

export function getPetPetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pet)[':petId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPetPetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pet[':petId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePetPetId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':petId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pet)[':petId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':petId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':petId']['$get']>>>
            >
          >,
          ReturnType<typeof getPetPetIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':petId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPetPetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPetPetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pet[':petId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPetPetIdMutationKey() {
  return ['pet', '/pet/:petId', 'POST'] as const
}

export function getPostPetPetIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':petId']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.pet)[':petId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPetPetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pet)[':petId']['$post']>) {
      return parseResponse(client.pet[':petId'].$post(args, options))
    },
  })
}

export function usePostPetPetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':petId']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.pet)[':petId']['$post']>,
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
  const mutationDefaults = getPostPetPetIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePetPetIdMutationKey() {
  return ['pet', '/pet/:petId', 'DELETE'] as const
}

export function getDeletePetPetIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':petId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pet)[':petId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePetPetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pet)[':petId']['$delete']>) {
      return parseResponse(client.pet[':petId'].$delete(args, options))
    },
  })
}

export function useDeletePetPetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':petId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.pet)[':petId']['$delete']>,
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
  const mutationDefaults = getDeletePetPetIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPetPetIdUploadImageMutationKey() {
  return ['pet', '/pet/:petId/uploadImage', 'POST'] as const
}

export function getPostPetPetIdUploadImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pet)[':petId']['uploadImage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pet)[':petId']['uploadImage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPetPetIdUploadImageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.pet)[':petId']['uploadImage']['$post']>,
    ) {
      return parseResponse(client.pet[':petId'].uploadImage.$post(args, options))
    },
  })
}

export function usePostPetPetIdUploadImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pet)[':petId']['uploadImage']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pet)[':petId']['uploadImage']['$post']>,
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
  const mutationDefaults = getPostPetPetIdUploadImageMutationOptions<TError, TOnMutateResult>(
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

export function getStoreInventoryQueryKey() {
  return ['store', '/store/inventory'] as const
}

export function getStoreInventoryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStoreInventoryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.inventory.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStoreInventory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.inventory.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.store.inventory.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.store.inventory.$get>>>
            >
          >,
          ReturnType<typeof getStoreInventoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.inventory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoreInventoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStoreInventoryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.store.inventory.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStoreOrderMutationKey() {
  return ['store', '/store/order', 'POST'] as const
}

export function getPostStoreOrderMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.order.$post>>>>>,
    TError,
    InferRequestType<typeof client.store.order.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreOrderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.store.order.$post>) {
      return parseResponse(client.store.order.$post(args, options))
    },
  })
}

export function usePostStoreOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.order.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.store.order.$post>,
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
  const mutationDefaults = getPostStoreOrderMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStoreOrderOrderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.order)[':orderId']['$get']>>,
) {
  return ['store', '/store/order/:orderId', toValue(args)] as const
}

export function getStoreOrderOrderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.order)[':orderId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStoreOrderOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.store.order[':orderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStoreOrderOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.order)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.store.order)[':orderId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store.order)[':orderId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store.order)[':orderId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStoreOrderOrderIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.order)[':orderId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreOrderOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStoreOrderOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.store.order[':orderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteStoreOrderOrderIdMutationKey() {
  return ['store', '/store/order/:orderId', 'DELETE'] as const
}

export function getDeleteStoreOrderOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.store.order)[':orderId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.store.order)[':orderId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStoreOrderOrderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.store.order)[':orderId']['$delete']>) {
      return parseResponse(client.store.order[':orderId'].$delete(args, options))
    },
  })
}

export function useDeleteStoreOrderOrderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.store.order)[':orderId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.store.order)[':orderId']['$delete']>,
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
  const mutationDefaults = getDeleteStoreOrderOrderIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserMutationKey() {
  return ['user', '/user', 'POST'] as const
}

export function getPostUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
    TError,
    InferRequestType<typeof client.user.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.$post>) {
      return parseResponse(client.user.$post(args, options))
    },
  })
}

export function usePostUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
          TError,
          InferRequestType<typeof client.user.$post>,
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
  const mutationDefaults = getPostUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUserCreateWithArrayMutationKey() {
  return ['user', '/user/createWithArray', 'POST'] as const
}

export function getPostUserCreateWithArrayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.createWithArray.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.createWithArray.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserCreateWithArrayMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.createWithArray.$post>) {
      return parseResponse(client.user.createWithArray.$post(args, options))
    },
  })
}

export function usePostUserCreateWithArray<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.createWithArray.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.createWithArray.$post>,
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
  const mutationDefaults = getPostUserCreateWithArrayMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserCreateWithListMutationKey() {
  return ['user', '/user/createWithList', 'POST'] as const
}

export function getPostUserCreateWithListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.createWithList.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user.createWithList.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserCreateWithListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.createWithList.$post>) {
      return parseResponse(client.user.createWithList.$post(args, options))
    },
  })
}

export function usePostUserCreateWithList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.createWithList.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.createWithList.$post>,
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
  const mutationDefaults = getPostUserCreateWithListMutationOptions<TError, TOnMutateResult>(
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

export function getUserLoginQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.login.$get>>,
) {
  return ['user', '/user/login', toValue(args)] as const
}

export function getUserLoginQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.login.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserLoginQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.login.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.login.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.login.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.login.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.login.$get>>>>
          >,
          ReturnType<typeof getUserLoginQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.login.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserLoginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserLoginQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.login.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserLogoutQueryKey() {
  return ['user', '/user/logout'] as const
}

export function getUserLogoutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserLogoutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserLogout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.logout.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.logout.$get>>>>
          >,
          ReturnType<typeof getUserLogoutQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.logout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserLogoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserLogoutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.logout.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':username']['$get']>>,
) {
  return ['user', '/user/:username', toValue(args)] as const
}

export function getUserUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>
            >
          >,
          ReturnType<typeof getUserUsernameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUserUsernameMutationKey() {
  return ['user', '/user/:username', 'PUT'] as const
}

export function getPutUserUsernameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.user)[':username']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user)[':username']['$put']>) {
      return parseResponse(client.user[':username'].$put(args, options))
    },
  })
}

export function usePutUserUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.user)[':username']['$put']>,
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
  const mutationDefaults = getPutUserUsernameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUserUsernameMutationKey() {
  return ['user', '/user/:username', 'DELETE'] as const
}

export function getDeleteUserUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.user)[':username']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user)[':username']['$delete']>) {
      return parseResponse(client.user[':username'].$delete(args, options))
    },
  })
}

export function useDeleteUserUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':username']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user)[':username']['$delete']>,
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
  const mutationDefaults = getDeleteUserUsernameMutationOptions<TError, TOnMutateResult>(
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
