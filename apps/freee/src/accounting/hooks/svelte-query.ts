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

export function getApiKey() {
  return ['api'] as const
}

export function getApi1PartnersQueryKey(
  args: InferRequestType<(typeof client.api)['1']['partners']['$get']>,
) {
  return ['api', '/api/1/partners', args] as const
}

export function getApi1PartnersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['partners']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['partners']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['partners']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PartnersQueryKey>
  >({
    queryKey: getApi1PartnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].partners.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1Partners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['partners']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['partners']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['partners']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1PartnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1PartnersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApi1PartnersMutationKey() {
  return ['api', '/api/1/partners', 'POST'] as const
}

export function getPostApi1PartnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['partners']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['partners']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1PartnersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['partners']['$post']>) {
      return parseResponse(client.api['1'].partners.$post(args, options))
    },
  })
}

export function createPostApi1Partners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['partners']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['partners']['$post']>,
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
    const mutationDefaults = getPostApi1PartnersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1PartnersIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['partners'][':id']['$get']>,
) {
  return ['api', '/api/1/partners/:id', args] as const
}

export function getApi1PartnersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['partners'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PartnersIdQueryKey>
  >({
    queryKey: getApi1PartnersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].partners[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1PartnersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['partners'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1PartnersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1PartnersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApi1PartnersIdMutationKey() {
  return ['api', '/api/1/partners/:id', 'PUT'] as const
}

export function getPutApi1PartnersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['partners'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1PartnersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['partners'][':id']['$put']>) {
      return parseResponse(client.api['1'].partners[':id'].$put(args, options))
    },
  })
}

export function createPutApi1PartnersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['partners'][':id']['$put']>,
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
    const mutationDefaults = getPutApi1PartnersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApi1PartnersIdMutationKey() {
  return ['api', '/api/1/partners/:id', 'DELETE'] as const
}

export function getDeleteApi1PartnersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['partners'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1PartnersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['partners'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].partners[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1PartnersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['partners'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['partners'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1PartnersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApi1PartnersCodeCodeMutationKey() {
  return ['api', '/api/1/partners/code/:code', 'PUT'] as const
}

export function getPutApi1PartnersCodeCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['partners']['code'][':code']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['partners']['code'][':code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1PartnersCodeCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['partners']['code'][':code']['$put']>,
    ) {
      return parseResponse(client.api['1'].partners.code[':code'].$put(args, options))
    },
  })
}

export function createPutApi1PartnersCodeCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['partners']['code'][':code']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['partners']['code'][':code']['$put']>,
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
    const mutationDefaults = getPutApi1PartnersCodeCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApi1PartnersUpsertByCodeMutationKey() {
  return ['api', '/api/1/partners/upsert_by_code', 'PUT'] as const
}

export function getPutApi1PartnersUpsertByCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['partners']['upsert_by_code']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['partners']['upsert_by_code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1PartnersUpsertByCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['partners']['upsert_by_code']['$put']>,
    ) {
      return parseResponse(client.api['1'].partners.upsert_by_code.$put(args, options))
    },
  })
}

export function createPutApi1PartnersUpsertByCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['partners']['upsert_by_code']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['partners']['upsert_by_code']['$put']>,
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
    const mutationDefaults = getPutApi1PartnersUpsertByCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1FormsSelectablesQueryKey(
  args: InferRequestType<(typeof client.api)['1']['forms']['selectables']['$get']>,
) {
  return ['api', '/api/1/forms/selectables', args] as const
}

export function getApi1FormsSelectablesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['forms']['selectables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['forms']['selectables']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['forms']['selectables']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1FormsSelectablesQueryKey>
  >({
    queryKey: getApi1FormsSelectablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].forms.selectables.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1FormsSelectables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['forms']['selectables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['forms']['selectables']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['forms']['selectables']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1FormsSelectablesQueryKey>
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
      ...getApi1FormsSelectablesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1AccountItemsIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['account_items'][':id']['$get']>,
) {
  return ['api', '/api/1/account_items/:id', args] as const
}

export function getApi1AccountItemsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['account_items'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1AccountItemsIdQueryKey>
  >({
    queryKey: getApi1AccountItemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].account_items[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1AccountItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['account_items'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1AccountItemsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1AccountItemsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApi1AccountItemsIdMutationKey() {
  return ['api', '/api/1/account_items/:id', 'PUT'] as const
}

export function getPutApi1AccountItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['account_items'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1AccountItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['account_items'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].account_items[':id'].$put(args, options))
    },
  })
}

export function createPutApi1AccountItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['account_items'][':id']['$put']>,
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
    const mutationDefaults = getPutApi1AccountItemsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApi1AccountItemsIdMutationKey() {
  return ['api', '/api/1/account_items/:id', 'DELETE'] as const
}

export function getDeleteApi1AccountItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['account_items'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1AccountItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['account_items'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].account_items[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1AccountItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['account_items'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['account_items'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1AccountItemsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1AccountItemsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['account_items']['$get']>,
) {
  return ['api', '/api/1/account_items', args] as const
}

export function getApi1AccountItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['account_items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['account_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['account_items']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1AccountItemsQueryKey>
  >({
    queryKey: getApi1AccountItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].account_items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1AccountItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['account_items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['account_items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['account_items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1AccountItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1AccountItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApi1AccountItemsMutationKey() {
  return ['api', '/api/1/account_items', 'POST'] as const
}

export function getPostApi1AccountItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['account_items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['account_items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1AccountItemsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['account_items']['$post']>) {
      return parseResponse(client.api['1'].account_items.$post(args, options))
    },
  })
}

export function createPostApi1AccountItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['account_items']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['account_items']['$post']>,
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
    const mutationDefaults = getPostApi1AccountItemsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApi1AccountItemsCodeUpsertMutationKey() {
  return ['api', '/api/1/account_items/code/upsert', 'PUT'] as const
}

export function getPutApi1AccountItemsCodeUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['account_items']['code']['upsert']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['account_items']['code']['upsert']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1AccountItemsCodeUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['account_items']['code']['upsert']['$put']>,
    ) {
      return parseResponse(client.api['1'].account_items.code.upsert.$put(args, options))
    },
  })
}

export function createPutApi1AccountItemsCodeUpsert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['account_items']['code']['upsert']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['account_items']['code']['upsert']['$put']>,
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
    const mutationDefaults = getPutApi1AccountItemsCodeUpsertMutationOptions<
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

export function getApi1TagsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['tags']['$get']>,
) {
  return ['api', '/api/1/tags', args] as const
}

export function getApi1TagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1TagsQueryKey>
  >({
    queryKey: getApi1TagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1Tags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['tags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1TagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1TagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApi1TagsMutationKey() {
  return ['api', '/api/1/tags', 'POST'] as const
}

export function getPostApi1TagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1TagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['tags']['$post']>) {
      return parseResponse(client.api['1'].tags.$post(args, options))
    },
  })
}

export function createPostApi1Tags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['tags']['$post']>,
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
    const mutationDefaults = getPostApi1TagsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1TagsIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['tags'][':id']['$get']>,
) {
  return ['api', '/api/1/tags/:id', args] as const
}

