import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function get20181031LayersLayerNameVersionsVersionNumberPolicyQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20181031LayersLayerNameVersionsVersionNumberPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].policy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20181031LayersLayerNameVersionsVersionNumberPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20181031LayersLayerNameVersionsVersionNumberPolicyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20181031LayersLayerNameVersionsVersionNumberPolicy<
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
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['policy']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20181031LayersLayerNameVersionsVersionNumberPolicyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/policy', keyArgs] as const
}

export function get20150331FunctionsFunctionNamePolicyQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20150331FunctionsFunctionNamePolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].policy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20150331FunctionsFunctionNamePolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150331FunctionsFunctionNamePolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150331FunctionsFunctionNamePolicy<
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['policy']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150331FunctionsFunctionNamePolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/aliases', keyArgs] as const
}

export function get20150331FunctionsFunctionNameAliasesQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20150331FunctionsFunctionNameAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].aliases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20150331FunctionsFunctionNameAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150331FunctionsFunctionNameAliasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150331FunctionsFunctionNameAliases<
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150331FunctionsFunctionNameAliasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-04-22', '/2020-04-22/code-signing-configs/', keyArgs] as const
}

export function get20200422CodeSigningConfigsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20200422CodeSigningConfigsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-04-22']['code-signing-configs'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20200422CodeSigningConfigsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20200422CodeSigningConfigsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20200422CodeSigningConfigsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-04-22']['code-signing-configs']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20200422CodeSigningConfigsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/event-source-mappings/', keyArgs] as const
}

export function get20150331EventSourceMappingsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20150331EventSourceMappingsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-03-31']['event-source-mappings'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150331EventSourceMappingsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150331EventSourceMappingsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150331EventSourceMappingsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2021-10-31', '/2021-10-31/functions/:FunctionName/url', keyArgs] as const
}

export function get20211031FunctionsFunctionNameUrlQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20211031FunctionsFunctionNameUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2021-10-31'].functions[':FunctionName'].url.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20211031FunctionsFunctionNameUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20211031FunctionsFunctionNameUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20211031FunctionsFunctionNameUrl<
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
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['url']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof get20211031FunctionsFunctionNameUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20211031FunctionsFunctionNameUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/aliases/:Name', keyArgs] as const
}

export function get20150331FunctionsFunctionNameAliasesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20150331FunctionsFunctionNameAliasesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].aliases[':Name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20150331FunctionsFunctionNameAliasesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150331FunctionsFunctionNameAliasesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150331FunctionsFunctionNameAliasesName<
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['aliases'][':Name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150331FunctionsFunctionNameAliasesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-04-22', '/2020-04-22/code-signing-configs/:CodeSigningConfigArn', keyArgs] as const
}

export function get20200422CodeSigningConfigsCodeSigningConfigArnQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20200422CodeSigningConfigsCodeSigningConfigArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20200422CodeSigningConfigsCodeSigningConfigArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20200422CodeSigningConfigsCodeSigningConfigArnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20200422CodeSigningConfigsCodeSigningConfigArn<
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
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20200422CodeSigningConfigsCodeSigningConfigArnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/event-source-mappings/:UUID', keyArgs] as const
}

export function get20150331EventSourceMappingsUUIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20150331EventSourceMappingsUUIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-03-31']['event-source-mappings'][':UUID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150331EventSourceMappingsUUIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150331EventSourceMappingsUUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-03-31']['event-source-mappings'][':UUID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150331EventSourceMappingsUUIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName', keyArgs] as const
}

export function get20150331FunctionsFunctionNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20150331FunctionsFunctionNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20150331FunctionsFunctionNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150331FunctionsFunctionNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150331FunctionsFunctionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-03-31']['functions'][':FunctionName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof get20150331FunctionsFunctionNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150331FunctionsFunctionNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-06-30', '/2020-06-30/functions/:FunctionName/code-signing-config', keyArgs] as const
}

export function get20200630FunctionsFunctionNameCodeSigningConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20200630FunctionsFunctionNameCodeSigningConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-06-30'].functions[':FunctionName']['code-signing-config'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20200630FunctionsFunctionNameCodeSigningConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20200630FunctionsFunctionNameCodeSigningConfigQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20200630FunctionsFunctionNameCodeSigningConfig<
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
  args: InferRequestType<
    (typeof client)['2020-06-30']['functions'][':FunctionName']['code-signing-config']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20200630FunctionsFunctionNameCodeSigningConfigQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2019-09-25', '/2019-09-25/functions/:FunctionName/event-invoke-config', keyArgs] as const
}

