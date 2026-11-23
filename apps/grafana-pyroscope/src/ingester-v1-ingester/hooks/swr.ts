import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIngesterV1IngesterServiceKey() {
  return ['ingester.v1.IngesterService'] as const
}

export function getPostIngesterV1IngesterServiceBlockMetadataKey() {
  return [
    'ingester.v1.IngesterService',
    '/ingester.v1.IngesterService/BlockMetadata',
    'POST',
  ] as const
}

export function usePostIngesterV1IngesterServiceBlockMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['ingester.v1.IngesterService']['BlockMetadata']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['BlockMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIngesterV1IngesterServiceBlockMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['ingester.v1.IngesterService']['BlockMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['ingester.v1.IngesterService'].BlockMetadata.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostIngesterV1IngesterServiceFlushKey() {
  return ['ingester.v1.IngesterService', '/ingester.v1.IngesterService/Flush', 'POST'] as const
}

export function usePostIngesterV1IngesterServiceFlush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ingester.v1.IngesterService']['Flush']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['Flush']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIngesterV1IngesterServiceFlushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['ingester.v1.IngesterService']['Flush']['$post']>
        },
      ) => parseResponse(client['ingester.v1.IngesterService'].Flush.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIngesterV1IngesterServiceGetBlockStatsKey() {
  return [
    'ingester.v1.IngesterService',
    '/ingester.v1.IngesterService/GetBlockStats',
    'POST',
  ] as const
}

export function usePostIngesterV1IngesterServiceGetBlockStats<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['ingester.v1.IngesterService']['GetBlockStats']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['GetBlockStats']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIngesterV1IngesterServiceGetBlockStatsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['ingester.v1.IngesterService']['GetBlockStats']['$post']
          >
        },
      ) =>
        parseResponse(
          client['ingester.v1.IngesterService'].GetBlockStats.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostIngesterV1IngesterServiceGetProfileStatsKey() {
  return [
    'ingester.v1.IngesterService',
    '/ingester.v1.IngesterService/GetProfileStats',
    'POST',
  ] as const
}

export function usePostIngesterV1IngesterServiceGetProfileStats<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['ingester.v1.IngesterService']['GetProfileStats']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['GetProfileStats']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIngesterV1IngesterServiceGetProfileStatsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['ingester.v1.IngesterService']['GetProfileStats']['$post']
          >
        },
      ) =>
        parseResponse(
          client['ingester.v1.IngesterService'].GetProfileStats.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostIngesterV1IngesterServiceLabelNamesKey() {
  return ['ingester.v1.IngesterService', '/ingester.v1.IngesterService/LabelNames', 'POST'] as const
}

export function usePostIngesterV1IngesterServiceLabelNames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ingester.v1.IngesterService']['LabelNames']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['LabelNames']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIngesterV1IngesterServiceLabelNamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['ingester.v1.IngesterService']['LabelNames']['$post']
          >
        },
      ) =>
        parseResponse(client['ingester.v1.IngesterService'].LabelNames.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIngesterV1IngesterServiceLabelValuesKey() {
  return [
    'ingester.v1.IngesterService',
    '/ingester.v1.IngesterService/LabelValues',
    'POST',
  ] as const
}

export function usePostIngesterV1IngesterServiceLabelValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['ingester.v1.IngesterService']['LabelValues']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['LabelValues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIngesterV1IngesterServiceLabelValuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['ingester.v1.IngesterService']['LabelValues']['$post']
          >
        },
      ) =>
        parseResponse(client['ingester.v1.IngesterService'].LabelValues.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIngesterV1IngesterServiceProfileTypesKey() {
  return [
    'ingester.v1.IngesterService',
    '/ingester.v1.IngesterService/ProfileTypes',
    'POST',
  ] as const
}

export function usePostIngesterV1IngesterServiceProfileTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['ingester.v1.IngesterService']['ProfileTypes']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['ProfileTypes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIngesterV1IngesterServiceProfileTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['ingester.v1.IngesterService']['ProfileTypes']['$post']
          >
        },
      ) =>
        parseResponse(client['ingester.v1.IngesterService'].ProfileTypes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIngesterV1IngesterServicePushKey() {
  return ['ingester.v1.IngesterService', '/ingester.v1.IngesterService/Push', 'POST'] as const
}

export function usePostIngesterV1IngesterServicePush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ingester.v1.IngesterService']['Push']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['Push']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIngesterV1IngesterServicePushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['ingester.v1.IngesterService']['Push']['$post']>
        },
      ) => parseResponse(client['ingester.v1.IngesterService'].Push.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIngesterV1IngesterServiceSeriesKey() {
  return ['ingester.v1.IngesterService', '/ingester.v1.IngesterService/Series', 'POST'] as const
}

export function usePostIngesterV1IngesterServiceSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ingester.v1.IngesterService']['Series']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['Series']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIngesterV1IngesterServiceSeriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['ingester.v1.IngesterService']['Series']['$post']>
        },
      ) => parseResponse(client['ingester.v1.IngesterService'].Series.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
