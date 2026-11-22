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

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getIndexPhpAppsOauth2AuthorizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>
  >,
) {
  return ['index.php', '/index.php/apps/oauth2/authorize', toValue(args)] as const
}

export function getIndexPhpAppsOauth2AuthorizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpAppsOauth2AuthorizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].apps.oauth2.authorize.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpAppsOauth2Authorize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIndexPhpAppsOauth2AuthorizeQueryKey>
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
          Awaited<ReturnType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsOauth2AuthorizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpAppsOauth2AuthorizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].apps.oauth2.authorize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIndexPhpAppsOauth2ApiV1Token<
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
  const mutationDefaults = getPostIndexPhpAppsOauth2ApiV1TokenMutationOptions<
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
