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

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getIndexPhpAppsOauth2AuthorizeQueryKey(
  args: InferRequestType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>,
) {
  return ['index.php', '/index.php/apps/oauth2/authorize', args] as const
}

export function getIndexPhpAppsOauth2AuthorizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsOauth2AuthorizeQueryKey>
  >({
    queryKey: getIndexPhpAppsOauth2AuthorizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].apps.oauth2.authorize.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpAppsOauth2Authorize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndexPhpAppsOauth2AuthorizeQueryKey>
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
      ...getIndexPhpAppsOauth2AuthorizeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostIndexPhpAppsOauth2ApiV1TokenMutationKey() {
  return ['index.php', '/index.php/apps/oauth2/api/v1/token', 'POST'] as const
}

export function getPostIndexPhpAppsOauth2ApiV1TokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['index.php']['apps']['oauth2']['api']['v1']['token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['index.php']['apps']['oauth2']['api']['v1']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexPhpAppsOauth2ApiV1TokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['index.php']['apps']['oauth2']['api']['v1']['token']['$post']
      >,
    ) {
      return parseResponse(client['index.php'].apps.oauth2.api.v1.token.$post(args, options))
    },
  })
}

export function createPostIndexPhpAppsOauth2ApiV1Token<
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
                    (typeof client)['index.php']['apps']['oauth2']['api']['v1']['token']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['index.php']['apps']['oauth2']['api']['v1']['token']['$post']
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
    const mutationDefaults = getPostIndexPhpAppsOauth2ApiV1TokenMutationOptions<
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
