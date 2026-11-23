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

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmExtensionsCardsDev202609SampleResponseQueryKey() {
  return ['crm', '/crm/extensions/cards-dev/2026-09/sample-response'] as const
}

export function getCrmExtensionsCardsDev202609SampleResponseQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getCrmExtensionsCardsDev202609SampleResponseQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.extensions['cards-dev']['2026-09']['sample-response'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          ReturnType<typeof getCrmExtensionsCardsDev202609SampleResponseQueryKey>
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
              (typeof client.crm.extensions)['cards-dev']['2026-09']['sample-response']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmExtensionsCardsDev202609SampleResponseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrmExtensionsCardsDev202609SampleResponseQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.extensions['cards-dev']['2026-09']['sample-response'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmExtensionsCardsDev202609AppIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>
  >,
) {
  return ['crm', '/crm/extensions/cards-dev/2026-09/:appId', toValue(args)] as const
}

export function getCrmExtensionsCardsDev202609AppIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmExtensionsCardsDev202609AppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.extensions['cards-dev']['2026-09'][':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>
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
                    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']
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
                    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCrmExtensionsCardsDev202609AppIdQueryKey>
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
            ReturnType<(typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmExtensionsCardsDev202609AppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmExtensionsCardsDev202609AppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.extensions['cards-dev']['2026-09'][':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
    >
  >,
) {
  return ['crm', '/crm/extensions/cards-dev/2026-09/:appId/:cardId', toValue(args)] as const
}

export function getCrmExtensionsCardsDev202609AppIdCardIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmExtensionsCardsDev202609AppIdCardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.extensions['cards-dev']['2026-09'][':appId'][':cardId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
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
                    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
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
                    (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCrmExtensionsCardsDev202609AppIdCardIdQueryKey>
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
              (typeof client.crm.extensions)['cards-dev']['2026-09'][':appId'][':cardId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmExtensionsCardsDev202609AppIdCardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmExtensionsCardsDev202609AppIdCardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.extensions['cards-dev']['2026-09'][':appId'][':cardId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
