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

export function getV1TableIndexQueryKey(args: InferRequestType<typeof client.v1.table.index.$get>) {
  return ['v1', '/v1/table/', args] as const
}

export function getV1TableIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.table.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.table.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.table.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TableIndexQueryKey>
  >({
    queryKey: getV1TableIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.table.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TableIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.table.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.table.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.table.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TableIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TableIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1TableNameCreateIndexMutationKey() {
  return ['v1', '/v1/table/:name/create/', 'POST'] as const
}

export function getPostV1TableNameCreateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['create']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.table)[':name']['create']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TableNameCreateIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.table)[':name']['create']['index']['$post']>,
    ) {
      return parseResponse(client.v1.table[':name'].create.index.$post(args, options))
    },
  })
}

export function createPostV1TableNameCreateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.table)[':name']['create']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.table)[':name']['create']['index']['$post']>,
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
    const mutationDefaults = getPostV1TableNameCreateIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TableNameQueryIndexMutationKey() {
  return ['v1', '/v1/table/:name/query/', 'POST'] as const
}

export function getPostV1TableNameQueryIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['query']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.table)[':name']['query']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TableNameQueryIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.table)[':name']['query']['index']['$post']>,
    ) {
      return parseResponse(client.v1.table[':name'].query.index.$post(args, options))
    },
  })
}

export function createPostV1TableNameQueryIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.table)[':name']['query']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.table)[':name']['query']['index']['$post']>,
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
    const mutationDefaults = getPostV1TableNameQueryIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TableNameInsertIndexMutationKey() {
  return ['v1', '/v1/table/:name/insert/', 'POST'] as const
}

export function getPostV1TableNameInsertIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['insert']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.table)[':name']['insert']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TableNameInsertIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.table)[':name']['insert']['index']['$post']>,
    ) {
      return parseResponse(client.v1.table[':name'].insert.index.$post(args, options))
    },
  })
}

export function createPostV1TableNameInsertIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.table)[':name']['insert']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.table)[':name']['insert']['index']['$post']>,
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
    const mutationDefaults = getPostV1TableNameInsertIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TableNameMergeInsertIndexMutationKey() {
  return ['v1', '/v1/table/:name/merge_insert/', 'POST'] as const
}

export function getPostV1TableNameMergeInsertIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['merge_insert']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.table)[':name']['merge_insert']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TableNameMergeInsertIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.table)[':name']['merge_insert']['index']['$post']>,
    ) {
      return parseResponse(client.v1.table[':name'].merge_insert.index.$post(args, options))
    },
  })
}

export function createPostV1TableNameMergeInsertIndex<
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
                ReturnType<(typeof client.v1.table)[':name']['merge_insert']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.table)[':name']['merge_insert']['index']['$post']>,
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
    const mutationDefaults = getPostV1TableNameMergeInsertIndexMutationOptions<
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

export function getPostV1TableNameDeleteIndexMutationKey() {
  return ['v1', '/v1/table/:name/delete/', 'POST'] as const
}

export function getPostV1TableNameDeleteIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['delete']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.table)[':name']['delete']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TableNameDeleteIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.table)[':name']['delete']['index']['$post']>,
    ) {
      return parseResponse(client.v1.table[':name'].delete.index.$post(args, options))
    },
  })
}

export function createPostV1TableNameDeleteIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.table)[':name']['delete']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.table)[':name']['delete']['index']['$post']>,
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
    const mutationDefaults = getPostV1TableNameDeleteIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TableNameDropIndexMutationKey() {
  return ['v1', '/v1/table/:name/drop/', 'POST'] as const
}

export function getPostV1TableNameDropIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['drop']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.table)[':name']['drop']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TableNameDropIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.table)[':name']['drop']['index']['$post']>,
    ) {
      return parseResponse(client.v1.table[':name'].drop.index.$post(args, options))
    },
  })
}

