import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPagespeedonlineKey() {
  return ['pagespeedonline'] as const
}

export function getGetPagespeedonlineV5RunPagespeedKey(
  args: InferRequestType<typeof client.pagespeedonline.v5.runPagespeed.$get>,
) {
  return ['pagespeedonline', '/pagespeedonline/v5/runPagespeed', args] as const
}

export function useGetPagespeedonlineV5RunPagespeed<TError = unknown>(
  args: InferRequestType<typeof client.pagespeedonline.v5.runPagespeed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pagespeedonline.v5.runPagespeed.$get>>
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
        ? getGetPagespeedonlineV5RunPagespeedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pagespeedonline.v5.runPagespeed.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pagespeedonline.v5.runPagespeed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPagespeedonlineV5RunPagespeed<TError = unknown>(
  args: InferRequestType<typeof client.pagespeedonline.v5.runPagespeed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pagespeedonline.v5.runPagespeed.$get>>
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
        ? getGetPagespeedonlineV5RunPagespeedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.pagespeedonline.v5.runPagespeed.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pagespeedonline.v5.runPagespeed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
