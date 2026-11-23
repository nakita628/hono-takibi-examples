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

export function getCmsKey() {
  return ['cms'] as const
}

export function getCmsUrlRedirects202609QueryKey(
  args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$get']>,
) {
  return ['cms', '/cms/url-redirects/2026-09', args] as const
}

export function getCmsUrlRedirects202609QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsUrlRedirects202609QueryKey>
  >({
    queryKey: getCmsUrlRedirects202609QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms['url-redirects']['2026-09'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCmsUrlRedirects202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsUrlRedirects202609QueryKey>
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
      ...getCmsUrlRedirects202609QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostCmsUrlRedirects202609MutationKey() {
  return ['cms', '/cms/url-redirects/2026-09', 'POST'] as const
}

export function getPostCmsUrlRedirects202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsUrlRedirects202609MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$post']>,
    ) {
      return parseResponse(client.cms['url-redirects']['2026-09'].$post(args, options))
    },
  })
}

export function injectPostCmsUrlRedirects202609<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$post']>,
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
    const mutationDefaults = getPostCmsUrlRedirects202609MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCmsUrlRedirects202609UrlMappingsQueryKey() {
  return ['cms', '/cms/url-redirects/2026-09/url-mappings'] as const
}

export function getCmsUrlRedirects202609UrlMappingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsUrlRedirects202609UrlMappingsQueryKey>
  >({
    queryKey: getCmsUrlRedirects202609UrlMappingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cms['url-redirects']['2026-09']['url-mappings'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCmsUrlRedirects202609UrlMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$get']>>
      >
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
              Awaited<
                ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsUrlRedirects202609UrlMappingsQueryKey>
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
      ...getCmsUrlRedirects202609UrlMappingsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostCmsUrlRedirects202609UrlMappingsMutationKey() {
  return ['cms', '/cms/url-redirects/2026-09/url-mappings', 'POST'] as const
}

export function getPostCmsUrlRedirects202609UrlMappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsUrlRedirects202609UrlMappingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$post']
      >,
    ) {
      return parseResponse(
        client.cms['url-redirects']['2026-09']['url-mappings'].$post(args, options),
      )
    },
  })
}

export function injectPostCmsUrlRedirects202609UrlMappings<
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
                ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$post']>,
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
    const mutationDefaults = getPostCmsUrlRedirects202609UrlMappingsMutationOptions<
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

export function getCmsUrlRedirects202609UrlMappingsIdQueryKey(
  args: InferRequestType<
    (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
  >,
) {
  return ['cms', '/cms/url-redirects/2026-09/url-mappings/:id', args] as const
}

export function getCmsUrlRedirects202609UrlMappingsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsUrlRedirects202609UrlMappingsIdQueryKey>
  >({
    queryKey: getCmsUrlRedirects202609UrlMappingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms['url-redirects']['2026-09']['url-mappings'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCmsUrlRedirects202609UrlMappingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsUrlRedirects202609UrlMappingsIdQueryKey>
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
      ...getCmsUrlRedirects202609UrlMappingsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteCmsUrlRedirects202609UrlMappingsIdMutationKey() {
  return ['cms', '/cms/url-redirects/2026-09/url-mappings/:id', 'DELETE'] as const
}

export function getDeleteCmsUrlRedirects202609UrlMappingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCmsUrlRedirects202609UrlMappingsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.cms['url-redirects']['2026-09']['url-mappings'][':id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteCmsUrlRedirects202609UrlMappingsId<
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
                    (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$delete']
        >,
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
    const mutationDefaults = getDeleteCmsUrlRedirects202609UrlMappingsIdMutationOptions<
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

export function getCmsUrlRedirects202609UrlRedirectIdQueryKey(
  args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>,
) {
  return ['cms', '/cms/url-redirects/2026-09/:urlRedirectId', args] as const
}

export function getCmsUrlRedirects202609UrlRedirectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsUrlRedirects202609UrlRedirectIdQueryKey>
  >({
    queryKey: getCmsUrlRedirects202609UrlRedirectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms['url-redirects']['2026-09'][':urlRedirectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCmsUrlRedirects202609UrlRedirectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsUrlRedirects202609UrlRedirectIdQueryKey>
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
      ...getCmsUrlRedirects202609UrlRedirectIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteCmsUrlRedirects202609UrlRedirectIdMutationKey() {
  return ['cms', '/cms/url-redirects/2026-09/:urlRedirectId', 'DELETE'] as const
}

export function getDeleteCmsUrlRedirects202609UrlRedirectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCmsUrlRedirects202609UrlRedirectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$delete']
      >,
    ) {
      return parseResponse(
        client.cms['url-redirects']['2026-09'][':urlRedirectId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteCmsUrlRedirects202609UrlRedirectId<
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
                    (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$delete']
        >,
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
    const mutationDefaults = getDeleteCmsUrlRedirects202609UrlRedirectIdMutationOptions<
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

export function getPatchCmsUrlRedirects202609UrlRedirectIdMutationKey() {
  return ['cms', '/cms/url-redirects/2026-09/:urlRedirectId', 'PATCH'] as const
}

export function getPatchCmsUrlRedirects202609UrlRedirectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCmsUrlRedirects202609UrlRedirectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$patch']
      >,
    ) {
      return parseResponse(
        client.cms['url-redirects']['2026-09'][':urlRedirectId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchCmsUrlRedirects202609UrlRedirectId<
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
                  (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$patch']
        >,
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
    const mutationDefaults = getPatchCmsUrlRedirects202609UrlRedirectIdMutationOptions<
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