export function getApi1TagsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['tags'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1TagsIdQueryKey>
  >({
    queryKey: getApi1TagsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].tags[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1TagsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['tags'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1TagsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1TagsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApi1TagsIdMutationKey() {
  return ['api', '/api/1/tags/:id', 'PUT'] as const
}

export function getPutApi1TagsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['tags'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1TagsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['tags'][':id']['$put']>) {
      return parseResponse(client.api['1'].tags[':id'].$put(args, options))
    },
  })
}

export function createPutApi1TagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['tags'][':id']['$put']>,
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
    const mutationDefaults = getPutApi1TagsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApi1TagsIdMutationKey() {
  return ['api', '/api/1/tags/:id', 'DELETE'] as const
}

export function getDeleteApi1TagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['tags'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1TagsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['tags'][':id']['$delete']>) {
      return parseResponse(client.api['1'].tags[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1TagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['tags'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['tags'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1TagsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1SectionsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['sections']['$get']>,
) {
  return ['api', '/api/1/sections', args] as const
}

export function getApi1SectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['sections']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1SectionsQueryKey>
  >({
    queryKey: getApi1SectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].sections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1Sections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['sections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['sections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['sections']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1SectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1SectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApi1SectionsMutationKey() {
  return ['api', '/api/1/sections', 'POST'] as const
}

export function getPostApi1SectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['sections']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['sections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1SectionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['sections']['$post']>) {
      return parseResponse(client.api['1'].sections.$post(args, options))
    },
  })
}

export function createPostApi1Sections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['sections']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['sections']['$post']>,
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
    const mutationDefaults = getPostApi1SectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1SectionsIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['sections'][':id']['$get']>,
) {
  return ['api', '/api/1/sections/:id', args] as const
}

export function getApi1SectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['sections'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1SectionsIdQueryKey>
  >({
    queryKey: getApi1SectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].sections[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1SectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['sections'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1SectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1SectionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApi1SectionsIdMutationKey() {
  return ['api', '/api/1/sections/:id', 'PUT'] as const
}

export function getPutApi1SectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['sections'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1SectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['sections'][':id']['$put']>) {
      return parseResponse(client.api['1'].sections[':id'].$put(args, options))
    },
  })
}

export function createPutApi1SectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['sections'][':id']['$put']>,
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
    const mutationDefaults = getPutApi1SectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApi1SectionsIdMutationKey() {
  return ['api', '/api/1/sections/:id', 'DELETE'] as const
}

export function getDeleteApi1SectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['sections'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1SectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['sections'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].sections[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1SectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['sections'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['sections'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1SectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApi1SectionsCodeUpsertMutationKey() {
  return ['api', '/api/1/sections/code/upsert', 'PUT'] as const
}

export function getPutApi1SectionsCodeUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['sections']['code']['upsert']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['sections']['code']['upsert']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1SectionsCodeUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['sections']['code']['upsert']['$put']>,
    ) {
      return parseResponse(client.api['1'].sections.code.upsert.$put(args, options))
    },
  })
}

export function createPutApi1SectionsCodeUpsert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['sections']['code']['upsert']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['sections']['code']['upsert']['$put']>,
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
    const mutationDefaults = getPutApi1SectionsCodeUpsertMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1InvoicesQueryKey(
  args: InferRequestType<(typeof client.api)['1']['invoices']['$get']>,
) {
  return ['api', '/api/1/invoices', args] as const
}

export function getApi1InvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['invoices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['invoices']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1InvoicesQueryKey>
  >({
    queryKey: getApi1InvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].invoices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1Invoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['invoices']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['invoices']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['invoices']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1InvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1InvoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApi1InvoicesIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['invoices'][':id']['$get']>,
) {
  return ['api', '/api/1/invoices/:id', args] as const
}

export function getApi1InvoicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['invoices'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['invoices'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['invoices'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1InvoicesIdQueryKey>
  >({
    queryKey: getApi1InvoicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].invoices[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1InvoicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['invoices'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['invoices'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['invoices'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1InvoicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1InvoicesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApi1QuotationsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['quotations']['$get']>,
) {
  return ['api', '/api/1/quotations', args] as const
}

export function getApi1QuotationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['quotations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['quotations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['quotations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1QuotationsQueryKey>
  >({
    queryKey: getApi1QuotationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].quotations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1Quotations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['quotations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['quotations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['quotations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1QuotationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1QuotationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApi1QuotationsIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['quotations'][':id']['$get']>,
) {
  return ['api', '/api/1/quotations/:id', args] as const
}

export function getApi1QuotationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['quotations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['quotations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['quotations'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1QuotationsIdQueryKey>
  >({
    queryKey: getApi1QuotationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].quotations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1QuotationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['quotations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['quotations'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['quotations'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1QuotationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1QuotationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApi1DealsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['deals']['$get']>,
) {
  return ['api', '/api/1/deals', args] as const
}

export function getApi1DealsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['deals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1DealsQueryKey>
  >({
    queryKey: getApi1DealsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].deals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1Deals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['deals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1DealsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1DealsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApi1DealsMutationKey() {
  return ['api', '/api/1/deals', 'POST'] as const
}

export function getPostApi1DealsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['deals']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1DealsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['deals']['$post']>) {
      return parseResponse(client.api['1'].deals.$post(args, options))
    },
  })
}

export function createPostApi1Deals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['deals']['$post']>,
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
    const mutationDefaults = getPostApi1DealsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1DealsIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['deals'][':id']['$get']>,
) {
  return ['api', '/api/1/deals/:id', args] as const
}

export function getApi1DealsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['deals'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1DealsIdQueryKey>
  >({
    queryKey: getApi1DealsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].deals[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1DealsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['deals'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1DealsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1DealsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApi1DealsIdMutationKey() {
  return ['api', '/api/1/deals/:id', 'PUT'] as const
}

export function getPutApi1DealsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['deals'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1DealsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['deals'][':id']['$put']>) {
      return parseResponse(client.api['1'].deals[':id'].$put(args, options))
    },
  })
}

export function createPutApi1DealsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['deals'][':id']['$put']>,
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
    const mutationDefaults = getPutApi1DealsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApi1DealsIdMutationKey() {
  return ['api', '/api/1/deals/:id', 'DELETE'] as const
}

export function getDeleteApi1DealsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['deals'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1DealsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['deals'][':id']['$delete']>) {
      return parseResponse(client.api['1'].deals[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1DealsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['deals'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1DealsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApi1DealsIdRenewsMutationKey() {
  return ['api', '/api/1/deals/:id/renews', 'POST'] as const
}

export function getPostApi1DealsIdRenewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['renews']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['deals'][':id']['renews']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1DealsIdRenewsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['deals'][':id']['renews']['$post']>,
    ) {
      return parseResponse(client.api['1'].deals[':id'].renews.$post(args, options))
    },
  })
}

export function createPostApi1DealsIdRenews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['renews']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['deals'][':id']['renews']['$post']>,
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
    const mutationDefaults = getPostApi1DealsIdRenewsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApi1DealsIdRenewsRenewIdMutationKey() {
  return ['api', '/api/1/deals/:id/renews/:renew_id', 'PUT'] as const
}

export function getPutApi1DealsIdRenewsRenewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1DealsIdRenewsRenewIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$put']
      >,
    ) {
      return parseResponse(client.api['1'].deals[':id'].renews[':renew_id'].$put(args, options))
    },
  })
}

export function createPutApi1DealsIdRenewsRenewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$put']>,
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
    const mutationDefaults = getPutApi1DealsIdRenewsRenewIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApi1DealsIdRenewsRenewIdMutationKey() {
  return ['api', '/api/1/deals/:id/renews/:renew_id', 'DELETE'] as const
}

export function getDeleteApi1DealsIdRenewsRenewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1DealsIdRenewsRenewIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$delete']
      >,
    ) {
      return parseResponse(client.api['1'].deals[':id'].renews[':renew_id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1DealsIdRenewsRenewId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$delete']
        >,
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
    const mutationDefaults = getDeleteApi1DealsIdRenewsRenewIdMutationOptions<
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

export function getPostApi1DealsIdPaymentsMutationKey() {
  return ['api', '/api/1/deals/:id/payments', 'POST'] as const
}

export function getPostApi1DealsIdPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['payments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['deals'][':id']['payments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1DealsIdPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['deals'][':id']['payments']['$post']>,
    ) {
      return parseResponse(client.api['1'].deals[':id'].payments.$post(args, options))
    },
  })
}

export function createPostApi1DealsIdPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['deals'][':id']['payments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['deals'][':id']['payments']['$post']>,
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
    const mutationDefaults = getPostApi1DealsIdPaymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApi1DealsIdPaymentsPaymentIdMutationKey() {
  return ['api', '/api/1/deals/:id/payments/:payment_id', 'PUT'] as const
}

export function getPutApi1DealsIdPaymentsPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1DealsIdPaymentsPaymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$put']
      >,
    ) {
      return parseResponse(client.api['1'].deals[':id'].payments[':payment_id'].$put(args, options))
    },
  })
}

export function createPutApi1DealsIdPaymentsPaymentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$put']
        >,
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
    const mutationDefaults = getPutApi1DealsIdPaymentsPaymentIdMutationOptions<
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

export function getDeleteApi1DealsIdPaymentsPaymentIdMutationKey() {
  return ['api', '/api/1/deals/:id/payments/:payment_id', 'DELETE'] as const
}

export function getDeleteApi1DealsIdPaymentsPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1DealsIdPaymentsPaymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api['1'].deals[':id'].payments[':payment_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApi1DealsIdPaymentsPaymentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$delete']
        >,
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
    const mutationDefaults = getDeleteApi1DealsIdPaymentsPaymentIdMutationOptions<
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

export function getApi1ManualJournalsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['manual_journals']['$get']>,
) {
  return ['api', '/api/1/manual_journals', args] as const
}

export function getApi1ManualJournalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['manual_journals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['manual_journals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['manual_journals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ManualJournalsQueryKey>
  >({
    queryKey: getApi1ManualJournalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].manual_journals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ManualJournals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['manual_journals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['manual_journals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['manual_journals']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ManualJournalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1ManualJournalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApi1ManualJournalsMutationKey() {
  return ['api', '/api/1/manual_journals', 'POST'] as const
}

export function getPostApi1ManualJournalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['manual_journals']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['manual_journals']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ManualJournalsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['manual_journals']['$post']>) {
      return parseResponse(client.api['1'].manual_journals.$post(args, options))
    },
  })
}

export function createPostApi1ManualJournals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['manual_journals']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['manual_journals']['$post']>,
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
    const mutationDefaults = getPostApi1ManualJournalsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1ManualJournalsIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$get']>,
) {
  return ['api', '/api/1/manual_journals/:id', args] as const
}

export function getApi1ManualJournalsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ManualJournalsIdQueryKey>
  >({
    queryKey: getApi1ManualJournalsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].manual_journals[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ManualJournalsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ManualJournalsIdQueryKey>
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
      ...getApi1ManualJournalsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApi1ManualJournalsIdMutationKey() {
  return ['api', '/api/1/manual_journals/:id', 'PUT'] as const
}

export function getPutApi1ManualJournalsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ManualJournalsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].manual_journals[':id'].$put(args, options))
    },
  })
}

export function createPutApi1ManualJournalsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$put']>,
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
    const mutationDefaults = getPutApi1ManualJournalsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApi1ManualJournalsIdMutationKey() {
  return ['api', '/api/1/manual_journals/:id', 'DELETE'] as const
}

export function getDeleteApi1ManualJournalsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1ManualJournalsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].manual_journals[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1ManualJournalsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['manual_journals'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1ManualJournalsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1UsersQueryKey(
  args: InferRequestType<(typeof client.api)['1']['users']['$get']>,
) {
  return ['api', '/api/1/users', args] as const
}

export function getApi1UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['users']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['users']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1UsersQueryKey>
  >({
    queryKey: getApi1UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['users']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['users']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1UsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApi1UsersMeQueryKey(
  args: InferRequestType<(typeof client.api)['1']['users']['me']['$get']>,
) {
  return ['api', '/api/1/users/me', args] as const
}

export function getApi1UsersMeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['users']['me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['users']['me']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['users']['me']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1UsersMeQueryKey>
  >({
    queryKey: getApi1UsersMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].users.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1UsersMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['users']['me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['users']['me']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['users']['me']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1UsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1UsersMeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApi1UsersMeMutationKey() {
  return ['api', '/api/1/users/me', 'PUT'] as const
}

export function getPutApi1UsersMeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['users']['me']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['users']['me']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1UsersMeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['users']['me']['$put']>) {
      return parseResponse(client.api['1'].users.me.$put(args, options))
    },
  })
}

export function createPutApi1UsersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['users']['me']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['users']['me']['$put']>,
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
    const mutationDefaults = getPutApi1UsersMeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1UsersCapabilitiesQueryKey(
  args: InferRequestType<(typeof client.api)['1']['users']['capabilities']['$get']>,
) {
  return ['api', '/api/1/users/capabilities', args] as const
}

export function getApi1UsersCapabilitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['users']['capabilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['users']['capabilities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['users']['capabilities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1UsersCapabilitiesQueryKey>
  >({
    queryKey: getApi1UsersCapabilitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].users.capabilities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1UsersCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['users']['capabilities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['users']['capabilities']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['users']['capabilities']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1UsersCapabilitiesQueryKey>
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
      ...getApi1UsersCapabilitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1CompaniesQueryKey() {
  return ['api', '/api/1/companies'] as const
}

export function getApi1CompaniesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['companies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['companies']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1CompaniesQueryKey>
  >({
    queryKey: getApi1CompaniesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].companies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1Companies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['companies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['companies']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1CompaniesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1CompaniesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApi1CompaniesIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['companies'][':id']['$get']>,
) {
  return ['api', '/api/1/companies/:id', args] as const
}

export function getApi1CompaniesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['companies'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['companies'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['companies'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1CompaniesIdQueryKey>
  >({
    queryKey: getApi1CompaniesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].companies[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1CompaniesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['companies'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['companies'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['companies'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1CompaniesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1CompaniesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApi1ItemsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['items']['$get']>,
) {
  return ['api', '/api/1/items', args] as const
}

export function getApi1ItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ItemsQueryKey>
  >({
    queryKey: getApi1ItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1Items<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1ItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApi1ItemsMutationKey() {
  return ['api', '/api/1/items', 'POST'] as const
}

export function getPostApi1ItemsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ItemsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['items']['$post']>) {
      return parseResponse(client.api['1'].items.$post(args, options))
    },
  })
}

export function createPostApi1Items<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['items']['$post']>,
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
    const mutationDefaults = getPostApi1ItemsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1ItemsIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['items'][':id']['$get']>,
) {
  return ['api', '/api/1/items/:id', args] as const
}

export function getApi1ItemsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['items'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ItemsIdQueryKey>
  >({
    queryKey: getApi1ItemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].items[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1ItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['items'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ItemsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1ItemsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApi1ItemsIdMutationKey() {
  return ['api', '/api/1/items/:id', 'PUT'] as const
}

export function getPutApi1ItemsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['items'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ItemsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['items'][':id']['$put']>) {
      return parseResponse(client.api['1'].items[':id'].$put(args, options))
    },
  })
}

export function createPutApi1ItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['items'][':id']['$put']>,
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
    const mutationDefaults = getPutApi1ItemsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApi1ItemsIdMutationKey() {
  return ['api', '/api/1/items/:id', 'DELETE'] as const
}

export function getDeleteApi1ItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['items'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1ItemsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['items'][':id']['$delete']>) {
      return parseResponse(client.api['1'].items[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1ItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['items'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['items'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1ItemsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApi1ItemsCodeUpsertMutationKey() {
  return ['api', '/api/1/items/code/upsert', 'PUT'] as const
}

export function getPutApi1ItemsCodeUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['items']['code']['upsert']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['items']['code']['upsert']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ItemsCodeUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['items']['code']['upsert']['$put']>,
    ) {
      return parseResponse(client.api['1'].items.code.upsert.$put(args, options))
    },
  })
}

export function createPutApi1ItemsCodeUpsert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['items']['code']['upsert']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['items']['code']['upsert']['$put']>,
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
    const mutationDefaults = getPutApi1ItemsCodeUpsertMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1TaxesCodesQueryKey() {
  return ['api', '/api/1/taxes/codes'] as const
}

export function getApi1TaxesCodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1TaxesCodesQueryKey>
  >({
    queryKey: getApi1TaxesCodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].taxes.codes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1TaxesCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1TaxesCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1TaxesCodesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApi1TaxesCodesCodeQueryKey(
  args: InferRequestType<(typeof client.api)['1']['taxes']['codes'][':code']['$get']>,
) {
  return ['api', '/api/1/taxes/codes/:code', args] as const
}

export function getApi1TaxesCodesCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes'][':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['taxes']['codes'][':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes'][':code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1TaxesCodesCodeQueryKey>
  >({
    queryKey: getApi1TaxesCodesCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].taxes.codes[':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1TaxesCodesCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes'][':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['taxes']['codes'][':code']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['taxes']['codes'][':code']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1TaxesCodesCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1TaxesCodesCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApi1TaxesCompaniesCompanyIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['taxes']['companies'][':company_id']['$get']>,
) {
  return ['api', '/api/1/taxes/companies/:company_id', args] as const
}

export function getApi1TaxesCompaniesCompanyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['taxes']['companies'][':company_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['taxes']['companies'][':company_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['taxes']['companies'][':company_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1TaxesCompaniesCompanyIdQueryKey>
  >({
    queryKey: getApi1TaxesCompaniesCompanyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].taxes.companies[':company_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1TaxesCompaniesCompanyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['taxes']['companies'][':company_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['taxes']['companies'][':company_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['taxes']['companies'][':company_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1TaxesCompaniesCompanyIdQueryKey>
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
      ...getApi1TaxesCompaniesCompanyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1WalletablesQueryKey(
  args: InferRequestType<(typeof client.api)['1']['walletables']['$get']>,
) {
  return ['api', '/api/1/walletables', args] as const
}

export function getApi1WalletablesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['walletables']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['walletables']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['walletables']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1WalletablesQueryKey>
  >({
    queryKey: getApi1WalletablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].walletables.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1Walletables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['walletables']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['walletables']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['walletables']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1WalletablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1WalletablesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApi1WalletablesMutationKey() {
  return ['api', '/api/1/walletables', 'POST'] as const
}

export function getPostApi1WalletablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['walletables']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['walletables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletablesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['walletables']['$post']>) {
      return parseResponse(client.api['1'].walletables.$post(args, options))
    },
  })
}

export function createPostApi1Walletables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['walletables']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['walletables']['$post']>,
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
    const mutationDefaults = getPostApi1WalletablesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1WalletablesTypeIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$get']>,
) {
  return ['api', '/api/1/walletables/:type/:id', args] as const
}

export function getApi1WalletablesTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1WalletablesTypeIdQueryKey>
  >({
    queryKey: getApi1WalletablesTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].walletables[':type'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1WalletablesTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1WalletablesTypeIdQueryKey>
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
      ...getApi1WalletablesTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApi1WalletablesTypeIdMutationKey() {
  return ['api', '/api/1/walletables/:type/:id', 'PUT'] as const
}

export function getPutApi1WalletablesTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1WalletablesTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].walletables[':type'][':id'].$put(args, options))
    },
  })
}

export function createPutApi1WalletablesTypeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$put']>,
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
    const mutationDefaults = getPutApi1WalletablesTypeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApi1WalletablesTypeIdMutationKey() {
  return ['api', '/api/1/walletables/:type/:id', 'DELETE'] as const
}

export function getDeleteApi1WalletablesTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1WalletablesTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].walletables[':type'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1WalletablesTypeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['walletables'][':type'][':id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1WalletablesTypeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1BanksQueryKey(
  args: InferRequestType<(typeof client.api)['1']['banks']['$get']>,
) {
  return ['api', '/api/1/banks', args] as const
}

export function getApi1BanksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['banks']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['banks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['banks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1BanksQueryKey>
  >({
    queryKey: getApi1BanksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].banks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1Banks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['banks']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['banks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['banks']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1BanksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1BanksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApi1BanksIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['banks'][':id']['$get']>,
) {
  return ['api', '/api/1/banks/:id', args] as const
}

export function getApi1BanksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['banks'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['banks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['banks'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1BanksIdQueryKey>
  >({
    queryKey: getApi1BanksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].banks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1BanksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['banks'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['banks'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['banks'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1BanksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1BanksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApi1TransfersQueryKey(
  args: InferRequestType<(typeof client.api)['1']['transfers']['$get']>,
) {
  return ['api', '/api/1/transfers', args] as const
}

export function getApi1TransfersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['transfers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['transfers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1TransfersQueryKey>
  >({
    queryKey: getApi1TransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].transfers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1Transfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['transfers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['transfers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['transfers']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1TransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1TransfersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApi1TransfersMutationKey() {
  return ['api', '/api/1/transfers', 'POST'] as const
}

export function getPostApi1TransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['transfers']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1TransfersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['transfers']['$post']>) {
      return parseResponse(client.api['1'].transfers.$post(args, options))
    },
  })
}

export function createPostApi1Transfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['transfers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['transfers']['$post']>,
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
    const mutationDefaults = getPostApi1TransfersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1TransfersIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['transfers'][':id']['$get']>,
) {
  return ['api', '/api/1/transfers/:id', args] as const
}

export function getApi1TransfersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['transfers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1TransfersIdQueryKey>
  >({
    queryKey: getApi1TransfersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].transfers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1TransfersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['transfers'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1TransfersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1TransfersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApi1TransfersIdMutationKey() {
  return ['api', '/api/1/transfers/:id', 'PUT'] as const
}

export function getPutApi1TransfersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['transfers'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1TransfersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['transfers'][':id']['$put']>) {
      return parseResponse(client.api['1'].transfers[':id'].$put(args, options))
    },
  })
}

export function createPutApi1TransfersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['transfers'][':id']['$put']>,
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
    const mutationDefaults = getPutApi1TransfersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApi1TransfersIdMutationKey() {
  return ['api', '/api/1/transfers/:id', 'DELETE'] as const
}

export function getDeleteApi1TransfersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['transfers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1TransfersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['transfers'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].transfers[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1TransfersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['transfers'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['transfers'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1TransfersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1WalletTxnsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['wallet_txns']['$get']>,
) {
  return ['api', '/api/1/wallet_txns', args] as const
}

export function getApi1WalletTxnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['wallet_txns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['wallet_txns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['wallet_txns']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1WalletTxnsQueryKey>
  >({
    queryKey: getApi1WalletTxnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].wallet_txns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1WalletTxns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['wallet_txns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['wallet_txns']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['wallet_txns']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1WalletTxnsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1WalletTxnsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApi1WalletTxnsMutationKey() {
  return ['api', '/api/1/wallet_txns', 'POST'] as const
}

export function getPostApi1WalletTxnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['wallet_txns']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['wallet_txns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletTxnsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['wallet_txns']['$post']>) {
      return parseResponse(client.api['1'].wallet_txns.$post(args, options))
    },
  })
}

export function createPostApi1WalletTxns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['wallet_txns']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['wallet_txns']['$post']>,
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
    const mutationDefaults = getPostApi1WalletTxnsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1WalletTxnsIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['$get']>,
) {
  return ['api', '/api/1/wallet_txns/:id', args] as const
}

export function getApi1WalletTxnsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1WalletTxnsIdQueryKey>
  >({
    queryKey: getApi1WalletTxnsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].wallet_txns[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1WalletTxnsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1WalletTxnsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1WalletTxnsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApi1WalletTxnsIdMutationKey() {
  return ['api', '/api/1/wallet_txns/:id', 'DELETE'] as const
}

export function getDeleteApi1WalletTxnsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1WalletTxnsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].wallet_txns[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1WalletTxnsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1WalletTxnsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApi1WalletTxnsIdReconcileMutationKey() {
  return ['api', '/api/1/wallet_txns/:id/reconcile', 'POST'] as const
}

export function getPostApi1WalletTxnsIdReconcileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['reconcile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['reconcile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletTxnsIdReconcileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['reconcile']['$post']>,
    ) {
      return parseResponse(client.api['1'].wallet_txns[':id'].reconcile.$post(args, options))
    },
  })
}

export function createPostApi1WalletTxnsIdReconcile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['reconcile']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['reconcile']['$post']>,
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
    const mutationDefaults = getPostApi1WalletTxnsIdReconcileMutationOptions<
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

export function getPostApi1WalletTxnsIdCreateDealMutationKey() {
  return ['api', '/api/1/wallet_txns/:id/create_deal', 'POST'] as const
}

export function getPostApi1WalletTxnsIdCreateDealMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['create_deal']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['create_deal']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletTxnsIdCreateDealMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['wallet_txns'][':id']['create_deal']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].wallet_txns[':id'].create_deal.$post(args, options))
    },
  })
}

export function createPostApi1WalletTxnsIdCreateDeal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['create_deal']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['create_deal']['$post']>,
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
    const mutationDefaults = getPostApi1WalletTxnsIdCreateDealMutationOptions<
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

export function getPostApi1WalletTxnsIdCreateTransferMutationKey() {
  return ['api', '/api/1/wallet_txns/:id/create_transfer', 'POST'] as const
}

export function getPostApi1WalletTxnsIdCreateTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['create_transfer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['create_transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletTxnsIdCreateTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['wallet_txns'][':id']['create_transfer']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].wallet_txns[':id'].create_transfer.$post(args, options))
    },
  })
}

export function createPostApi1WalletTxnsIdCreateTransfer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['1']['wallet_txns'][':id']['create_transfer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['1']['wallet_txns'][':id']['create_transfer']['$post']
        >,
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
    const mutationDefaults = getPostApi1WalletTxnsIdCreateTransferMutationOptions<
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

export function getPostApi1WalletTxnsIdCreatePrivateDealMutationKey() {
  return ['api', '/api/1/wallet_txns/:id/create_private_deal', 'POST'] as const
}

export function getPostApi1WalletTxnsIdCreatePrivateDealMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['1']['wallet_txns'][':id']['create_private_deal']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)['1']['wallet_txns'][':id']['create_private_deal']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletTxnsIdCreatePrivateDealMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['wallet_txns'][':id']['create_private_deal']['$post']
      >,
    ) {
      return parseResponse(
        client.api['1'].wallet_txns[':id'].create_private_deal.$post(args, options),
      )
    },
  })
}

export function createPostApi1WalletTxnsIdCreatePrivateDeal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['1']['wallet_txns'][':id']['create_private_deal']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['1']['wallet_txns'][':id']['create_private_deal']['$post']
        >,
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
    const mutationDefaults = getPostApi1WalletTxnsIdCreatePrivateDealMutationOptions<
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

export function getPostApi1WalletTxnsIdIgnoreMutationKey() {
  return ['api', '/api/1/wallet_txns/:id/ignore', 'POST'] as const
}

export function getPostApi1WalletTxnsIdIgnoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['ignore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['ignore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletTxnsIdIgnoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['ignore']['$post']>,
    ) {
      return parseResponse(client.api['1'].wallet_txns[':id'].ignore.$post(args, options))
    },
  })
}

export function createPostApi1WalletTxnsIdIgnore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['ignore']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['ignore']['$post']>,
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
    const mutationDefaults = getPostApi1WalletTxnsIdIgnoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApi1WalletTxnsIdResetMutationKey() {
  return ['api', '/api/1/wallet_txns/:id/reset', 'POST'] as const
}

export function getPostApi1WalletTxnsIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['reset']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1WalletTxnsIdResetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['reset']['$post']>,
    ) {
      return parseResponse(client.api['1'].wallet_txns[':id'].reset.$post(args, options))
    },
  })
}

