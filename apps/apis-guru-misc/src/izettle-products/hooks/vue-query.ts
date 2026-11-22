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

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getOrganizationsOrganizationUuidCategoriesV2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['categories']['v2']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationUuid/categories/v2', toValue(args)] as const
}

export function getOrganizationsOrganizationUuidCategoriesV2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['categories']['v2']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationUuidCategoriesV2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationUuid'].categories.v2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationUuidCategoriesV2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationUuid']['categories']['v2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['categories']['v2']['$get']>
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
                    (typeof client.organizations)[':organizationUuid']['categories']['v2']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['categories']['v2']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationUuidCategoriesV2QueryKey>
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
              (typeof client.organizations)[':organizationUuid']['categories']['v2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationUuidCategoriesV2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationUuidCategoriesV2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationUuid'].categories.v2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationUuidCategoriesV2MutationKey() {
  return ['organizations', '/organizations/:organizationUuid/categories/v2', 'POST'] as const
}

export function getPostOrganizationsOrganizationUuidCategoriesV2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationUuid']['categories']['v2']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['categories']['v2']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationUuidCategoriesV2MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationUuid']['categories']['v2']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationUuid'].categories.v2.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationUuidCategoriesV2<
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
                    (typeof client.organizations)[':organizationUuid']['categories']['v2']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationUuid']['categories']['v2']['$post']
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
  const mutationDefaults = getPostOrganizationsOrganizationUuidCategoriesV2MutationOptions<
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

export function getDeleteOrganizationsOrganizationUuidCategoriesV2CategoryUuidMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationUuid/categories/v2/:categoryUuid',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationUuidCategoriesV2CategoryUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationUuid']['categories']['v2'][':categoryUuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['categories']['v2'][':categoryUuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationUuidCategoriesV2CategoryUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationUuid']['categories']['v2'][':categoryUuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationUuid'].categories.v2[':categoryUuid'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganizationsOrganizationUuidCategoriesV2CategoryUuid<
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
                      (typeof client.organizations)[':organizationUuid']['categories']['v2'][':categoryUuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationUuid']['categories']['v2'][':categoryUuid']['$delete']
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
    getDeleteOrganizationsOrganizationUuidCategoriesV2CategoryUuidMutationOptions<
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

export function getPatchOrganizationsOrganizationUuidCategoriesV2CategoryUuidMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationUuid/categories/v2/:categoryUuid',
    'PATCH',
  ] as const
}

export function getPatchOrganizationsOrganizationUuidCategoriesV2CategoryUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationUuid']['categories']['v2'][':categoryUuid']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['categories']['v2'][':categoryUuid']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationsOrganizationUuidCategoriesV2CategoryUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationUuid']['categories']['v2'][':categoryUuid']['$patch']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationUuid'].categories.v2[':categoryUuid'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchOrganizationsOrganizationUuidCategoriesV2CategoryUuid<
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
                      (typeof client.organizations)[':organizationUuid']['categories']['v2'][':categoryUuid']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationUuid']['categories']['v2'][':categoryUuid']['$patch']
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
    getPatchOrganizationsOrganizationUuidCategoriesV2CategoryUuidMutationOptions<
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

export function getOrganizationsOrganizationUuidDiscountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['discounts']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationUuid/discounts', toValue(args)] as const
}

export function getOrganizationsOrganizationUuidDiscountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['discounts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationUuidDiscountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationUuid'].discounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationUuidDiscounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationUuid']['discounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['discounts']['$get']>
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
                    (typeof client.organizations)[':organizationUuid']['discounts']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['discounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationUuidDiscountsQueryKey>
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
            ReturnType<(typeof client.organizations)[':organizationUuid']['discounts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationUuidDiscountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationUuidDiscountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationUuid'].discounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationUuidDiscountsMutationKey() {
  return ['organizations', '/organizations/:organizationUuid/discounts', 'POST'] as const
}

export function getPostOrganizationsOrganizationUuidDiscountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organizationUuid']['discounts']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationUuid']['discounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationUuidDiscountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationUuid']['discounts']['$post']
      >,
    ) {
      return parseResponse(client.organizations[':organizationUuid'].discounts.$post(args, options))
    },
  })
}

export function usePostOrganizationsOrganizationUuidDiscounts<
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
                    (typeof client.organizations)[':organizationUuid']['discounts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationUuid']['discounts']['$post']
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
  const mutationDefaults = getPostOrganizationsOrganizationUuidDiscountsMutationOptions<
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

export function getOrganizationsOrganizationUuidDiscountsDiscountUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'organizations',
    '/organizations/:organizationUuid/discounts/:discountUuid',
    keyArgs,
  ] as const
}

