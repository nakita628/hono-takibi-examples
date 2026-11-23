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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/cidrcollection/:CidrCollectionId', keyArgs] as const
}

export function get20130401CidrcollectionCidrCollectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401CidrcollectionCidrCollectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].cidrcollection[':CidrCollectionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']>
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
                    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
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
                    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20130401CidrcollectionCidrCollectionIdQueryKey>
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
            ReturnType<(typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401CidrcollectionCidrCollectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401CidrcollectionCidrCollectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].cidrcollection[':CidrCollectionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/tags/:ResourceType/:ResourceId', keyArgs] as const
}

export function get20130401TagsResourceTypeResourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401TagsResourceTypeResourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].tags[':ResourceType'][':ResourceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']>
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
                    (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
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
                    (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20130401TagsResourceTypeResourceIdQueryKey>
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
              (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TagsResourceTypeResourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401TagsResourceTypeResourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].tags[':ResourceType'][':ResourceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/cidrcollection', keyArgs] as const
}

export function get20130401CidrcollectionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401CidrcollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].cidrcollection.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['cidrcollection']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401CidrcollectionQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['cidrcollection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401CidrcollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401CidrcollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].cidrcollection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/healthcheck', keyArgs] as const
}

export function get20130401HealthcheckQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401HealthcheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].healthcheck.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401HealthcheckQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HealthcheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401HealthcheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].healthcheck.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/hostedzone', keyArgs] as const
}

export function get20130401HostedzoneQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401HostedzoneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].hostedzone.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20130401Hostedzone<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401HostedzoneQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzoneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401HostedzoneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].hostedzone.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/queryloggingconfig', keyArgs] as const
}

export function get20130401QueryloggingconfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401QueryloggingconfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].queryloggingconfig.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401QueryloggingconfigQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401QueryloggingconfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401QueryloggingconfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].queryloggingconfig.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['delegationset']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/delegationset', keyArgs] as const
}

export function get20130401DelegationsetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['delegationset']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401DelegationsetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].delegationset.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['delegationset']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401DelegationsetQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401DelegationsetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401DelegationsetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].delegationset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/authorizevpcassociation', keyArgs] as const
}

export function get20130401HostedzoneIdAuthorizevpcassociationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401HostedzoneIdAuthorizevpcassociationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].hostedzone[':Id'].authorizevpcassociation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
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
                    (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
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
                    (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20130401HostedzoneIdAuthorizevpcassociationQueryKey>
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
              (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzoneIdAuthorizevpcassociationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401HostedzoneIdAuthorizevpcassociationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].hostedzone[':Id'].authorizevpcassociation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/healthcheck/:HealthCheckId', keyArgs] as const
}

export function get20130401HealthcheckHealthCheckIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401HealthcheckHealthCheckIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].healthcheck[':HealthCheckId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20130401HealthcheckHealthCheckIdQueryKey>
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
            ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HealthcheckHealthCheckIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401HealthcheckHealthCheckIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].healthcheck[':HealthCheckId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$post']>,
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
      Extract<
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
          InferRequestType<
            (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$delete']
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id', keyArgs] as const
}

export function get20130401HostedzoneIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401HostedzoneIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].hostedzone[':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401HostedzoneIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzoneIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401HostedzoneIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].hostedzone[':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/queryloggingconfig/:Id', keyArgs] as const
}

export function get20130401QueryloggingconfigIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401QueryloggingconfigIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].queryloggingconfig[':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20130401QueryloggingconfigIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401QueryloggingconfigIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401QueryloggingconfigIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].queryloggingconfig[':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/delegationset/:Id', keyArgs] as const
}

export function get20130401DelegationsetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401DelegationsetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].delegationset[':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401DelegationsetIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401DelegationsetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401DelegationsetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].delegationset[':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$delete']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/trafficpolicy/:Id/:Version', keyArgs] as const
}

export function get20130401TrafficpolicyIdVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401TrafficpolicyIdVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].trafficpolicy[':Id'][':Version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>
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
                    (typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']
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
                    (typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20130401TrafficpolicyIdVersionQueryKey>
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
            ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpolicyIdVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401TrafficpolicyIdVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].trafficpolicy[':Id'][':Version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstance/:Id', keyArgs] as const
}

export function get20130401TrafficpolicyinstanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401TrafficpolicyinstanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].trafficpolicyinstance[':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20130401TrafficpolicyinstanceIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpolicyinstanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401TrafficpolicyinstanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].trafficpolicyinstance[':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$delete']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/accountlimit/:Type', keyArgs] as const
}

