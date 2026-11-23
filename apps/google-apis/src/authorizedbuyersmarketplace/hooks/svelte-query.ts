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

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1AuctionPackageSubscribeClientsMutationKey() {
  return ['v1', '/v1/:auctionPackage:subscribeClients', 'POST'] as const
}

export function getPostV1AuctionPackageSubscribeClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':auctionPackage:subscribeClients']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':auctionPackage:subscribeClients']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuctionPackageSubscribeClientsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':auctionPackage:subscribeClients']['$post']>,
    ) {
      return parseResponse(client.v1[':auctionPackage:subscribeClients'].$post(args, options))
    },
  })
}

export function createPostV1AuctionPackageSubscribeClients<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':auctionPackage:subscribeClients']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':auctionPackage:subscribeClients']['$post']>,
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
    const mutationDefaults = getPostV1AuctionPackageSubscribeClientsMutationOptions<
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

export function getPostV1AuctionPackageUnsubscribeClientsMutationKey() {
  return ['v1', '/v1/:auctionPackage:unsubscribeClients', 'POST'] as const
}

export function getPostV1AuctionPackageUnsubscribeClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':auctionPackage:unsubscribeClients']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':auctionPackage:unsubscribeClients']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuctionPackageUnsubscribeClientsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':auctionPackage:unsubscribeClients']['$post']>,
    ) {
      return parseResponse(client.v1[':auctionPackage:unsubscribeClients'].$post(args, options))
    },
  })
}

export function createPostV1AuctionPackageUnsubscribeClients<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':auctionPackage:unsubscribeClients']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':auctionPackage:unsubscribeClients']['$post']>,
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
    const mutationDefaults = getPostV1AuctionPackageUnsubscribeClientsMutationOptions<
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

export function getPostV1BuyerProposalsSendRfpMutationKey() {
  return ['v1', '/v1/:buyer/proposals:sendRfp', 'POST'] as const
}

export function getPostV1BuyerProposalsSendRfpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':buyer']['proposals:sendRfp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':buyer']['proposals:sendRfp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BuyerProposalsSendRfpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':buyer']['proposals:sendRfp']['$post']>,
    ) {
      return parseResponse(client.v1[':buyer']['proposals:sendRfp'].$post(args, options))
    },
  })
}

export function createPostV1BuyerProposalsSendRfp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':buyer']['proposals:sendRfp']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':buyer']['proposals:sendRfp']['$post']>,
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
    const mutationDefaults = getPostV1BuyerProposalsSendRfpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DealAddCreativeMutationKey() {
  return ['v1', '/v1/:deal:addCreative', 'POST'] as const
}

export function getPostV1DealAddCreativeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':deal:addCreative']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':deal:addCreative']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DealAddCreativeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':deal:addCreative']['$post']>) {
      return parseResponse(client.v1[':deal:addCreative'].$post(args, options))
    },
  })
}

export function createPostV1DealAddCreative<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':deal:addCreative']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':deal:addCreative']['$post']>,
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
    const mutationDefaults = getPostV1DealAddCreativeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DealSetReadyToServeMutationKey() {
  return ['v1', '/v1/:deal:setReadyToServe', 'POST'] as const
}

export function getPostV1DealSetReadyToServeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':deal:setReadyToServe']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':deal:setReadyToServe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DealSetReadyToServeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':deal:setReadyToServe']['$post']>) {
      return parseResponse(client.v1[':deal:setReadyToServe'].$post(args, options))
    },
  })
}

export function createPostV1DealSetReadyToServe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':deal:setReadyToServe']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':deal:setReadyToServe']['$post']>,
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
    const mutationDefaults = getPostV1DealSetReadyToServeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1NameQueryKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function getV1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >({
    queryKey: getV1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function createDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV1NameMutationKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function getPatchV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$patch']>) {
      return parseResponse(client.v1[':name'].$patch(args, options))
    },
  })
}

export function createPatchV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$patch']>,
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
    const mutationDefaults = getPatchV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameAcceptMutationKey() {
  return ['v1', '/v1/:name:accept', 'POST'] as const
}

export function getPostV1NameAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:accept']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameAcceptMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:accept']['$post']>) {
      return parseResponse(client.v1[':name:accept'].$post(args, options))
    },
  })
}

