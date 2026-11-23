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

export function get20181031LayersLayerNameVersionsVersionNumberPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '2018-10-31',
    '/2018-10-31/layers/:LayerName/versions/:VersionNumber/policy',
    keyArgs,
  ] as const
}

export function get20181031LayersLayerNameVersionsVersionNumberPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20181031LayersLayerNameVersionsVersionNumberPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].policy.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use20181031LayersLayerNameVersionsVersionNumberPolicy<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
    >
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
                    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
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
                    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20181031LayersLayerNameVersionsVersionNumberPolicyQueryKey>
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
            ReturnType<
              (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20181031LayersLayerNameVersionsVersionNumberPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20181031LayersLayerNameVersionsVersionNumberPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].policy.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPost20181031LayersLayerNameVersionsVersionNumberPolicyMutationKey() {
  return [
    '2018-10-31',
    '/2018-10-31/layers/:LayerName/versions/:VersionNumber/policy',
    'POST',
  ] as const
}

export function getPost20181031LayersLayerNameVersionsVersionNumberPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20181031LayersLayerNameVersionsVersionNumberPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$post']
      >,
    ) {
      return parseResponse(
        client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].policy.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20181031LayersLayerNameVersionsVersionNumberPolicy<
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
                    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$post']
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
  const mutationDefaults = getPost20181031LayersLayerNameVersionsVersionNumberPolicyMutationOptions<
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

export function get20150331FunctionsFunctionNamePolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/policy', keyArgs] as const
}

export function get20150331FunctionsFunctionNamePolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150331FunctionsFunctionNamePolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].policy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150331FunctionsFunctionNamePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']>
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20150331FunctionsFunctionNamePolicyQueryKey>
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
            ReturnType<
              (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150331FunctionsFunctionNamePolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150331FunctionsFunctionNamePolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-03-31'].functions[':FunctionName'].policy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost20150331FunctionsFunctionNamePolicyMutationKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/policy', 'POST'] as const
}

export function getPost20150331FunctionsFunctionNamePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20150331FunctionsFunctionNamePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].policy.$post(args, options),
      )
    },
  })
}

export function usePost20150331FunctionsFunctionNamePolicy<
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$post']
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
  const mutationDefaults = getPost20150331FunctionsFunctionNamePolicyMutationOptions<
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

export function get20150331FunctionsFunctionNameAliasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/aliases', keyArgs] as const
}

export function get20150331FunctionsFunctionNameAliasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150331FunctionsFunctionNameAliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].aliases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150331FunctionsFunctionNameAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']>
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20150331FunctionsFunctionNameAliasesQueryKey>
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
            ReturnType<
              (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150331FunctionsFunctionNameAliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150331FunctionsFunctionNameAliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-03-31'].functions[':FunctionName'].aliases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost20150331FunctionsFunctionNameAliasesMutationKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/aliases', 'POST'] as const
}

export function getPost20150331FunctionsFunctionNameAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20150331FunctionsFunctionNameAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].aliases.$post(args, options),
      )
    },
  })
}

export function usePost20150331FunctionsFunctionNameAliases<
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$post']
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
  const mutationDefaults = getPost20150331FunctionsFunctionNameAliasesMutationOptions<
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

export function get20200422CodeSigningConfigsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-04-22', '/2020-04-22/code-signing-configs/', keyArgs] as const
}

export function get20200422CodeSigningConfigsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200422CodeSigningConfigsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-04-22']['code-signing-configs'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200422CodeSigningConfigsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>
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
                  ReturnType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20200422CodeSigningConfigsIndexQueryKey>
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
            ReturnType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200422CodeSigningConfigsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200422CodeSigningConfigsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-04-22']['code-signing-configs'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost20200422CodeSigningConfigsIndexMutationKey() {
  return ['2020-04-22', '/2020-04-22/code-signing-configs/', 'POST'] as const
}

export function getPost20200422CodeSigningConfigsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200422CodeSigningConfigsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-04-22']['code-signing-configs']['index']['$post']
      >,
    ) {
      return parseResponse(client['2020-04-22']['code-signing-configs'].index.$post(args, options))
    },
  })
}

export function usePost20200422CodeSigningConfigsIndex<
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
                    (typeof client)['2020-04-22']['code-signing-configs']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$post']>,
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
  const mutationDefaults = getPost20200422CodeSigningConfigsIndexMutationOptions<
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

export function get20150331EventSourceMappingsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-03-31', '/2015-03-31/event-source-mappings/', keyArgs] as const
}

export function get20150331EventSourceMappingsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150331EventSourceMappingsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-03-31']['event-source-mappings'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150331EventSourceMappingsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>
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
                    (typeof client)['2015-03-31']['event-source-mappings']['index']['$get']
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
                    (typeof client)['2015-03-31']['event-source-mappings']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20150331EventSourceMappingsIndexQueryKey>
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
            ReturnType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150331EventSourceMappingsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150331EventSourceMappingsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-03-31']['event-source-mappings'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost20150331EventSourceMappingsIndexMutationKey() {
  return ['2015-03-31', '/2015-03-31/event-source-mappings/', 'POST'] as const
}

export function getPost20150331EventSourceMappingsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150331EventSourceMappingsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-03-31']['event-source-mappings']['index']['$post']
      >,
    ) {
      return parseResponse(client['2015-03-31']['event-source-mappings'].index.$post(args, options))
    },
  })
}