export function getOrganizationsOrganizationUuidDiscountsDiscountUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationUuidDiscountsDiscountUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationUuid'].discounts[':discountUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationUuidDiscountsDiscountUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationUuidDiscountsDiscountUuidQueryKey>
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
              (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationUuidDiscountsDiscountUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationUuidDiscountsDiscountUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationUuid'].discounts[':discountUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsOrganizationUuidDiscountsDiscountUuidMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationUuid/discounts/:discountUuid',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationUuidDiscountsDiscountUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationUuidDiscountsDiscountUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationUuid'].discounts[':discountUuid'].$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsOrganizationUuidDiscountsDiscountUuid<
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
                      (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$put']
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
  const mutationDefaults = getPutOrganizationsOrganizationUuidDiscountsDiscountUuidMutationOptions<
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

export function getDeleteOrganizationsOrganizationUuidDiscountsDiscountUuidMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationUuid/discounts/:discountUuid',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationUuidDiscountsDiscountUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationUuidDiscountsDiscountUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationUuid'].discounts[':discountUuid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsOrganizationUuidDiscountsDiscountUuid<
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
                      (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$delete']
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
    getDeleteOrganizationsOrganizationUuidDiscountsDiscountUuidMutationOptions<
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

export function getOrganizationsOrganizationUuidImagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['images']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationUuid/images', toValue(args)] as const
}

export function getOrganizationsOrganizationUuidImagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['images']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationUuidImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationUuid'].images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationUuidImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationUuid']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['images']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationUuid']['images']['$get']>
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
                  ReturnType<(typeof client.organizations)[':organizationUuid']['images']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationUuidImagesQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organizationUuid']['images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationUuidImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationUuidImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationUuid'].images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationUuidImportStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['import']['status']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationUuid/import/status', toValue(args)] as const
}

export function getOrganizationsOrganizationUuidImportStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['import']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationUuidImportStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationUuid'].import.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationUuidImportStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationUuid']['import']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['import']['status']['$get']>
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
                    (typeof client.organizations)[':organizationUuid']['import']['status']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['import']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationUuidImportStatusQueryKey>
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
              (typeof client.organizations)[':organizationUuid']['import']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationUuidImportStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationUuidImportStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationUuid'].import.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationUuidImportStatusImportUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['import']['status'][':importUuid']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationUuid/import/status/:importUuid',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationUuidImportStatusImportUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['import']['status'][':importUuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationUuidImportStatusImportUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationUuid'].import.status[':importUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationUuidImportStatusImportUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organizationUuid']['import']['status'][':importUuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['import']['status'][':importUuid']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['import']['status'][':importUuid']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['import']['status'][':importUuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationUuidImportStatusImportUuidQueryKey>
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
              (typeof client.organizations)[':organizationUuid']['import']['status'][':importUuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationUuidImportStatusImportUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationUuidImportStatusImportUuidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationUuid'].import.status[':importUuid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationUuidImportV2MutationKey() {
  return ['organizations', '/organizations/:organizationUuid/import/v2', 'POST'] as const
}

export function getPostOrganizationsOrganizationUuidImportV2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organizationUuid']['import']['v2']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationUuid']['import']['v2']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationUuidImportV2MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationUuid']['import']['v2']['$post']
      >,
    ) {
      return parseResponse(client.organizations[':organizationUuid'].import.v2.$post(args, options))
    },
  })
}

export function usePostOrganizationsOrganizationUuidImportV2<
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
                    (typeof client.organizations)[':organizationUuid']['import']['v2']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationUuid']['import']['v2']['$post']
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
  const mutationDefaults = getPostOrganizationsOrganizationUuidImportV2MutationOptions<
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

export function getOrganizationsOrganizationUuidLibraryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['library']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationUuid/library', toValue(args)] as const
}

export function getOrganizationsOrganizationUuidLibraryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['library']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationUuidLibraryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationUuid'].library.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationUuidLibrary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationUuid']['library']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['library']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationUuid']['library']['$get']>
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
                  ReturnType<(typeof client.organizations)[':organizationUuid']['library']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationUuidLibraryQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organizationUuid']['library']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationUuidLibraryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationUuidLibraryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationUuid'].library.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationUuidProductsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['products']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationUuid/products', toValue(args)] as const
}

export function getOrganizationsOrganizationUuidProductsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['products']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationUuidProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationUuid'].products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationUuidProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationUuid']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['products']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationUuid']['products']['$get']>
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
                  ReturnType<(typeof client.organizations)[':organizationUuid']['products']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationUuidProductsQueryKey>
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
            ReturnType<(typeof client.organizations)[':organizationUuid']['products']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationUuidProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationUuidProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationUuid'].products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsOrganizationUuidProductsMutationKey() {
  return ['organizations', '/organizations/:organizationUuid/products', 'POST'] as const
}

export function getPostOrganizationsOrganizationUuidProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organizationUuid']['products']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationUuid']['products']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationUuidProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationUuid']['products']['$post']
      >,
    ) {
      return parseResponse(client.organizations[':organizationUuid'].products.$post(args, options))
    },
  })
}

export function usePostOrganizationsOrganizationUuidProducts<
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
                    (typeof client.organizations)[':organizationUuid']['products']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationUuid']['products']['$post']>,
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
  const mutationDefaults = getPostOrganizationsOrganizationUuidProductsMutationOptions<
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

export function getDeleteOrganizationsOrganizationUuidProductsMutationKey() {
  return ['organizations', '/organizations/:organizationUuid/products', 'DELETE'] as const
}

export function getDeleteOrganizationsOrganizationUuidProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationUuid']['products']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationUuid']['products']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationUuidProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationUuid']['products']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationUuid'].products.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsOrganizationUuidProducts<
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
                      (typeof client.organizations)[':organizationUuid']['products']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationUuid']['products']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsOrganizationUuidProductsMutationOptions<
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

export function getPostOrganizationsOrganizationUuidProductsOnlineSlugMutationKey() {
  return ['organizations', '/organizations/:organizationUuid/products/online/slug', 'POST'] as const
}

export function getPostOrganizationsOrganizationUuidProductsOnlineSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationUuid']['products']['online']['slug']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['products']['online']['slug']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationUuidProductsOnlineSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationUuid']['products']['online']['slug']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationUuid'].products.online.slug.$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrganizationUuidProductsOnlineSlug<
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
                    (typeof client.organizations)[':organizationUuid']['products']['online']['slug']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationUuid']['products']['online']['slug']['$post']
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
  const mutationDefaults = getPostOrganizationsOrganizationUuidProductsOnlineSlugMutationOptions<
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

export function getOrganizationsOrganizationUuidProductsOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['products']['options']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationUuid/products/options',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationUuidProductsOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['products']['options']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationUuidProductsOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationUuid'].products.options.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationUuidProductsOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organizationUuid']['products']['options']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['products']['options']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['products']['options']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['products']['options']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationUuidProductsOptionsQueryKey>
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
              (typeof client.organizations)[':organizationUuid']['products']['options']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationUuidProductsOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationUuidProductsOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationUuid'].products.options.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationUuidProductsV2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['products']['v2']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationUuid/products/v2', toValue(args)] as const
}

export function getOrganizationsOrganizationUuidProductsV2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['products']['v2']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationUuidProductsV2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationUuid'].products.v2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationUuidProductsV2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organizationUuid']['products']['v2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationUuid']['products']['v2']['$get']>
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
                    (typeof client.organizations)[':organizationUuid']['products']['v2']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['products']['v2']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationUuidProductsV2QueryKey>
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
            ReturnType<(typeof client.organizations)[':organizationUuid']['products']['v2']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationUuidProductsV2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationUuidProductsV2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationUuid'].products.v2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationUuidProductsV2CountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['products']['v2']['count']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationUuid/products/v2/count',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationUuidProductsV2CountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['products']['v2']['count']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationUuidProductsV2CountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationUuid'].products.v2.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationUuidProductsV2Count<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organizationUuid']['products']['v2']['count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['products']['v2']['count']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['products']['v2']['count']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['products']['v2']['count']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationUuidProductsV2CountQueryKey>
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
              (typeof client.organizations)[':organizationUuid']['products']['v2']['count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationUuidProductsV2CountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationUuidProductsV2CountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationUuid'].products.v2.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationsOrganizationUuidProductsV2ProductUuidMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationUuid/products/v2/:productUuid',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationUuidProductsV2ProductUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationUuid']['products']['v2'][':productUuid']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['products']['v2'][':productUuid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationUuidProductsV2ProductUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationUuid']['products']['v2'][':productUuid']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationUuid'].products.v2[':productUuid'].$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsOrganizationUuidProductsV2ProductUuid<
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
                      (typeof client.organizations)[':organizationUuid']['products']['v2'][':productUuid']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationUuid']['products']['v2'][':productUuid']['$put']
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
  const mutationDefaults = getPutOrganizationsOrganizationUuidProductsV2ProductUuidMutationOptions<
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

