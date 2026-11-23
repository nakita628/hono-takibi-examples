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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1PaymentExperienceWebProfilesQueryKey() {
  return ['v1', '/v1/payment-experience/web-profiles'] as const
}

export function getV1PaymentExperienceWebProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-experience']['web-profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentExperienceWebProfilesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['payment-experience']['web-profiles'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentExperienceWebProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-experience']['web-profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV1PaymentExperienceWebProfilesQueryKey>
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
      ...getV1PaymentExperienceWebProfilesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1PaymentExperienceWebProfiles<
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
                  ReturnType<(typeof client.v1)['payment-experience']['web-profiles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['payment-experience']['web-profiles']['$post']>,
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
    const mutationDefaults = getPostV1PaymentExperienceWebProfilesMutationOptions<
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

export function getV1PaymentExperienceWebProfilesIdQueryKey(
  args: InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>,
) {
  return ['v1', '/v1/payment-experience/web-profiles/:id', args] as const
}

export function getV1PaymentExperienceWebProfilesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentExperienceWebProfilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['payment-experience']['web-profiles'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentExperienceWebProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']
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
                    (typeof client.v1)['payment-experience']['web-profiles'][':id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1PaymentExperienceWebProfilesIdQueryKey>
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
      ...getV1PaymentExperienceWebProfilesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1PaymentExperienceWebProfilesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutV1PaymentExperienceWebProfilesIdMutationOptions<
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

export function createDeleteV1PaymentExperienceWebProfilesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteV1PaymentExperienceWebProfilesIdMutationOptions<
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

export function createPatchV1PaymentExperienceWebProfilesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPatchV1PaymentExperienceWebProfilesIdMutationOptions<
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