export function usePost20150331EventSourceMappingsIndex<
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
                    (typeof client)['2015-03-31']['event-source-mappings']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2015-03-31']['event-source-mappings']['index']['$post']
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
  const mutationDefaults = getPost20150331EventSourceMappingsIndexMutationOptions<
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

export function getPost20150331FunctionsMutationKey() {
  return ['2015-03-31', '/2015-03-31/functions', 'POST'] as const
}

export function getPost20150331FunctionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-03-31']['functions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-03-31']['functions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150331FunctionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2015-03-31']['functions']['$post']>) {
      return parseResponse(client['2015-03-31'].functions.$post(args, options))
    },
  })
}

export function usePost20150331Functions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-03-31']['functions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2015-03-31']['functions']['$post']>,
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
  const mutationDefaults = getPost20150331FunctionsMutationOptions<TError, TOnMutateResult>(
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

export function get20211031FunctionsFunctionNameUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2021-10-31', '/2021-10-31/functions/:FunctionName/url', keyArgs] as const
}

export function get20211031FunctionsFunctionNameUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20211031FunctionsFunctionNameUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2021-10-31'].functions[':FunctionName'].url.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20211031FunctionsFunctionNameUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']>
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
                    (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']
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
                    (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20211031FunctionsFunctionNameUrlQueryKey>
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
            ReturnType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20211031FunctionsFunctionNameUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20211031FunctionsFunctionNameUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2021-10-31'].functions[':FunctionName'].url.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPut20211031FunctionsFunctionNameUrlMutationKey() {
  return ['2021-10-31', '/2021-10-31/functions/:FunctionName/url', 'PUT'] as const
}

export function getPut20211031FunctionsFunctionNameUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20211031FunctionsFunctionNameUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$put']
      >,
    ) {
      return parseResponse(client['2021-10-31'].functions[':FunctionName'].url.$put(args, options))
    },
  })
}

export function usePut20211031FunctionsFunctionNameUrl<
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
                    (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$put']
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
  const mutationDefaults = getPut20211031FunctionsFunctionNameUrlMutationOptions<
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

export function getPost20211031FunctionsFunctionNameUrlMutationKey() {
  return ['2021-10-31', '/2021-10-31/functions/:FunctionName/url', 'POST'] as const
}

export function getPost20211031FunctionsFunctionNameUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20211031FunctionsFunctionNameUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$post']
      >,
    ) {
      return parseResponse(client['2021-10-31'].functions[':FunctionName'].url.$post(args, options))
    },
  })
}

export function usePost20211031FunctionsFunctionNameUrl<
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
                    (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$post']
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
  const mutationDefaults = getPost20211031FunctionsFunctionNameUrlMutationOptions<
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

export function getDelete20211031FunctionsFunctionNameUrlMutationKey() {
  return ['2021-10-31', '/2021-10-31/functions/:FunctionName/url', 'DELETE'] as const
}

export function getDelete20211031FunctionsFunctionNameUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20211031FunctionsFunctionNameUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$delete']
      >,
    ) {
      return parseResponse(
        client['2021-10-31'].functions[':FunctionName'].url.$delete(args, options),
      )
    },
  })
}

export function useDelete20211031FunctionsFunctionNameUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$delete']
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
  const mutationDefaults = getDelete20211031FunctionsFunctionNameUrlMutationOptions<
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

export function get20150331FunctionsFunctionNameAliasesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/aliases/:Name', keyArgs] as const
}

export function get20150331FunctionsFunctionNameAliasesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150331FunctionsFunctionNameAliasesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].aliases[':Name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150331FunctionsFunctionNameAliasesName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
    >
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20150331FunctionsFunctionNameAliasesNameQueryKey>
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
            ReturnType<
              (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150331FunctionsFunctionNameAliasesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150331FunctionsFunctionNameAliasesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-03-31'].functions[':FunctionName'].aliases[':Name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPut20150331FunctionsFunctionNameAliasesNameMutationKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/aliases/:Name', 'PUT'] as const
}

export function getPut20150331FunctionsFunctionNameAliasesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20150331FunctionsFunctionNameAliasesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$put']
      >,
    ) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].aliases[':Name'].$put(args, options),
      )
    },
  })
}

export function usePut20150331FunctionsFunctionNameAliasesName<
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$put']
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
  const mutationDefaults = getPut20150331FunctionsFunctionNameAliasesNameMutationOptions<
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

export function getDelete20150331FunctionsFunctionNameAliasesNameMutationKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/aliases/:Name', 'DELETE'] as const
}

export function getDelete20150331FunctionsFunctionNameAliasesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20150331FunctionsFunctionNameAliasesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$delete']
      >,
    ) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].aliases[':Name'].$delete(args, options),
      )
    },
  })
}

export function useDelete20150331FunctionsFunctionNameAliasesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$delete']
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
  const mutationDefaults = getDelete20150331FunctionsFunctionNameAliasesNameMutationOptions<
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

export function get20200422CodeSigningConfigsCodeSigningConfigArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-04-22', '/2020-04-22/code-signing-configs/:CodeSigningConfigArn', keyArgs] as const
}

