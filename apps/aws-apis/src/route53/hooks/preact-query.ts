import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2013_04_01Key() {
  return ['2013-04-01'] as const
}

export function getPost20130401KeysigningkeyHostedZoneIdNameActivateMutationKey() {
  return ['2013-04-01', '/2013-04-01/keysigningkey/:HostedZoneId/:Name/activate', 'POST'] as const
}

export function getPost20130401KeysigningkeyHostedZoneIdNameActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['activate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20130401KeysigningkeyHostedZoneIdNameActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['activate']['$post']
      >,
    ) {
      return parseResponse(
        client['2013-04-01'].keysigningkey[':HostedZoneId'][':Name'].activate.$post(args, options),
      )
    },
  })
}

export function usePost20130401KeysigningkeyHostedZoneIdNameActivate<
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
                  (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['activate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['activate']['$post']
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
  const mutationDefaults = getPost20130401KeysigningkeyHostedZoneIdNameActivateMutationOptions<
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

export function getPost20130401HostedzoneIdAssociatevpcMutationKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/associatevpc', 'POST'] as const
}

export function getPost20130401HostedzoneIdAssociatevpcMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['associatevpc']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['associatevpc']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401HostedzoneIdAssociatevpcMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['hostedzone'][':Id']['associatevpc']['$post']
      >,
    ) {
      return parseResponse(client['2013-04-01'].hostedzone[':Id'].associatevpc.$post(args, options))
    },
  })
}

export function usePost20130401HostedzoneIdAssociatevpc<
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
                  (typeof client)['2013-04-01']['hostedzone'][':Id']['associatevpc']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-04-01']['hostedzone'][':Id']['associatevpc']['$post']
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
  const mutationDefaults = getPost20130401HostedzoneIdAssociatevpcMutationOptions<
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

export function get20130401CidrcollectionCidrCollectionIdQueryKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/cidrcollection/:CidrCollectionId', keyArgs] as const
}

export function get20130401CidrcollectionCidrCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401CidrcollectionCidrCollectionIdQueryKey>
  >({
    queryKey: get20130401CidrcollectionCidrCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].cidrcollection[':CidrCollectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401CidrcollectionCidrCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401CidrcollectionCidrCollectionIdQueryKey>
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
      ...get20130401CidrcollectionCidrCollectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401CidrcollectionCidrCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401CidrcollectionCidrCollectionIdQueryKey>
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
      ...get20130401CidrcollectionCidrCollectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20130401CidrcollectionCidrCollectionIdMutationKey() {
  return ['2013-04-01', '/2013-04-01/cidrcollection/:CidrCollectionId', 'POST'] as const
}

export function getPost20130401CidrcollectionCidrCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401CidrcollectionCidrCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$post']
      >,
    ) {
      return parseResponse(
        client['2013-04-01'].cidrcollection[':CidrCollectionId'].$post(args, options),
      )
    },
  })
}

export function usePost20130401CidrcollectionCidrCollectionId<
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
                  (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$post']
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
  const mutationDefaults = getPost20130401CidrcollectionCidrCollectionIdMutationOptions<
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

export function getDelete20130401CidrcollectionCidrCollectionIdMutationKey() {
  return ['2013-04-01', '/2013-04-01/cidrcollection/:CidrCollectionId', 'DELETE'] as const
}

export function getDelete20130401CidrcollectionCidrCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20130401CidrcollectionCidrCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2013-04-01'].cidrcollection[':CidrCollectionId'].$delete(args, options),
      )
    },
  })
}

export function useDelete20130401CidrcollectionCidrCollectionId<
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
                  (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$delete']
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
  const mutationDefaults = getDelete20130401CidrcollectionCidrCollectionIdMutationOptions<
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

export function getPost20130401HostedzoneIdRrsetIndexMutationKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/rrset/', 'POST'] as const
}

export function getPost20130401HostedzoneIdRrsetIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401HostedzoneIdRrsetIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['index']['$post']
      >,
    ) {
      return parseResponse(client['2013-04-01'].hostedzone[':Id'].rrset.index.$post(args, options))
    },
  })
}

export function usePost20130401HostedzoneIdRrsetIndex<
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
                  (typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['index']['$post']
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
  const mutationDefaults = getPost20130401HostedzoneIdRrsetIndexMutationOptions<
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

export function get20130401TagsResourceTypeResourceIdQueryKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/tags/:ResourceType/:ResourceId', keyArgs] as const
}

export function get20130401TagsResourceTypeResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TagsResourceTypeResourceIdQueryKey>
  >({
    queryKey: get20130401TagsResourceTypeResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].tags[':ResourceType'][':ResourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401TagsResourceTypeResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TagsResourceTypeResourceIdQueryKey>
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
      ...get20130401TagsResourceTypeResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401TagsResourceTypeResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TagsResourceTypeResourceIdQueryKey>
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
      ...get20130401TagsResourceTypeResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20130401TagsResourceTypeResourceIdMutationKey() {
  return ['2013-04-01', '/2013-04-01/tags/:ResourceType/:ResourceId', 'POST'] as const
}

export function getPost20130401TagsResourceTypeResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20130401TagsResourceTypeResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$post']
      >,
    ) {
      return parseResponse(
        client['2013-04-01'].tags[':ResourceType'][':ResourceId'].$post(args, options),
      )
    },
  })
}

