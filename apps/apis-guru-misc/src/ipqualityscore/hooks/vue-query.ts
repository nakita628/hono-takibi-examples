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

export function getJsonKey() {
  return ['json'] as const
}

export function getJsonEmailYOURAPIKEYHEREUSEREMAILHEREQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.json.email)[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE']['$get']>
  >,
) {
  return ['json', '/json/email/:YOUR_API_KEY_HERE/:USER_EMAIL_HERE', toValue(args)] as const
}

export function getJsonEmailYOURAPIKEYHEREUSEREMAILHEREQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.json.email)[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJsonEmailYOURAPIKEYHEREUSEREMAILHEREQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.json.email[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJsonEmailYOURAPIKEYHEREUSEREMAILHERE<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.json.email)[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.json.email)[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.json.email)[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE']['$get']
                  >
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
                  ReturnType<
                    (typeof client.json.email)[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getJsonEmailYOURAPIKEYHEREUSEREMAILHEREQueryKey>
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
          Awaited<
            ReturnType<(typeof client.json.email)[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJsonEmailYOURAPIKEYHEREUSEREMAILHEREQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJsonEmailYOURAPIKEYHEREUSEREMAILHEREQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.json.email[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJsonPhoneYOURAPIKEYHEREUSERPHONEHEREQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.json.phone)[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE']['$get']>
  >,
) {
  return ['json', '/json/phone/:YOUR_API_KEY_HERE/:USER_PHONE_HERE', toValue(args)] as const
}

export function getJsonPhoneYOURAPIKEYHEREUSERPHONEHEREQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.json.phone)[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJsonPhoneYOURAPIKEYHEREUSERPHONEHEREQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.json.phone[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJsonPhoneYOURAPIKEYHEREUSERPHONEHERE<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.json.phone)[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.json.phone)[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.json.phone)[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE']['$get']
                  >
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
                  ReturnType<
                    (typeof client.json.phone)[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getJsonPhoneYOURAPIKEYHEREUSERPHONEHEREQueryKey>
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
          Awaited<
            ReturnType<(typeof client.json.phone)[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJsonPhoneYOURAPIKEYHEREUSERPHONEHEREQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJsonPhoneYOURAPIKEYHEREUSERPHONEHEREQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.json.phone[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJsonUrlYOURAPIKEYHEREURLHEREQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>
  >,
) {
  return ['json', '/json/url/:YOUR_API_KEY_HERE/:URL_HERE', toValue(args)] as const
}

export function getJsonUrlYOURAPIKEYHEREURLHEREQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJsonUrlYOURAPIKEYHEREURLHEREQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.json.url[':YOUR_API_KEY_HERE'][':URL_HERE'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJsonUrlYOURAPIKEYHEREURLHERE<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>
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
                  ReturnType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getJsonUrlYOURAPIKEYHEREURLHEREQueryKey>
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
          Awaited<ReturnType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJsonUrlYOURAPIKEYHEREURLHEREQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJsonUrlYOURAPIKEYHEREURLHEREQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.json.url[':YOUR_API_KEY_HERE'][':URL_HERE'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