export function get20200422CodeSigningConfigsCodeSigningConfigArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200422CodeSigningConfigsCodeSigningConfigArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200422CodeSigningConfigsCodeSigningConfigArn<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
    >
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
                    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
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
                    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20200422CodeSigningConfigsCodeSigningConfigArnQueryKey>
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
            ReturnType<
              (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200422CodeSigningConfigsCodeSigningConfigArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200422CodeSigningConfigsCodeSigningConfigArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPut20200422CodeSigningConfigsCodeSigningConfigArnMutationKey() {
  return ['2020-04-22', '/2020-04-22/code-signing-configs/:CodeSigningConfigArn', 'PUT'] as const
}

export function getPut20200422CodeSigningConfigsCodeSigningConfigArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20200422CodeSigningConfigsCodeSigningConfigArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$put']
      >,
    ) {
      return parseResponse(
        client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].$put(args, options),
      )
    },
  })
}

export function usePut20200422CodeSigningConfigsCodeSigningConfigArn<
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
                    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$put']
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
  const mutationDefaults = getPut20200422CodeSigningConfigsCodeSigningConfigArnMutationOptions<
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

export function getDelete20200422CodeSigningConfigsCodeSigningConfigArnMutationKey() {
  return ['2020-04-22', '/2020-04-22/code-signing-configs/:CodeSigningConfigArn', 'DELETE'] as const
}

export function getDelete20200422CodeSigningConfigsCodeSigningConfigArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20200422CodeSigningConfigsCodeSigningConfigArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDelete20200422CodeSigningConfigsCodeSigningConfigArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$delete']
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
  const mutationDefaults = getDelete20200422CodeSigningConfigsCodeSigningConfigArnMutationOptions<
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

export function get20150331EventSourceMappingsUUIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-03-31', '/2015-03-31/event-source-mappings/:UUID', keyArgs] as const
}

export function get20150331EventSourceMappingsUUIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150331EventSourceMappingsUUIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-03-31']['event-source-mappings'][':UUID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150331EventSourceMappingsUUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>
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
                    (typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']
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
                    (typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20150331EventSourceMappingsUUIDQueryKey>
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
            ReturnType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150331EventSourceMappingsUUIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150331EventSourceMappingsUUIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-03-31']['event-source-mappings'][':UUID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPut20150331EventSourceMappingsUUIDMutationKey() {
  return ['2015-03-31', '/2015-03-31/event-source-mappings/:UUID', 'PUT'] as const
}

export function getPut20150331EventSourceMappingsUUIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20150331EventSourceMappingsUUIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$put']
      >,
    ) {
      return parseResponse(
        client['2015-03-31']['event-source-mappings'][':UUID'].$put(args, options),
      )
    },
  })
}

export function usePut20150331EventSourceMappingsUUID<
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
                    (typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$put']>,
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
  const mutationDefaults = getPut20150331EventSourceMappingsUUIDMutationOptions<
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

export function getDelete20150331EventSourceMappingsUUIDMutationKey() {
  return ['2015-03-31', '/2015-03-31/event-source-mappings/:UUID', 'DELETE'] as const
}

export function getDelete20150331EventSourceMappingsUUIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20150331EventSourceMappingsUUIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$delete']
      >,
    ) {
      return parseResponse(
        client['2015-03-31']['event-source-mappings'][':UUID'].$delete(args, options),
      )
    },
  })
}

export function useDelete20150331EventSourceMappingsUUID<
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
                    (typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$delete']
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
  const mutationDefaults = getDelete20150331EventSourceMappingsUUIDMutationOptions<
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

export function get20150331FunctionsFunctionNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName', keyArgs] as const
}

export function get20150331FunctionsFunctionNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150331FunctionsFunctionNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150331FunctionsFunctionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>
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
                  ReturnType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20150331FunctionsFunctionNameQueryKey>
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
          Awaited<ReturnType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150331FunctionsFunctionNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150331FunctionsFunctionNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-03-31'].functions[':FunctionName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDelete20150331FunctionsFunctionNameMutationKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName', 'DELETE'] as const
}

export function getDelete20150331FunctionsFunctionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20150331FunctionsFunctionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-03-31']['functions'][':FunctionName']['$delete']
      >,
    ) {
      return parseResponse(client['2015-03-31'].functions[':FunctionName'].$delete(args, options))
    },
  })
}

export function useDelete20150331FunctionsFunctionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client)['2015-03-31']['functions'][':FunctionName']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$delete']>,
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
  const mutationDefaults = getDelete20150331FunctionsFunctionNameMutationOptions<
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

export function get20200630FunctionsFunctionNameCodeSigningConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-06-30', '/2020-06-30/functions/:FunctionName/code-signing-config', keyArgs] as const
}

export function get20200630FunctionsFunctionNameCodeSigningConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200630FunctionsFunctionNameCodeSigningConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-06-30'].functions[':FunctionName']['code-signing-config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200630FunctionsFunctionNameCodeSigningConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
    >
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
                    (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
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
                    (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20200630FunctionsFunctionNameCodeSigningConfigQueryKey>
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
            ReturnType<
              (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200630FunctionsFunctionNameCodeSigningConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200630FunctionsFunctionNameCodeSigningConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-06-30'].functions[':FunctionName']['code-signing-config'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPut20200630FunctionsFunctionNameCodeSigningConfigMutationKey() {
  return ['2020-06-30', '/2020-06-30/functions/:FunctionName/code-signing-config', 'PUT'] as const
}

export function getPut20200630FunctionsFunctionNameCodeSigningConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20200630FunctionsFunctionNameCodeSigningConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$put']
      >,
    ) {
      return parseResponse(
        client['2020-06-30'].functions[':FunctionName']['code-signing-config'].$put(args, options),
      )
    },
  })
}

