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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ContactGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.contactGroups.$get>>,
) {
  return ['v1', '/v1/contactGroups', toValue(args)] as const
}

export function getV1ContactGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.contactGroups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ContactGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.contactGroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ContactGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.contactGroups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$get>>>
            >
          >,
          ReturnType<typeof getV1ContactGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ContactGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ContactGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.contactGroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ContactGroupsMutationKey() {
  return ['v1', '/v1/contactGroups', 'POST'] as const
}

export function getPostV1ContactGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.contactGroups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ContactGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.contactGroups.$post>) {
      return parseResponse(client.v1.contactGroups.$post(args, options))
    },
  })
}

export function usePostV1ContactGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.contactGroups.$post>,
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
  const mutationDefaults = getPostV1ContactGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ContactGroupsBatchGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['contactGroups:batchGet']['$get']>>,
) {
  return ['v1', '/v1/contactGroups:batchGet', toValue(args)] as const
}

export function getV1ContactGroupsBatchGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['contactGroups:batchGet']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ContactGroupsBatchGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['contactGroups:batchGet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ContactGroupsBatchGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['contactGroups:batchGet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['contactGroups:batchGet']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['contactGroups:batchGet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['contactGroups:batchGet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ContactGroupsBatchGetQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['contactGroups:batchGet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ContactGroupsBatchGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ContactGroupsBatchGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['contactGroups:batchGet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OtherContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.otherContacts.$get>>,
) {
  return ['v1', '/v1/otherContacts', toValue(args)] as const
}

export function getV1OtherContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.otherContacts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OtherContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.otherContacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OtherContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.otherContacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.otherContacts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.otherContacts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.otherContacts.$get>>>
            >
          >,
          ReturnType<typeof getV1OtherContactsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.otherContacts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OtherContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OtherContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.otherContacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OtherContactsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['otherContacts:search']['$get']>>,
) {
  return ['v1', '/v1/otherContacts:search', toValue(args)] as const
}

export function getV1OtherContactsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['otherContacts:search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OtherContactsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['otherContacts:search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1OtherContactsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['otherContacts:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['otherContacts:search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['otherContacts:search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['otherContacts:search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1OtherContactsSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['otherContacts:search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OtherContactsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OtherContactsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['otherContacts:search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PeopleBatchCreateContactsMutationKey() {
  return ['v1', '/v1/people:batchCreateContacts', 'POST'] as const
}

export function getPostV1PeopleBatchCreateContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['people:batchCreateContacts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['people:batchCreateContacts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PeopleBatchCreateContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['people:batchCreateContacts']['$post']>,
    ) {
      return parseResponse(client.v1['people:batchCreateContacts'].$post(args, options))
    },
  })
}

export function usePostV1PeopleBatchCreateContacts<
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
                Awaited<ReturnType<(typeof client.v1)['people:batchCreateContacts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['people:batchCreateContacts']['$post']>,
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
  const mutationDefaults = getPostV1PeopleBatchCreateContactsMutationOptions<
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

export function getPostV1PeopleBatchDeleteContactsMutationKey() {
  return ['v1', '/v1/people:batchDeleteContacts', 'POST'] as const
}

export function getPostV1PeopleBatchDeleteContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['people:batchDeleteContacts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['people:batchDeleteContacts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PeopleBatchDeleteContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['people:batchDeleteContacts']['$post']>,
    ) {
      return parseResponse(client.v1['people:batchDeleteContacts'].$post(args, options))
    },
  })
}

export function usePostV1PeopleBatchDeleteContacts<
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
                Awaited<ReturnType<(typeof client.v1)['people:batchDeleteContacts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['people:batchDeleteContacts']['$post']>,
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
  const mutationDefaults = getPostV1PeopleBatchDeleteContactsMutationOptions<
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

export function getV1PeopleBatchGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['people:batchGet']['$get']>>,
) {
  return ['v1', '/v1/people:batchGet', toValue(args)] as const
}

export function getV1PeopleBatchGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['people:batchGet']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PeopleBatchGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['people:batchGet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PeopleBatchGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['people:batchGet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['people:batchGet']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['people:batchGet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['people:batchGet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PeopleBatchGetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['people:batchGet']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PeopleBatchGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PeopleBatchGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['people:batchGet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PeopleBatchUpdateContactsMutationKey() {
  return ['v1', '/v1/people:batchUpdateContacts', 'POST'] as const
}

export function getPostV1PeopleBatchUpdateContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['people:batchUpdateContacts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['people:batchUpdateContacts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PeopleBatchUpdateContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['people:batchUpdateContacts']['$post']>,
    ) {
      return parseResponse(client.v1['people:batchUpdateContacts'].$post(args, options))
    },
  })
}

