import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1BlocksIdQueryKey(
  args: InferRequestType<(typeof client.v1.blocks)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/blocks/:id', keyArgs] as const
}

export function getV1BlocksIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.blocks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BlocksIdQueryKey>
  >({
    queryKey: getV1BlocksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.blocks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1BlocksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.blocks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BlocksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BlocksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV1BlocksIdMutationKey() {
  return ['v1', '/v1/blocks/:id', 'DELETE'] as const
}

export function getDeleteV1BlocksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.blocks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BlocksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.blocks)[':id']['$delete']>) {
      return parseResponse(client.v1.blocks[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteV1BlocksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.blocks)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1BlocksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1BlocksIdMutationKey() {
  return ['v1', '/v1/blocks/:id', 'PATCH'] as const
}

export function getPatchV1BlocksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.blocks)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BlocksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.blocks)[':id']['$patch']>) {
      return parseResponse(client.v1.blocks[':id'].$patch(args, options))
    },
  })
}

export function injectPatchV1BlocksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.blocks)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.blocks)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1BlocksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1BlocksIdChildrenQueryKey(
  args: InferRequestType<(typeof client.v1.blocks)[':id']['children']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/blocks/:id/children', keyArgs] as const
}

export function getV1BlocksIdChildrenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.blocks)[':id']['children']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.blocks)[':id']['children']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.blocks)[':id']['children']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BlocksIdChildrenQueryKey>
  >({
    queryKey: getV1BlocksIdChildrenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.blocks[':id'].children.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1BlocksIdChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.blocks)[':id']['children']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.blocks)[':id']['children']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.blocks)[':id']['children']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BlocksIdChildrenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BlocksIdChildrenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchV1BlocksIdChildrenMutationKey() {
  return ['v1', '/v1/blocks/:id/children', 'PATCH'] as const
}

export function getPatchV1BlocksIdChildrenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.blocks)[':id']['children']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.blocks)[':id']['children']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BlocksIdChildrenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.blocks)[':id']['children']['$patch']>,
    ) {
      return parseResponse(client.v1.blocks[':id'].children.$patch(args, options))
    },
  })
}

export function injectPatchV1BlocksIdChildren<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.blocks)[':id']['children']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.blocks)[':id']['children']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1BlocksIdChildrenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1CommentsQueryKey(args: InferRequestType<typeof client.v1.comments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/comments', keyArgs] as const
}

export function getV1CommentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.comments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.comments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.comments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CommentsQueryKey>
  >({
    queryKey: getV1CommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.comments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Comments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.comments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.comments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1DatabasesIdQueryKey(
  args: InferRequestType<(typeof client.v1.databases)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/databases/:id', keyArgs] as const
}

export function getV1DatabasesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.databases)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.databases)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.databases)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatabasesIdQueryKey>
  >({
    queryKey: getV1DatabasesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.databases[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1DatabasesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.databases)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.databases)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.databases)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DatabasesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DatabasesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchV1DatabasesIdMutationKey() {
  return ['v1', '/v1/databases/:id', 'PATCH'] as const
}

export function getPatchV1DatabasesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.databases)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.databases)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DatabasesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.databases)[':id']['$patch']>) {
      return parseResponse(client.v1.databases[':id'].$patch(args, options))
    },
  })
}

export function injectPatchV1DatabasesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.databases)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.databases)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1DatabasesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1DatabasesIdQueryMutationKey() {
  return ['v1', '/v1/databases/:id/query', 'POST'] as const
}

export function getPostV1DatabasesIdQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.databases)[':id']['query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.databases)[':id']['query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DatabasesIdQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.databases)[':id']['query']['$post']>,
    ) {
      return parseResponse(client.v1.databases[':id'].query.$post(args, options))
    },
  })
}

export function injectPostV1DatabasesIdQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.databases)[':id']['query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.databases)[':id']['query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1DatabasesIdQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1PagesIdQueryKey(
  args: InferRequestType<(typeof client.v1.pages)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/pages/:id', keyArgs] as const
}

export function getV1PagesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.pages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1.pages)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.pages)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PagesIdQueryKey>
  >({
    queryKey: getV1PagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.pages[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1PagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.pages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.pages)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.pages)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PagesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchV1PagesIdMutationKey() {
  return ['v1', '/v1/pages/:id', 'PATCH'] as const
}

export function getPatchV1PagesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.pages)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.pages)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.pages)[':id']['$patch']>) {
      return parseResponse(client.v1.pages[':id'].$patch(args, options))
    },
  })
}

export function injectPatchV1PagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.pages)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.pages)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1PagesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1PagesPageIdPropertiesPropertyIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.pages)[':page_id']['properties'][':property_id']['$get']
  >,
) {
  return ['v1', '/v1/pages/:page_id/properties/:property_id', args] as const
}

export function getV1PagesPageIdPropertiesPropertyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.pages)[':page_id']['properties'][':property_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.pages)[':page_id']['properties'][':property_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.pages)[':page_id']['properties'][':property_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PagesPageIdPropertiesPropertyIdQueryKey>
  >({
    queryKey: getV1PagesPageIdPropertiesPropertyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.pages[':page_id'].properties[':property_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1PagesPageIdPropertiesPropertyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.pages)[':page_id']['properties'][':property_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.pages)[':page_id']['properties'][':property_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.pages)[':page_id']['properties'][':property_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PagesPageIdPropertiesPropertyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1PagesPageIdPropertiesPropertyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1UsersIdQueryKey(
  args: InferRequestType<(typeof client.v1.users)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/users/:id', keyArgs] as const
}

export function getV1UsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1.users)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersIdQueryKey>
  >({
    queryKey: getV1UsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1UsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