export function createPostV1NameAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:accept']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:accept']['$post']>,
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
    const mutationDefaults = getPostV1NameAcceptMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameActivateMutationKey() {
  return ['v1', '/v1/:name:activate', 'POST'] as const
}

export function getPostV1NameActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:activate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameActivateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:activate']['$post']>) {
      return parseResponse(client.v1[':name:activate'].$post(args, options))
    },
  })
}

export function createPostV1NameActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:activate']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:activate']['$post']>,
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
    const mutationDefaults = getPostV1NameActivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameDeactivateMutationKey() {
  return ['v1', '/v1/:name:deactivate', 'POST'] as const
}

export function getPostV1NameDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:deactivate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:deactivate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameDeactivateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:deactivate']['$post']>) {
      return parseResponse(client.v1[':name:deactivate'].$post(args, options))
    },
  })
}

export function createPostV1NameDeactivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name:deactivate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:deactivate']['$post']>,
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
    const mutationDefaults = getPostV1NameDeactivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NamePauseMutationKey() {
  return ['v1', '/v1/:name:pause', 'POST'] as const
}

export function getPostV1NamePauseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:pause']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NamePauseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:pause']['$post']>) {
      return parseResponse(client.v1[':name:pause'].$post(args, options))
    },
  })
}

export function createPostV1NamePause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:pause']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:pause']['$post']>,
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
    const mutationDefaults = getPostV1NamePauseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameResumeMutationKey() {
  return ['v1', '/v1/:name:resume', 'POST'] as const
}

export function getPostV1NameResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:resume']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameResumeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:resume']['$post']>) {
      return parseResponse(client.v1[':name:resume'].$post(args, options))
    },
  })
}

export function createPostV1NameResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:resume']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:resume']['$post']>,
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
    const mutationDefaults = getPostV1NameResumeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameSubscribeMutationKey() {
  return ['v1', '/v1/:name:subscribe', 'POST'] as const
}

export function getPostV1NameSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:subscribe']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:subscribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:subscribe']['$post']>) {
      return parseResponse(client.v1[':name:subscribe'].$post(args, options))
    },
  })
}

export function createPostV1NameSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name:subscribe']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:subscribe']['$post']>,
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
    const mutationDefaults = getPostV1NameSubscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameUnsubscribeMutationKey() {
  return ['v1', '/v1/:name:unsubscribe', 'POST'] as const
}

export function getPostV1NameUnsubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:unsubscribe']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:unsubscribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameUnsubscribeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:unsubscribe']['$post']>) {
      return parseResponse(client.v1[':name:unsubscribe'].$post(args, options))
    },
  })
}

export function createPostV1NameUnsubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name:unsubscribe']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:unsubscribe']['$post']>,
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
    const mutationDefaults = getPostV1NameUnsubscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentAuctionPackagesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['auctionPackages']['$get']>,
) {
  return ['v1', '/v1/:parent/auctionPackages', args] as const
}

export function getV1ParentAuctionPackagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['auctionPackages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['auctionPackages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['auctionPackages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentAuctionPackagesQueryKey>
  >({
    queryKey: getV1ParentAuctionPackagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].auctionPackages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentAuctionPackages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['auctionPackages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['auctionPackages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['auctionPackages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentAuctionPackagesQueryKey>
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
      ...getV1ParentAuctionPackagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ParentClientsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['clients']['$get']>,
) {
  return ['v1', '/v1/:parent/clients', args] as const
}

export function getV1ParentClientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['clients']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['clients']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentClientsQueryKey>
  >({
    queryKey: getV1ParentClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].clients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ParentClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['clients']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['clients']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['clients']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentClientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentClientsMutationKey() {
  return ['v1', '/v1/:parent/clients', 'POST'] as const
}

export function getPostV1ParentClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['clients']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['clients']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentClientsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['clients']['$post']>) {
      return parseResponse(client.v1[':parent'].clients.$post(args, options))
    },
  })
}

export function createPostV1ParentClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['clients']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['clients']['$post']>,
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
    const mutationDefaults = getPostV1ParentClientsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentDealsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['deals']['$get']>,
) {
  return ['v1', '/v1/:parent/deals', args] as const
}