export function getOrganizationsOrganizationUuidProductsProductUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'organizations',
    '/organizations/:organizationUuid/products/:productUuid',
    keyArgs,
  ] as const
}

export function getOrganizationsOrganizationUuidProductsProductUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationUuidProductsProductUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationUuid'].products[':productUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationUuidProductsProductUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationUuidProductsProductUuidQueryKey>
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
              (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationUuidProductsProductUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationUuidProductsProductUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationUuid'].products[':productUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrganizationsOrganizationUuidProductsProductUuidMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationUuid/products/:productUuid',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationUuidProductsProductUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationUuidProductsProductUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationUuid'].products[':productUuid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsOrganizationUuidProductsProductUuid<
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
                      (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsOrganizationUuidProductsProductUuidMutationOptions<
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

export function getV1TaxesQueryKey() {
  return ['v1', '/v1/taxes'] as const
}

export function getV1TaxesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1TaxesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.taxes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Taxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.$get>>>>
          >,
          ReturnType<typeof getV1TaxesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TaxesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1TaxesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.taxes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TaxesMutationKey() {
  return ['v1', '/v1/taxes', 'POST'] as const
}

export function getPostV1TaxesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.taxes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TaxesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.taxes.$post>) {
      return parseResponse(client.v1.taxes.$post(args, options))
    },
  })
}

export function usePostV1Taxes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.taxes.$post>,
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
  const mutationDefaults = getPostV1TaxesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1TaxesCountQueryKey() {
  return ['v1', '/v1/taxes/count'] as const
}

export function getV1TaxesCountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1TaxesCountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.taxes.count.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1TaxesCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.count.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.count.$get>>>>
          >,
          ReturnType<typeof getV1TaxesCountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxesCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1TaxesCountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.taxes.count.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TaxesSettingsQueryKey() {
  return ['v1', '/v1/taxes/settings'] as const
}

export function getV1TaxesSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1TaxesSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.taxes.settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TaxesSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.settings.$get>>>
            >
          >,
          ReturnType<typeof getV1TaxesSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxesSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1TaxesSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.taxes.settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1TaxesSettingsMutationKey() {
  return ['v1', '/v1/taxes/settings', 'PUT'] as const
}

export function getPutV1TaxesSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.settings.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.taxes.settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TaxesSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.taxes.settings.$put>) {
      return parseResponse(client.v1.taxes.settings.$put(args, options))
    },
  })
}

export function usePutV1TaxesSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.settings.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.taxes.settings.$put>,
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
  const mutationDefaults = getPutV1TaxesSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getV1TaxesTaxRateUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.taxes)[':taxRateUuid']['$get']>>,
) {
  return ['v1', '/v1/taxes/:taxRateUuid', toValue(args)] as const
}

export function getV1TaxesTaxRateUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.taxes)[':taxRateUuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TaxesTaxRateUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.taxes[':taxRateUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TaxesTaxRateUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxes)[':taxRateUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.taxes)[':taxRateUuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.taxes)[':taxRateUuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.taxes)[':taxRateUuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TaxesTaxRateUuidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxes)[':taxRateUuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxesTaxRateUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TaxesTaxRateUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.taxes[':taxRateUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1TaxesTaxRateUuidMutationKey() {
  return ['v1', '/v1/taxes/:taxRateUuid', 'PUT'] as const
}

export function getPutV1TaxesTaxRateUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxes)[':taxRateUuid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.taxes)[':taxRateUuid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TaxesTaxRateUuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.taxes)[':taxRateUuid']['$put']>) {
      return parseResponse(client.v1.taxes[':taxRateUuid'].$put(args, options))
    },
  })
}

export function usePutV1TaxesTaxRateUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.taxes)[':taxRateUuid']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.taxes)[':taxRateUuid']['$put']>,
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
  const mutationDefaults = getPutV1TaxesTaxRateUuidMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1TaxesTaxRateUuidMutationKey() {
  return ['v1', '/v1/taxes/:taxRateUuid', 'DELETE'] as const
}

export function getDeleteV1TaxesTaxRateUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.taxes)[':taxRateUuid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.taxes)[':taxRateUuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TaxesTaxRateUuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.taxes)[':taxRateUuid']['$delete']>) {
      return parseResponse(client.v1.taxes[':taxRateUuid'].$delete(args, options))
    },
  })
}

export function useDeleteV1TaxesTaxRateUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.taxes)[':taxRateUuid']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.taxes)[':taxRateUuid']['$delete']>,
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
  const mutationDefaults = getDeleteV1TaxesTaxRateUuidMutationOptions<TError, TOnMutateResult>(
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