export function get20130401AccountlimitTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401AccountlimitTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].accountlimit[':Type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401AccountlimitTypeQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401AccountlimitTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401AccountlimitTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].accountlimit[':Type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401ChangeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['change'][':Id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/change/:Id', keyArgs] as const
}

export function get20130401ChangeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['change'][':Id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401ChangeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].change[':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['change'][':Id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['change'][':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401ChangeIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['change'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401ChangeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401ChangeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].change[':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401CheckeriprangesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['checkeripranges']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/checkeripranges', keyArgs] as const
}

export function get20130401CheckeriprangesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['checkeripranges']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401CheckeriprangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].checkeripranges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['checkeripranges']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['checkeripranges']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401CheckeriprangesQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['checkeripranges']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401CheckeriprangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401CheckeriprangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].checkeripranges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401HostedzoneIdDnssecQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/dnssec', keyArgs] as const
}

export function get20130401HostedzoneIdDnssecQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401HostedzoneIdDnssecQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].hostedzone[':Id'].dnssec.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20130401HostedzoneIdDnssecQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzoneIdDnssecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401HostedzoneIdDnssecQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].hostedzone[':Id'].dnssec.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401GeolocationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['geolocation']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/geolocation', keyArgs] as const
}

export function get20130401GeolocationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['geolocation']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401GeolocationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].geolocation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['geolocation']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['geolocation']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401GeolocationQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['geolocation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401GeolocationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401GeolocationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].geolocation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401HealthcheckcountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/healthcheckcount', keyArgs] as const
}

export function get20130401HealthcheckcountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401HealthcheckcountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].healthcheckcount.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401HealthcheckcountQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HealthcheckcountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401HealthcheckcountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].healthcheckcount.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401HealthcheckHealthCheckIdLastfailurereasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '2013-04-01',
    '/2013-04-01/healthcheck/:HealthCheckId/lastfailurereason',
    keyArgs,
  ] as const
}

export function get20130401HealthcheckHealthCheckIdLastfailurereasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401HealthcheckHealthCheckIdLastfailurereasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].healthcheck[':HealthCheckId'].lastfailurereason.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
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
                    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
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
                    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20130401HealthcheckHealthCheckIdLastfailurereasonQueryKey>
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
              (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HealthcheckHealthCheckIdLastfailurereasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401HealthcheckHealthCheckIdLastfailurereasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].healthcheck[':HealthCheckId'].lastfailurereason.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401HealthcheckHealthCheckIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/healthcheck/:HealthCheckId/status', keyArgs] as const
}

export function get20130401HealthcheckHealthCheckIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401HealthcheckHealthCheckIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].healthcheck[':HealthCheckId'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
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
                    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
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
                    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20130401HealthcheckHealthCheckIdStatusQueryKey>
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
              (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HealthcheckHealthCheckIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401HealthcheckHealthCheckIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].healthcheck[':HealthCheckId'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401HostedzonecountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/hostedzonecount', keyArgs] as const
}

export function get20130401HostedzonecountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401HostedzonecountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].hostedzonecount.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401HostedzonecountQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzonecountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401HostedzonecountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].hostedzonecount.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401HostedzonelimitIdTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/hostedzonelimit/:Id/:Type', keyArgs] as const
}

export function get20130401HostedzonelimitIdTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401HostedzonelimitIdTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].hostedzonelimit[':Id'][':Type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>
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
                    (typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']
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
                    (typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20130401HostedzonelimitIdTypeQueryKey>
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
            ReturnType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzonelimitIdTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401HostedzonelimitIdTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].hostedzonelimit[':Id'][':Type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401ReusabledelegationsetlimitIdTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/reusabledelegationsetlimit/:Id/:Type', keyArgs] as const
}

export function get20130401ReusabledelegationsetlimitIdTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401ReusabledelegationsetlimitIdTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].reusabledelegationsetlimit[':Id'][':Type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
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
                    (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
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
                    (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20130401ReusabledelegationsetlimitIdTypeQueryKey>
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
              (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401ReusabledelegationsetlimitIdTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401ReusabledelegationsetlimitIdTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].reusabledelegationsetlimit[':Id'][':Type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401TrafficpolicyinstancecountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstancecount', keyArgs] as const
}

export function get20130401TrafficpolicyinstancecountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401TrafficpolicyinstancecountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].trafficpolicyinstancecount.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20130401TrafficpolicyinstancecountQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpolicyinstancecountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401TrafficpolicyinstancecountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].trafficpolicyinstancecount.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401CidrcollectionCidrCollectionIdCidrblocksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/cidrcollection/:CidrCollectionId/cidrblocks', keyArgs] as const
}

