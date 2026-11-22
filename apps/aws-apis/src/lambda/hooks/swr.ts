import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2014_11_13Key() {
  return ['2014-11-13'] as const
}

export function get_2015_03_31Key() {
  return ['2015-03-31'] as const
}

export function get_2016_08_19Key() {
  return ['2016-08-19'] as const
}

export function get_2017_03_31Key() {
  return ['2017-03-31'] as const
}

export function get_2017_10_31Key() {
  return ['2017-10-31'] as const
}

export function get_2018_10_31Key() {
  return ['2018-10-31'] as const
}

export function get_2019_09_25Key() {
  return ['2019-09-25'] as const
}

export function get_2019_09_30Key() {
  return ['2019-09-30'] as const
}

export function get_2020_04_22Key() {
  return ['2020-04-22'] as const
}

export function get_2020_06_30Key() {
  return ['2020-06-30'] as const
}

export function get_2021_07_20Key() {
  return ['2021-07-20'] as const
}

export function get_2021_10_31Key() {
  return ['2021-10-31'] as const
}

export function get_2021_11_15Key() {
  return ['2021-11-15'] as const
}

export function getGet20181031LayersLayerNameVersionsVersionNumberPolicyKey(
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2018-10-31',
    '/2018-10-31/layers/:LayerName/versions/:VersionNumber/policy',
    keyArgs,
  ] as const
}

export function useGet20181031LayersLayerNameVersionsVersionNumberPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
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
        ? getGet20181031LayersLayerNameVersionsVersionNumberPolicyKey(args)
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
                (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
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
          client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].policy.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20181031LayersLayerNameVersionsVersionNumberPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
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
        ? getGet20181031LayersLayerNameVersionsVersionNumberPolicyKey(args)
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
                (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
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
          client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].policy.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20181031LayersLayerNameVersionsVersionNumberPolicyKey() {
  return [
    '2018-10-31',
    '/2018-10-31/layers/:LayerName/versions/:VersionNumber/policy',
    'POST',
  ] as const
}

export function usePost20181031LayersLayerNameVersionsVersionNumberPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20181031LayersLayerNameVersionsVersionNumberPolicyKey()
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
            (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].policy.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20150331FunctionsFunctionNamePolicyKey(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/policy', keyArgs] as const
}

export function useGet20150331FunctionsFunctionNamePolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']
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
        ? getGet20150331FunctionsFunctionNamePolicyKey(args)
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
                (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']
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
          client['2015-03-31'].functions[':FunctionName'].policy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150331FunctionsFunctionNamePolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']
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
        ? getGet20150331FunctionsFunctionNamePolicyKey(args)
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
                (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']
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
          client['2015-03-31'].functions[':FunctionName'].policy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20150331FunctionsFunctionNamePolicyKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/policy', 'POST'] as const
}

export function usePost20150331FunctionsFunctionNamePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150331FunctionsFunctionNamePolicyKey()
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
            (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-03-31'].functions[':FunctionName'].policy.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20150331FunctionsFunctionNameAliasesKey(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/aliases', keyArgs] as const
}

export function useGet20150331FunctionsFunctionNameAliases<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']
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
        ? getGet20150331FunctionsFunctionNameAliasesKey(args)
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
                (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']
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
          client['2015-03-31'].functions[':FunctionName'].aliases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150331FunctionsFunctionNameAliases<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']
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
        ? getGet20150331FunctionsFunctionNameAliasesKey(args)
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
                (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']
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
          client['2015-03-31'].functions[':FunctionName'].aliases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20150331FunctionsFunctionNameAliasesKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/aliases', 'POST'] as const
}

export function usePost20150331FunctionsFunctionNameAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150331FunctionsFunctionNameAliasesKey()
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
            (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-03-31'].functions[':FunctionName'].aliases.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200422CodeSigningConfigsIndexKey(
  args: InferRequestType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-04-22', '/2020-04-22/code-signing-configs/', keyArgs] as const
}

export function useGet20200422CodeSigningConfigsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>
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
        ? getGet20200422CodeSigningConfigsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-04-22']['code-signing-configs'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200422CodeSigningConfigsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>
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
        ? getGet20200422CodeSigningConfigsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-04-22']['code-signing-configs'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200422CodeSigningConfigsIndexKey() {
  return ['2020-04-22', '/2020-04-22/code-signing-configs/', 'POST'] as const
}