export function usePost20130401TagsResourceTypeResourceId<
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
                  (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$post']
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
  const mutationDefaults = getPost20130401TagsResourceTypeResourceIdMutationOptions<
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

export function get20130401CidrcollectionQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/cidrcollection', keyArgs] as const
}

export function get20130401CidrcollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['cidrcollection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['cidrcollection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401CidrcollectionQueryKey>
  >({
    queryKey: get20130401CidrcollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].cidrcollection.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401Cidrcollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['cidrcollection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['cidrcollection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401CidrcollectionQueryKey>
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
      ...get20130401CidrcollectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401Cidrcollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['cidrcollection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['cidrcollection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401CidrcollectionQueryKey>
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
      ...get20130401CidrcollectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20130401CidrcollectionMutationKey() {
  return ['2013-04-01', '/2013-04-01/cidrcollection', 'POST'] as const
}

export function getPost20130401CidrcollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['cidrcollection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401CidrcollectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$post']>,
    ) {
      return parseResponse(client['2013-04-01'].cidrcollection.$post(args, options))
    },
  })
}

export function usePost20130401Cidrcollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['cidrcollection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20130401CidrcollectionMutationOptions<TError, TOnMutateResult>(
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

export function get20130401HealthcheckQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/healthcheck', keyArgs] as const
}

export function get20130401HealthcheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HealthcheckQueryKey>
  >({
    queryKey: get20130401HealthcheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].healthcheck.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401Healthcheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HealthcheckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get20130401HealthcheckQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense20130401Healthcheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HealthcheckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get20130401HealthcheckQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPost20130401HealthcheckMutationKey() {
  return ['2013-04-01', '/2013-04-01/healthcheck', 'POST'] as const
}

export function getPost20130401HealthcheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401HealthcheckMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$post']>,
    ) {
      return parseResponse(client['2013-04-01'].healthcheck.$post(args, options))
    },
  })
}

export function usePost20130401Healthcheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20130401HealthcheckMutationOptions<TError, TOnMutateResult>(
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

export function get20130401HostedzoneQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzone', keyArgs] as const
}

export function get20130401HostedzoneQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzoneQueryKey>
  >({
    queryKey: get20130401HostedzoneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].hostedzone.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401Hostedzone<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzoneQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get20130401HostedzoneQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense20130401Hostedzone<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzoneQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get20130401HostedzoneQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPost20130401HostedzoneMutationKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone', 'POST'] as const
}

export function getPost20130401HostedzoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401HostedzoneMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$post']>) {
      return parseResponse(client['2013-04-01'].hostedzone.$post(args, options))
    },
  })
}

export function usePost20130401Hostedzone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20130401HostedzoneMutationOptions<TError, TOnMutateResult>(
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

export function getPost20130401KeysigningkeyMutationKey() {
  return ['2013-04-01', '/2013-04-01/keysigningkey', 'POST'] as const
}

export function getPost20130401KeysigningkeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['keysigningkey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['keysigningkey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401KeysigningkeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2013-04-01']['keysigningkey']['$post']>,
    ) {
      return parseResponse(client['2013-04-01'].keysigningkey.$post(args, options))
    },
  })
}

export function usePost20130401Keysigningkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['keysigningkey']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['keysigningkey']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20130401KeysigningkeyMutationOptions<TError, TOnMutateResult>(
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

export function get20130401QueryloggingconfigQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/queryloggingconfig', keyArgs] as const
}

export function get20130401QueryloggingconfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401QueryloggingconfigQueryKey>
  >({
    queryKey: get20130401QueryloggingconfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].queryloggingconfig.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401Queryloggingconfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401QueryloggingconfigQueryKey>
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
      ...get20130401QueryloggingconfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401Queryloggingconfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401QueryloggingconfigQueryKey>
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
      ...get20130401QueryloggingconfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20130401QueryloggingconfigMutationKey() {
  return ['2013-04-01', '/2013-04-01/queryloggingconfig', 'POST'] as const
}

export function getPost20130401QueryloggingconfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401QueryloggingconfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$post']>,
    ) {
      return parseResponse(client['2013-04-01'].queryloggingconfig.$post(args, options))
    },
  })
}

export function usePost20130401Queryloggingconfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20130401QueryloggingconfigMutationOptions<
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

export function get20130401DelegationsetQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/delegationset', keyArgs] as const
}

export function get20130401DelegationsetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401DelegationsetQueryKey>
  >({
    queryKey: get20130401DelegationsetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].delegationset.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401Delegationset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401DelegationsetQueryKey>
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
      ...get20130401DelegationsetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401Delegationset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401DelegationsetQueryKey>
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
      ...get20130401DelegationsetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20130401DelegationsetMutationKey() {
  return ['2013-04-01', '/2013-04-01/delegationset', 'POST'] as const
}

export function getPost20130401DelegationsetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['delegationset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401DelegationsetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2013-04-01']['delegationset']['$post']>,
    ) {
      return parseResponse(client['2013-04-01'].delegationset.$post(args, options))
    },
  })
}