export function usePostV1PeopleBatchUpdateContacts<
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
                Awaited<ReturnType<(typeof client.v1)['people:batchUpdateContacts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['people:batchUpdateContacts']['$post']>,
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
  const mutationDefaults = getPostV1PeopleBatchUpdateContactsMutationOptions<
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

export function getPostV1PeopleCreateContactMutationKey() {
  return ['v1', '/v1/people:createContact', 'POST'] as const
}

export function getPostV1PeopleCreateContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['people:createContact']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['people:createContact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PeopleCreateContactMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['people:createContact']['$post']>) {
      return parseResponse(client.v1['people:createContact'].$post(args, options))
    },
  })
}

export function usePostV1PeopleCreateContact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['people:createContact']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['people:createContact']['$post']>,
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
  const mutationDefaults = getPostV1PeopleCreateContactMutationOptions<TError, TOnMutateResult>(
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

export function getV1PeopleListDirectoryPeopleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['people:listDirectoryPeople']['$get']>
  >,
) {
  return ['v1', '/v1/people:listDirectoryPeople', toValue(args)] as const
}

export function getV1PeopleListDirectoryPeopleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['people:listDirectoryPeople']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PeopleListDirectoryPeopleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['people:listDirectoryPeople'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PeopleListDirectoryPeople<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['people:listDirectoryPeople']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['people:listDirectoryPeople']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['people:listDirectoryPeople']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['people:listDirectoryPeople']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PeopleListDirectoryPeopleQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['people:listDirectoryPeople']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PeopleListDirectoryPeopleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PeopleListDirectoryPeopleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['people:listDirectoryPeople'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PeopleSearchContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['people:searchContacts']['$get']>>,
) {
  return ['v1', '/v1/people:searchContacts', toValue(args)] as const
}

export function getV1PeopleSearchContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['people:searchContacts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PeopleSearchContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['people:searchContacts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PeopleSearchContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['people:searchContacts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['people:searchContacts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['people:searchContacts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['people:searchContacts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PeopleSearchContactsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['people:searchContacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PeopleSearchContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PeopleSearchContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['people:searchContacts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PeopleSearchDirectoryPeopleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>
  >,
) {
  return ['v1', '/v1/people:searchDirectoryPeople', toValue(args)] as const
}

export function getV1PeopleSearchDirectoryPeopleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PeopleSearchDirectoryPeopleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['people:searchDirectoryPeople'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PeopleSearchDirectoryPeople<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PeopleSearchDirectoryPeopleQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PeopleSearchDirectoryPeopleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PeopleSearchDirectoryPeopleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['people:searchDirectoryPeople'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ResourceNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':resourceName']['$get']>>,
) {
  return ['v1', '/v1/:resourceName', toValue(args)] as const
}

export function getV1ResourceNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':resourceName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ResourceNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':resourceName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ResourceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':resourceName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$get']>>>
            >
          >,
          ReturnType<typeof getV1ResourceNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ResourceNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ResourceNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':resourceName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ResourceNameMutationKey() {
  return ['v1', '/v1/:resourceName', 'PUT'] as const
}

export function getPutV1ResourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resourceName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ResourceNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':resourceName']['$put']>) {
      return parseResponse(client.v1[':resourceName'].$put(args, options))
    },
  })
}

export function usePutV1ResourceName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':resourceName']['$put']>,
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
  const mutationDefaults = getPutV1ResourceNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1ResourceNameMutationKey() {
  return ['v1', '/v1/:resourceName', 'DELETE'] as const
}

export function getDeleteV1ResourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resourceName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ResourceNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':resourceName']['$delete']>) {
      return parseResponse(client.v1[':resourceName'].$delete(args, options))
    },
  })
}

export function useDeleteV1ResourceName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':resourceName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':resourceName']['$delete']>,
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
  const mutationDefaults = getDeleteV1ResourceNameMutationOptions<TError, TOnMutateResult>(
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

export function getV1ResourceNameConnectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':resourceName']['connections']['$get']>
  >,
) {
  return ['v1', '/v1/:resourceName/connections', toValue(args)] as const
}

export function getV1ResourceNameConnectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':resourceName']['connections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ResourceNameConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':resourceName'].connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ResourceNameConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':resourceName']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':resourceName']['connections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':resourceName']['connections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':resourceName']['connections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ResourceNameConnectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':resourceName']['connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ResourceNameConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ResourceNameConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':resourceName'].connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ResourceNameMembersModifyMutationKey() {
  return ['v1', '/v1/:resourceName/members:modify', 'POST'] as const
}

export function getPostV1ResourceNameMembersModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resourceName']['members:modify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resourceName']['members:modify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResourceNameMembersModifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':resourceName']['members:modify']['$post']>,
    ) {
      return parseResponse(client.v1[':resourceName']['members:modify'].$post(args, options))
    },
  })
}

