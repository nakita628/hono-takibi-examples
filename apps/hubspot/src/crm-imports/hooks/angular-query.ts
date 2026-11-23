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

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmImports202609QueryKey(
  args: InferRequestType<(typeof client.crm.imports)['2026-09']['$get']>,
) {
  return ['crm', '/crm/imports/2026-09', args] as const
}

export function getCrmImports202609QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.imports)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmImports202609QueryKey>
  >({
    queryKey: getCrmImports202609QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.imports['2026-09'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrmImports202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm.imports)['2026-09']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmImports202609QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrmImports202609QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCrmImports202609MutationKey() {
  return ['crm', '/crm/imports/2026-09', 'POST'] as const
}

export function getPostCrmImports202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.imports)['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmImports202609MutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.imports)['2026-09']['$post']>) {
      return parseResponse(client.crm.imports['2026-09'].$post(args, options))
    },
  })
}

export function injectPostCrmImports202609<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.imports)['2026-09']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.imports)['2026-09']['$post']>,
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
    const mutationDefaults = getPostCrmImports202609MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCrmImports202609ImportIdQueryKey(
  args: InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>,
) {
  return ['crm', '/crm/imports/2026-09/:importId', args] as const
}

export function getCrmImports202609ImportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmImports202609ImportIdQueryKey>
  >({
    queryKey: getCrmImports202609ImportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.imports['2026-09'][':importId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrmImports202609ImportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmImports202609ImportIdQueryKey>
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
      ...getCrmImports202609ImportIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostCrmImports202609ImportIdCancelMutationKey() {
  return ['crm', '/crm/imports/2026-09/:importId/cancel', 'POST'] as const
}

export function getPostCrmImports202609ImportIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmImports202609ImportIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.imports)['2026-09'][':importId']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.crm.imports['2026-09'][':importId'].cancel.$post(args, options))
    },
  })
}

export function injectPostCrmImports202609ImportIdCancel<
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
                ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['cancel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['cancel']['$post']>,
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
    const mutationDefaults = getPostCrmImports202609ImportIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCrmImports202609ImportIdErrorsQueryKey(
  args: InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>,
) {
  return ['crm', '/crm/imports/2026-09/:importId/errors', args] as const
}

export function getCrmImports202609ImportIdErrorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmImports202609ImportIdErrorsQueryKey>
  >({
    queryKey: getCrmImports202609ImportIdErrorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.imports['2026-09'][':importId'].errors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrmImports202609ImportIdErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmImports202609ImportIdErrorsQueryKey>
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
      ...getCrmImports202609ImportIdErrorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