export function usePost20130401Delegationset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['delegationset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20130401DelegationsetMutationOptions<TError, TOnMutateResult>(
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

export function getPost20130401TrafficpolicyMutationKey() {
  return ['2013-04-01', '/2013-04-01/trafficpolicy', 'POST'] as const
}

export function getPost20130401TrafficpolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401TrafficpolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicy']['$post']>,
    ) {
      return parseResponse(client['2013-04-01'].trafficpolicy.$post(args, options))
    },
  })
}

export function usePost20130401Trafficpolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['trafficpolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20130401TrafficpolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPost20130401TrafficpolicyinstanceMutationKey() {
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstance', 'POST'] as const
}

export function getPost20130401TrafficpolicyinstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401TrafficpolicyinstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance']['$post']>,
    ) {
      return parseResponse(client['2013-04-01'].trafficpolicyinstance.$post(args, options))
    },
  })
}

export function usePost20130401Trafficpolicyinstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20130401TrafficpolicyinstanceMutationOptions<
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

export function getPost20130401TrafficpolicyIdMutationKey() {
  return ['2013-04-01', '/2013-04-01/trafficpolicy/:Id', 'POST'] as const
}

export function getPost20130401TrafficpolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401TrafficpolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id']['$post']>,
    ) {
      return parseResponse(client['2013-04-01'].trafficpolicy[':Id'].$post(args, options))
    },
  })
}

export function usePost20130401TrafficpolicyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20130401TrafficpolicyIdMutationOptions<TError, TOnMutateResult>(
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

export function get20130401HostedzoneIdAuthorizevpcassociationQueryKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/authorizevpcassociation', keyArgs] as const
}

export function get20130401HostedzoneIdAuthorizevpcassociationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzoneIdAuthorizevpcassociationQueryKey>
  >({
    queryKey: get20130401HostedzoneIdAuthorizevpcassociationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].hostedzone[':Id'].authorizevpcassociation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401HostedzoneIdAuthorizevpcassociation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzoneIdAuthorizevpcassociationQueryKey>
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
      ...get20130401HostedzoneIdAuthorizevpcassociationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401HostedzoneIdAuthorizevpcassociation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzoneIdAuthorizevpcassociationQueryKey>
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
      ...get20130401HostedzoneIdAuthorizevpcassociationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20130401HostedzoneIdAuthorizevpcassociationMutationKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/authorizevpcassociation', 'POST'] as const
}

export function getPost20130401HostedzoneIdAuthorizevpcassociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20130401HostedzoneIdAuthorizevpcassociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$post']
      >,
    ) {
      return parseResponse(
        client['2013-04-01'].hostedzone[':Id'].authorizevpcassociation.$post(args, options),
      )
    },
  })
}

export function usePost20130401HostedzoneIdAuthorizevpcassociation<
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
                  (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$post']
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
  const mutationDefaults = getPost20130401HostedzoneIdAuthorizevpcassociationMutationOptions<
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

export function getPost20130401KeysigningkeyHostedZoneIdNameDeactivateMutationKey() {
  return ['2013-04-01', '/2013-04-01/keysigningkey/:HostedZoneId/:Name/deactivate', 'POST'] as const
}

export function getPost20130401KeysigningkeyHostedZoneIdNameDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['deactivate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20130401KeysigningkeyHostedZoneIdNameDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['deactivate']['$post']
      >,
    ) {
      return parseResponse(
        client['2013-04-01'].keysigningkey[':HostedZoneId'][':Name'].deactivate.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20130401KeysigningkeyHostedZoneIdNameDeactivate<
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
                  (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['deactivate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['deactivate']['$post']
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
  const mutationDefaults = getPost20130401KeysigningkeyHostedZoneIdNameDeactivateMutationOptions<
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

export function get20130401HealthcheckHealthCheckIdQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/healthcheck/:HealthCheckId', keyArgs] as const
}

export function get20130401HealthcheckHealthCheckIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HealthcheckHealthCheckIdQueryKey>
  >({
    queryKey: get20130401HealthcheckHealthCheckIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].healthcheck[':HealthCheckId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401HealthcheckHealthCheckId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HealthcheckHealthCheckIdQueryKey>
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
      ...get20130401HealthcheckHealthCheckIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401HealthcheckHealthCheckId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HealthcheckHealthCheckIdQueryKey>
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
      ...get20130401HealthcheckHealthCheckIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20130401HealthcheckHealthCheckIdMutationKey() {
  return ['2013-04-01', '/2013-04-01/healthcheck/:HealthCheckId', 'POST'] as const
}

export function getPost20130401HealthcheckHealthCheckIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401HealthcheckHealthCheckIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$post']
      >,
    ) {
      return parseResponse(client['2013-04-01'].healthcheck[':HealthCheckId'].$post(args, options))
    },
  })
}

export function usePost20130401HealthcheckHealthCheckId<
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
                ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20130401HealthcheckHealthCheckIdMutationOptions<
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

export function getDelete20130401HealthcheckHealthCheckIdMutationKey() {
  return ['2013-04-01', '/2013-04-01/healthcheck/:HealthCheckId', 'DELETE'] as const
}

export function getDelete20130401HealthcheckHealthCheckIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20130401HealthcheckHealthCheckIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2013-04-01'].healthcheck[':HealthCheckId'].$delete(args, options),
      )
    },
  })
}

