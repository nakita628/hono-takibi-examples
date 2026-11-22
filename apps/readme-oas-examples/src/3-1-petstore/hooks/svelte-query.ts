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

export function createPutPet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.$put>>>>>,
        TError,
        InferRequestType<typeof client.pet.$put>,
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
    const mutationDefaults = getPutPetMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.$post>>>>>,
        TError,
        InferRequestType<typeof client.pet.$post>,
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
    const mutationDefaults = getPostPetMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPetFindByStatusQueryKey(
  args: InferRequestType<typeof client.pet.findByStatus.$get>,
) {
  return ['pet', '/pet/findByStatus', args] as const
}

export function getPetFindByStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByStatus.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pet.findByStatus.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByStatus.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPetFindByStatusQueryKey>
  >({
    queryKey: getPetFindByStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pet.findByStatus.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPetFindByStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByStatus.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pet.findByStatus.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByStatus.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPetFindByStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPetFindByStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPetFindByTagsQueryKey(
  args: InferRequestType<typeof client.pet.findByTags.$get>,
) {
  return ['pet', '/pet/findByTags', args] as const
}

export function getPetFindByTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByTags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pet.findByTags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByTags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPetFindByTagsQueryKey>
  >({
    queryKey: getPetFindByTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pet.findByTags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPetFindByTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByTags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pet.findByTags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pet.findByTags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPetFindByTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPetFindByTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPetPetIdQueryKey(args: InferRequestType<(typeof client.pet)[':petId']['$get']>) {
  return ['pet', '/pet/:petId', args] as const
}

export function getPetPetIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':petId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.pet)[':petId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':petId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPetPetIdQueryKey>
  >({
    queryKey: getPetPetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pet[':petId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPetPetId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':petId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pet)[':petId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':petId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPetPetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPetPetIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPetPetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':petId']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.pet)[':petId']['$post']>,
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
    const mutationDefaults = getPostPetPetIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeletePetPetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':petId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.pet)[':petId']['$delete']>,
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
    const mutationDefaults = getDeletePetPetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPetPetIdUploadImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPetPetIdUploadImageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStoreInventoryQueryKey() {
  return ['store', '/store/inventory'] as const
}

export function getStoreInventoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.inventory.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.inventory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoreInventoryQueryKey>
  >({
    queryKey: getStoreInventoryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.store.inventory.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStoreInventory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.inventory.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.inventory.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStoreInventoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStoreInventoryQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostStoreOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.store.order.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.store.order.$post>,
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
    const mutationDefaults = getPostStoreOrderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStoreOrderOrderIdQueryKey(
  args: InferRequestType<(typeof client.store.order)[':orderId']['$get']>,
) {
  return ['store', '/store/order/:orderId', args] as const
}

export function getStoreOrderOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.order)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.store.order)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.store.order)[':orderId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoreOrderOrderIdQueryKey>
  >({
    queryKey: getStoreOrderOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.store.order[':orderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStoreOrderOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.store.order)[':orderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.store.order)[':orderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.store.order)[':orderId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoreOrderOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStoreOrderOrderIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteStoreOrderOrderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteStoreOrderOrderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
        TError,
        InferRequestType<typeof client.user.$post>,
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
    const mutationDefaults = getPostUserMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUserCreateWithArray<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.createWithArray.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.user.createWithArray.$post>,
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
    const mutationDefaults = getPostUserCreateWithArrayMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUserCreateWithList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.createWithList.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.user.createWithList.$post>,
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
    const mutationDefaults = getPostUserCreateWithListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserLoginQueryKey(args: InferRequestType<typeof client.user.login.$get>) {
  return ['user', '/user/login', args] as const
}

export function getUserLoginQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.login.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.login.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.login.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserLoginQueryKey>
  >({
    queryKey: getUserLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.login.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.login.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.login.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.login.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserLoginQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserLogoutQueryKey() {
  return ['user', '/user/logout'] as const
}

export function getUserLogoutQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.logout.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.logout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserLogoutQueryKey>
  >({
    queryKey: getUserLogoutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserLogout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.logout.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserLogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserLogoutQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUserUsernameQueryKey(
  args: InferRequestType<(typeof client.user)[':username']['$get']>,
) {
  return ['user', '/user/:username', args] as const
}

export function getUserUsernameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUsernameQueryKey>
  >({
    queryKey: getUserUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':username'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':username']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUsernameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutUserUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.user)[':username']['$put']>,
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
    const mutationDefaults = getPutUserUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUserUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':username']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.user)[':username']['$delete']>,
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
    const mutationDefaults = getDeleteUserUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