export function usePut20200630FunctionsFunctionNameCodeSigningConfig<
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
                    (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$put']
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
  const mutationDefaults = getPut20200630FunctionsFunctionNameCodeSigningConfigMutationOptions<
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

export function getDelete20200630FunctionsFunctionNameCodeSigningConfigMutationKey() {
  return [
    '2020-06-30',
    '/2020-06-30/functions/:FunctionName/code-signing-config',
    'DELETE',
  ] as const
}

export function getDelete20200630FunctionsFunctionNameCodeSigningConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20200630FunctionsFunctionNameCodeSigningConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-06-30'].functions[':FunctionName']['code-signing-config'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDelete20200630FunctionsFunctionNameCodeSigningConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$delete']
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
  const mutationDefaults = getDelete20200630FunctionsFunctionNameCodeSigningConfigMutationOptions<
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

export function getPut20171031FunctionsFunctionNameConcurrencyMutationKey() {
  return ['2017-10-31', '/2017-10-31/functions/:FunctionName/concurrency', 'PUT'] as const
}

export function getPut20171031FunctionsFunctionNameConcurrencyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2017-10-31']['functions'][':FunctionName']['concurrency']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20171031FunctionsFunctionNameConcurrencyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2017-10-31']['functions'][':FunctionName']['concurrency']['$put']
      >,
    ) {
      return parseResponse(
        client['2017-10-31'].functions[':FunctionName'].concurrency.$put(args, options),
      )
    },
  })
}

export function usePut20171031FunctionsFunctionNameConcurrency<
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
                    (typeof client)['2017-10-31']['functions'][':FunctionName']['concurrency']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2017-10-31']['functions'][':FunctionName']['concurrency']['$put']
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
  const mutationDefaults = getPut20171031FunctionsFunctionNameConcurrencyMutationOptions<
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

export function getDelete20171031FunctionsFunctionNameConcurrencyMutationKey() {
  return ['2017-10-31', '/2017-10-31/functions/:FunctionName/concurrency', 'DELETE'] as const
}

export function getDelete20171031FunctionsFunctionNameConcurrencyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2017-10-31']['functions'][':FunctionName']['concurrency']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20171031FunctionsFunctionNameConcurrencyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2017-10-31']['functions'][':FunctionName']['concurrency']['$delete']
      >,
    ) {
      return parseResponse(
        client['2017-10-31'].functions[':FunctionName'].concurrency.$delete(args, options),
      )
    },
  })
}

export function useDelete20171031FunctionsFunctionNameConcurrency<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2017-10-31']['functions'][':FunctionName']['concurrency']['$delete']
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
  const mutationDefaults = getDelete20171031FunctionsFunctionNameConcurrencyMutationOptions<
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

export function get20190925FunctionsFunctionNameEventInvokeConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2019-09-25', '/2019-09-25/functions/:FunctionName/event-invoke-config', keyArgs] as const
}

export function get20190925FunctionsFunctionNameEventInvokeConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20190925FunctionsFunctionNameEventInvokeConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20190925FunctionsFunctionNameEventInvokeConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
    >
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
                    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
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
                    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20190925FunctionsFunctionNameEventInvokeConfigQueryKey>
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
            ReturnType<
              (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20190925FunctionsFunctionNameEventInvokeConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20190925FunctionsFunctionNameEventInvokeConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPut20190925FunctionsFunctionNameEventInvokeConfigMutationKey() {
  return ['2019-09-25', '/2019-09-25/functions/:FunctionName/event-invoke-config', 'PUT'] as const
}

export function getPut20190925FunctionsFunctionNameEventInvokeConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20190925FunctionsFunctionNameEventInvokeConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$put']
      >,
    ) {
      return parseResponse(
        client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].$put(args, options),
      )
    },
  })
}

export function usePut20190925FunctionsFunctionNameEventInvokeConfig<
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
                    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$put']
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
  const mutationDefaults = getPut20190925FunctionsFunctionNameEventInvokeConfigMutationOptions<
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

export function getPost20190925FunctionsFunctionNameEventInvokeConfigMutationKey() {
  return ['2019-09-25', '/2019-09-25/functions/:FunctionName/event-invoke-config', 'POST'] as const
}

export function getPost20190925FunctionsFunctionNameEventInvokeConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20190925FunctionsFunctionNameEventInvokeConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$post']
      >,
    ) {
      return parseResponse(
        client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].$post(args, options),
      )
    },
  })
}

export function usePost20190925FunctionsFunctionNameEventInvokeConfig<
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
                    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$post']
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
  const mutationDefaults = getPost20190925FunctionsFunctionNameEventInvokeConfigMutationOptions<
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