export function getV1ParentDealsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['deals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['deals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['deals']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentDealsQueryKey>
  >({
    queryKey: getV1ParentDealsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].deals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ParentDeals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['deals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['deals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['deals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentDealsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentDealsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentDealsBatchUpdateMutationKey() {
  return ['v1', '/v1/:parent/deals:batchUpdate', 'POST'] as const
}

export function getPostV1ParentDealsBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['deals:batchUpdate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['deals:batchUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentDealsBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['deals:batchUpdate']['$post']>,
    ) {
      return parseResponse(client.v1[':parent']['deals:batchUpdate'].$post(args, options))
    },
  })
}

export function createPostV1ParentDealsBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['deals:batchUpdate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['deals:batchUpdate']['$post']>,
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
    const mutationDefaults = getPostV1ParentDealsBatchUpdateMutationOptions<
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

export function getV1ParentFinalizedDealsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['finalizedDeals']['$get']>,
) {
  return ['v1', '/v1/:parent/finalizedDeals', args] as const
}

export function getV1ParentFinalizedDealsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['finalizedDeals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['finalizedDeals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['finalizedDeals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentFinalizedDealsQueryKey>
  >({
    queryKey: getV1ParentFinalizedDealsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].finalizedDeals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentFinalizedDeals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['finalizedDeals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['finalizedDeals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['finalizedDeals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentFinalizedDealsQueryKey>
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
      ...getV1ParentFinalizedDealsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ParentProposalsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['proposals']['$get']>,
) {
  return ['v1', '/v1/:parent/proposals', args] as const
}

export function getV1ParentProposalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['proposals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['proposals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['proposals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentProposalsQueryKey>
  >({
    queryKey: getV1ParentProposalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].proposals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentProposals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['proposals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['proposals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['proposals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentProposalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentProposalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ParentPublisherProfilesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['publisherProfiles']['$get']>,
) {
  return ['v1', '/v1/:parent/publisherProfiles', args] as const
}

export function getV1ParentPublisherProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['publisherProfiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['publisherProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['publisherProfiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentPublisherProfilesQueryKey>
  >({
    queryKey: getV1ParentPublisherProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].publisherProfiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentPublisherProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['publisherProfiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['publisherProfiles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['publisherProfiles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentPublisherProfilesQueryKey>
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
      ...getV1ParentPublisherProfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ParentUsersQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['users']['$get']>,
) {
  return ['v1', '/v1/:parent/users', args] as const
}

export function getV1ParentUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['users']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentUsersQueryKey>
  >({
    queryKey: getV1ParentUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ParentUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentUsersMutationKey() {
  return ['v1', '/v1/:parent/users', 'POST'] as const
}

export function getPostV1ParentUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['users']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentUsersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['users']['$post']>) {
      return parseResponse(client.v1[':parent'].users.$post(args, options))
    },
  })
}

export function createPostV1ParentUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['users']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['users']['$post']>,
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
    const mutationDefaults = getPostV1ParentUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProposalAddNoteMutationKey() {
  return ['v1', '/v1/:proposal:addNote', 'POST'] as const
}

export function getPostV1ProposalAddNoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':proposal:addNote']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':proposal:addNote']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProposalAddNoteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':proposal:addNote']['$post']>) {
      return parseResponse(client.v1[':proposal:addNote'].$post(args, options))
    },
  })
}

export function createPostV1ProposalAddNote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':proposal:addNote']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':proposal:addNote']['$post']>,
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
    const mutationDefaults = getPostV1ProposalAddNoteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProposalCancelNegotiationMutationKey() {
  return ['v1', '/v1/:proposal:cancelNegotiation', 'POST'] as const
}

export function getPostV1ProposalCancelNegotiationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':proposal:cancelNegotiation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':proposal:cancelNegotiation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProposalCancelNegotiationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':proposal:cancelNegotiation']['$post']>,
    ) {
      return parseResponse(client.v1[':proposal:cancelNegotiation'].$post(args, options))
    },
  })
}

export function createPostV1ProposalCancelNegotiation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':proposal:cancelNegotiation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':proposal:cancelNegotiation']['$post']>,
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
    const mutationDefaults = getPostV1ProposalCancelNegotiationMutationOptions<
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