export function createPostV1TableNameDropIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.table)[':name']['drop']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.table)[':name']['drop']['index']['$post']>,
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
    const mutationDefaults = getPostV1TableNameDropIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TableNameDescribeIndexMutationKey() {
  return ['v1', '/v1/table/:name/describe/', 'POST'] as const
}

export function getPostV1TableNameDescribeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['describe']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.table)[':name']['describe']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TableNameDescribeIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.table)[':name']['describe']['index']['$post']>,
    ) {
      return parseResponse(client.v1.table[':name'].describe.index.$post(args, options))
    },
  })
}

export function createPostV1TableNameDescribeIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.table)[':name']['describe']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.table)[':name']['describe']['index']['$post']>,
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
    const mutationDefaults = getPostV1TableNameDescribeIndexMutationOptions<
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

export function getPostV1TableNameIndexListIndexMutationKey() {
  return ['v1', '/v1/table/:name/index/list/', 'POST'] as const
}

export function getPostV1TableNameIndexListIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['index']['list']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.table)[':name']['index']['list']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TableNameIndexListIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.table)[':name']['index']['list']['index']['$post']>,
    ) {
      return parseResponse(client.v1.table[':name'].index.list.index.$post(args, options))
    },
  })
}

export function createPostV1TableNameIndexListIndex<
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
                ReturnType<(typeof client.v1.table)[':name']['index']['list']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.table)[':name']['index']['list']['index']['$post']>,
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
    const mutationDefaults = getPostV1TableNameIndexListIndexMutationOptions<
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

export function getPostV1TableNameCreateIndexIndexMutationKey() {
  return ['v1', '/v1/table/:name/create_index/', 'POST'] as const
}

export function getPostV1TableNameCreateIndexIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.table)[':name']['create_index']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.table)[':name']['create_index']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TableNameCreateIndexIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.table)[':name']['create_index']['index']['$post']>,
    ) {
      return parseResponse(client.v1.table[':name'].create_index.index.$post(args, options))
    },
  })
}

export function createPostV1TableNameCreateIndexIndex<
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
                ReturnType<(typeof client.v1.table)[':name']['create_index']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.table)[':name']['create_index']['index']['$post']>,
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
    const mutationDefaults = getPostV1TableNameCreateIndexIndexMutationOptions<
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

export function getPostV1TableNameCreateScalarIndexIndexMutationKey() {
  return ['v1', '/v1/table/:name/create_scalar_index/', 'POST'] as const
}

export function getPostV1TableNameCreateScalarIndexIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.table)[':name']['create_scalar_index']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.table)[':name']['create_scalar_index']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TableNameCreateScalarIndexIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.table)[':name']['create_scalar_index']['index']['$post']
      >,
    ) {
      return parseResponse(client.v1.table[':name'].create_scalar_index.index.$post(args, options))
    },
  })
}

export function createPostV1TableNameCreateScalarIndexIndex<
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
                  (typeof client.v1.table)[':name']['create_scalar_index']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.table)[':name']['create_scalar_index']['index']['$post']
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
    const mutationDefaults = getPostV1TableNameCreateScalarIndexIndexMutationOptions<
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

export function getPostV1TableNameIndexIndexNameDropIndexMutationKey() {
  return ['v1', '/v1/table/:name/index/:index_name/drop/', 'POST'] as const
}

export function getPostV1TableNameIndexIndexNameDropIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.table)[':name']['index'][':index_name']['drop']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.table)[':name']['index'][':index_name']['drop']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1TableNameIndexIndexNameDropIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.table)[':name']['index'][':index_name']['drop']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.table[':name'].index[':index_name'].drop.index.$post(args, options),
      )
    },
  })
}

export function createPostV1TableNameIndexIndexNameDropIndex<
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
                  (typeof client.v1.table)[':name']['index'][':index_name']['drop']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.table)[':name']['index'][':index_name']['drop']['index']['$post']
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
    const mutationDefaults = getPostV1TableNameIndexIndexNameDropIndexMutationOptions<
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