export function usePost20200422CodeSigningConfigsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200422CodeSigningConfigsIndexKey()
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
            (typeof client)['2020-04-22']['code-signing-configs']['index']['$post']
          >
        },
      ) =>
        parseResponse(client['2020-04-22']['code-signing-configs'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20150331EventSourceMappingsIndexKey(
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/event-source-mappings/', keyArgs] as const
}

export function useGet20150331EventSourceMappingsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>
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
        ? getGet20150331EventSourceMappingsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-03-31']['event-source-mappings'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150331EventSourceMappingsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>
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
        ? getGet20150331EventSourceMappingsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-03-31']['event-source-mappings'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20150331EventSourceMappingsIndexKey() {
  return ['2015-03-31', '/2015-03-31/event-source-mappings/', 'POST'] as const
}

export function usePost20150331EventSourceMappingsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150331EventSourceMappingsIndexKey()
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
            (typeof client)['2015-03-31']['event-source-mappings']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-03-31']['event-source-mappings'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20150331FunctionsKey() {
  return ['2015-03-31', '/2015-03-31/functions', 'POST'] as const
}

export function usePost20150331Functions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-03-31']['functions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-03-31']['functions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150331FunctionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2015-03-31']['functions']['$post']> },
      ) => parseResponse(client['2015-03-31'].functions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20211031FunctionsFunctionNameUrlKey(
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2021-10-31', '/2021-10-31/functions/:FunctionName/url', keyArgs] as const
}

export function useGet20211031FunctionsFunctionNameUrl<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']>
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
        ? getGet20211031FunctionsFunctionNameUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2021-10-31'].functions[':FunctionName'].url.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20211031FunctionsFunctionNameUrl<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']>
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
        ? getGet20211031FunctionsFunctionNameUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2021-10-31'].functions[':FunctionName'].url.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20211031FunctionsFunctionNameUrlKey() {
  return ['2021-10-31', '/2021-10-31/functions/:FunctionName/url', 'PUT'] as const
}

export function usePut20211031FunctionsFunctionNameUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20211031FunctionsFunctionNameUrlKey()
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
            (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$put']
          >
        },
      ) =>
        parseResponse(client['2021-10-31'].functions[':FunctionName'].url.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20211031FunctionsFunctionNameUrlKey() {
  return ['2021-10-31', '/2021-10-31/functions/:FunctionName/url', 'POST'] as const
}

export function usePost20211031FunctionsFunctionNameUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20211031FunctionsFunctionNameUrlKey()
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
            (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2021-10-31'].functions[':FunctionName'].url.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20211031FunctionsFunctionNameUrlKey() {
  return ['2021-10-31', '/2021-10-31/functions/:FunctionName/url', 'DELETE'] as const
}

export function useDelete20211031FunctionsFunctionNameUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20211031FunctionsFunctionNameUrlKey()
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
            (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2021-10-31'].functions[':FunctionName'].url.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20150331FunctionsFunctionNameAliasesNameKey(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/aliases/:Name', keyArgs] as const
}

