import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCharityOrgKey() {
  return ['charity_org'] as const
}

export function getCharityOrgQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.charity_org.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['charity_org', '/charity_org', keyArgs] as const
}

export function getCharityOrgQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.charity_org.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCharityOrgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.charity_org.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCharityOrg<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity_org.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.charity_org.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity_org.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity_org.$get>>>>
          >,
          ReturnType<typeof getCharityOrgQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charity_org.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCharityOrgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCharityOrgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.charity_org.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCharityOrgCharityOrgIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.charity_org)[':charity_org_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['charity_org', '/charity_org/:charity_org_id', keyArgs] as const
}

export function getCharityOrgCharityOrgIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.charity_org)[':charity_org_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCharityOrgCharityOrgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.charity_org[':charity_org_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCharityOrgCharityOrgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.charity_org)[':charity_org_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.charity_org)[':charity_org_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.charity_org)[':charity_org_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.charity_org)[':charity_org_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCharityOrgCharityOrgIdQueryKey>
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
          Awaited<ReturnType<(typeof client.charity_org)[':charity_org_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCharityOrgCharityOrgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCharityOrgCharityOrgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.charity_org[':charity_org_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