export function getDelete20190925FunctionsFunctionNameEventInvokeConfigMutationKey() {
  return [
    '2019-09-25',
    '/2019-09-25/functions/:FunctionName/event-invoke-config',
    'DELETE',
  ] as const
}

export function getDelete20190925FunctionsFunctionNameEventInvokeConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20190925FunctionsFunctionNameEventInvokeConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$delete']
      >,
    ) {
      return parseResponse(
        client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDelete20190925FunctionsFunctionNameEventInvokeConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$delete']
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
  const mutationDefaults = getDelete20190925FunctionsFunctionNameEventInvokeConfigMutationOptions<
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

export function get20181031LayersLayerNameVersionsVersionNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2018-10-31', '/2018-10-31/layers/:LayerName/versions/:VersionNumber', keyArgs] as const
}

export function get20181031LayersLayerNameVersionsVersionNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20181031LayersLayerNameVersionsVersionNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20181031LayersLayerNameVersionsVersionNumber<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
    >
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
                    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
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
                    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20181031LayersLayerNameVersionsVersionNumberQueryKey>
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
            ReturnType<
              (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20181031LayersLayerNameVersionsVersionNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20181031LayersLayerNameVersionsVersionNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDelete20181031LayersLayerNameVersionsVersionNumberMutationKey() {
  return ['2018-10-31', '/2018-10-31/layers/:LayerName/versions/:VersionNumber', 'DELETE'] as const
}

export function getDelete20181031LayersLayerNameVersionsVersionNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20181031LayersLayerNameVersionsVersionNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$delete']
      >,
    ) {
      return parseResponse(
        client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].$delete(args, options),
      )
    },
  })
}

export function useDelete20181031LayersLayerNameVersionsVersionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$delete']
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
  const mutationDefaults = getDelete20181031LayersLayerNameVersionsVersionNumberMutationOptions<
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

export function get20190930FunctionsFunctionNameProvisionedConcurrencyQualifierQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '2019-09-30',
    '/2019-09-30/functions/:FunctionName/provisioned-concurrency#Qualifier',
    keyArgs,
  ] as const
}

export function get20190930FunctionsFunctionNameProvisionedConcurrencyQualifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20190930FunctionsFunctionNameProvisionedConcurrencyQualifierQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#Qualifier'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use20190930FunctionsFunctionNameProvisionedConcurrencyQualifier<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
    >
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
                    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
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
                    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20190930FunctionsFunctionNameProvisionedConcurrencyQualifierQueryKey>
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
            ReturnType<
              (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20190930FunctionsFunctionNameProvisionedConcurrencyQualifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20190930FunctionsFunctionNameProvisionedConcurrencyQualifierQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#Qualifier'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPut20190930FunctionsFunctionNameProvisionedConcurrencyQualifierMutationKey() {
  return [
    '2019-09-30',
    '/2019-09-30/functions/:FunctionName/provisioned-concurrency#Qualifier',
    'PUT',
  ] as const
}

export function getPut20190930FunctionsFunctionNameProvisionedConcurrencyQualifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20190930FunctionsFunctionNameProvisionedConcurrencyQualifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$put']
      >,
    ) {
      return parseResponse(
        client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#Qualifier'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePut20190930FunctionsFunctionNameProvisionedConcurrencyQualifier<
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
                    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$put']
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
  const mutationDefaults =
    getPut20190930FunctionsFunctionNameProvisionedConcurrencyQualifierMutationOptions<
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

export function getDelete20190930FunctionsFunctionNameProvisionedConcurrencyQualifierMutationKey() {
  return [
    '2019-09-30',
    '/2019-09-30/functions/:FunctionName/provisioned-concurrency#Qualifier',
    'DELETE',
  ] as const
}

export function getDelete20190930FunctionsFunctionNameProvisionedConcurrencyQualifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20190930FunctionsFunctionNameProvisionedConcurrencyQualifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$delete']
      >,
    ) {
      return parseResponse(
        client['2019-09-30'].functions[':FunctionName'][
          'provisioned-concurrency#Qualifier'
        ].$delete(args, options),
      )
    },
  })
}

export function useDelete20190930FunctionsFunctionNameProvisionedConcurrencyQualifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$delete']
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
  const mutationDefaults =
    getDelete20190930FunctionsFunctionNameProvisionedConcurrencyQualifierMutationOptions<
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

export function get20160819AccountSettingsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2016-08-19', '/2016-08-19/account-settings/', keyArgs] as const
}

export function get20160819AccountSettingsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20160819AccountSettingsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2016-08-19']['account-settings'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20160819AccountSettingsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>
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
                  ReturnType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20160819AccountSettingsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20160819AccountSettingsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20160819AccountSettingsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2016-08-19']['account-settings'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20190930FunctionsFunctionNameConcurrencyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2019-09-30', '/2019-09-30/functions/:FunctionName/concurrency', keyArgs] as const
}

export function get20190930FunctionsFunctionNameConcurrencyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20190930FunctionsFunctionNameConcurrencyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2019-09-30'].functions[':FunctionName'].concurrency.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20190930FunctionsFunctionNameConcurrency<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
    >
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
                    (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
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
                    (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20190930FunctionsFunctionNameConcurrencyQueryKey>
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
            ReturnType<
              (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20190930FunctionsFunctionNameConcurrencyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20190930FunctionsFunctionNameConcurrencyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2019-09-30'].functions[':FunctionName'].concurrency.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150331FunctionsFunctionNameConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/configuration', keyArgs] as const
}

export function get20150331FunctionsFunctionNameConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150331FunctionsFunctionNameConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].configuration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150331FunctionsFunctionNameConfiguration<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
    >
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20150331FunctionsFunctionNameConfigurationQueryKey>
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
            ReturnType<
              (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150331FunctionsFunctionNameConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150331FunctionsFunctionNameConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-03-31'].functions[':FunctionName'].configuration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPut20150331FunctionsFunctionNameConfigurationMutationKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/configuration', 'PUT'] as const
}

export function getPut20150331FunctionsFunctionNameConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20150331FunctionsFunctionNameConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$put']
      >,
    ) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].configuration.$put(args, options),
      )
    },
  })
}

export function usePut20150331FunctionsFunctionNameConfiguration<
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$put']
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
  const mutationDefaults = getPut20150331FunctionsFunctionNameConfigurationMutationOptions<
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

export function get20181031LayersFindLayerVersionArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2018-10-31', '/2018-10-31/layers#find=LayerVersion&Arn', keyArgs] as const
}

export function get20181031LayersFindLayerVersionArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20181031LayersFindLayerVersionArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2018-10-31']['layers#find=LayerVersion&Arn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20181031LayersFindLayerVersionArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>
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
                  ReturnType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20181031LayersFindLayerVersionArnQueryKey>
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
          Awaited<ReturnType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20181031LayersFindLayerVersionArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20181031LayersFindLayerVersionArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2018-10-31']['layers#find=LayerVersion&Arn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20210720FunctionsFunctionNameRuntimeManagementConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '2021-07-20',
    '/2021-07-20/functions/:FunctionName/runtime-management-config',
    keyArgs,
  ] as const
}

export function get20210720FunctionsFunctionNameRuntimeManagementConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20210720FunctionsFunctionNameRuntimeManagementConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2021-07-20'].functions[':FunctionName']['runtime-management-config'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use20210720FunctionsFunctionNameRuntimeManagementConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
    >
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
                    (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
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
                    (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20210720FunctionsFunctionNameRuntimeManagementConfigQueryKey>
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
            ReturnType<
              (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20210720FunctionsFunctionNameRuntimeManagementConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20210720FunctionsFunctionNameRuntimeManagementConfigQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2021-07-20'].functions[':FunctionName']['runtime-management-config'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPut20210720FunctionsFunctionNameRuntimeManagementConfigMutationKey() {
  return [
    '2021-07-20',
    '/2021-07-20/functions/:FunctionName/runtime-management-config',
    'PUT',
  ] as const
}

export function getPut20210720FunctionsFunctionNameRuntimeManagementConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20210720FunctionsFunctionNameRuntimeManagementConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$put']
      >,
    ) {
      return parseResponse(
        client['2021-07-20'].functions[':FunctionName']['runtime-management-config'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePut20210720FunctionsFunctionNameRuntimeManagementConfig<
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
                    (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$put']
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
  const mutationDefaults =
    getPut20210720FunctionsFunctionNameRuntimeManagementConfigMutationOptions<
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

export function getPost20150331FunctionsFunctionNameInvocationsMutationKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/invocations', 'POST'] as const
}

export function getPost20150331FunctionsFunctionNameInvocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['invocations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20150331FunctionsFunctionNameInvocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-03-31']['functions'][':FunctionName']['invocations']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].invocations.$post(args, options),
      )
    },
  })
}

export function usePost20150331FunctionsFunctionNameInvocations<
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['invocations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2015-03-31']['functions'][':FunctionName']['invocations']['$post']
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
  const mutationDefaults = getPost20150331FunctionsFunctionNameInvocationsMutationOptions<
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

export function getPost20141113FunctionsFunctionNameInvokeAsyncIndexMutationKey() {
  return ['2014-11-13', '/2014-11-13/functions/:FunctionName/invoke-async/', 'POST'] as const
}

export function getPost20141113FunctionsFunctionNameInvokeAsyncIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2014-11-13']['functions'][':FunctionName']['invoke-async']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20141113FunctionsFunctionNameInvokeAsyncIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2014-11-13']['functions'][':FunctionName']['invoke-async']['index']['$post']
      >,
    ) {
      return parseResponse(
        client['2014-11-13'].functions[':FunctionName']['invoke-async'].index.$post(args, options),
      )
    },
  })
}

export function usePost20141113FunctionsFunctionNameInvokeAsyncIndex<
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
                    (typeof client)['2014-11-13']['functions'][':FunctionName']['invoke-async']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2014-11-13']['functions'][':FunctionName']['invoke-async']['index']['$post']
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
  const mutationDefaults = getPost20141113FunctionsFunctionNameInvokeAsyncIndexMutationOptions<
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

export function getPost20211115FunctionsFunctionNameResponseStreamingInvocationsMutationKey() {
  return [
    '2021-11-15',
    '/2021-11-15/functions/:FunctionName/response-streaming-invocations',
    'POST',
  ] as const
}