export function useGet20150331FunctionsFunctionNameAliasesName<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
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
        ? getGet20150331FunctionsFunctionNameAliasesNameKey(args)
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
                (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
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
          client['2015-03-31'].functions[':FunctionName'].aliases[':Name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150331FunctionsFunctionNameAliasesName<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
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
        ? getGet20150331FunctionsFunctionNameAliasesNameKey(args)
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
                (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
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
          client['2015-03-31'].functions[':FunctionName'].aliases[':Name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20150331FunctionsFunctionNameAliasesNameKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/aliases/:Name', 'PUT'] as const
}

export function usePut20150331FunctionsFunctionNameAliasesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20150331FunctionsFunctionNameAliasesNameKey()
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
            (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2015-03-31'].functions[':FunctionName'].aliases[':Name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20150331FunctionsFunctionNameAliasesNameKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/aliases/:Name', 'DELETE'] as const
}

export function useDelete20150331FunctionsFunctionNameAliasesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20150331FunctionsFunctionNameAliasesNameKey()
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
            (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2015-03-31'].functions[':FunctionName'].aliases[':Name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200422CodeSigningConfigsCodeSigningConfigArnKey(
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-04-22', '/2020-04-22/code-signing-configs/:CodeSigningConfigArn', keyArgs] as const
}

export function useGet20200422CodeSigningConfigsCodeSigningConfigArn<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
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
        ? getGet20200422CodeSigningConfigsCodeSigningConfigArnKey(args)
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
                (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
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
          client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200422CodeSigningConfigsCodeSigningConfigArn<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
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
        ? getGet20200422CodeSigningConfigsCodeSigningConfigArnKey(args)
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
                (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
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
          client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20200422CodeSigningConfigsCodeSigningConfigArnKey() {
  return ['2020-04-22', '/2020-04-22/code-signing-configs/:CodeSigningConfigArn', 'PUT'] as const
}

export function usePut20200422CodeSigningConfigsCodeSigningConfigArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200422CodeSigningConfigsCodeSigningConfigArnKey()
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
            (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20200422CodeSigningConfigsCodeSigningConfigArnKey() {
  return ['2020-04-22', '/2020-04-22/code-signing-configs/:CodeSigningConfigArn', 'DELETE'] as const
}

export function useDelete20200422CodeSigningConfigsCodeSigningConfigArn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200422CodeSigningConfigsCodeSigningConfigArnKey()
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
            (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20150331EventSourceMappingsUUIDKey(
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/event-source-mappings/:UUID', keyArgs] as const
}

export function useGet20150331EventSourceMappingsUUID<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>
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
        ? getGet20150331EventSourceMappingsUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-03-31']['event-source-mappings'][':UUID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150331EventSourceMappingsUUID<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>
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
        ? getGet20150331EventSourceMappingsUUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-03-31']['event-source-mappings'][':UUID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20150331EventSourceMappingsUUIDKey() {
  return ['2015-03-31', '/2015-03-31/event-source-mappings/:UUID', 'PUT'] as const
}

export function usePut20150331EventSourceMappingsUUID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20150331EventSourceMappingsUUIDKey()
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
            (typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2015-03-31']['event-source-mappings'][':UUID'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20150331EventSourceMappingsUUIDKey() {
  return ['2015-03-31', '/2015-03-31/event-source-mappings/:UUID', 'DELETE'] as const
}

export function useDelete20150331EventSourceMappingsUUID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20150331EventSourceMappingsUUIDKey()
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
            (typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2015-03-31']['event-source-mappings'][':UUID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20150331FunctionsFunctionNameKey(
  args: InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName', keyArgs] as const
}

export function useGet20150331FunctionsFunctionName<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>>
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
        ? getGet20150331FunctionsFunctionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2015-03-31'].functions[':FunctionName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150331FunctionsFunctionName<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>>
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
        ? getGet20150331FunctionsFunctionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2015-03-31'].functions[':FunctionName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete20150331FunctionsFunctionNameKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName', 'DELETE'] as const
}

export function useDelete20150331FunctionsFunctionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20150331FunctionsFunctionNameKey()
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
            (typeof client)['2015-03-31']['functions'][':FunctionName']['$delete']
          >
        },
      ) =>
        parseResponse(client['2015-03-31'].functions[':FunctionName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200630FunctionsFunctionNameCodeSigningConfigKey(
  args: InferRequestType<
    (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-06-30', '/2020-06-30/functions/:FunctionName/code-signing-config', keyArgs] as const
}

export function useGet20200630FunctionsFunctionNameCodeSigningConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
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
        ? getGet20200630FunctionsFunctionNameCodeSigningConfigKey(args)
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
                (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
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
          client['2020-06-30'].functions[':FunctionName']['code-signing-config'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200630FunctionsFunctionNameCodeSigningConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
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
        ? getGet20200630FunctionsFunctionNameCodeSigningConfigKey(args)
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
                (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
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
          client['2020-06-30'].functions[':FunctionName']['code-signing-config'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20200630FunctionsFunctionNameCodeSigningConfigKey() {
  return ['2020-06-30', '/2020-06-30/functions/:FunctionName/code-signing-config', 'PUT'] as const
}

export function usePut20200630FunctionsFunctionNameCodeSigningConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200630FunctionsFunctionNameCodeSigningConfigKey()
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
            (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2020-06-30'].functions[':FunctionName']['code-signing-config'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20200630FunctionsFunctionNameCodeSigningConfigKey() {
  return [
    '2020-06-30',
    '/2020-06-30/functions/:FunctionName/code-signing-config',
    'DELETE',
  ] as const
}

export function useDelete20200630FunctionsFunctionNameCodeSigningConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200630FunctionsFunctionNameCodeSigningConfigKey()
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
            (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-06-30'].functions[':FunctionName']['code-signing-config'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPut20171031FunctionsFunctionNameConcurrencyKey() {
  return ['2017-10-31', '/2017-10-31/functions/:FunctionName/concurrency', 'PUT'] as const
}

export function usePut20171031FunctionsFunctionNameConcurrency<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2017-10-31']['functions'][':FunctionName']['concurrency']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2017-10-31']['functions'][':FunctionName']['concurrency']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20171031FunctionsFunctionNameConcurrencyKey()
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
            (typeof client)['2017-10-31']['functions'][':FunctionName']['concurrency']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2017-10-31'].functions[':FunctionName'].concurrency.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20171031FunctionsFunctionNameConcurrencyKey() {
  return ['2017-10-31', '/2017-10-31/functions/:FunctionName/concurrency', 'DELETE'] as const
}

export function useDelete20171031FunctionsFunctionNameConcurrency<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2017-10-31']['functions'][':FunctionName']['concurrency']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2017-10-31']['functions'][':FunctionName']['concurrency']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20171031FunctionsFunctionNameConcurrencyKey()
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
            (typeof client)['2017-10-31']['functions'][':FunctionName']['concurrency']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2017-10-31'].functions[':FunctionName'].concurrency.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20190925FunctionsFunctionNameEventInvokeConfigKey(
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2019-09-25', '/2019-09-25/functions/:FunctionName/event-invoke-config', keyArgs] as const
}

export function useGet20190925FunctionsFunctionNameEventInvokeConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
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
        ? getGet20190925FunctionsFunctionNameEventInvokeConfigKey(args)
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
                (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
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
          client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20190925FunctionsFunctionNameEventInvokeConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
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
        ? getGet20190925FunctionsFunctionNameEventInvokeConfigKey(args)
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
                (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
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
          client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20190925FunctionsFunctionNameEventInvokeConfigKey() {
  return ['2019-09-25', '/2019-09-25/functions/:FunctionName/event-invoke-config', 'PUT'] as const
}

export function usePut20190925FunctionsFunctionNameEventInvokeConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20190925FunctionsFunctionNameEventInvokeConfigKey()
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
            (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20190925FunctionsFunctionNameEventInvokeConfigKey() {
  return ['2019-09-25', '/2019-09-25/functions/:FunctionName/event-invoke-config', 'POST'] as const
}

export function usePost20190925FunctionsFunctionNameEventInvokeConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20190925FunctionsFunctionNameEventInvokeConfigKey()
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
            (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20190925FunctionsFunctionNameEventInvokeConfigKey() {
  return [
    '2019-09-25',
    '/2019-09-25/functions/:FunctionName/event-invoke-config',
    'DELETE',
  ] as const
}

export function useDelete20190925FunctionsFunctionNameEventInvokeConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20190925FunctionsFunctionNameEventInvokeConfigKey()
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
            (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20181031LayersLayerNameVersionsVersionNumberKey(
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2018-10-31', '/2018-10-31/layers/:LayerName/versions/:VersionNumber', keyArgs] as const
}

export function useGet20181031LayersLayerNameVersionsVersionNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
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
        ? getGet20181031LayersLayerNameVersionsVersionNumberKey(args)
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
                (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
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
          client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20181031LayersLayerNameVersionsVersionNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
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
        ? getGet20181031LayersLayerNameVersionsVersionNumberKey(args)
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
                (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
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
          client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20181031LayersLayerNameVersionsVersionNumberKey() {
  return ['2018-10-31', '/2018-10-31/layers/:LayerName/versions/:VersionNumber', 'DELETE'] as const
}

export function useDelete20181031LayersLayerNameVersionsVersionNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20181031LayersLayerNameVersionsVersionNumberKey()
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
            (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20190930FunctionsFunctionNameProvisionedConcurrencyQualifierKey(
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2019-09-30',
    '/2019-09-30/functions/:FunctionName/provisioned-concurrency#Qualifier',
    keyArgs,
  ] as const
}

export function useGet20190930FunctionsFunctionNameProvisionedConcurrencyQualifier<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
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
        ? getGet20190930FunctionsFunctionNameProvisionedConcurrencyQualifierKey(args)
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
                (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
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
          client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#Qualifier'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20190930FunctionsFunctionNameProvisionedConcurrencyQualifier<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
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
        ? getGet20190930FunctionsFunctionNameProvisionedConcurrencyQualifierKey(args)
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
                (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
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
          client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#Qualifier'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20190930FunctionsFunctionNameProvisionedConcurrencyQualifierKey() {
  return [
    '2019-09-30',
    '/2019-09-30/functions/:FunctionName/provisioned-concurrency#Qualifier',
    'PUT',
  ] as const
}

export function usePut20190930FunctionsFunctionNameProvisionedConcurrencyQualifier<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPut20190930FunctionsFunctionNameProvisionedConcurrencyQualifierKey()
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
            (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#Qualifier'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20190930FunctionsFunctionNameProvisionedConcurrencyQualifierKey() {
  return [
    '2019-09-30',
    '/2019-09-30/functions/:FunctionName/provisioned-concurrency#Qualifier',
    'DELETE',
  ] as const
}

export function useDelete20190930FunctionsFunctionNameProvisionedConcurrencyQualifier<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDelete20190930FunctionsFunctionNameProvisionedConcurrencyQualifierKey()
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
            (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2019-09-30'].functions[':FunctionName'][
            'provisioned-concurrency#Qualifier'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20160819AccountSettingsIndexKey(
  args: InferRequestType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2016-08-19', '/2016-08-19/account-settings/', keyArgs] as const
}

export function useGet20160819AccountSettingsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>>
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
        ? getGet20160819AccountSettingsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2016-08-19']['account-settings'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20160819AccountSettingsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>>
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
        ? getGet20160819AccountSettingsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2016-08-19']['account-settings'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20190930FunctionsFunctionNameConcurrencyKey(
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2019-09-30', '/2019-09-30/functions/:FunctionName/concurrency', keyArgs] as const
}

export function useGet20190930FunctionsFunctionNameConcurrency<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
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
        ? getGet20190930FunctionsFunctionNameConcurrencyKey(args)
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
                (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
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
          client['2019-09-30'].functions[':FunctionName'].concurrency.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20190930FunctionsFunctionNameConcurrency<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
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
        ? getGet20190930FunctionsFunctionNameConcurrencyKey(args)
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
                (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
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
          client['2019-09-30'].functions[':FunctionName'].concurrency.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20150331FunctionsFunctionNameConfigurationKey(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/configuration', keyArgs] as const
}

export function useGet20150331FunctionsFunctionNameConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
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
        ? getGet20150331FunctionsFunctionNameConfigurationKey(args)
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
                (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
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
          client['2015-03-31'].functions[':FunctionName'].configuration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150331FunctionsFunctionNameConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
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
        ? getGet20150331FunctionsFunctionNameConfigurationKey(args)
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
                (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
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
          client['2015-03-31'].functions[':FunctionName'].configuration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20150331FunctionsFunctionNameConfigurationKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/configuration', 'PUT'] as const
}

export function usePut20150331FunctionsFunctionNameConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20150331FunctionsFunctionNameConfigurationKey()
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
            (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2015-03-31'].functions[':FunctionName'].configuration.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20181031LayersFindLayerVersionArnKey(
  args: InferRequestType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2018-10-31', '/2018-10-31/layers#find=LayerVersion&Arn', keyArgs] as const
}

export function useGet20181031LayersFindLayerVersionArn<TError = unknown>(
  args: InferRequestType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>
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
        ? getGet20181031LayersFindLayerVersionArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2018-10-31']['layers#find=LayerVersion&Arn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20181031LayersFindLayerVersionArn<TError = unknown>(
  args: InferRequestType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>
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
        ? getGet20181031LayersFindLayerVersionArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2018-10-31']['layers#find=LayerVersion&Arn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20210720FunctionsFunctionNameRuntimeManagementConfigKey(
  args: InferRequestType<
    (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2021-07-20',
    '/2021-07-20/functions/:FunctionName/runtime-management-config',
    keyArgs,
  ] as const
}

export function useGet20210720FunctionsFunctionNameRuntimeManagementConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
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
        ? getGet20210720FunctionsFunctionNameRuntimeManagementConfigKey(args)
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
                (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
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
          client['2021-07-20'].functions[':FunctionName']['runtime-management-config'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20210720FunctionsFunctionNameRuntimeManagementConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
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
        ? getGet20210720FunctionsFunctionNameRuntimeManagementConfigKey(args)
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
                (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
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
          client['2021-07-20'].functions[':FunctionName']['runtime-management-config'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20210720FunctionsFunctionNameRuntimeManagementConfigKey() {
  return [
    '2021-07-20',
    '/2021-07-20/functions/:FunctionName/runtime-management-config',
    'PUT',
  ] as const
}

export function usePut20210720FunctionsFunctionNameRuntimeManagementConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20210720FunctionsFunctionNameRuntimeManagementConfigKey()
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
            (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2021-07-20'].functions[':FunctionName']['runtime-management-config'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20150331FunctionsFunctionNameInvocationsKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/invocations', 'POST'] as const
}

export function usePost20150331FunctionsFunctionNameInvocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-03-31']['functions'][':FunctionName']['invocations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['invocations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150331FunctionsFunctionNameInvocationsKey()
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
            (typeof client)['2015-03-31']['functions'][':FunctionName']['invocations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-03-31'].functions[':FunctionName'].invocations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20141113FunctionsFunctionNameInvokeAsyncIndexKey() {
  return ['2014-11-13', '/2014-11-13/functions/:FunctionName/invoke-async/', 'POST'] as const
}

export function usePost20141113FunctionsFunctionNameInvokeAsyncIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2014-11-13']['functions'][':FunctionName']['invoke-async']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2014-11-13']['functions'][':FunctionName']['invoke-async']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20141113FunctionsFunctionNameInvokeAsyncIndexKey()
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
            (typeof client)['2014-11-13']['functions'][':FunctionName']['invoke-async']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2014-11-13'].functions[':FunctionName']['invoke-async'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20211115FunctionsFunctionNameResponseStreamingInvocationsKey() {
  return [
    '2021-11-15',
    '/2021-11-15/functions/:FunctionName/response-streaming-invocations',
    'POST',
  ] as const
}

export function usePost20211115FunctionsFunctionNameResponseStreamingInvocations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2021-11-15']['functions'][':FunctionName']['response-streaming-invocations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2021-11-15']['functions'][':FunctionName']['response-streaming-invocations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20211115FunctionsFunctionNameResponseStreamingInvocationsKey()
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
            (typeof client)['2021-11-15']['functions'][':FunctionName']['response-streaming-invocations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2021-11-15'].functions[':FunctionName']['response-streaming-invocations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20190925FunctionsFunctionNameEventInvokeConfigListKey(
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2019-09-25',
    '/2019-09-25/functions/:FunctionName/event-invoke-config/list',
    keyArgs,
  ] as const
}

export function useGet20190925FunctionsFunctionNameEventInvokeConfigList<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
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
        ? getGet20190925FunctionsFunctionNameEventInvokeConfigListKey(args)
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
                (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
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
          client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].list.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20190925FunctionsFunctionNameEventInvokeConfigList<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
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
        ? getGet20190925FunctionsFunctionNameEventInvokeConfigListKey(args)
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
                (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
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
          client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].list.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20211031FunctionsFunctionNameUrlsKey(
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2021-10-31', '/2021-10-31/functions/:FunctionName/urls', keyArgs] as const
}

export function useGet20211031FunctionsFunctionNameUrls<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']
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
        ? getGet20211031FunctionsFunctionNameUrlsKey(args)
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
                (typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']
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
          client['2021-10-31'].functions[':FunctionName'].urls.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20211031FunctionsFunctionNameUrls<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']
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
        ? getGet20211031FunctionsFunctionNameUrlsKey(args)
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
                (typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']
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
          client['2021-10-31'].functions[':FunctionName'].urls.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20150331FunctionsIndexKey(
  args: InferRequestType<(typeof client)['2015-03-31']['functions']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/functions/', keyArgs] as const
}

export function useGet20150331FunctionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-03-31']['functions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-03-31']['functions']['index']['$get']>>
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
        ? getGet20150331FunctionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-03-31']['functions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-03-31'].functions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150331FunctionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-03-31']['functions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-03-31']['functions']['index']['$get']>>
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
        ? getGet20150331FunctionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-03-31']['functions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-03-31'].functions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20200422CodeSigningConfigsCodeSigningConfigArnFunctionsKey(
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-04-22',
    '/2020-04-22/code-signing-configs/:CodeSigningConfigArn/functions',
    keyArgs,
  ] as const
}

export function useGet20200422CodeSigningConfigsCodeSigningConfigArnFunctions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
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
        ? getGet20200422CodeSigningConfigsCodeSigningConfigArnFunctionsKey(args)
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
                (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
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
          client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].functions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200422CodeSigningConfigsCodeSigningConfigArnFunctions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
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
        ? getGet20200422CodeSigningConfigsCodeSigningConfigArnFunctionsKey(args)
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
                (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
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
          client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].functions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20181031LayersLayerNameVersionsKey(
  args: InferRequestType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2018-10-31', '/2018-10-31/layers/:LayerName/versions', keyArgs] as const
}

export function useGet20181031LayersLayerNameVersions<TError = unknown>(
  args: InferRequestType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>
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
        ? getGet20181031LayersLayerNameVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2018-10-31'].layers[':LayerName'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20181031LayersLayerNameVersions<TError = unknown>(
  args: InferRequestType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>
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
        ? getGet20181031LayersLayerNameVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2018-10-31'].layers[':LayerName'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20181031LayersLayerNameVersionsKey() {
  return ['2018-10-31', '/2018-10-31/layers/:LayerName/versions', 'POST'] as const
}

export function usePost20181031LayersLayerNameVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20181031LayersLayerNameVersionsKey()
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
            (typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$post']
          >
        },
      ) =>
        parseResponse(client['2018-10-31'].layers[':LayerName'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20181031LayersKey(
  args: InferRequestType<(typeof client)['2018-10-31']['layers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2018-10-31', '/2018-10-31/layers', keyArgs] as const
}

export function useGet20181031Layers<TError = unknown>(
  args: InferRequestType<(typeof client)['2018-10-31']['layers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2018-10-31']['layers']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet20181031LayersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2018-10-31']['layers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2018-10-31'].layers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20181031Layers<TError = unknown>(
  args: InferRequestType<(typeof client)['2018-10-31']['layers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2018-10-31']['layers']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet20181031LayersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2018-10-31']['layers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2018-10-31'].layers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20190930FunctionsFunctionNameProvisionedConcurrencyListALLKey(
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2019-09-30',
    '/2019-09-30/functions/:FunctionName/provisioned-concurrency#List=ALL',
    keyArgs,
  ] as const
}

export function useGet20190930FunctionsFunctionNameProvisionedConcurrencyListALL<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
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
        ? getGet20190930FunctionsFunctionNameProvisionedConcurrencyListALLKey(args)
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
                (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
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
          client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#List=ALL'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20190930FunctionsFunctionNameProvisionedConcurrencyListALL<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
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
        ? getGet20190930FunctionsFunctionNameProvisionedConcurrencyListALLKey(args)
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
                (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
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
          client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#List=ALL'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20170331TagsARNKey(
  args: InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-03-31', '/2017-03-31/tags/:ARN', keyArgs] as const
}

export function useGet20170331TagsARN<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>>
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
        ? getGet20170331TagsARNKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-03-31'].tags[':ARN'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20170331TagsARN<TError = unknown>(
  args: InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>>
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
        ? getGet20170331TagsARNKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2017-03-31'].tags[':ARN'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20170331TagsARNKey() {
  return ['2017-03-31', '/2017-03-31/tags/:ARN', 'POST'] as const
}

export function usePost20170331TagsARN<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-03-31']['tags'][':ARN']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20170331TagsARNKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$post']> },
      ) => parseResponse(client['2017-03-31'].tags[':ARN'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20150331FunctionsFunctionNameVersionsKey(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/versions', keyArgs] as const
}

export function useGet20150331FunctionsFunctionNameVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
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
        ? getGet20150331FunctionsFunctionNameVersionsKey(args)
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
                (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
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
          client['2015-03-31'].functions[':FunctionName'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150331FunctionsFunctionNameVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
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
        ? getGet20150331FunctionsFunctionNameVersionsKey(args)
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
                (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
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
          client['2015-03-31'].functions[':FunctionName'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20150331FunctionsFunctionNameVersionsKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/versions', 'POST'] as const
}

export function usePost20150331FunctionsFunctionNameVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150331FunctionsFunctionNameVersionsKey()
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
            (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-03-31'].functions[':FunctionName'].versions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20181031LayersLayerNameVersionsVersionNumberPolicyStatementIdKey() {
  return [
    '2018-10-31',
    '/2018-10-31/layers/:LayerName/versions/:VersionNumber/policy/:StatementId',
    'DELETE',
  ] as const
}

export function useDelete20181031LayersLayerNameVersionsVersionNumberPolicyStatementId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy'][':StatementId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy'][':StatementId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDelete20181031LayersLayerNameVersionsVersionNumberPolicyStatementIdKey()
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
            (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy'][':StatementId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].policy[
            ':StatementId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20150331FunctionsFunctionNamePolicyStatementIdKey() {
  return [
    '2015-03-31',
    '/2015-03-31/functions/:FunctionName/policy/:StatementId',
    'DELETE',
  ] as const
}

export function useDelete20150331FunctionsFunctionNamePolicyStatementId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-03-31']['functions'][':FunctionName']['policy'][':StatementId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['policy'][':StatementId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20150331FunctionsFunctionNamePolicyStatementIdKey()
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
            (typeof client)['2015-03-31']['functions'][':FunctionName']['policy'][':StatementId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2015-03-31'].functions[':FunctionName'].policy[':StatementId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20170331TagsARNTagKeysKey() {
  return ['2017-03-31', '/2017-03-31/tags/:ARN#tagKeys', 'DELETE'] as const
}

export function useDelete20170331TagsARNTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-03-31']['tags'][':ARN#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20170331TagsARNTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN#tagKeys']['$delete']>
        },
      ) => parseResponse(client['2017-03-31'].tags[':ARN#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPut20150331FunctionsFunctionNameCodeKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/code', 'PUT'] as const
}

export function usePut20150331FunctionsFunctionNameCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2015-03-31']['functions'][':FunctionName']['code']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20150331FunctionsFunctionNameCodeKey()
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
            (typeof client)['2015-03-31']['functions'][':FunctionName']['code']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2015-03-31'].functions[':FunctionName'].code.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
