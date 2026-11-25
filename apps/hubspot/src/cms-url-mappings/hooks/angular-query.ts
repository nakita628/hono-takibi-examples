import { injectQuery, injectMutation, queryOptions, mutationOptions } from '@tanstack/angular-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
} from '@tanstack/angular-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getUrlMappingsKey() {
  return ['url-mappings'] as const
}

export function getUrlMappings202609UrlMappingsQueryKey() {
  return ['url-mappings', '/url-mappings/2026-09/url-mappings'] as const
}

export function getUrlMappings202609UrlMappingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUrlMappings202609UrlMappingsQueryKey>
  >({
    queryKey: getUrlMappings202609UrlMappingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['url-mappings']['2026-09']['url-mappings'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUrlMappings202609UrlMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$get']>>
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
                ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUrlMappings202609UrlMappingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUrlMappings202609UrlMappingsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  })
}

export function getPostUrlMappings202609UrlMappingsMutationKey() {
  return ['url-mappings', '/url-mappings/2026-09/url-mappings', 'POST'] as const
}

export function getPostUrlMappings202609UrlMappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUrlMappings202609UrlMappingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$post']>,
    ) {
      return parseResponse(client['url-mappings']['2026-09']['url-mappings'].$post(args, options))
    },
  })
}

export function injectPostUrlMappings202609UrlMappings<
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
                ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUrlMappings202609UrlMappingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getUrlMappings202609UrlMappingsIdQueryKey(
  args: InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>,
) {
  return ['url-mappings', '/url-mappings/2026-09/url-mappings/:id', args] as const
}

export function getUrlMappings202609UrlMappingsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUrlMappings202609UrlMappingsIdQueryKey>
  >({
    queryKey: getUrlMappings202609UrlMappingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['url-mappings']['2026-09']['url-mappings'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUrlMappings202609UrlMappingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUrlMappings202609UrlMappingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUrlMappings202609UrlMappingsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getDeleteUrlMappings202609UrlMappingsIdMutationKey() {
  return ['url-mappings', '/url-mappings/2026-09/url-mappings/:id', 'DELETE'] as const
}

export function getDeleteUrlMappings202609UrlMappingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUrlMappings202609UrlMappingsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client['url-mappings']['2026-09']['url-mappings'][':id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteUrlMappings202609UrlMappingsId<
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
                    (typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUrlMappings202609UrlMappingsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}
