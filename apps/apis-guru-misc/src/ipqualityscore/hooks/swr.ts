import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getJsonKey() {
  return ['json'] as const
}

export function getGetJsonEmailYOURAPIKEYHEREUSEREMAILHEREKey(
  args: InferRequestType<
    (typeof client.json.email)[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE']['$get']
  >,
) {
  return ['json', '/json/email/:YOUR_API_KEY_HERE/:USER_EMAIL_HERE', args] as const
}

export function useGetJsonEmailYOURAPIKEYHEREUSEREMAILHERE<TError = unknown>(
  args: InferRequestType<
    (typeof client.json.email)[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJsonEmailYOURAPIKEYHEREUSEREMAILHEREKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.json.email[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJsonEmailYOURAPIKEYHEREUSEREMAILHERE<TError = unknown>(
  args: InferRequestType<
    (typeof client.json.email)[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJsonEmailYOURAPIKEYHEREUSEREMAILHEREKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.json.email[':YOUR_API_KEY_HERE'][':USER_EMAIL_HERE'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetJsonPhoneYOURAPIKEYHEREUSERPHONEHEREKey(
  args: InferRequestType<
    (typeof client.json.phone)[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE']['$get']
  >,
) {
  return ['json', '/json/phone/:YOUR_API_KEY_HERE/:USER_PHONE_HERE', args] as const
}

export function useGetJsonPhoneYOURAPIKEYHEREUSERPHONEHERE<TError = unknown>(
  args: InferRequestType<
    (typeof client.json.phone)[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJsonPhoneYOURAPIKEYHEREUSERPHONEHEREKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.json.phone[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJsonPhoneYOURAPIKEYHEREUSERPHONEHERE<TError = unknown>(
  args: InferRequestType<
    (typeof client.json.phone)[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJsonPhoneYOURAPIKEYHEREUSERPHONEHEREKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.json.phone[':YOUR_API_KEY_HERE'][':USER_PHONE_HERE'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetJsonUrlYOURAPIKEYHEREURLHEREKey(
  args: InferRequestType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>,
) {
  return ['json', '/json/url/:YOUR_API_KEY_HERE/:URL_HERE', args] as const
}

export function useGetJsonUrlYOURAPIKEYHEREURLHERE<TError = unknown>(
  args: InferRequestType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJsonUrlYOURAPIKEYHEREURLHEREKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.json.url[':YOUR_API_KEY_HERE'][':URL_HERE'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJsonUrlYOURAPIKEYHEREURLHERE<TError = unknown>(
  args: InferRequestType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetJsonUrlYOURAPIKEYHEREURLHEREKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.json.url)[':YOUR_API_KEY_HERE'][':URL_HERE']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.json.url[':YOUR_API_KEY_HERE'][':URL_HERE'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
