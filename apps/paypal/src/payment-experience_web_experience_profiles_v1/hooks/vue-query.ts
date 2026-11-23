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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1PaymentExperienceWebProfilesQueryKey() {
  return ['v1', '/v1/payment-experience/web-profiles'] as const
}

export function getV1PaymentExperienceWebProfilesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PaymentExperienceWebProfilesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['payment-experience']['web-profiles'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentExperienceWebProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-experience']['web-profiles']['$get']>>
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
                  ReturnType<(typeof client.v1)['payment-experience']['web-profiles']['$get']>
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
                  ReturnType<(typeof client.v1)['payment-experience']['web-profiles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PaymentExperienceWebProfilesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['payment-experience']['web-profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentExperienceWebProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PaymentExperienceWebProfilesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['payment-experience']['web-profiles'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PaymentExperienceWebProfilesMutationKey() {
  return ['v1', '/v1/payment-experience/web-profiles', 'POST'] as const
}

export function getPostV1PaymentExperienceWebProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-experience']['web-profiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['payment-experience']['web-profiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentExperienceWebProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['payment-experience']['web-profiles']['$post']>,
    ) {
      return parseResponse(client.v1['payment-experience']['web-profiles'].$post(args, options))
    },
  })
}

export function usePostV1PaymentExperienceWebProfiles<
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
                  ReturnType<(typeof client.v1)['payment-experience']['web-profiles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['payment-experience']['web-profiles']['$post']>,
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
  const mutationDefaults = getPostV1PaymentExperienceWebProfilesMutationOptions<
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

export function getV1PaymentExperienceWebProfilesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>
  >,
) {
  return ['v1', '/v1/payment-experience/web-profiles/:id', toValue(args)] as const
}

export function getV1PaymentExperienceWebProfilesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentExperienceWebProfilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['payment-experience']['web-profiles'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentExperienceWebProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>
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
                    (typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']
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
                    (typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PaymentExperienceWebProfilesIdQueryKey>
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
            ReturnType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentExperienceWebProfilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentExperienceWebProfilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['payment-experience']['web-profiles'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PaymentExperienceWebProfilesIdMutationKey() {
  return ['v1', '/v1/payment-experience/web-profiles/:id', 'PUT'] as const
}

export function getPutV1PaymentExperienceWebProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PaymentExperienceWebProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['payment-experience']['web-profiles'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['payment-experience']['web-profiles'][':id'].$put(args, options),
      )
    },
  })
}

export function usePutV1PaymentExperienceWebProfilesId<
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
                      (typeof client.v1)['payment-experience']['web-profiles'][':id']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$put']>,
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
  const mutationDefaults = getPutV1PaymentExperienceWebProfilesIdMutationOptions<
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

export function getDeleteV1PaymentExperienceWebProfilesIdMutationKey() {
  return ['v1', '/v1/payment-experience/web-profiles/:id', 'DELETE'] as const
}

export function getDeleteV1PaymentExperienceWebProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PaymentExperienceWebProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['payment-experience']['web-profiles'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1['payment-experience']['web-profiles'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1PaymentExperienceWebProfilesId<
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
                      (typeof client.v1)['payment-experience']['web-profiles'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1)['payment-experience']['web-profiles'][':id']['$delete']
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
  const mutationDefaults = getDeleteV1PaymentExperienceWebProfilesIdMutationOptions<
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

export function getPatchV1PaymentExperienceWebProfilesIdMutationKey() {
  return ['v1', '/v1/payment-experience/web-profiles/:id', 'PATCH'] as const
}

export function getPatchV1PaymentExperienceWebProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PaymentExperienceWebProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['payment-experience']['web-profiles'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1['payment-experience']['web-profiles'][':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1PaymentExperienceWebProfilesId<
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
                      (typeof client.v1)['payment-experience']['web-profiles'][':id']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1)['payment-experience']['web-profiles'][':id']['$patch']
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
  const mutationDefaults = getPatchV1PaymentExperienceWebProfilesIdMutationOptions<
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