export function useDelete20130401HealthcheckHealthCheckId<
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
                  (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20130401HealthcheckHealthCheckIdMutationOptions<
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

export function get20130401HostedzoneIdQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id', keyArgs] as const
}

export function get20130401HostedzoneIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzoneIdQueryKey>
  >({
    queryKey: get20130401HostedzoneIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].hostedzone[':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401HostedzoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzoneIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get20130401HostedzoneIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense20130401HostedzoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzoneIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get20130401HostedzoneIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPost20130401HostedzoneIdMutationKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id', 'POST'] as const
}

export function getPost20130401HostedzoneIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401HostedzoneIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$post']>,
    ) {
      return parseResponse(client['2013-04-01'].hostedzone[':Id'].$post(args, options))
    },
  })
}

export function usePost20130401HostedzoneId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20130401HostedzoneIdMutationOptions<TError, TOnMutateResult>(
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

export function getDelete20130401HostedzoneIdMutationKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id', 'DELETE'] as const
}

export function getDelete20130401HostedzoneIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20130401HostedzoneIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$delete']>,
    ) {
      return parseResponse(client['2013-04-01'].hostedzone[':Id'].$delete(args, options))
    },
  })
}

export function useDelete20130401HostedzoneId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20130401HostedzoneIdMutationOptions<TError, TOnMutateResult>(
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

export function getDelete20130401KeysigningkeyHostedZoneIdNameMutationKey() {
  return ['2013-04-01', '/2013-04-01/keysigningkey/:HostedZoneId/:Name', 'DELETE'] as const
}

export function getDelete20130401KeysigningkeyHostedZoneIdNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20130401KeysigningkeyHostedZoneIdNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['$delete']
      >,
    ) {
      return parseResponse(
        client['2013-04-01'].keysigningkey[':HostedZoneId'][':Name'].$delete(args, options),
      )
    },
  })
}

export function useDelete20130401KeysigningkeyHostedZoneIdName<
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
                  (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['$delete']
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
  const mutationDefaults = getDelete20130401KeysigningkeyHostedZoneIdNameMutationOptions<
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

export function get20130401QueryloggingconfigIdQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/queryloggingconfig/:Id', keyArgs] as const
}

export function get20130401QueryloggingconfigIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401QueryloggingconfigIdQueryKey>
  >({
    queryKey: get20130401QueryloggingconfigIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].queryloggingconfig[':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401QueryloggingconfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401QueryloggingconfigIdQueryKey>
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
      ...get20130401QueryloggingconfigIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401QueryloggingconfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401QueryloggingconfigIdQueryKey>
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
      ...get20130401QueryloggingconfigIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDelete20130401QueryloggingconfigIdMutationKey() {
  return ['2013-04-01', '/2013-04-01/queryloggingconfig/:Id', 'DELETE'] as const
}

export function getDelete20130401QueryloggingconfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20130401QueryloggingconfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$delete']>,
    ) {
      return parseResponse(client['2013-04-01'].queryloggingconfig[':Id'].$delete(args, options))
    },
  })
}

export function useDelete20130401QueryloggingconfigId<
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
                ReturnType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20130401QueryloggingconfigIdMutationOptions<
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

export function get20130401DelegationsetIdQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/delegationset/:Id', keyArgs] as const
}

export function get20130401DelegationsetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401DelegationsetIdQueryKey>
  >({
    queryKey: get20130401DelegationsetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].delegationset[':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401DelegationsetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401DelegationsetIdQueryKey>
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
      ...get20130401DelegationsetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401DelegationsetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401DelegationsetIdQueryKey>
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
      ...get20130401DelegationsetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDelete20130401DelegationsetIdMutationKey() {
  return ['2013-04-01', '/2013-04-01/delegationset/:Id', 'DELETE'] as const
}

export function getDelete20130401DelegationsetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20130401DelegationsetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$delete']>,
    ) {
      return parseResponse(client['2013-04-01'].delegationset[':Id'].$delete(args, options))
    },
  })
}

export function useDelete20130401DelegationsetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20130401DelegationsetIdMutationOptions<TError, TOnMutateResult>(
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

export function get20130401TrafficpolicyIdVersionQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/trafficpolicy/:Id/:Version', keyArgs] as const
}

export function get20130401TrafficpolicyIdVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpolicyIdVersionQueryKey>
  >({
    queryKey: get20130401TrafficpolicyIdVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].trafficpolicy[':Id'][':Version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401TrafficpolicyIdVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpolicyIdVersionQueryKey>
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
      ...get20130401TrafficpolicyIdVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401TrafficpolicyIdVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpolicyIdVersionQueryKey>
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
      ...get20130401TrafficpolicyIdVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20130401TrafficpolicyIdVersionMutationKey() {
  return ['2013-04-01', '/2013-04-01/trafficpolicy/:Id/:Version', 'POST'] as const
}

export function getPost20130401TrafficpolicyIdVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401TrafficpolicyIdVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$post']
      >,
    ) {
      return parseResponse(
        client['2013-04-01'].trafficpolicy[':Id'][':Version'].$post(args, options),
      )
    },
  })
}