export function get20130401CidrcollectionCidrCollectionIdCidrblocksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401CidrcollectionCidrCollectionIdCidrblocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].cidrcollection[':CidrCollectionId'].cidrblocks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
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
                    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
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
                    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20130401CidrcollectionCidrCollectionIdCidrblocksQueryKey>
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
              (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401CidrcollectionCidrCollectionIdCidrblocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401CidrcollectionCidrCollectionIdCidrblocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].cidrcollection[':CidrCollectionId'].cidrblocks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401GeolocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['geolocations']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/geolocations', keyArgs] as const
}

export function get20130401GeolocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['geolocations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401GeolocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].geolocations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2013-04-01']['geolocations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['geolocations']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401GeolocationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['geolocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401GeolocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401GeolocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].geolocations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401HostedzonesbynameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/hostedzonesbyname', keyArgs] as const
}

export function get20130401HostedzonesbynameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401HostedzonesbynameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].hostedzonesbyname.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401HostedzonesbynameQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzonesbynameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401HostedzonesbynameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].hostedzonesbyname.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401HostedzonesbyvpcVpcidVpcregionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/hostedzonesbyvpc#vpcid&vpcregion', keyArgs] as const
}

export function get20130401HostedzonesbyvpcVpcidVpcregionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401HostedzonesbyvpcVpcidVpcregionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>
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
                    (typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']
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
                    (typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20130401HostedzonesbyvpcVpcidVpcregionQueryKey>
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
            ReturnType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzonesbyvpcVpcidVpcregionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401HostedzonesbyvpcVpcidVpcregionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401HostedzoneIdRrsetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/rrset', keyArgs] as const
}

export function get20130401HostedzoneIdRrsetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401HostedzoneIdRrsetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].hostedzone[':Id'].rrset.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20130401HostedzoneIdRrsetQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401HostedzoneIdRrsetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401HostedzoneIdRrsetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].hostedzone[':Id'].rrset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/trafficpolicies', keyArgs] as const
}

export function get20130401TrafficpoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401TrafficpoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].trafficpolicies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401TrafficpoliciesQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401TrafficpoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].trafficpolicies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401TrafficpolicyinstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstances', keyArgs] as const
}

export function get20130401TrafficpolicyinstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401TrafficpolicyinstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].trafficpolicyinstances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20130401TrafficpolicyinstancesQueryKey>
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
          Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpolicyinstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401TrafficpolicyinstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].trafficpolicyinstances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401TrafficpolicyinstancesHostedzoneIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstances/hostedzone#id', keyArgs] as const
}

export function get20130401TrafficpolicyinstancesHostedzoneIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401TrafficpolicyinstancesHostedzoneIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].trafficpolicyinstances['hostedzone#id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
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
                    (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
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
                    (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20130401TrafficpolicyinstancesHostedzoneIdQueryKey>
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
              (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpolicyinstancesHostedzoneIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401TrafficpolicyinstancesHostedzoneIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].trafficpolicyinstances['hostedzone#id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401TrafficpolicyinstancesTrafficpolicyIdVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '2013-04-01',
    '/2013-04-01/trafficpolicyinstances/trafficpolicy#id&version',
    keyArgs,
  ] as const
}

export function get20130401TrafficpolicyinstancesTrafficpolicyIdVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401TrafficpolicyinstancesTrafficpolicyIdVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].trafficpolicyinstances['trafficpolicy#id&version'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
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
                    (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
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
                    (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20130401TrafficpolicyinstancesTrafficpolicyIdVersionQueryKey>
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
              (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpolicyinstancesTrafficpolicyIdVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20130401TrafficpolicyinstancesTrafficpolicyIdVersionQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].trafficpolicyinstances['trafficpolicy#id&version'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20130401TrafficpoliciesIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-04-01', '/2013-04-01/trafficpolicies/:Id/versions', keyArgs] as const
}

export function get20130401TrafficpoliciesIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130401TrafficpoliciesIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01'].trafficpolicies[':Id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']>
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
                    (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
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
                    (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20130401TrafficpoliciesIdVersionsQueryKey>
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
            ReturnType<(typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TrafficpoliciesIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130401TrafficpoliciesIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01'].trafficpolicies[':Id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '2013-04-01',
    '/2013-04-01/testdnsanswer#hostedzoneid&recordname&recordtype',
    keyArgs,
  ] as const
}

export function get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
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
                    (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
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
                    (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeQueryKey>
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
              (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}
