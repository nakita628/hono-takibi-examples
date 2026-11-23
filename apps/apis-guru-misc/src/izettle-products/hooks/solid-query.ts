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

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getOrganizationsOrganizationUuidCategoriesV2QueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['categories']['v2']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationUuid/categories/v2', args] as const
}

export function getOrganizationsOrganizationUuidCategoriesV2QueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['categories']['v2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationUuidCategoriesV2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationUuid'].categories.v2.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationUuidCategoriesV2<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationUuid']['categories']['v2']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['categories']['v2']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationUuidCategoriesV2QueryKey>
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
      ...getOrganizationsOrganizationUuidCategoriesV2QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationUuidCategoriesV2<
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
    const mutationDefaults = getPostOrganizationsOrganizationUuidCategoriesV2MutationOptions<
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

export function createDeleteOrganizationsOrganizationUuidCategoriesV2CategoryUuid<
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
    const mutationDefaults =
      getDeleteOrganizationsOrganizationUuidCategoriesV2CategoryUuidMutationOptions<
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

export function createPatchOrganizationsOrganizationUuidCategoriesV2CategoryUuid<
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
    const mutationDefaults =
      getPatchOrganizationsOrganizationUuidCategoriesV2CategoryUuidMutationOptions<
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

export function getOrganizationsOrganizationUuidDiscountsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationUuid']['discounts']['$get']>,
) {
  return ['organizations', '/organizations/:organizationUuid/discounts', args] as const
}

export function getOrganizationsOrganizationUuidDiscountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationUuid']['discounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationUuid']['discounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationUuidDiscountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationUuid'].discounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationUuidDiscounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationUuid']['discounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationUuid']['discounts']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['discounts']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationUuidDiscountsQueryKey>
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
      ...getOrganizationsOrganizationUuidDiscountsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationUuidDiscounts<
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
    const mutationDefaults = getPostOrganizationsOrganizationUuidDiscountsMutationOptions<
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

export function getOrganizationsOrganizationUuidDiscountsDiscountUuidQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'organizations',
    '/organizations/:organizationUuid/discounts/:discountUuid',
    keyArgs,
  ] as const
}

export function getOrganizationsOrganizationUuidDiscountsDiscountUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationUuidDiscountsDiscountUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationUuid'].discounts[':discountUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationUuidDiscountsDiscountUuid<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationUuidDiscountsDiscountUuidQueryKey>
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
      ...getOrganizationsOrganizationUuidDiscountsDiscountUuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutOrganizationsOrganizationUuidDiscountsDiscountUuid<
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
    const mutationDefaults =
      getPutOrganizationsOrganizationUuidDiscountsDiscountUuidMutationOptions<
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

export function createDeleteOrganizationsOrganizationUuidDiscountsDiscountUuid<
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
    const mutationDefaults =
      getDeleteOrganizationsOrganizationUuidDiscountsDiscountUuidMutationOptions<
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

export function getOrganizationsOrganizationUuidImagesQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationUuid']['images']['$get']>,
) {
  return ['organizations', '/organizations/:organizationUuid/images', args] as const
}

export function getOrganizationsOrganizationUuidImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationUuid']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationUuid']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationUuidImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationUuid'].images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationUuidImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationUuid']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationUuid']['images']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getOrganizationsOrganizationUuidImagesQueryKey>
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
      ...getOrganizationsOrganizationUuidImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationUuidImportStatusQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['import']['status']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationUuid/import/status', args] as const
}

export function getOrganizationsOrganizationUuidImportStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['import']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationUuidImportStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationUuid'].import.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationUuidImportStatus<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationUuid']['import']['status']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['import']['status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationUuidImportStatusQueryKey>
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
      ...getOrganizationsOrganizationUuidImportStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationUuidImportStatusImportUuidQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['import']['status'][':importUuid']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organizationUuid/import/status/:importUuid',
    args,
  ] as const
}

export function getOrganizationsOrganizationUuidImportStatusImportUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['import']['status'][':importUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationUuidImportStatusImportUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationUuid'].import.status[':importUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationUuidImportStatusImportUuid<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationUuid']['import']['status'][':importUuid']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['import']['status'][':importUuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationUuidImportStatusImportUuidQueryKey>
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
      ...getOrganizationsOrganizationUuidImportStatusImportUuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationUuidImportV2<
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
    const mutationDefaults = getPostOrganizationsOrganizationUuidImportV2MutationOptions<
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

export function getOrganizationsOrganizationUuidLibraryQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationUuid']['library']['$get']>,
) {
  return ['organizations', '/organizations/:organizationUuid/library', args] as const
}

export function getOrganizationsOrganizationUuidLibraryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationUuid']['library']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationUuid']['library']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationUuidLibraryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationUuid'].library.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationUuidLibrary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationUuid']['library']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationUuid']['library']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getOrganizationsOrganizationUuidLibraryQueryKey>
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
      ...getOrganizationsOrganizationUuidLibraryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationUuidProductsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationUuid']['products']['$get']>,
) {
  return ['organizations', '/organizations/:organizationUuid/products', args] as const
}

export function getOrganizationsOrganizationUuidProductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationUuid']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationUuid']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationUuidProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationUuid'].products.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationUuidProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationUuid']['products']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getOrganizationsOrganizationUuidProductsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostOrganizationsOrganizationUuidProducts<
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
    const mutationDefaults = getPostOrganizationsOrganizationUuidProductsMutationOptions<
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

export function createDeleteOrganizationsOrganizationUuidProducts<
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
    const mutationDefaults = getDeleteOrganizationsOrganizationUuidProductsMutationOptions<
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

export function createPostOrganizationsOrganizationUuidProductsOnlineSlug<
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
    const mutationDefaults = getPostOrganizationsOrganizationUuidProductsOnlineSlugMutationOptions<
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

export function getOrganizationsOrganizationUuidProductsOptionsQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products']['options']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationUuid/products/options', args] as const
}

export function getOrganizationsOrganizationUuidProductsOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationUuidProductsOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationUuid'].products.options.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationUuidProductsOptions<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products']['options']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['products']['options']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationUuidProductsOptionsQueryKey>
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
      ...getOrganizationsOrganizationUuidProductsOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationUuidProductsV2QueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products']['v2']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationUuid/products/v2', args] as const
}

export function getOrganizationsOrganizationUuidProductsV2QueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products']['v2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationUuidProductsV2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationUuid'].products.v2.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationUuidProductsV2<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products']['v2']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['products']['v2']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationUuidProductsV2QueryKey>
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
      ...getOrganizationsOrganizationUuidProductsV2QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationUuidProductsV2CountQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products']['v2']['count']['$get']
  >,
) {
  return ['organizations', '/organizations/:organizationUuid/products/v2/count', args] as const
}

export function getOrganizationsOrganizationUuidProductsV2CountQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products']['v2']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationUuidProductsV2CountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationUuid'].products.v2.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationUuidProductsV2Count<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products']['v2']['count']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['products']['v2']['count']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationUuidProductsV2CountQueryKey>
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
      ...getOrganizationsOrganizationUuidProductsV2CountQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutOrganizationsOrganizationUuidProductsV2ProductUuid<
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
    const mutationDefaults =
      getPutOrganizationsOrganizationUuidProductsV2ProductUuidMutationOptions<
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

export function getOrganizationsOrganizationUuidProductsProductUuidQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'organizations',
    '/organizations/:organizationUuid/products/:productUuid',
    keyArgs,
  ] as const
}

export function getOrganizationsOrganizationUuidProductsProductUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrganizationsOrganizationUuidProductsProductUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationUuid'].products[':productUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationUuidProductsProductUuid<
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
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$get']
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
                    (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationUuidProductsProductUuidQueryKey>
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
      ...getOrganizationsOrganizationUuidProductsProductUuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteOrganizationsOrganizationUuidProductsProductUuid<
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
    const mutationDefaults =
      getDeleteOrganizationsOrganizationUuidProductsProductUuidMutationOptions<
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

export function getV1TaxesQueryKey() {
  return ['v1', '/v1/taxes'] as const
}

export function getV1TaxesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TaxesQueryKey>
  >({
    queryKey: getV1TaxesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.taxes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Taxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1TaxesQueryKey>
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
    return { ...getV1TaxesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostV1Taxes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.taxes.$post>,
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
    const mutationDefaults = getPostV1TaxesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TaxesCountQueryKey() {
  return ['v1', '/v1/taxes/count'] as const
}

export function getV1TaxesCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.count.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxesCountQueryKey>
  >({
    queryKey: getV1TaxesCountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.taxes.count.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TaxesCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.count.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1TaxesCountQueryKey>
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
    return { ...getV1TaxesCountQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1TaxesSettingsQueryKey() {
  return ['v1', '/v1/taxes/settings'] as const
}

export function getV1TaxesSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxesSettingsQueryKey>
  >({
    queryKey: getV1TaxesSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.taxes.settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TaxesSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.settings.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1TaxesSettingsQueryKey>
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
    return { ...getV1TaxesSettingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutV1TaxesSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.taxes.settings.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.taxes.settings.$put>,
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
    const mutationDefaults = getPutV1TaxesSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TaxesTaxRateUuidQueryKey(
  args: InferRequestType<(typeof client.v1.taxes)[':taxRateUuid']['$get']>,
) {
  return ['v1', '/v1/taxes/:taxRateUuid', args] as const
}

export function getV1TaxesTaxRateUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxes)[':taxRateUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.taxes)[':taxRateUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxes)[':taxRateUuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TaxesTaxRateUuidQueryKey>
  >({
    queryKey: getV1TaxesTaxRateUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.taxes[':taxRateUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TaxesTaxRateUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.taxes)[':taxRateUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.taxes)[':taxRateUuid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.taxes)[':taxRateUuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1TaxesTaxRateUuidQueryKey>
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
    return { ...getV1TaxesTaxRateUuidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1TaxesTaxRateUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutV1TaxesTaxRateUuidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1TaxesTaxRateUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteV1TaxesTaxRateUuidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
