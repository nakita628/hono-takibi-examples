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

export function getVKey() {
  return ['_v'] as const
}

export function getSessionsKey() {
  return ['sessions'] as const
}

export function getPostVCustomPricesRulesMutationKey() {
  return ['_v', '/_v/custom-prices/rules', 'POST'] as const
}

export function getPostVCustomPricesRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client._v)['custom-prices']['rules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client._v)['custom-prices']['rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVCustomPricesRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client._v)['custom-prices']['rules']['$post']>,
    ) {
      return parseResponse(client._v['custom-prices'].rules.$post(args, options))
    },
  })
}

export function createPostVCustomPricesRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client._v)['custom-prices']['rules']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client._v)['custom-prices']['rules']['$post']>,
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
    const mutationDefaults = getPostVCustomPricesRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVCustomPricesRulesPriceAssociationIdQueryKey(
  args: InferRequestType<
    (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['_v', '/_v/custom-prices/rules/:priceAssociationId', keyArgs] as const
}

export function getVCustomPricesRulesPriceAssociationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVCustomPricesRulesPriceAssociationIdQueryKey>
  >({
    queryKey: getVCustomPricesRulesPriceAssociationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client._v['custom-prices'].rules[':priceAssociationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVCustomPricesRulesPriceAssociationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$get']
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
                    (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVCustomPricesRulesPriceAssociationIdQueryKey>
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
      ...getVCustomPricesRulesPriceAssociationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutVCustomPricesRulesPriceAssociationIdMutationKey() {
  return ['_v', '/_v/custom-prices/rules/:priceAssociationId', 'PUT'] as const
}

export function getPutVCustomPricesRulesPriceAssociationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVCustomPricesRulesPriceAssociationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$put']
      >,
    ) {
      return parseResponse(
        client._v['custom-prices'].rules[':priceAssociationId'].$put(args, options),
      )
    },
  })
}

export function createPutVCustomPricesRulesPriceAssociationId<
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
                    (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$put']
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
    const mutationDefaults = getPutVCustomPricesRulesPriceAssociationIdMutationOptions<
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

export function getDeleteVCustomPricesRulesPriceAssociationIdMutationKey() {
  return ['_v', '/_v/custom-prices/rules/:priceAssociationId', 'DELETE'] as const
}

export function getDeleteVCustomPricesRulesPriceAssociationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVCustomPricesRulesPriceAssociationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$delete']
      >,
    ) {
      return parseResponse(
        client._v['custom-prices'].rules[':priceAssociationId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteVCustomPricesRulesPriceAssociationId<
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
                    (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$delete']
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
    const mutationDefaults = getDeleteVCustomPricesRulesPriceAssociationIdMutationOptions<
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

export function getVCustomPricesSessionSchemaQueryKey(
  args: InferRequestType<(typeof client._v)['custom-prices']['session']['schema']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['_v', '/_v/custom-prices/session/schema', keyArgs] as const
}

export function getVCustomPricesSessionSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client._v)['custom-prices']['session']['schema']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client._v)['custom-prices']['session']['schema']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client._v)['custom-prices']['session']['schema']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVCustomPricesSessionSchemaQueryKey>
  >({
    queryKey: getVCustomPricesSessionSchemaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client._v['custom-prices'].session.schema.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVCustomPricesSessionSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client._v)['custom-prices']['session']['schema']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client._v)['custom-prices']['session']['schema']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client._v)['custom-prices']['session']['schema']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVCustomPricesSessionSchemaQueryKey>
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
      ...getVCustomPricesSessionSchemaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostVCustomPricesSessionSchemaMutationKey() {
  return ['_v', '/_v/custom-prices/session/schema', 'POST'] as const
}

export function getPostVCustomPricesSessionSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client._v)['custom-prices']['session']['schema']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client._v)['custom-prices']['session']['schema']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVCustomPricesSessionSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client._v)['custom-prices']['session']['schema']['$post']>,
    ) {
      return parseResponse(client._v['custom-prices'].session.schema.$post(args, options))
    },
  })
}

export function createPostVCustomPricesSessionSchema<
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
                  ReturnType<(typeof client._v)['custom-prices']['session']['schema']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client._v)['custom-prices']['session']['schema']['$post']>,
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
    const mutationDefaults = getPostVCustomPricesSessionSchemaMutationOptions<
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

export function getPostSessionsIndexMutationKey() {
  return ['sessions', '/sessions/', 'POST'] as const
}

export function getPostSessionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sessions.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sessions.index.$post>) {
      return parseResponse(client.sessions.index.$post(args, options))
    },
  })
}

export function createPostSessionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sessions.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sessions.index.$post>,
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
    const mutationDefaults = getPostSessionsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