export function usePost20130401TrafficpolicyIdVersion<
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
                  (typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$post']
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
  const mutationDefaults = getPost20130401TrafficpolicyIdVersionMutationOptions<
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

export function getDelete20130401TrafficpolicyIdVersionMutationKey() {
  return ['2013-04-01', '/2013-04-01/trafficpolicy/:Id/:Version', 'DELETE'] as const
}

export function getDelete20130401TrafficpolicyIdVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20130401TrafficpolicyIdVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$delete']
      >,
    ) {
      return parseResponse(
        client['2013-04-01'].trafficpolicy[':Id'][':Version'].$delete(args, options),
      )
    },
  })
}

export function useDelete20130401TrafficpolicyIdVersion<
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
                  (typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$delete']
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
  const mutationDefaults = getDelete20130401TrafficpolicyIdVersionMutationOptions<
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

export function get20130401TrafficpolicyinstanceIdQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstance/:Id', keyArgs] as const
}

export function get20130401TrafficpolicyinstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpolicyinstanceIdQueryKey>
  >({
    queryKey: get20130401TrafficpolicyinstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].trafficpolicyinstance[':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401TrafficpolicyinstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpolicyinstanceIdQueryKey>
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
      ...get20130401TrafficpolicyinstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401TrafficpolicyinstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpolicyinstanceIdQueryKey>
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
      ...get20130401TrafficpolicyinstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20130401TrafficpolicyinstanceIdMutationKey() {
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstance/:Id', 'POST'] as const
}

export function getPost20130401TrafficpolicyinstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401TrafficpolicyinstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$post']
      >,
    ) {
      return parseResponse(client['2013-04-01'].trafficpolicyinstance[':Id'].$post(args, options))
    },
  })
}

export function usePost20130401TrafficpolicyinstanceId<
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
                ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20130401TrafficpolicyinstanceIdMutationOptions<
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

export function getDelete20130401TrafficpolicyinstanceIdMutationKey() {
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstance/:Id', 'DELETE'] as const
}

export function getDelete20130401TrafficpolicyinstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20130401TrafficpolicyinstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$delete']
      >,
    ) {
      return parseResponse(client['2013-04-01'].trafficpolicyinstance[':Id'].$delete(args, options))
    },
  })
}

export function useDelete20130401TrafficpolicyinstanceId<
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
                ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20130401TrafficpolicyinstanceIdMutationOptions<
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

export function getPost20130401HostedzoneIdDeauthorizevpcassociationMutationKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/deauthorizevpcassociation', 'POST'] as const
}

export function getPost20130401HostedzoneIdDeauthorizevpcassociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['hostedzone'][':Id']['deauthorizevpcassociation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2013-04-01']['hostedzone'][':Id']['deauthorizevpcassociation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20130401HostedzoneIdDeauthorizevpcassociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['hostedzone'][':Id']['deauthorizevpcassociation']['$post']
      >,
    ) {
      return parseResponse(
        client['2013-04-01'].hostedzone[':Id'].deauthorizevpcassociation.$post(args, options),
      )
    },
  })
}

export function usePost20130401HostedzoneIdDeauthorizevpcassociation<
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
                  (typeof client)['2013-04-01']['hostedzone'][':Id']['deauthorizevpcassociation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-04-01']['hostedzone'][':Id']['deauthorizevpcassociation']['$post']
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
  const mutationDefaults = getPost20130401HostedzoneIdDeauthorizevpcassociationMutationOptions<
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

export function getPost20130401HostedzoneIdDisableDnssecMutationKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/disable-dnssec', 'POST'] as const
}

export function getPost20130401HostedzoneIdDisableDnssecMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['hostedzone'][':Id']['disable-dnssec']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['disable-dnssec']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401HostedzoneIdDisableDnssecMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['hostedzone'][':Id']['disable-dnssec']['$post']
      >,
    ) {
      return parseResponse(
        client['2013-04-01'].hostedzone[':Id']['disable-dnssec'].$post(args, options),
      )
    },
  })
}

export function usePost20130401HostedzoneIdDisableDnssec<
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
                  (typeof client)['2013-04-01']['hostedzone'][':Id']['disable-dnssec']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-04-01']['hostedzone'][':Id']['disable-dnssec']['$post']
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
  const mutationDefaults = getPost20130401HostedzoneIdDisableDnssecMutationOptions<
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

export function getPost20130401HostedzoneIdDisassociatevpcMutationKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/disassociatevpc', 'POST'] as const
}

export function getPost20130401HostedzoneIdDisassociatevpcMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['hostedzone'][':Id']['disassociatevpc']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2013-04-01']['hostedzone'][':Id']['disassociatevpc']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20130401HostedzoneIdDisassociatevpcMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['hostedzone'][':Id']['disassociatevpc']['$post']
      >,
    ) {
      return parseResponse(
        client['2013-04-01'].hostedzone[':Id'].disassociatevpc.$post(args, options),
      )
    },
  })
}