export function getPost20211115FunctionsFunctionNameResponseStreamingInvocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2021-11-15']['functions'][':FunctionName']['response-streaming-invocations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20211115FunctionsFunctionNameResponseStreamingInvocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2021-11-15']['functions'][':FunctionName']['response-streaming-invocations']['$post']
      >,
    ) {
      return parseResponse(
        client['2021-11-15'].functions[':FunctionName']['response-streaming-invocations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20211115FunctionsFunctionNameResponseStreamingInvocations<
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
                    (typeof client)['2021-11-15']['functions'][':FunctionName']['response-streaming-invocations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2021-11-15']['functions'][':FunctionName']['response-streaming-invocations']['$post']
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
  const mutationDefaults =
    getPost20211115FunctionsFunctionNameResponseStreamingInvocationsMutationOptions<
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

export function get20190925FunctionsFunctionNameEventInvokeConfigListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '2019-09-25',
    '/2019-09-25/functions/:FunctionName/event-invoke-config/list',
    keyArgs,
  ] as const
}

export function get20190925FunctionsFunctionNameEventInvokeConfigListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20190925FunctionsFunctionNameEventInvokeConfigListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].list.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use20190925FunctionsFunctionNameEventInvokeConfigList<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
    >
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
                    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
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
                    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20190925FunctionsFunctionNameEventInvokeConfigListQueryKey>
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
            ReturnType<
              (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20190925FunctionsFunctionNameEventInvokeConfigListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20190925FunctionsFunctionNameEventInvokeConfigListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].list.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20211031FunctionsFunctionNameUrlsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2021-10-31', '/2021-10-31/functions/:FunctionName/urls', keyArgs] as const
}

export function get20211031FunctionsFunctionNameUrlsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20211031FunctionsFunctionNameUrlsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2021-10-31'].functions[':FunctionName'].urls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20211031FunctionsFunctionNameUrls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']>
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
                    (typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']
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
                    (typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20211031FunctionsFunctionNameUrlsQueryKey>
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
            ReturnType<(typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20211031FunctionsFunctionNameUrlsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20211031FunctionsFunctionNameUrlsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2021-10-31'].functions[':FunctionName'].urls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150331FunctionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['functions']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-03-31', '/2015-03-31/functions/', keyArgs] as const
}

export function get20150331FunctionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['functions']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150331FunctionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-03-31'].functions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150331FunctionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-03-31']['functions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-03-31']['functions']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-03-31']['functions']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-03-31']['functions']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20150331FunctionsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['2015-03-31']['functions']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150331FunctionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150331FunctionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-03-31'].functions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20200422CodeSigningConfigsCodeSigningConfigArnFunctionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '2020-04-22',
    '/2020-04-22/code-signing-configs/:CodeSigningConfigArn/functions',
    keyArgs,
  ] as const
}

export function get20200422CodeSigningConfigsCodeSigningConfigArnFunctionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20200422CodeSigningConfigsCodeSigningConfigArnFunctionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].functions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use20200422CodeSigningConfigsCodeSigningConfigArnFunctions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
    >
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
                    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
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
                    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20200422CodeSigningConfigsCodeSigningConfigArnFunctionsQueryKey>
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
            ReturnType<
              (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200422CodeSigningConfigsCodeSigningConfigArnFunctionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20200422CodeSigningConfigsCodeSigningConfigArnFunctionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].functions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20181031LayersLayerNameVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2018-10-31', '/2018-10-31/layers/:LayerName/versions', keyArgs] as const
}

export function get20181031LayersLayerNameVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20181031LayersLayerNameVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2018-10-31'].layers[':LayerName'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20181031LayersLayerNameVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>
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
                    (typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']
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
                    (typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20181031LayersLayerNameVersionsQueryKey>
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
            ReturnType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20181031LayersLayerNameVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20181031LayersLayerNameVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2018-10-31'].layers[':LayerName'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost20181031LayersLayerNameVersionsMutationKey() {
  return ['2018-10-31', '/2018-10-31/layers/:LayerName/versions', 'POST'] as const
}

export function getPost20181031LayersLayerNameVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20181031LayersLayerNameVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$post']
      >,
    ) {
      return parseResponse(client['2018-10-31'].layers[':LayerName'].versions.$post(args, options))
    },
  })
}

export function usePost20181031LayersLayerNameVersions<
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
                    (typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$post']
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
  const mutationDefaults = getPost20181031LayersLayerNameVersionsMutationOptions<
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

export function get20181031LayersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2018-10-31']['layers']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2018-10-31', '/2018-10-31/layers', keyArgs] as const
}

export function get20181031LayersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2018-10-31']['layers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20181031LayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2018-10-31'].layers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20181031Layers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2018-10-31']['layers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2018-10-31']['layers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2018-10-31']['layers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2018-10-31']['layers']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20181031LayersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2018-10-31']['layers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20181031LayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20181031LayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2018-10-31'].layers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20190930FunctionsFunctionNameProvisionedConcurrencyListALLQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '2019-09-30',
    '/2019-09-30/functions/:FunctionName/provisioned-concurrency#List=ALL',
    keyArgs,
  ] as const
}

