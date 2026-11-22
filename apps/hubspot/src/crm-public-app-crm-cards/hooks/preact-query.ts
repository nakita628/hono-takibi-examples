import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmExtensionsCardsDev202609SampleResponseQueryKey() {
  return ['crm', '/crm/extensions/cards-dev/2026-09/sample-response'] as const
}

export function getCrmExtensionsCardsDev202609SampleResponseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.extensions)['cards-dev']['2026-09']['sample-response']['$get']
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
              (typeof client.crm.extensions)['cards-dev']['2026-09']['sample-response']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmExtensionsCardsDev202609SampleResponseQueryKey>
  >({
    queryKey: getCrmExtensionsCardsDev202609SampleResponseQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.extensions['cards-dev']['2026-09']['sample-response'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmExtensionsCardsDev202609SampleResponse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.extensions)['cards-dev']['2026-09']['sample-response']['$get']
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
                  (typeof client.crm.extensions)['cards-dev']['2026-09']['sample-response']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmExtensionsCardsDev202609SampleResponseQueryKey>
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
      ...getCrmExtensionsCardsDev202609SampleResponseQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmExtensionsCardsDev202609SampleResponse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.extensions)['cards-dev']['2026-09']['sample-response']['$get']
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
                  (typeof client.crm.extensions)['cards-dev']['2026-09']['sample-response']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmExtensionsCardsDev202609SampleResponseQueryKey>
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
      ...getCrmExtensionsCardsDev202609SampleResponseQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCrmExtensionsCardsDev202609AppIdQueryKey(
  args: InferRequestType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>,
) {
  return ['crm', '/crm/extensions/cards-dev/2026-09/:appId', args] as const
}

export function getCrmExtensionsCardsDev202609AppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmExtensionsCardsDev202609AppIdQueryKey>
  >({
    queryKey: getCrmExtensionsCardsDev202609AppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.extensions['cards-dev']['2026-09'][':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmExtensionsCardsDev202609AppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmExtensionsCardsDev202609AppIdQueryKey>
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
      ...getCrmExtensionsCardsDev202609AppIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmExtensionsCardsDev202609AppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmExtensionsCardsDev202609AppIdQueryKey>
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
      ...getCrmExtensionsCardsDev202609AppIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCrmExtensionsCardsDev202609AppIdMutationKey() {
  return ['crm', '/crm/extensions/cards-dev/2026-09/:appId', 'POST'] as const
}

export function getPostCrmExtensionsCardsDev202609AppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmExtensionsCardsDev202609AppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.extensions['cards-dev']['2026-09'][':appId'].$post(args, options),
      )
    },
  })
}

export function usePostCrmExtensionsCardsDev202609AppId<
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
                  (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmExtensionsCardsDev202609AppIdMutationOptions<
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

export function getPostCrmExtensionsCardsDev202609AppIdViewsMigrateMutationKey() {
  return ['crm', '/crm/extensions/cards-dev/2026-09/:appId/views/migrate', 'POST'] as const
}

export function getPostCrmExtensionsCardsDev202609AppIdViewsMigrateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['views']['migrate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['views']['migrate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmExtensionsCardsDev202609AppIdViewsMigrateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['views']['migrate']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.extensions['cards-dev']['2026-09'][':appId'].views.migrate.$post(args, options),
      )
    },
  })
}

export function usePostCrmExtensionsCardsDev202609AppIdViewsMigrate<
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
                  (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['views']['migrate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['views']['migrate']['$post']
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
  const mutationDefaults = getPostCrmExtensionsCardsDev202609AppIdViewsMigrateMutationOptions<
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

export function getCrmExtensionsCardsDev202609AppIdCardIdQueryKey(
  args: InferRequestType<
    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
  >,
) {
  return ['crm', '/crm/extensions/cards-dev/2026-09/:appId/:cardId', args] as const
}

export function getCrmExtensionsCardsDev202609AppIdCardIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmExtensionsCardsDev202609AppIdCardIdQueryKey>
  >({
    queryKey: getCrmExtensionsCardsDev202609AppIdCardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.extensions['cards-dev']['2026-09'][':appId'][':cardId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmExtensionsCardsDev202609AppIdCardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmExtensionsCardsDev202609AppIdCardIdQueryKey>
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
      ...getCrmExtensionsCardsDev202609AppIdCardIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmExtensionsCardsDev202609AppIdCardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmExtensionsCardsDev202609AppIdCardIdQueryKey>
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
      ...getCrmExtensionsCardsDev202609AppIdCardIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCrmExtensionsCardsDev202609AppIdCardIdMutationKey() {
  return ['crm', '/crm/extensions/cards-dev/2026-09/:appId/:cardId', 'DELETE'] as const
}

export function getDeleteCrmExtensionsCardsDev202609AppIdCardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmExtensionsCardsDev202609AppIdCardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.extensions['cards-dev']['2026-09'][':appId'][':cardId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCrmExtensionsCardsDev202609AppIdCardId<
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
                    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$delete']
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
  const mutationDefaults = getDeleteCrmExtensionsCardsDev202609AppIdCardIdMutationOptions<
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

export function getPatchCrmExtensionsCardsDev202609AppIdCardIdMutationKey() {
  return ['crm', '/crm/extensions/cards-dev/2026-09/:appId/:cardId', 'PATCH'] as const
}

export function getPatchCrmExtensionsCardsDev202609AppIdCardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmExtensionsCardsDev202609AppIdCardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$patch']
      >,
    ) {
      return parseResponse(
        client.crm.extensions['cards-dev']['2026-09'][':appId'][':cardId'].$patch(args, options),
      )
    },
  })
}

export function usePatchCrmExtensionsCardsDev202609AppIdCardId<
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
                  (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$patch']
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
  const mutationDefaults = getPatchCrmExtensionsCardsDev202609AppIdCardIdMutationOptions<
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