export function get20190925FunctionsFunctionNameEventInvokeConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20190925FunctionsFunctionNameEventInvokeConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20190925FunctionsFunctionNameEventInvokeConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20190925FunctionsFunctionNameEventInvokeConfigQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20190925FunctionsFunctionNameEventInvokeConfig<
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
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20190925FunctionsFunctionNameEventInvokeConfigQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2018-10-31', '/2018-10-31/layers/:LayerName/versions/:VersionNumber', keyArgs] as const
}

export function get20181031LayersLayerNameVersionsVersionNumberQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20181031LayersLayerNameVersionsVersionNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2018-10-31'].layers[':LayerName'].versions[':VersionNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20181031LayersLayerNameVersionsVersionNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20181031LayersLayerNameVersionsVersionNumberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20181031LayersLayerNameVersionsVersionNumber<
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
  args: InferRequestType<
    (typeof client)['2018-10-31']['layers'][':LayerName']['versions'][':VersionNumber']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20181031LayersLayerNameVersionsVersionNumberQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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

export function get20190930FunctionsFunctionNameProvisionedConcurrencyQualifierQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20190930FunctionsFunctionNameProvisionedConcurrencyQualifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#Qualifier'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20190930FunctionsFunctionNameProvisionedConcurrencyQualifierQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20190930FunctionsFunctionNameProvisionedConcurrencyQualifierQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20190930FunctionsFunctionNameProvisionedConcurrencyQualifier<
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
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#Qualifier']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20190930FunctionsFunctionNameProvisionedConcurrencyQualifierQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2016-08-19', '/2016-08-19/account-settings/', keyArgs] as const
}

export function get20160819AccountSettingsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20160819AccountSettingsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2016-08-19']['account-settings'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20160819AccountSettingsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20160819AccountSettingsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20160819AccountSettingsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2016-08-19']['account-settings']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof get20160819AccountSettingsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20160819AccountSettingsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20190930FunctionsFunctionNameConcurrencyQueryKey(
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2019-09-30', '/2019-09-30/functions/:FunctionName/concurrency', keyArgs] as const
}

export function get20190930FunctionsFunctionNameConcurrencyQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20190930FunctionsFunctionNameConcurrencyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2019-09-30'].functions[':FunctionName'].concurrency.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20190930FunctionsFunctionNameConcurrencyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20190930FunctionsFunctionNameConcurrencyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20190930FunctionsFunctionNameConcurrency<
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
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['concurrency']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20190930FunctionsFunctionNameConcurrencyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20150331FunctionsFunctionNameConfigurationQueryKey(
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/configuration', keyArgs] as const
}

export function get20150331FunctionsFunctionNameConfigurationQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20150331FunctionsFunctionNameConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20150331FunctionsFunctionNameConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150331FunctionsFunctionNameConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150331FunctionsFunctionNameConfiguration<
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150331FunctionsFunctionNameConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2018-10-31', '/2018-10-31/layers#find=LayerVersion&Arn', keyArgs] as const
}

export function get20181031LayersFindLayerVersionArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20181031LayersFindLayerVersionArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2018-10-31']['layers#find=LayerVersion&Arn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20181031LayersFindLayerVersionArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20181031LayersFindLayerVersionArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20181031LayersFindLayerVersionArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2018-10-31']['layers#find=LayerVersion&Arn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof get20181031LayersFindLayerVersionArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20181031LayersFindLayerVersionArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20210720FunctionsFunctionNameRuntimeManagementConfigQueryKey(
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

export function get20210720FunctionsFunctionNameRuntimeManagementConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20210720FunctionsFunctionNameRuntimeManagementConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2021-07-20'].functions[':FunctionName']['runtime-management-config'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20210720FunctionsFunctionNameRuntimeManagementConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20210720FunctionsFunctionNameRuntimeManagementConfigQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20210720FunctionsFunctionNameRuntimeManagementConfig<
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
  args: InferRequestType<
    (typeof client)['2021-07-20']['functions'][':FunctionName']['runtime-management-config']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20210720FunctionsFunctionNameRuntimeManagementConfigQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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

export function get20190925FunctionsFunctionNameEventInvokeConfigListQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20190925FunctionsFunctionNameEventInvokeConfigListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2019-09-25'].functions[':FunctionName']['event-invoke-config'].list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20190925FunctionsFunctionNameEventInvokeConfigListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20190925FunctionsFunctionNameEventInvokeConfigListQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20190925FunctionsFunctionNameEventInvokeConfigList<
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
  args: InferRequestType<
    (typeof client)['2019-09-25']['functions'][':FunctionName']['event-invoke-config']['list']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20190925FunctionsFunctionNameEventInvokeConfigListQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20211031FunctionsFunctionNameUrlsQueryKey(
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2021-10-31', '/2021-10-31/functions/:FunctionName/urls', keyArgs] as const
}

export function get20211031FunctionsFunctionNameUrlsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20211031FunctionsFunctionNameUrlsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2021-10-31'].functions[':FunctionName'].urls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20211031FunctionsFunctionNameUrlsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20211031FunctionsFunctionNameUrlsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20211031FunctionsFunctionNameUrls<
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
  args: InferRequestType<
    (typeof client)['2021-10-31']['functions'][':FunctionName']['urls']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof get20211031FunctionsFunctionNameUrlsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20211031FunctionsFunctionNameUrlsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20150331FunctionsIndexQueryKey(
  args: InferRequestType<(typeof client)['2015-03-31']['functions']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/functions/', keyArgs] as const
}

export function get20150331FunctionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-03-31']['functions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-03-31']['functions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20150331FunctionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-03-31'].functions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['2015-03-31']['functions']['index']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20150331FunctionsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150331FunctionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150331FunctionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-03-31']['functions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2015-03-31']['functions']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150331FunctionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20200422CodeSigningConfigsCodeSigningConfigArnFunctionsQueryKey(
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

export function get20200422CodeSigningConfigsCodeSigningConfigArnFunctionsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20200422CodeSigningConfigsCodeSigningConfigArnFunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn'].functions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20200422CodeSigningConfigsCodeSigningConfigArnFunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20200422CodeSigningConfigsCodeSigningConfigArnFunctionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20200422CodeSigningConfigsCodeSigningConfigArnFunctions<
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
  args: InferRequestType<
    (typeof client)['2020-04-22']['code-signing-configs'][':CodeSigningConfigArn']['functions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20200422CodeSigningConfigsCodeSigningConfigArnFunctionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20181031LayersLayerNameVersionsQueryKey(
  args: InferRequestType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2018-10-31', '/2018-10-31/layers/:LayerName/versions', keyArgs] as const
}

export function get20181031LayersLayerNameVersionsQueryOptions<
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
  args: InferRequestType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20181031LayersLayerNameVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2018-10-31'].layers[':LayerName'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20181031LayersLayerNameVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20181031LayersLayerNameVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20181031LayersLayerNameVersions<
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
  args: InferRequestType<(typeof client)['2018-10-31']['layers'][':LayerName']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof get20181031LayersLayerNameVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20181031LayersLayerNameVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)['2018-10-31']['layers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2018-10-31', '/2018-10-31/layers', keyArgs] as const
}

export function get20181031LayersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2018-10-31']['layers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2018-10-31']['layers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2018-10-31']['layers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20181031LayersQueryKey>
  >({
    queryKey: get20181031LayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2018-10-31'].layers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use20181031Layers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2018-10-31']['layers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2018-10-31']['layers']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20181031LayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get20181031LayersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense20181031Layers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2018-10-31']['layers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2018-10-31']['layers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2018-10-31']['layers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20181031LayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get20181031LayersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function get20190930FunctionsFunctionNameProvisionedConcurrencyListALLQueryKey(
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

export function get20190930FunctionsFunctionNameProvisionedConcurrencyListALLQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20190930FunctionsFunctionNameProvisionedConcurrencyListALLQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2019-09-30'].functions[':FunctionName']['provisioned-concurrency#List=ALL'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20190930FunctionsFunctionNameProvisionedConcurrencyListALLQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20190930FunctionsFunctionNameProvisionedConcurrencyListALLQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20190930FunctionsFunctionNameProvisionedConcurrencyListALL<
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
  args: InferRequestType<
    (typeof client)['2019-09-30']['functions'][':FunctionName']['provisioned-concurrency#List=ALL']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20190930FunctionsFunctionNameProvisionedConcurrencyListALLQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20170331TagsARNQueryKey(
  args: InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2017-03-31', '/2017-03-31/tags/:ARN', keyArgs] as const
}

export function get20170331TagsARNQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20170331TagsARNQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2017-03-31'].tags[':ARN'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20170331TagsARNQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get20170331TagsARNQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense20170331TagsARN<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2017-03-31']['tags'][':ARN']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get20170331TagsARNQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-03-31', '/2015-03-31/functions/:FunctionName/versions', keyArgs] as const
}

export function get20150331FunctionsFunctionNameVersionsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get20150331FunctionsFunctionNameVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2015-03-31'].functions[':FunctionName'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get20150331FunctionsFunctionNameVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get20150331FunctionsFunctionNameVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20150331FunctionsFunctionNameVersions<
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
  args: InferRequestType<
    (typeof client)['2015-03-31']['functions'][':FunctionName']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get20150331FunctionsFunctionNameVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
