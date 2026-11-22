import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getJsonKey() {
  return ['json'] as const
}

export function getJsonEmailYOURAPIKEYHEREUSEREMAILHEREQueryKey(
  args: InferRequestType<
    (typeof client.json.email)[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE']['$get']
  >,
) {
  return ['json', '/json/email/:YOUR_API_KEY_HERE/:USER_EMAIL_HERE', args] as const
}

export function getJsonEmailYOURAPIKEYHEREUSEREMAILHEREQueryOptions<
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
  args: InferRequestType<
    (typeof client.json.email)[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getJsonEmailYOURAPIKEYHEREUSEREMAILHEREQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.json.email[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJsonEmailYOURAPIKEYHEREUSEREMAILHERE<
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
  args: () => InferRequestType<
    (typeof client.json.email)[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getJsonEmailYOURAPIKEYHEREUSEREMAILHEREQueryKey>
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
      ...getJsonEmailYOURAPIKEYHEREUSEREMAILHEREQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getJsonPhoneYOURAPIKEYHEREUSERPHONEHEREQueryKey(
  args: InferRequestType<
    (typeof client.json.phone)[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE']['$get']
  >,
) {
  return ['json', '/json/phone/:YOUR_API_KEY_HERE/:USER_PHONE_HERE', args] as const
}

export function getJsonPhoneYOURAPIKEYHEREUSERPHONEHEREQueryOptions<
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
  args: InferRequestType<
    (typeof client.json.phone)[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getJsonPhoneYOURAPIKEYHEREUSERPHONEHEREQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.json.phone[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJsonPhoneYOURAPIKEYHEREUSERPHONEHERE<
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
  args: () => InferRequestType<
    (typeof client.json.phone)[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getJsonPhoneYOURAPIKEYHEREUSERPHONEHEREQueryKey>
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
      ...getJsonPhoneYOURAPIKEYHEREUSERPHONEHEREQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getJsonUrlYOURAPIKEYHEREURLHEREQueryKey(
  args: InferRequestType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>,
) {
  return ['json', '/json/url/:YOUR_API_KEY_HERE/:URL_HERE', args] as const
}

export function getJsonUrlYOURAPIKEYHEREURLHEREQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getJsonUrlYOURAPIKEYHEREURLHEREQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.json.url[':YOUR_API_KEY_HERE'][':URL_HERE'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJsonUrlYOURAPIKEYHEREURLHERE<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getJsonUrlYOURAPIKEYHEREURLHEREQueryKey>
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
      ...getJsonUrlYOURAPIKEYHEREURLHEREQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