export function usePostV1ResourceNameMembersModify<
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
                Awaited<ReturnType<(typeof client.v1)[':resourceName']['members:modify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':resourceName']['members:modify']['$post']>,
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
  const mutationDefaults = getPostV1ResourceNameMembersModifyMutationOptions<
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

export function getPostV1ResourceNameCopyOtherContactToMyContactsGroupMutationKey() {
  return ['v1', '/v1/:resourceName:copyOtherContactToMyContactsGroup', 'POST'] as const
}

export function getPostV1ResourceNameCopyOtherContactToMyContactsGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':resourceName:copyOtherContactToMyContactsGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':resourceName:copyOtherContactToMyContactsGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResourceNameCopyOtherContactToMyContactsGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':resourceName:copyOtherContactToMyContactsGroup']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':resourceName:copyOtherContactToMyContactsGroup'].$post(args, options),
      )
    },
  })
}

export function usePostV1ResourceNameCopyOtherContactToMyContactsGroup<
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
                    (typeof client.v1)[':resourceName:copyOtherContactToMyContactsGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':resourceName:copyOtherContactToMyContactsGroup']['$post']
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
  const mutationDefaults = getPostV1ResourceNameCopyOtherContactToMyContactsGroupMutationOptions<
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

export function getDeleteV1ResourceNameDeleteContactMutationKey() {
  return ['v1', '/v1/:resourceName:deleteContact', 'DELETE'] as const
}

export function getDeleteV1ResourceNameDeleteContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resourceName:deleteContact']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resourceName:deleteContact']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ResourceNameDeleteContactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':resourceName:deleteContact']['$delete']>,
    ) {
      return parseResponse(client.v1[':resourceName:deleteContact'].$delete(args, options))
    },
  })
}

export function useDeleteV1ResourceNameDeleteContact<
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
                Awaited<ReturnType<(typeof client.v1)[':resourceName:deleteContact']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':resourceName:deleteContact']['$delete']>,
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
  const mutationDefaults = getDeleteV1ResourceNameDeleteContactMutationOptions<
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

export function getDeleteV1ResourceNameDeleteContactPhotoMutationKey() {
  return ['v1', '/v1/:resourceName:deleteContactPhoto', 'DELETE'] as const
}

export function getDeleteV1ResourceNameDeleteContactPhotoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resourceName:deleteContactPhoto']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resourceName:deleteContactPhoto']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ResourceNameDeleteContactPhotoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':resourceName:deleteContactPhoto']['$delete']>,
    ) {
      return parseResponse(client.v1[':resourceName:deleteContactPhoto'].$delete(args, options))
    },
  })
}

export function useDeleteV1ResourceNameDeleteContactPhoto<
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
                  ReturnType<(typeof client.v1)[':resourceName:deleteContactPhoto']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':resourceName:deleteContactPhoto']['$delete']>,
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
  const mutationDefaults = getDeleteV1ResourceNameDeleteContactPhotoMutationOptions<
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

export function getPatchV1ResourceNameUpdateContactMutationKey() {
  return ['v1', '/v1/:resourceName:updateContact', 'PATCH'] as const
}

export function getPatchV1ResourceNameUpdateContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resourceName:updateContact']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resourceName:updateContact']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ResourceNameUpdateContactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':resourceName:updateContact']['$patch']>,
    ) {
      return parseResponse(client.v1[':resourceName:updateContact'].$patch(args, options))
    },
  })
}

export function usePatchV1ResourceNameUpdateContact<
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
                Awaited<ReturnType<(typeof client.v1)[':resourceName:updateContact']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':resourceName:updateContact']['$patch']>,
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
  const mutationDefaults = getPatchV1ResourceNameUpdateContactMutationOptions<
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

export function getPatchV1ResourceNameUpdateContactPhotoMutationKey() {
  return ['v1', '/v1/:resourceName:updateContactPhoto', 'PATCH'] as const
}

export function getPatchV1ResourceNameUpdateContactPhotoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resourceName:updateContactPhoto']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resourceName:updateContactPhoto']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ResourceNameUpdateContactPhotoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':resourceName:updateContactPhoto']['$patch']>,
    ) {
      return parseResponse(client.v1[':resourceName:updateContactPhoto'].$patch(args, options))
    },
  })
}

export function usePatchV1ResourceNameUpdateContactPhoto<
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
                  ReturnType<(typeof client.v1)[':resourceName:updateContactPhoto']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':resourceName:updateContactPhoto']['$patch']>,
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
  const mutationDefaults = getPatchV1ResourceNameUpdateContactPhotoMutationOptions<
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
