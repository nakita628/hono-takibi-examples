import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getGetAnythingNumbersKey(
  args: InferRequestType<typeof client.anything.numbers.$get>,
) {
  return ['anything', '/anything/numbers', args] as const
}

export function useGetAnythingNumbers<TError = unknown>(
  args: InferRequestType<typeof client.anything.numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
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
        ? getGetAnythingNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingNumbers<TError = unknown>(
  args: InferRequestType<typeof client.anything.numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
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
        ? getGetAnythingNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnythingStringsKey(
  args: InferRequestType<typeof client.anything.strings.$get>,
) {
  return ['anything', '/anything/strings', args] as const
}

export function useGetAnythingStrings<TError = unknown>(
  args: InferRequestType<typeof client.anything.strings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
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
        ? getGetAnythingStringsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.strings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingStrings<TError = unknown>(
  args: InferRequestType<typeof client.anything.strings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
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
        ? getGetAnythingStringsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.strings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnythingJsonschemaFormatsKey(
  args: InferRequestType<(typeof client.anything)['jsonschema-formats']['$get']>,
) {
  return ['anything', '/anything/jsonschema-formats', args] as const
}

export function useGetAnythingJsonschemaFormats<TError = unknown>(
  args: InferRequestType<(typeof client.anything)['jsonschema-formats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.anything)['jsonschema-formats']['$get']>>
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
        ? getGetAnythingJsonschemaFormatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.anything)['jsonschema-formats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything['jsonschema-formats'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingJsonschemaFormats<TError = unknown>(
  args: InferRequestType<(typeof client.anything)['jsonschema-formats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.anything)['jsonschema-formats']['$get']>>
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
        ? getGetAnythingJsonschemaFormatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.anything)['jsonschema-formats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything['jsonschema-formats'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnythingOasFormatsKey(
  args: InferRequestType<(typeof client.anything)['oas-formats']['$get']>,
) {
  return ['anything', '/anything/oas-formats', args] as const
}

export function useGetAnythingOasFormats<TError = unknown>(
  args: InferRequestType<(typeof client.anything)['oas-formats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['oas-formats']['$get']>>>
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
        ? getGetAnythingOasFormatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['oas-formats']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything['oas-formats'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingOasFormats<TError = unknown>(
  args: InferRequestType<(typeof client.anything)['oas-formats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['oas-formats']['$get']>>>
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
        ? getGetAnythingOasFormatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['oas-formats']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything['oas-formats'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnythingBooleansKey(
  args: InferRequestType<typeof client.anything.booleans.$get>,
) {
  return ['anything', '/anything/booleans', args] as const
}

export function useGetAnythingBooleans<TError = unknown>(
  args: InferRequestType<typeof client.anything.booleans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>>
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
        ? getGetAnythingBooleansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.booleans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingBooleans<TError = unknown>(
  args: InferRequestType<typeof client.anything.booleans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>>
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
        ? getGetAnythingBooleansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.booleans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