export function createPostApi1WalletTxnsIdReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['wallet_txns'][':id']['reset']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['reset']['$post']>,
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
    const mutationDefaults = getPostApi1WalletTxnsIdResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1JournalsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['journals']['$get']>,
) {
  return ['api', '/api/1/journals', args] as const
}

export function getApi1JournalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['journals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['journals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['journals']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1JournalsQueryKey>
  >({
    queryKey: getApi1JournalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].journals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1Journals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['journals']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['journals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['journals']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1JournalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1JournalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApi1JournalsReportsIdStatusQueryKey(
  args: InferRequestType<(typeof client.api)['1']['journals']['reports'][':id']['status']['$get']>,
) {
  return ['api', '/api/1/journals/reports/:id/status', args] as const
}

export function getApi1JournalsReportsIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['1']['journals']['reports'][':id']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['journals']['reports'][':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['journals']['reports'][':id']['status']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1JournalsReportsIdStatusQueryKey>
  >({
    queryKey: getApi1JournalsReportsIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].journals.reports[':id'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1JournalsReportsIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['1']['journals']['reports'][':id']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['journals']['reports'][':id']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['journals']['reports'][':id']['status']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1JournalsReportsIdStatusQueryKey>
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
      ...getApi1JournalsReportsIdStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1JournalsReportsIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.api)['1']['journals']['reports'][':id']['download']['$get']
  >,
) {
  return ['api', '/api/1/journals/reports/:id/download', args] as const
}

export function getApi1JournalsReportsIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['1']['journals']['reports'][':id']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['1']['journals']['reports'][':id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['journals']['reports'][':id']['download']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1JournalsReportsIdDownloadQueryKey>
  >({
    queryKey: getApi1JournalsReportsIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].journals.reports[':id'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1JournalsReportsIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['1']['journals']['reports'][':id']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['journals']['reports'][':id']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['1']['journals']['reports'][':id']['download']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1JournalsReportsIdDownloadQueryKey>
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
      ...getApi1JournalsReportsIdDownloadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApi1JournalsSearchMutationKey() {
  return ['api', '/api/1/journals/search', 'POST'] as const
}

export function getPostApi1JournalsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['journals']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['journals']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1JournalsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['journals']['search']['$post']>,
    ) {
      return parseResponse(client.api['1'].journals.search.$post(args, options))
    },
  })
}

export function createPostApi1JournalsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['journals']['search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['journals']['search']['$post']>,
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
    const mutationDefaults = getPostApi1JournalsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1ReportsTrialBsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_bs']['$get']>,
) {
  return ['api', '/api/1/reports/trial_bs', args] as const
}

export function getApi1ReportsTrialBsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_bs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialBsQueryKey>
  >({
    queryKey: getApi1ReportsTrialBsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_bs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialBs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['reports']['trial_bs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialBsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1ReportsTrialBsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApi1ReportsTrialBsTwoYearsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_bs_two_years']['$get']>,
) {
  return ['api', '/api/1/reports/trial_bs_two_years', args] as const
}

export function getApi1ReportsTrialBsTwoYearsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs_two_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_bs_two_years']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs_two_years']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialBsTwoYearsQueryKey>
  >({
    queryKey: getApi1ReportsTrialBsTwoYearsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_bs_two_years.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialBsTwoYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs_two_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['reports']['trial_bs_two_years']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs_two_years']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialBsTwoYearsQueryKey>
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
      ...getApi1ReportsTrialBsTwoYearsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ReportsTrialBsThreeYearsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_bs_three_years']['$get']>,
) {
  return ['api', '/api/1/reports/trial_bs_three_years', args] as const
}

export function getApi1ReportsTrialBsThreeYearsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs_three_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_bs_three_years']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs_three_years']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialBsThreeYearsQueryKey>
  >({
    queryKey: getApi1ReportsTrialBsThreeYearsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_bs_three_years.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialBsThreeYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_bs_three_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['reports']['trial_bs_three_years']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['reports']['trial_bs_three_years']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialBsThreeYearsQueryKey>
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
      ...getApi1ReportsTrialBsThreeYearsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ReportsTrialPlQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl']['$get']>,
) {
  return ['api', '/api/1/reports/trial_pl', args] as const
}

export function getApi1ReportsTrialPlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialPlQueryKey>
  >({
    queryKey: getApi1ReportsTrialPlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_pl.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialPl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['reports']['trial_pl']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialPlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1ReportsTrialPlQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApi1ReportsTrialPlTwoYearsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_two_years']['$get']>,
) {
  return ['api', '/api/1/reports/trial_pl_two_years', args] as const
}

export function getApi1ReportsTrialPlTwoYearsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_two_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_two_years']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_two_years']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialPlTwoYearsQueryKey>
  >({
    queryKey: getApi1ReportsTrialPlTwoYearsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_pl_two_years.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialPlTwoYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_two_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['reports']['trial_pl_two_years']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_two_years']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialPlTwoYearsQueryKey>
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
      ...getApi1ReportsTrialPlTwoYearsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ReportsTrialPlThreeYearsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_three_years']['$get']>,
) {
  return ['api', '/api/1/reports/trial_pl_three_years', args] as const
}

export function getApi1ReportsTrialPlThreeYearsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_three_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_three_years']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_three_years']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialPlThreeYearsQueryKey>
  >({
    queryKey: getApi1ReportsTrialPlThreeYearsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_pl_three_years.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialPlThreeYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_three_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['reports']['trial_pl_three_years']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['reports']['trial_pl_three_years']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialPlThreeYearsQueryKey>
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
      ...getApi1ReportsTrialPlThreeYearsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ReportsTrialPlSectionsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_sections']['$get']>,
) {
  return ['api', '/api/1/reports/trial_pl_sections', args] as const
}

export function getApi1ReportsTrialPlSectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_sections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialPlSectionsQueryKey>
  >({
    queryKey: getApi1ReportsTrialPlSectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_pl_sections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialPlSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['reports']['trial_pl_sections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_sections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialPlSectionsQueryKey>
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
      ...getApi1ReportsTrialPlSectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ReportsTrialPlSegment1TagsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_1_tags']['$get']>,
) {
  return ['api', '/api/1/reports/trial_pl_segment_1_tags', args] as const
}

export function getApi1ReportsTrialPlSegment1TagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_1_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_1_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_1_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialPlSegment1TagsQueryKey>
  >({
    queryKey: getApi1ReportsTrialPlSegment1TagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_pl_segment_1_tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialPlSegment1Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_1_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['reports']['trial_pl_segment_1_tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_1_tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialPlSegment1TagsQueryKey>
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
      ...getApi1ReportsTrialPlSegment1TagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ReportsTrialPlSegment2TagsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_2_tags']['$get']>,
) {
  return ['api', '/api/1/reports/trial_pl_segment_2_tags', args] as const
}

export function getApi1ReportsTrialPlSegment2TagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_2_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_2_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_2_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialPlSegment2TagsQueryKey>
  >({
    queryKey: getApi1ReportsTrialPlSegment2TagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_pl_segment_2_tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialPlSegment2Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_2_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['reports']['trial_pl_segment_2_tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_2_tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialPlSegment2TagsQueryKey>
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
      ...getApi1ReportsTrialPlSegment2TagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ReportsTrialPlSegment3TagsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_3_tags']['$get']>,
) {
  return ['api', '/api/1/reports/trial_pl_segment_3_tags', args] as const
}

export function getApi1ReportsTrialPlSegment3TagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_3_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_3_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_3_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialPlSegment3TagsQueryKey>
  >({
    queryKey: getApi1ReportsTrialPlSegment3TagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_pl_segment_3_tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialPlSegment3Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_3_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['reports']['trial_pl_segment_3_tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['reports']['trial_pl_segment_3_tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialPlSegment3TagsQueryKey>
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
      ...getApi1ReportsTrialPlSegment3TagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ReportsTrialCrQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr']['$get']>,
) {
  return ['api', '/api/1/reports/trial_cr', args] as const
}

export function getApi1ReportsTrialCrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialCrQueryKey>
  >({
    queryKey: getApi1ReportsTrialCrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_cr.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialCr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['reports']['trial_cr']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialCrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1ReportsTrialCrQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApi1ReportsTrialCrTwoYearsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_two_years']['$get']>,
) {
  return ['api', '/api/1/reports/trial_cr_two_years', args] as const
}

export function getApi1ReportsTrialCrTwoYearsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_two_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_two_years']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_two_years']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialCrTwoYearsQueryKey>
  >({
    queryKey: getApi1ReportsTrialCrTwoYearsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_cr_two_years.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialCrTwoYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_two_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['reports']['trial_cr_two_years']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_two_years']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialCrTwoYearsQueryKey>
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
      ...getApi1ReportsTrialCrTwoYearsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ReportsTrialCrThreeYearsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_three_years']['$get']>,
) {
  return ['api', '/api/1/reports/trial_cr_three_years', args] as const
}

export function getApi1ReportsTrialCrThreeYearsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_three_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_three_years']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_three_years']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialCrThreeYearsQueryKey>
  >({
    queryKey: getApi1ReportsTrialCrThreeYearsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_cr_three_years.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialCrThreeYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_three_years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['reports']['trial_cr_three_years']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['reports']['trial_cr_three_years']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialCrThreeYearsQueryKey>
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
      ...getApi1ReportsTrialCrThreeYearsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ReportsTrialCrSectionsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_sections']['$get']>,
) {
  return ['api', '/api/1/reports/trial_cr_sections', args] as const
}

export function getApi1ReportsTrialCrSectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_sections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialCrSectionsQueryKey>
  >({
    queryKey: getApi1ReportsTrialCrSectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_cr_sections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialCrSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['reports']['trial_cr_sections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_sections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialCrSectionsQueryKey>
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
      ...getApi1ReportsTrialCrSectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ReportsTrialCrSegment1TagsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_1_tags']['$get']>,
) {
  return ['api', '/api/1/reports/trial_cr_segment_1_tags', args] as const
}

export function getApi1ReportsTrialCrSegment1TagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_1_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_1_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_1_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialCrSegment1TagsQueryKey>
  >({
    queryKey: getApi1ReportsTrialCrSegment1TagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_cr_segment_1_tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialCrSegment1Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_1_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['reports']['trial_cr_segment_1_tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_1_tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialCrSegment1TagsQueryKey>
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
      ...getApi1ReportsTrialCrSegment1TagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ReportsTrialCrSegment2TagsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_2_tags']['$get']>,
) {
  return ['api', '/api/1/reports/trial_cr_segment_2_tags', args] as const
}

export function getApi1ReportsTrialCrSegment2TagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_2_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_2_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_2_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialCrSegment2TagsQueryKey>
  >({
    queryKey: getApi1ReportsTrialCrSegment2TagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_cr_segment_2_tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialCrSegment2Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_2_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['reports']['trial_cr_segment_2_tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_2_tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialCrSegment2TagsQueryKey>
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
      ...getApi1ReportsTrialCrSegment2TagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ReportsTrialCrSegment3TagsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_3_tags']['$get']>,
) {
  return ['api', '/api/1/reports/trial_cr_segment_3_tags', args] as const
}

export function getApi1ReportsTrialCrSegment3TagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_3_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_3_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_3_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsTrialCrSegment3TagsQueryKey>
  >({
    queryKey: getApi1ReportsTrialCrSegment3TagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.trial_cr_segment_3_tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsTrialCrSegment3Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_3_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['reports']['trial_cr_segment_3_tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['reports']['trial_cr_segment_3_tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsTrialCrSegment3TagsQueryKey>
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
      ...getApi1ReportsTrialCrSegment3TagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ReportsGeneralLedgersQueryKey(
  args: InferRequestType<(typeof client.api)['1']['reports']['general_ledgers']['$get']>,
) {
  return ['api', '/api/1/reports/general_ledgers', args] as const
}

export function getApi1ReportsGeneralLedgersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['general_ledgers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['reports']['general_ledgers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['reports']['general_ledgers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReportsGeneralLedgersQueryKey>
  >({
    queryKey: getApi1ReportsGeneralLedgersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].reports.general_ledgers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReportsGeneralLedgers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['reports']['general_ledgers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['reports']['general_ledgers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['reports']['general_ledgers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReportsGeneralLedgersQueryKey>
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
      ...getApi1ReportsGeneralLedgersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ReceiptsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['receipts']['$get']>,
) {
  return ['api', '/api/1/receipts', args] as const
}

export function getApi1ReceiptsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['receipts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['receipts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['receipts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReceiptsQueryKey>
  >({
    queryKey: getApi1ReceiptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].receipts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1Receipts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['receipts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['receipts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['receipts']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1ReceiptsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApi1ReceiptsMutationKey() {
  return ['api', '/api/1/receipts', 'POST'] as const
}

export function getPostApi1ReceiptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['receipts']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['receipts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ReceiptsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['receipts']['$post']>) {
      return parseResponse(client.api['1'].receipts.$post(args, options))
    },
  })
}

export function createPostApi1Receipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['receipts']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['receipts']['$post']>,
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
    const mutationDefaults = getPostApi1ReceiptsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1ReceiptsIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['receipts'][':id']['$get']>,
) {
  return ['api', '/api/1/receipts/:id', args] as const
}

export function getApi1ReceiptsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['receipts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReceiptsIdQueryKey>
  >({
    queryKey: getApi1ReceiptsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].receipts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReceiptsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['receipts'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReceiptsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1ReceiptsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApi1ReceiptsIdMutationKey() {
  return ['api', '/api/1/receipts/:id', 'PUT'] as const
}

export function getPutApi1ReceiptsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['receipts'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ReceiptsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['receipts'][':id']['$put']>) {
      return parseResponse(client.api['1'].receipts[':id'].$put(args, options))
    },
  })
}

export function createPutApi1ReceiptsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['receipts'][':id']['$put']>,
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
    const mutationDefaults = getPutApi1ReceiptsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApi1ReceiptsIdMutationKey() {
  return ['api', '/api/1/receipts/:id', 'DELETE'] as const
}

export function getDeleteApi1ReceiptsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['receipts'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1ReceiptsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['receipts'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].receipts[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1ReceiptsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['receipts'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1ReceiptsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1ReceiptsIdDownloadQueryKey(
  args: InferRequestType<(typeof client.api)['1']['receipts'][':id']['download']['$get']>,
) {
  return ['api', '/api/1/receipts/:id/download', args] as const
}

export function getApi1ReceiptsIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['receipts'][':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ReceiptsIdDownloadQueryKey>
  >({
    queryKey: getApi1ReceiptsIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].receipts[':id'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ReceiptsIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['receipts'][':id']['download']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['receipts'][':id']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ReceiptsIdDownloadQueryKey>
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
      ...getApi1ReceiptsIdDownloadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ExpenseApplicationsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['expense_applications']['$get']>,
) {
  return ['api', '/api/1/expense_applications', args] as const
}

export function getApi1ExpenseApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['expense_applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ExpenseApplicationsQueryKey>
  >({
    queryKey: getApi1ExpenseApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].expense_applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ExpenseApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['expense_applications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ExpenseApplicationsQueryKey>
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
      ...getApi1ExpenseApplicationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApi1ExpenseApplicationsMutationKey() {
  return ['api', '/api/1/expense_applications', 'POST'] as const
}

export function getPostApi1ExpenseApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_applications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ExpenseApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['expense_applications']['$post']>,
    ) {
      return parseResponse(client.api['1'].expense_applications.$post(args, options))
    },
  })
}

export function createPostApi1ExpenseApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['expense_applications']['$post']>,
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
    const mutationDefaults = getPostApi1ExpenseApplicationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1ExpenseApplicationsIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$get']>,
) {
  return ['api', '/api/1/expense_applications/:id', args] as const
}

export function getApi1ExpenseApplicationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ExpenseApplicationsIdQueryKey>
  >({
    queryKey: getApi1ExpenseApplicationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].expense_applications[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ExpenseApplicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ExpenseApplicationsIdQueryKey>
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
      ...getApi1ExpenseApplicationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApi1ExpenseApplicationsIdMutationKey() {
  return ['api', '/api/1/expense_applications/:id', 'PUT'] as const
}

export function getPutApi1ExpenseApplicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ExpenseApplicationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].expense_applications[':id'].$put(args, options))
    },
  })
}

export function createPutApi1ExpenseApplicationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$put']>,
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
    const mutationDefaults = getPutApi1ExpenseApplicationsIdMutationOptions<
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

export function getDeleteApi1ExpenseApplicationsIdMutationKey() {
  return ['api', '/api/1/expense_applications/:id', 'DELETE'] as const
}

export function getDeleteApi1ExpenseApplicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1ExpenseApplicationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].expense_applications[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1ExpenseApplicationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['1']['expense_applications'][':id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1ExpenseApplicationsIdMutationOptions<
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

export function getPostApi1ExpenseApplicationsIdActionsMutationKey() {
  return ['api', '/api/1/expense_applications/:id/actions', 'POST'] as const
}

export function getPostApi1ExpenseApplicationsIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['expense_applications'][':id']['actions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ExpenseApplicationsIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_applications'][':id']['actions']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].expense_applications[':id'].actions.$post(args, options))
    },
  })
}

export function createPostApi1ExpenseApplicationsIdActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['1']['expense_applications'][':id']['actions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['1']['expense_applications'][':id']['actions']['$post']
        >,
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
    const mutationDefaults = getPostApi1ExpenseApplicationsIdActionsMutationOptions<
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

export function getPutApi1ExpenseApplicationsIdParentApprovableRequestsMutationKey() {
  return ['api', '/api/1/expense_applications/:id/parent_approvable_requests', 'PUT'] as const
}

export function getPutApi1ExpenseApplicationsIdParentApprovableRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['1']['expense_applications'][':id']['parent_approvable_requests']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)['1']['expense_applications'][':id']['parent_approvable_requests']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ExpenseApplicationsIdParentApprovableRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_applications'][':id']['parent_approvable_requests']['$put']
      >,
    ) {
      return parseResponse(
        client.api['1'].expense_applications[':id'].parent_approvable_requests.$put(args, options),
      )
    },
  })
}

export function createPutApi1ExpenseApplicationsIdParentApprovableRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['1']['expense_applications'][':id']['parent_approvable_requests']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['1']['expense_applications'][':id']['parent_approvable_requests']['$put']
        >,
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
    const mutationDefaults = getPutApi1ExpenseApplicationsIdParentApprovableRequestsMutationOptions<
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

export function getApi1ExpenseApplicationsCurrenciesQueryKey(
  args: InferRequestType<(typeof client.api)['1']['expense_applications']['currencies']['$get']>,
) {
  return ['api', '/api/1/expense_applications/currencies', args] as const
}

export function getApi1ExpenseApplicationsCurrenciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['currencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['expense_applications']['currencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['expense_applications']['currencies']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ExpenseApplicationsCurrenciesQueryKey>
  >({
    queryKey: getApi1ExpenseApplicationsCurrenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].expense_applications.currencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ExpenseApplicationsCurrencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['currencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['expense_applications']['currencies']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['expense_applications']['currencies']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ExpenseApplicationsCurrenciesQueryKey>
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
      ...getApi1ExpenseApplicationsCurrenciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApi1ExpenseApplicationsCurrenciesMutationKey() {
  return ['api', '/api/1/expense_applications/currencies', 'POST'] as const
}

export function getPostApi1ExpenseApplicationsCurrenciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['expense_applications']['currencies']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_applications']['currencies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ExpenseApplicationsCurrenciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_applications']['currencies']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].expense_applications.currencies.$post(args, options))
    },
  })
}

export function createPostApi1ExpenseApplicationsCurrencies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['expense_applications']['currencies']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['expense_applications']['currencies']['$post']>,
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
    const mutationDefaults = getPostApi1ExpenseApplicationsCurrenciesMutationOptions<
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

export function getApi1ExpenseApplicationsCurrenciesIdQueryKey(
  args: InferRequestType<
    (typeof client.api)['1']['expense_applications']['currencies'][':id']['$get']
  >,
) {
  return ['api', '/api/1/expense_applications/currencies/:id', args] as const
}

export function getApi1ExpenseApplicationsCurrenciesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['1']['expense_applications']['currencies'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['1']['expense_applications']['currencies'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['1']['expense_applications']['currencies'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ExpenseApplicationsCurrenciesIdQueryKey>
  >({
    queryKey: getApi1ExpenseApplicationsCurrenciesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].expense_applications.currencies[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ExpenseApplicationsCurrenciesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['1']['expense_applications']['currencies'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['expense_applications']['currencies'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['1']['expense_applications']['currencies'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ExpenseApplicationsCurrenciesIdQueryKey>
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
      ...getApi1ExpenseApplicationsCurrenciesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApi1ExpenseApplicationsCurrenciesIdMutationKey() {
  return ['api', '/api/1/expense_applications/currencies/:id', 'PUT'] as const
}

export function getPutApi1ExpenseApplicationsCurrenciesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['1']['expense_applications']['currencies'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_applications']['currencies'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ExpenseApplicationsCurrenciesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_applications']['currencies'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.api['1'].expense_applications.currencies[':id'].$put(args, options),
      )
    },
  })
}

export function createPutApi1ExpenseApplicationsCurrenciesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['1']['expense_applications']['currencies'][':id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['1']['expense_applications']['currencies'][':id']['$put']
        >,
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
    const mutationDefaults = getPutApi1ExpenseApplicationsCurrenciesIdMutationOptions<
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

export function getDeleteApi1ExpenseApplicationsCurrenciesIdMutationKey() {
  return ['api', '/api/1/expense_applications/currencies/:id', 'DELETE'] as const
}

export function getDeleteApi1ExpenseApplicationsCurrenciesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['1']['expense_applications']['currencies'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api)['1']['expense_applications']['currencies'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1ExpenseApplicationsCurrenciesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_applications']['currencies'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api['1'].expense_applications.currencies[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApi1ExpenseApplicationsCurrenciesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api)['1']['expense_applications']['currencies'][':id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api)['1']['expense_applications']['currencies'][':id']['$delete']
        >,
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
    const mutationDefaults = getDeleteApi1ExpenseApplicationsCurrenciesIdMutationOptions<
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

export function getApi1ExpenseApplicationsFormQueryKey(
  args: InferRequestType<(typeof client.api)['1']['expense_applications']['form']['$get']>,
) {
  return ['api', '/api/1/expense_applications/form', args] as const
}

export function getApi1ExpenseApplicationsFormQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['form']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['expense_applications']['form']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['form']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ExpenseApplicationsFormQueryKey>
  >({
    queryKey: getApi1ExpenseApplicationsFormQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].expense_applications.form.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ExpenseApplicationsForm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['form']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['expense_applications']['form']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['form']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ExpenseApplicationsFormQueryKey>
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
      ...getApi1ExpenseApplicationsFormQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApi1ExpenseApplicationsFormMutationKey() {
  return ['api', '/api/1/expense_applications/form', 'PUT'] as const
}

export function getPutApi1ExpenseApplicationsFormMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['form']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_applications']['form']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ExpenseApplicationsFormMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['expense_applications']['form']['$put']>,
    ) {
      return parseResponse(client.api['1'].expense_applications.form.$put(args, options))
    },
  })
}

export function createPutApi1ExpenseApplicationsForm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['expense_applications']['form']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['expense_applications']['form']['$put']>,
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
    const mutationDefaults = getPutApi1ExpenseApplicationsFormMutationOptions<
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

export function getPostApi1ExpenseApplicationsAmountCalculationsMutationKey() {
  return ['api', '/api/1/expense_applications/amount_calculations', 'POST'] as const
}

export function getPostApi1ExpenseApplicationsAmountCalculationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['1']['expense_applications']['amount_calculations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)['1']['expense_applications']['amount_calculations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ExpenseApplicationsAmountCalculationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_applications']['amount_calculations']['$post']
      >,
    ) {
      return parseResponse(
        client.api['1'].expense_applications.amount_calculations.$post(args, options),
      )
    },
  })
}

export function createPostApi1ExpenseApplicationsAmountCalculations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['1']['expense_applications']['amount_calculations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['1']['expense_applications']['amount_calculations']['$post']
        >,
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
    const mutationDefaults = getPostApi1ExpenseApplicationsAmountCalculationsMutationOptions<
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

export function getApi1ExpenseApplicationLineTemplatesQueryKey(
  args: InferRequestType<(typeof client.api)['1']['expense_application_line_templates']['$get']>,
) {
  return ['api', '/api/1/expense_application_line_templates', args] as const
}

export function getApi1ExpenseApplicationLineTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['expense_application_line_templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['expense_application_line_templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['expense_application_line_templates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ExpenseApplicationLineTemplatesQueryKey>
  >({
    queryKey: getApi1ExpenseApplicationLineTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].expense_application_line_templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ExpenseApplicationLineTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['expense_application_line_templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['expense_application_line_templates']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['expense_application_line_templates']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ExpenseApplicationLineTemplatesQueryKey>
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
      ...getApi1ExpenseApplicationLineTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApi1ExpenseApplicationLineTemplatesMutationKey() {
  return ['api', '/api/1/expense_application_line_templates', 'POST'] as const
}

export function getPostApi1ExpenseApplicationLineTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['expense_application_line_templates']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_application_line_templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ExpenseApplicationLineTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_application_line_templates']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].expense_application_line_templates.$post(args, options))
    },
  })
}

export function createPostApi1ExpenseApplicationLineTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['expense_application_line_templates']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['expense_application_line_templates']['$post']>,
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
    const mutationDefaults = getPostApi1ExpenseApplicationLineTemplatesMutationOptions<
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

export function getApi1ExpenseApplicationLineTemplatesIdQueryKey(
  args: InferRequestType<
    (typeof client.api)['1']['expense_application_line_templates'][':id']['$get']
  >,
) {
  return ['api', '/api/1/expense_application_line_templates/:id', args] as const
}

export function getApi1ExpenseApplicationLineTemplatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['1']['expense_application_line_templates'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['1']['expense_application_line_templates'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['1']['expense_application_line_templates'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ExpenseApplicationLineTemplatesIdQueryKey>
  >({
    queryKey: getApi1ExpenseApplicationLineTemplatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].expense_application_line_templates[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ExpenseApplicationLineTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['1']['expense_application_line_templates'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['expense_application_line_templates'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['1']['expense_application_line_templates'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ExpenseApplicationLineTemplatesIdQueryKey>
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
      ...getApi1ExpenseApplicationLineTemplatesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApi1ExpenseApplicationLineTemplatesIdMutationKey() {
  return ['api', '/api/1/expense_application_line_templates/:id', 'PUT'] as const
}

export function getPutApi1ExpenseApplicationLineTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['1']['expense_application_line_templates'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['expense_application_line_templates'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ExpenseApplicationLineTemplatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_application_line_templates'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.api['1'].expense_application_line_templates[':id'].$put(args, options),
      )
    },
  })
}

export function createPutApi1ExpenseApplicationLineTemplatesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['1']['expense_application_line_templates'][':id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['1']['expense_application_line_templates'][':id']['$put']
        >,
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
    const mutationDefaults = getPutApi1ExpenseApplicationLineTemplatesIdMutationOptions<
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

export function getDeleteApi1ExpenseApplicationLineTemplatesIdMutationKey() {
  return ['api', '/api/1/expense_application_line_templates/:id', 'DELETE'] as const
}

export function getDeleteApi1ExpenseApplicationLineTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['1']['expense_application_line_templates'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api)['1']['expense_application_line_templates'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1ExpenseApplicationLineTemplatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['expense_application_line_templates'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api['1'].expense_application_line_templates[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApi1ExpenseApplicationLineTemplatesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api)['1']['expense_application_line_templates'][':id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api)['1']['expense_application_line_templates'][':id']['$delete']
        >,
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
    const mutationDefaults = getDeleteApi1ExpenseApplicationLineTemplatesIdMutationOptions<
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

export function getApi1PaymentRequestsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['payment_requests']['$get']>,
) {
  return ['api', '/api/1/payment_requests', args] as const
}

export function getApi1PaymentRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['payment_requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['payment_requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['payment_requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PaymentRequestsQueryKey>
  >({
    queryKey: getApi1PaymentRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].payment_requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1PaymentRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['payment_requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['payment_requests']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['payment_requests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1PaymentRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1PaymentRequestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApi1PaymentRequestsMutationKey() {
  return ['api', '/api/1/payment_requests', 'POST'] as const
}

export function getPostApi1PaymentRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['payment_requests']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['payment_requests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1PaymentRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['payment_requests']['$post']>,
    ) {
      return parseResponse(client.api['1'].payment_requests.$post(args, options))
    },
  })
}

export function createPostApi1PaymentRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['payment_requests']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['payment_requests']['$post']>,
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
    const mutationDefaults = getPostApi1PaymentRequestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1PaymentRequestsIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$get']>,
) {
  return ['api', '/api/1/payment_requests/:id', args] as const
}

export function getApi1PaymentRequestsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PaymentRequestsIdQueryKey>
  >({
    queryKey: getApi1PaymentRequestsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].payment_requests[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1PaymentRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1PaymentRequestsIdQueryKey>
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
      ...getApi1PaymentRequestsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApi1PaymentRequestsIdMutationKey() {
  return ['api', '/api/1/payment_requests/:id', 'PUT'] as const
}

export function getPutApi1PaymentRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1PaymentRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].payment_requests[':id'].$put(args, options))
    },
  })
}

export function createPutApi1PaymentRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$put']>,
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
    const mutationDefaults = getPutApi1PaymentRequestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApi1PaymentRequestsIdMutationKey() {
  return ['api', '/api/1/payment_requests/:id', 'DELETE'] as const
}

export function getDeleteApi1PaymentRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1PaymentRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].payment_requests[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1PaymentRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['payment_requests'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1PaymentRequestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApi1PaymentRequestsIdActionsMutationKey() {
  return ['api', '/api/1/payment_requests/:id/actions', 'POST'] as const
}

export function getPostApi1PaymentRequestsIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['payment_requests'][':id']['actions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1PaymentRequestsIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['payment_requests'][':id']['actions']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].payment_requests[':id'].actions.$post(args, options))
    },
  })
}

export function createPostApi1PaymentRequestsIdActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['payment_requests'][':id']['actions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['actions']['$post']>,
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
    const mutationDefaults = getPostApi1PaymentRequestsIdActionsMutationOptions<
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

export function getApi1ApprovalRequestsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['approval_requests']['$get']>,
) {
  return ['api', '/api/1/approval_requests', args] as const
}

export function getApi1ApprovalRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['approval_requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ApprovalRequestsQueryKey>
  >({
    queryKey: getApi1ApprovalRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].approval_requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ApprovalRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['approval_requests']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ApprovalRequestsQueryKey>
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
      ...getApi1ApprovalRequestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApi1ApprovalRequestsMutationKey() {
  return ['api', '/api/1/approval_requests', 'POST'] as const
}

export function getPostApi1ApprovalRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['approval_requests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ApprovalRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['approval_requests']['$post']>,
    ) {
      return parseResponse(client.api['1'].approval_requests.$post(args, options))
    },
  })
}

export function createPostApi1ApprovalRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['approval_requests']['$post']>,
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
    const mutationDefaults = getPostApi1ApprovalRequestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1ApprovalRequestsIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$get']>,
) {
  return ['api', '/api/1/approval_requests/:id', args] as const
}

export function getApi1ApprovalRequestsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ApprovalRequestsIdQueryKey>
  >({
    queryKey: getApi1ApprovalRequestsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].approval_requests[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ApprovalRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ApprovalRequestsIdQueryKey>
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
      ...getApi1ApprovalRequestsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApi1ApprovalRequestsIdMutationKey() {
  return ['api', '/api/1/approval_requests/:id', 'PUT'] as const
}

export function getPutApi1ApprovalRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1ApprovalRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].approval_requests[':id'].$put(args, options))
    },
  })
}

export function createPutApi1ApprovalRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$put']>,
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
    const mutationDefaults = getPutApi1ApprovalRequestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApi1ApprovalRequestsIdMutationKey() {
  return ['api', '/api/1/approval_requests/:id', 'DELETE'] as const
}

export function getDeleteApi1ApprovalRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1ApprovalRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].approval_requests[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1ApprovalRequestsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['approval_requests'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1ApprovalRequestsIdMutationOptions<
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

export function getPostApi1ApprovalRequestsIdActionsMutationKey() {
  return ['api', '/api/1/approval_requests/:id/actions', 'POST'] as const
}

export function getPostApi1ApprovalRequestsIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['approval_requests'][':id']['actions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1ApprovalRequestsIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['approval_requests'][':id']['actions']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].approval_requests[':id'].actions.$post(args, options))
    },
  })
}

export function createPostApi1ApprovalRequestsIdActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['approval_requests'][':id']['actions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['actions']['$post']>,
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
    const mutationDefaults = getPostApi1ApprovalRequestsIdActionsMutationOptions<
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

export function getApi1ApprovalRequestsFormsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['approval_requests']['forms']['$get']>,
) {
  return ['api', '/api/1/approval_requests/forms', args] as const
}

export function getApi1ApprovalRequestsFormsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['forms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['approval_requests']['forms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['forms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ApprovalRequestsFormsQueryKey>
  >({
    queryKey: getApi1ApprovalRequestsFormsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].approval_requests.forms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ApprovalRequestsForms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['forms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['approval_requests']['forms']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['forms']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ApprovalRequestsFormsQueryKey>
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
      ...getApi1ApprovalRequestsFormsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ApprovalRequestsFormsIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['approval_requests']['forms'][':id']['$get']>,
) {
  return ['api', '/api/1/approval_requests/forms/:id', args] as const
}

export function getApi1ApprovalRequestsFormsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['forms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['approval_requests']['forms'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['forms'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ApprovalRequestsFormsIdQueryKey>
  >({
    queryKey: getApi1ApprovalRequestsFormsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].approval_requests.forms[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ApprovalRequestsFormsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_requests']['forms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['approval_requests']['forms'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['approval_requests']['forms'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ApprovalRequestsFormsIdQueryKey>
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
      ...getApi1ApprovalRequestsFormsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1PurchaseRequestsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests']['$get']>,
) {
  return ['api', '/api/1/purchase_requests', args] as const
}

export function getApi1PurchaseRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PurchaseRequestsQueryKey>
  >({
    queryKey: getApi1PurchaseRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].purchase_requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1PurchaseRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['purchase_requests']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1PurchaseRequestsQueryKey>
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
      ...getApi1PurchaseRequestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApi1PurchaseRequestsMutationKey() {
  return ['api', '/api/1/purchase_requests', 'POST'] as const
}

export function getPostApi1PurchaseRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['purchase_requests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1PurchaseRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['purchase_requests']['$post']>,
    ) {
      return parseResponse(client.api['1'].purchase_requests.$post(args, options))
    },
  })
}

export function createPostApi1PurchaseRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['purchase_requests']['$post']>,
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
    const mutationDefaults = getPostApi1PurchaseRequestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1PurchaseRequestsIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$get']>,
) {
  return ['api', '/api/1/purchase_requests/:id', args] as const
}

export function getApi1PurchaseRequestsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PurchaseRequestsIdQueryKey>
  >({
    queryKey: getApi1PurchaseRequestsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].purchase_requests[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1PurchaseRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1PurchaseRequestsIdQueryKey>
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
      ...getApi1PurchaseRequestsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApi1PurchaseRequestsIdMutationKey() {
  return ['api', '/api/1/purchase_requests/:id', 'PUT'] as const
}

export function getPutApi1PurchaseRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1PurchaseRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].purchase_requests[':id'].$put(args, options))
    },
  })
}

export function createPutApi1PurchaseRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$put']>,
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
    const mutationDefaults = getPutApi1PurchaseRequestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApi1PurchaseRequestsIdMutationKey() {
  return ['api', '/api/1/purchase_requests/:id', 'DELETE'] as const
}

export function getDeleteApi1PurchaseRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1PurchaseRequestsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].purchase_requests[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1PurchaseRequestsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1PurchaseRequestsIdMutationOptions<
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

export function getApi1PurchaseRequestsFormsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests']['forms']['$get']>,
) {
  return ['api', '/api/1/purchase_requests/forms', args] as const
}

export function getApi1PurchaseRequestsFormsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['forms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests']['forms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['forms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PurchaseRequestsFormsQueryKey>
  >({
    queryKey: getApi1PurchaseRequestsFormsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].purchase_requests.forms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1PurchaseRequestsForms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['forms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['purchase_requests']['forms']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['forms']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1PurchaseRequestsFormsQueryKey>
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
      ...getApi1PurchaseRequestsFormsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1PurchaseRequestsFormsIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests']['forms'][':id']['$get']>,
) {
  return ['api', '/api/1/purchase_requests/forms/:id', args] as const
}

export function getApi1PurchaseRequestsFormsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['forms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests']['forms'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['forms'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PurchaseRequestsFormsIdQueryKey>
  >({
    queryKey: getApi1PurchaseRequestsFormsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].purchase_requests.forms[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1PurchaseRequestsFormsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['purchase_requests']['forms'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['purchase_requests']['forms'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['purchase_requests']['forms'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1PurchaseRequestsFormsIdQueryKey>
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
      ...getApi1PurchaseRequestsFormsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApi1PurchaseRequestsIdActionsMutationKey() {
  return ['api', '/api/1/purchase_requests/:id/actions', 'POST'] as const
}

export function getPostApi1PurchaseRequestsIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['actions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1PurchaseRequestsIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['purchase_requests'][':id']['actions']['$post']
      >,
    ) {
      return parseResponse(client.api['1'].purchase_requests[':id'].actions.$post(args, options))
    },
  })
}

export function createPostApi1PurchaseRequestsIdActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['purchase_requests'][':id']['actions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['actions']['$post']>,
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
    const mutationDefaults = getPostApi1PurchaseRequestsIdActionsMutationOptions<
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

export function getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetQueryKey(
  args: InferRequestType<
    (typeof client.api)['1']['purchase_requests'][':purchase_request_id']['purchase_budget']['$get']
  >,
) {
  return ['api', '/api/1/purchase_requests/:purchase_request_id/purchase_budget', args] as const
}

export function getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['1']['purchase_requests'][':purchase_request_id']['purchase_budget']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['1']['purchase_requests'][':purchase_request_id']['purchase_budget']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['1']['purchase_requests'][':purchase_request_id']['purchase_budget']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetQueryKey>
  >({
    queryKey: getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].purchase_requests[':purchase_request_id'].purchase_budget.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1PurchaseRequestsPurchaseRequestIdPurchaseBudget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['1']['purchase_requests'][':purchase_request_id']['purchase_budget']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['1']['purchase_requests'][':purchase_request_id']['purchase_budget']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['1']['purchase_requests'][':purchase_request_id']['purchase_budget']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetQueryKey>
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
      ...getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApi1ApprovalFlowRoutesQueryKey(
  args: InferRequestType<(typeof client.api)['1']['approval_flow_routes']['$get']>,
) {
  return ['api', '/api/1/approval_flow_routes', args] as const
}

export function getApi1ApprovalFlowRoutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['approval_flow_routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ApprovalFlowRoutesQueryKey>
  >({
    queryKey: getApi1ApprovalFlowRoutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].approval_flow_routes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ApprovalFlowRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['approval_flow_routes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ApprovalFlowRoutesQueryKey>
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
      ...getApi1ApprovalFlowRoutesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1ApprovalFlowRoutesIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['approval_flow_routes'][':id']['$get']>,
) {
  return ['api', '/api/1/approval_flow_routes/:id', args] as const
}

export function getApi1ApprovalFlowRoutesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['approval_flow_routes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1ApprovalFlowRoutesIdQueryKey>
  >({
    queryKey: getApi1ApprovalFlowRoutesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].approval_flow_routes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1ApprovalFlowRoutesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['approval_flow_routes'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['approval_flow_routes'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1ApprovalFlowRoutesIdQueryKey>
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
      ...getApi1ApprovalFlowRoutesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApi1SegmentsSegmentIdTagsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$get']>,
) {
  return ['api', '/api/1/segments/:segment_id/tags', args] as const
}

export function getApi1SegmentsSegmentIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1SegmentsSegmentIdTagsQueryKey>
  >({
    queryKey: getApi1SegmentsSegmentIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].segments[':segment_id'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1SegmentsSegmentIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1SegmentsSegmentIdTagsQueryKey>
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
      ...getApi1SegmentsSegmentIdTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApi1SegmentsSegmentIdTagsMutationKey() {
  return ['api', '/api/1/segments/:segment_id/tags', 'POST'] as const
}

export function getPostApi1SegmentsSegmentIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1SegmentsSegmentIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$post']>,
    ) {
      return parseResponse(client.api['1'].segments[':segment_id'].tags.$post(args, options))
    },
  })
}

export function createPostApi1SegmentsSegmentIdTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$post']>,
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
    const mutationDefaults = getPostApi1SegmentsSegmentIdTagsMutationOptions<
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

export function getPutApi1SegmentsSegmentIdTagsIdMutationKey() {
  return ['api', '/api/1/segments/:segment_id/tags/:id', 'PUT'] as const
}

export function getPutApi1SegmentsSegmentIdTagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1SegmentsSegmentIdTagsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$put']
      >,
    ) {
      return parseResponse(client.api['1'].segments[':segment_id'].tags[':id'].$put(args, options))
    },
  })
}

export function createPutApi1SegmentsSegmentIdTagsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$put']
        >,
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
    const mutationDefaults = getPutApi1SegmentsSegmentIdTagsIdMutationOptions<
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

export function getDeleteApi1SegmentsSegmentIdTagsIdMutationKey() {
  return ['api', '/api/1/segments/:segment_id/tags/:id', 'DELETE'] as const
}

export function getDeleteApi1SegmentsSegmentIdTagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1SegmentsSegmentIdTagsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api['1'].segments[':segment_id'].tags[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApi1SegmentsSegmentIdTagsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$delete']
        >,
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
    const mutationDefaults = getDeleteApi1SegmentsSegmentIdTagsIdMutationOptions<
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

export function getPutApi1SegmentsSegmentIdTagsCodeUpsertMutationKey() {
  return ['api', '/api/1/segments/:segment_id/tags/code/upsert', 'PUT'] as const
}

export function getPutApi1SegmentsSegmentIdTagsCodeUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['1']['segments'][':segment_id']['tags']['code']['upsert']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)['1']['segments'][':segment_id']['tags']['code']['upsert']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApi1SegmentsSegmentIdTagsCodeUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['1']['segments'][':segment_id']['tags']['code']['upsert']['$put']
      >,
    ) {
      return parseResponse(
        client.api['1'].segments[':segment_id'].tags.code.upsert.$put(args, options),
      )
    },
  })
}

export function createPutApi1SegmentsSegmentIdTagsCodeUpsert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['1']['segments'][':segment_id']['tags']['code']['upsert']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['1']['segments'][':segment_id']['tags']['code']['upsert']['$put']
        >,
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
    const mutationDefaults = getPutApi1SegmentsSegmentIdTagsCodeUpsertMutationOptions<
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

export function getApi1FixedAssetsQueryKey(
  args: InferRequestType<(typeof client.api)['1']['fixed_assets']['$get']>,
) {
  return ['api', '/api/1/fixed_assets', args] as const
}

export function getApi1FixedAssetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['fixed_assets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['fixed_assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['fixed_assets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1FixedAssetsQueryKey>
  >({
    queryKey: getApi1FixedAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].fixed_assets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApi1FixedAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['fixed_assets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['fixed_assets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['fixed_assets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1FixedAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1FixedAssetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApi1AccountGroupsMutationKey() {
  return ['api', '/api/1/account_groups', 'POST'] as const
}

export function getPostApi1AccountGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['account_groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['account_groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1AccountGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['account_groups']['$post']>) {
      return parseResponse(client.api['1'].account_groups.$post(args, options))
    },
  })
}

export function createPostApi1AccountGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['account_groups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['account_groups']['$post']>,
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
    const mutationDefaults = getPostApi1AccountGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1UserMatchersQueryKey(
  args: InferRequestType<(typeof client.api)['1']['user_matchers']['$get']>,
) {
  return ['api', '/api/1/user_matchers', args] as const
}

export function getApi1UserMatchersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['user_matchers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1UserMatchersQueryKey>
  >({
    queryKey: getApi1UserMatchersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].user_matchers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1UserMatchers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['user_matchers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1UserMatchersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1UserMatchersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApi1UserMatchersMutationKey() {
  return ['api', '/api/1/user_matchers', 'POST'] as const
}

export function getPostApi1UserMatchersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['user_matchers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1UserMatchersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1']['user_matchers']['$post']>) {
      return parseResponse(client.api['1'].user_matchers.$post(args, options))
    },
  })
}

export function createPostApi1UserMatchers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['user_matchers']['$post']>,
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
    const mutationDefaults = getPostApi1UserMatchersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApi1UserMatchersIdQueryKey(
  args: InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$get']>,
) {
  return ['api', '/api/1/user_matchers/:id', args] as const
}

export function getApi1UserMatchersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi1UserMatchersIdQueryKey>
  >({
    queryKey: getApi1UserMatchersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1'].user_matchers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApi1UserMatchersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi1UserMatchersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi1UserMatchersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApi1UserMatchersIdMutationKey() {
  return ['api', '/api/1/user_matchers/:id', 'PUT'] as const
}

export function getPutApi1UserMatchersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApi1UserMatchersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$put']>,
    ) {
      return parseResponse(client.api['1'].user_matchers[':id'].$put(args, options))
    },
  })
}

export function createPutApi1UserMatchersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$put']>,
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
    const mutationDefaults = getPutApi1UserMatchersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApi1UserMatchersIdMutationKey() {
  return ['api', '/api/1/user_matchers/:id', 'DELETE'] as const
}

export function getDeleteApi1UserMatchersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApi1UserMatchersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['1'].user_matchers[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApi1UserMatchersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['1']['user_matchers'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApi1UserMatchersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApi1UserMatchersApplyMutationKey() {
  return ['api', '/api/1/user_matchers/apply', 'POST'] as const
}

export function getPostApi1UserMatchersApplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['apply']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1']['user_matchers']['apply']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi1UserMatchersApplyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['1']['user_matchers']['apply']['$post']>,
    ) {
      return parseResponse(client.api['1'].user_matchers.apply.$post(args, options))
    },
  })
}

export function createPostApi1UserMatchersApply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1']['user_matchers']['apply']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1']['user_matchers']['apply']['$post']>,
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
    const mutationDefaults = getPostApi1UserMatchersApplyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