export function usePost20130401HostedzoneIdDisassociatevpc<
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
                  (typeof client)['2013-04-01']['hostedzone'][':Id']['disassociatevpc']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-04-01']['hostedzone'][':Id']['disassociatevpc']['$post']
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
  const mutationDefaults = getPost20130401HostedzoneIdDisassociatevpcMutationOptions<
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

export function getPost20130401HostedzoneIdEnableDnssecMutationKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/enable-dnssec', 'POST'] as const
}

export function getPost20130401HostedzoneIdEnableDnssecMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['enable-dnssec']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['enable-dnssec']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401HostedzoneIdEnableDnssecMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-04-01']['hostedzone'][':Id']['enable-dnssec']['$post']
      >,
    ) {
      return parseResponse(
        client['2013-04-01'].hostedzone[':Id']['enable-dnssec'].$post(args, options),
      )
    },
  })
}

export function usePost20130401HostedzoneIdEnableDnssec<
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
                  (typeof client)['2013-04-01']['hostedzone'][':Id']['enable-dnssec']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-04-01']['hostedzone'][':Id']['enable-dnssec']['$post']
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
  const mutationDefaults = getPost20130401HostedzoneIdEnableDnssecMutationOptions<
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

export function get20130401AccountlimitTypeQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/accountlimit/:Type', keyArgs] as const
}

