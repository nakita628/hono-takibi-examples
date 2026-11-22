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

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getUserinfoKey() {
  return ['userinfo'] as const
}

export function getPostOauth2V2TokeninfoMutationKey() {
  return ['oauth2', '/oauth2/v2/tokeninfo', 'POST'] as const
}

export function getPostOauth2V2TokeninfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.tokeninfo.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth2.v2.tokeninfo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2V2TokeninfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.v2.tokeninfo.$post>) {
      return parseResponse(client.oauth2.v2.tokeninfo.$post(args, options))
    },
  })
}

export function usePostOauth2V2Tokeninfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.tokeninfo.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth2.v2.tokeninfo.$post>,
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
  const mutationDefaults = getPostOauth2V2TokeninfoMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOauth2V2UserinfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth2.v2.userinfo.$get>>,
) {
  return ['oauth2', '/oauth2/v2/userinfo', toValue(args)] as const
}

export function getOauth2V2UserinfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth2.v2.userinfo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauth2V2UserinfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2.v2.userinfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauth2V2Userinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth2.v2.userinfo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.userinfo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.userinfo.$get>>>
            >
          >,
          ReturnType<typeof getOauth2V2UserinfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.v2.userinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2V2UserinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauth2V2UserinfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2.v2.userinfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserinfoV2MeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.userinfo.v2.me.$get>>,
) {
  return ['userinfo', '/userinfo/v2/me', toValue(args)] as const
}

export function getUserinfoV2MeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.userinfo.v2.me.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserinfoV2MeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.userinfo.v2.me.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserinfoV2Me<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.v2.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.userinfo.v2.me.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.v2.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.v2.me.$get>>>>
          >,
          ReturnType<typeof getUserinfoV2MeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.userinfo.v2.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserinfoV2MeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserinfoV2MeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.userinfo.v2.me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