export function get20190930FunctionsFunctionNameProvisionedConcurrencyListALLQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20190930FunctionsFunctionNameProvisionedConcurrencyListALLQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#List=ALL'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use20190930FunctionsFunctionNameProvisionedConcurrencyListALL<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
    >
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
                    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
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
                    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20190930FunctionsFunctionNameProvisionedConcurrencyListALLQueryKey>
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
            ReturnType<
              (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20190930FunctionsFunctionNameProvisionedConcurrencyListALLQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20190930FunctionsFunctionNameProvisionedConcurrencyListALLQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#List=ALL'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20170331TagsARNQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2017-03-31', '/2017-03-31/tags/:ARN', keyArgs] as const
}

export function get20170331TagsARNQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20170331TagsARNQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2017-03-31'].tags[':ARN'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20170331TagsARN<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20170331TagsARNQueryKey>
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
          Awaited<ReturnType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20170331TagsARNQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20170331TagsARNQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2017-03-31'].tags[':ARN'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost20170331TagsARNMutationKey() {
  return ['2017-03-31', '/2017-03-31/tags/:ARN', 'POST'] as const
}

export function getPost20170331TagsARNMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-03-31']['tags'][':ARN']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20170331TagsARNMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$post']>,
    ) {
      return parseResponse(client['2017-03-31'].tags[':ARN'].$post(args, options))
    },
  })
}

export function usePost20170331TagsARN<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['2017-03-31']['tags'][':ARN']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$post']>,
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
  const mutationDefaults = getPost20170331TagsARNMutationOptions<TError, TOnMutateResult>(
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

export function get20150331FunctionsFunctionNameVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/versions', keyArgs] as const
}

export function get20150331FunctionsFunctionNameVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150331FunctionsFunctionNameVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150331FunctionsFunctionNameVersions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
    >
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20150331FunctionsFunctionNameVersionsQueryKey>
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
            ReturnType<
              (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150331FunctionsFunctionNameVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150331FunctionsFunctionNameVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-03-31'].functions[':FunctionName'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost20150331FunctionsFunctionNameVersionsMutationKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/versions', 'POST'] as const
}

export function getPost20150331FunctionsFunctionNameVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20150331FunctionsFunctionNameVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].versions.$post(args, options),
      )
    },
  })
}

export function usePost20150331FunctionsFunctionNameVersions<
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$post']
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
  const mutationDefaults = getPost20150331FunctionsFunctionNameVersionsMutationOptions<
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

export function getDelete20181031LayersLayerNameVersionsVersionNumberPolicyStatementIdMutationKey() {
  return [
    '2018-10-31',
    '/2018-10-31/layers/:LayerName/versions/:VersionNumber/policy/:StatementId',
    'DELETE',
  ] as const
}

export function getDelete20181031LayersLayerNameVersionsVersionNumberPolicyStatementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy'][':StatementId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20181031LayersLayerNameVersionsVersionNumberPolicyStatementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy'][':StatementId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].policy[
          ':StatementId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDelete20181031LayersLayerNameVersionsVersionNumberPolicyStatementId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy'][':StatementId']['$delete']
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
  const mutationDefaults =
    getDelete20181031LayersLayerNameVersionsVersionNumberPolicyStatementIdMutationOptions<
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

export function getDelete20150331FunctionsFunctionNamePolicyStatementIdMutationKey() {
  return [
    '2015-03-31',
    '/2015-03-31/functions/:FunctionName/policy/:StatementId',
    'DELETE',
  ] as const
}

export function getDelete20150331FunctionsFunctionNamePolicyStatementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-03-31']['functions'][':FunctionName']['policy'][':StatementId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20150331FunctionsFunctionNamePolicyStatementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-03-31']['functions'][':FunctionName']['policy'][':StatementId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].policy[':StatementId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDelete20150331FunctionsFunctionNamePolicyStatementId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-03-31']['functions'][':FunctionName']['policy'][':StatementId']['$delete']
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
  const mutationDefaults = getDelete20150331FunctionsFunctionNamePolicyStatementIdMutationOptions<
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

export function getDelete20170331TagsARNTagKeysMutationKey() {
  return ['2017-03-31', '/2017-03-31/tags/:ARN#tagKeys', 'DELETE'] as const
}

export function getDelete20170331TagsARNTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2017-03-31']['tags'][':ARN#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20170331TagsARNTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN#tagKeys']['$delete']>,
    ) {
      return parseResponse(client['2017-03-31'].tags[':ARN#tagKeys'].$delete(args, options))
    },
  })
}

export function useDelete20170331TagsARNTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client)['2017-03-31']['tags'][':ARN#tagKeys']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN#tagKeys']['$delete']>,
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
  const mutationDefaults = getDelete20170331TagsARNTagKeysMutationOptions<TError, TOnMutateResult>(
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

export function getPut20150331FunctionsFunctionNameCodeMutationKey() {
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/code', 'PUT'] as const
}

export function getPut20150331FunctionsFunctionNameCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['code']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20150331FunctionsFunctionNameCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-03-31']['functions'][':FunctionName']['code']['$put']
      >,
    ) {
      return parseResponse(client['2015-03-31'].functions[':FunctionName'].code.$put(args, options))
    },
  })
}

export function usePut20150331FunctionsFunctionNameCode<
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
                    (typeof client)['2015-03-31']['functions'][':FunctionName']['code']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2015-03-31']['functions'][':FunctionName']['code']['$put']
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
  const mutationDefaults = getPut20150331FunctionsFunctionNameCodeMutationOptions<
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