export function get20130401AccountlimitTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401AccountlimitTypeQueryKey>
  >({
    queryKey: get20130401AccountlimitTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].accountlimit[':Type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401AccountlimitType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401AccountlimitTypeQueryKey>
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
      ...get20130401AccountlimitTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401AccountlimitType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401AccountlimitTypeQueryKey>
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
      ...get20130401AccountlimitTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401ChangeIdQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['change'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/change/:Id', keyArgs] as const
}

export function get20130401ChangeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['change'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['change'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['change'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401ChangeIdQueryKey>
  >({
    queryKey: get20130401ChangeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].change[':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401ChangeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['change'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['change'][':Id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['change'][':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401ChangeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get20130401ChangeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense20130401ChangeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['change'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['change'][':Id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['change'][':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401ChangeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get20130401ChangeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function get20130401CheckeriprangesQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['checkeripranges']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/checkeripranges', keyArgs] as const
}

export function get20130401CheckeriprangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['checkeripranges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['checkeripranges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['checkeripranges']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401CheckeriprangesQueryKey>
  >({
    queryKey: get20130401CheckeriprangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].checkeripranges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401Checkeripranges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['checkeripranges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['checkeripranges']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['checkeripranges']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401CheckeriprangesQueryKey>
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
      ...get20130401CheckeriprangesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401Checkeripranges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['checkeripranges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['checkeripranges']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['checkeripranges']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401CheckeriprangesQueryKey>
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
      ...get20130401CheckeriprangesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401HostedzoneIdDnssecQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/dnssec', keyArgs] as const
}

export function get20130401HostedzoneIdDnssecQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzoneIdDnssecQueryKey>
  >({
    queryKey: get20130401HostedzoneIdDnssecQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].hostedzone[':Id'].dnssec.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401HostedzoneIdDnssec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzoneIdDnssecQueryKey>
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
      ...get20130401HostedzoneIdDnssecQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401HostedzoneIdDnssec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzoneIdDnssecQueryKey>
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
      ...get20130401HostedzoneIdDnssecQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401GeolocationQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocation']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/geolocation', keyArgs] as const
}

export function get20130401GeolocationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['geolocation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['geolocation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401GeolocationQueryKey>
  >({
    queryKey: get20130401GeolocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].geolocation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401Geolocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['geolocation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocation']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['geolocation']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401GeolocationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get20130401GeolocationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense20130401Geolocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['geolocation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocation']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['geolocation']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401GeolocationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get20130401GeolocationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function get20130401HealthcheckcountQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/healthcheckcount', keyArgs] as const
}

export function get20130401HealthcheckcountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HealthcheckcountQueryKey>
  >({
    queryKey: get20130401HealthcheckcountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].healthcheckcount.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401Healthcheckcount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HealthcheckcountQueryKey>
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
      ...get20130401HealthcheckcountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401Healthcheckcount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HealthcheckcountQueryKey>
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
      ...get20130401HealthcheckcountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401HealthcheckHealthCheckIdLastfailurereasonQueryKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2013-04-01',
    '/2013-04-01/healthcheck/:HealthCheckId/lastfailurereason',
    keyArgs,
  ] as const
}

export function get20130401HealthcheckHealthCheckIdLastfailurereasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HealthcheckHealthCheckIdLastfailurereasonQueryKey>
  >({
    queryKey: get20130401HealthcheckHealthCheckIdLastfailurereasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].healthcheck[':HealthCheckId'].lastfailurereason.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401HealthcheckHealthCheckIdLastfailurereason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HealthcheckHealthCheckIdLastfailurereasonQueryKey>
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
      ...get20130401HealthcheckHealthCheckIdLastfailurereasonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401HealthcheckHealthCheckIdLastfailurereason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HealthcheckHealthCheckIdLastfailurereasonQueryKey>
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
      ...get20130401HealthcheckHealthCheckIdLastfailurereasonQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401HealthcheckHealthCheckIdStatusQueryKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/healthcheck/:HealthCheckId/status', keyArgs] as const
}

export function get20130401HealthcheckHealthCheckIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HealthcheckHealthCheckIdStatusQueryKey>
  >({
    queryKey: get20130401HealthcheckHealthCheckIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].healthcheck[':HealthCheckId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401HealthcheckHealthCheckIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HealthcheckHealthCheckIdStatusQueryKey>
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
      ...get20130401HealthcheckHealthCheckIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401HealthcheckHealthCheckIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HealthcheckHealthCheckIdStatusQueryKey>
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
      ...get20130401HealthcheckHealthCheckIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401HostedzonecountQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzonecount', keyArgs] as const
}

export function get20130401HostedzonecountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzonecountQueryKey>
  >({
    queryKey: get20130401HostedzonecountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].hostedzonecount.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401Hostedzonecount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzonecountQueryKey>
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
      ...get20130401HostedzonecountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401Hostedzonecount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzonecountQueryKey>
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
      ...get20130401HostedzonecountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401HostedzonelimitIdTypeQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzonelimit/:Id/:Type', keyArgs] as const
}

export function get20130401HostedzonelimitIdTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzonelimitIdTypeQueryKey>
  >({
    queryKey: get20130401HostedzonelimitIdTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].hostedzonelimit[':Id'][':Type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401HostedzonelimitIdType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzonelimitIdTypeQueryKey>
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
      ...get20130401HostedzonelimitIdTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401HostedzonelimitIdType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzonelimitIdTypeQueryKey>
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
      ...get20130401HostedzonelimitIdTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401ReusabledelegationsetlimitIdTypeQueryKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/reusabledelegationsetlimit/:Id/:Type', keyArgs] as const
}

export function get20130401ReusabledelegationsetlimitIdTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401ReusabledelegationsetlimitIdTypeQueryKey>
  >({
    queryKey: get20130401ReusabledelegationsetlimitIdTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].reusabledelegationsetlimit[':Id'][':Type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401ReusabledelegationsetlimitIdType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401ReusabledelegationsetlimitIdTypeQueryKey>
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
      ...get20130401ReusabledelegationsetlimitIdTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401ReusabledelegationsetlimitIdType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401ReusabledelegationsetlimitIdTypeQueryKey>
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
      ...get20130401ReusabledelegationsetlimitIdTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401TrafficpolicyinstancecountQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstancecount', keyArgs] as const
}

export function get20130401TrafficpolicyinstancecountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpolicyinstancecountQueryKey>
  >({
    queryKey: get20130401TrafficpolicyinstancecountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].trafficpolicyinstancecount.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401Trafficpolicyinstancecount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpolicyinstancecountQueryKey>
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
      ...get20130401TrafficpolicyinstancecountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401Trafficpolicyinstancecount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpolicyinstancecountQueryKey>
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
      ...get20130401TrafficpolicyinstancecountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401CidrcollectionCidrCollectionIdCidrblocksQueryKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/cidrcollection/:CidrCollectionId/cidrblocks', keyArgs] as const
}

export function get20130401CidrcollectionCidrCollectionIdCidrblocksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401CidrcollectionCidrCollectionIdCidrblocksQueryKey>
  >({
    queryKey: get20130401CidrcollectionCidrCollectionIdCidrblocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].cidrcollection[':CidrCollectionId'].cidrblocks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401CidrcollectionCidrCollectionIdCidrblocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401CidrcollectionCidrCollectionIdCidrblocksQueryKey>
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
      ...get20130401CidrcollectionCidrCollectionIdCidrblocksQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401CidrcollectionCidrCollectionIdCidrblocks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401CidrcollectionCidrCollectionIdCidrblocksQueryKey>
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
      ...get20130401CidrcollectionCidrCollectionIdCidrblocksQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401GeolocationsQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/geolocations', keyArgs] as const
}

export function get20130401GeolocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['geolocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['geolocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401GeolocationsQueryKey>
  >({
    queryKey: get20130401GeolocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].geolocations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401Geolocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['geolocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['geolocations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401GeolocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get20130401GeolocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense20130401Geolocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['geolocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['geolocations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401GeolocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get20130401GeolocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function get20130401HostedzonesbynameQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzonesbyname', keyArgs] as const
}

export function get20130401HostedzonesbynameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzonesbynameQueryKey>
  >({
    queryKey: get20130401HostedzonesbynameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].hostedzonesbyname.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401Hostedzonesbyname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzonesbynameQueryKey>
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
      ...get20130401HostedzonesbynameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401Hostedzonesbyname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzonesbynameQueryKey>
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
      ...get20130401HostedzonesbynameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401HostedzonesbyvpcVpcidVpcregionQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzonesbyvpc#vpcid&vpcregion', keyArgs] as const
}

export function get20130401HostedzonesbyvpcVpcidVpcregionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzonesbyvpcVpcidVpcregionQueryKey>
  >({
    queryKey: get20130401HostedzonesbyvpcVpcidVpcregionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401HostedzonesbyvpcVpcidVpcregion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzonesbyvpcVpcidVpcregionQueryKey>
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
      ...get20130401HostedzonesbyvpcVpcidVpcregionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401HostedzonesbyvpcVpcidVpcregion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzonesbyvpcVpcidVpcregionQueryKey>
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
      ...get20130401HostedzonesbyvpcVpcidVpcregionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401HostedzoneIdRrsetQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/rrset', keyArgs] as const
}

export function get20130401HostedzoneIdRrsetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzoneIdRrsetQueryKey>
  >({
    queryKey: get20130401HostedzoneIdRrsetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].hostedzone[':Id'].rrset.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401HostedzoneIdRrset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzoneIdRrsetQueryKey>
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
      ...get20130401HostedzoneIdRrsetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401HostedzoneIdRrset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401HostedzoneIdRrsetQueryKey>
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
      ...get20130401HostedzoneIdRrsetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPost20130401TagsResourceTypeMutationKey() {
  return ['2013-04-01', '/2013-04-01/tags/:ResourceType', 'POST'] as const
}

export function getPost20130401TagsResourceTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['tags'][':ResourceType']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2013-04-01']['tags'][':ResourceType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20130401TagsResourceTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2013-04-01']['tags'][':ResourceType']['$post']>,
    ) {
      return parseResponse(client['2013-04-01'].tags[':ResourceType'].$post(args, options))
    },
  })
}

export function usePost20130401TagsResourceType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['tags'][':ResourceType']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2013-04-01']['tags'][':ResourceType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20130401TagsResourceTypeMutationOptions<TError, TOnMutateResult>(
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

export function get20130401TrafficpoliciesQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/trafficpolicies', keyArgs] as const
}

export function get20130401TrafficpoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpoliciesQueryKey>
  >({
    queryKey: get20130401TrafficpoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].trafficpolicies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401Trafficpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpoliciesQueryKey>
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
      ...get20130401TrafficpoliciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401Trafficpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpoliciesQueryKey>
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
      ...get20130401TrafficpoliciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401TrafficpolicyinstancesQueryKey(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstances', keyArgs] as const
}

export function get20130401TrafficpolicyinstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpolicyinstancesQueryKey>
  >({
    queryKey: get20130401TrafficpolicyinstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].trafficpolicyinstances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401Trafficpolicyinstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpolicyinstancesQueryKey>
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
      ...get20130401TrafficpolicyinstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401Trafficpolicyinstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpolicyinstancesQueryKey>
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
      ...get20130401TrafficpolicyinstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401TrafficpolicyinstancesHostedzoneIdQueryKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstances/hostedzone#id', keyArgs] as const
}

export function get20130401TrafficpolicyinstancesHostedzoneIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpolicyinstancesHostedzoneIdQueryKey>
  >({
    queryKey: get20130401TrafficpolicyinstancesHostedzoneIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].trafficpolicyinstances['hostedzone#id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401TrafficpolicyinstancesHostedzoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpolicyinstancesHostedzoneIdQueryKey>
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
      ...get20130401TrafficpolicyinstancesHostedzoneIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401TrafficpolicyinstancesHostedzoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpolicyinstancesHostedzoneIdQueryKey>
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
      ...get20130401TrafficpolicyinstancesHostedzoneIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401TrafficpolicyinstancesTrafficpolicyIdVersionQueryKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2013-04-01',
    '/2013-04-01/trafficpolicyinstances/trafficpolicy#id&version',
    keyArgs,
  ] as const
}

export function get20130401TrafficpolicyinstancesTrafficpolicyIdVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpolicyinstancesTrafficpolicyIdVersionQueryKey>
  >({
    queryKey: get20130401TrafficpolicyinstancesTrafficpolicyIdVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].trafficpolicyinstances['trafficpolicy#id&version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401TrafficpolicyinstancesTrafficpolicyIdVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpolicyinstancesTrafficpolicyIdVersionQueryKey>
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
      ...get20130401TrafficpolicyinstancesTrafficpolicyIdVersionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401TrafficpolicyinstancesTrafficpolicyIdVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpolicyinstancesTrafficpolicyIdVersionQueryKey>
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
      ...get20130401TrafficpolicyinstancesTrafficpolicyIdVersionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401TrafficpoliciesIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/trafficpolicies/:Id/versions', keyArgs] as const
}

export function get20130401TrafficpoliciesIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpoliciesIdVersionsQueryKey>
  >({
    queryKey: get20130401TrafficpoliciesIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01'].trafficpolicies[':Id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401TrafficpoliciesIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpoliciesIdVersionsQueryKey>
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
      ...get20130401TrafficpoliciesIdVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401TrafficpoliciesIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TrafficpoliciesIdVersionsQueryKey>
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
      ...get20130401TrafficpoliciesIdVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeQueryKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2013-04-01',
    '/2013-04-01/testdnsanswer#hostedzoneid&recordname&recordtype',
    keyArgs,
  ] as const
}

export function get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeQueryKey>
  >({
    queryKey: get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function use20130401TestdnsanswerHostedzoneidRecordnameRecordtype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeQueryKey>
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
      ...get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense20130401TestdnsanswerHostedzoneidRecordnameRecordtype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeQueryKey>
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
      ...get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
