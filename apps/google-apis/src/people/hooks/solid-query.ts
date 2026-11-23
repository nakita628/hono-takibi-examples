import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ContactGroupsQueryKey(
  args: InferRequestType<typeof client.v1.contactGroups.$get>,
) {
  return ['v1', '/v1/contactGroups', args] as const
}

export function getV1ContactGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.contactGroups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ContactGroupsQueryKey>
  >({
    queryKey: getV1ContactGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.contactGroups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ContactGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.contactGroups.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ContactGroupsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ContactGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1ContactGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.contactGroups.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ContactGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ContactGroupsBatchGetQueryKey(
  args: InferRequestType<(typeof client.v1)['contactGroups:batchGet']['$get']>,
) {
  return ['v1', '/v1/contactGroups:batchGet', args] as const
}

export function getV1ContactGroupsBatchGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['contactGroups:batchGet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['contactGroups:batchGet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ContactGroupsBatchGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['contactGroups:batchGet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ContactGroupsBatchGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['contactGroups:batchGet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['contactGroups:batchGet']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ContactGroupsBatchGetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1OtherContactsQueryKey(
  args: InferRequestType<typeof client.v1.otherContacts.$get>,
) {
  return ['v1', '/v1/otherContacts', args] as const
}

export function getV1OtherContactsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.otherContacts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.otherContacts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.otherContacts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1OtherContactsQueryKey>
  >({
    queryKey: getV1OtherContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.otherContacts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OtherContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.otherContacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.otherContacts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.otherContacts.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1OtherContactsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OtherContactsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1OtherContactsSearchQueryKey(
  args: InferRequestType<(typeof client.v1)['otherContacts:search']['$get']>,
) {
  return ['v1', '/v1/otherContacts:search', args] as const
}

export function getV1OtherContactsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['otherContacts:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['otherContacts:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1OtherContactsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['otherContacts:search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1OtherContactsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['otherContacts:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['otherContacts:search']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1OtherContactsSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1PeopleBatchCreateContacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PeopleBatchCreateContactsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1PeopleBatchDeleteContacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PeopleBatchDeleteContactsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PeopleBatchGetQueryKey(
  args: InferRequestType<(typeof client.v1)['people:batchGet']['$get']>,
) {
  return ['v1', '/v1/people:batchGet', args] as const
}

export function getV1PeopleBatchGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['people:batchGet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['people:batchGet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['people:batchGet']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PeopleBatchGetQueryKey>
  >({
    queryKey: getV1PeopleBatchGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['people:batchGet'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1PeopleBatchGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['people:batchGet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['people:batchGet']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['people:batchGet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1PeopleBatchGetQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PeopleBatchGetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1PeopleBatchUpdateContacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PeopleBatchUpdateContactsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1PeopleCreateContact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PeopleCreateContactMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PeopleListDirectoryPeopleQueryKey(
  args: InferRequestType<(typeof client.v1)['people:listDirectoryPeople']['$get']>,
) {
  return ['v1', '/v1/people:listDirectoryPeople', args] as const
}

export function getV1PeopleListDirectoryPeopleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['people:listDirectoryPeople']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['people:listDirectoryPeople']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PeopleListDirectoryPeopleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['people:listDirectoryPeople'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PeopleListDirectoryPeople<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['people:listDirectoryPeople']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['people:listDirectoryPeople']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1PeopleListDirectoryPeopleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1PeopleSearchContactsQueryKey(
  args: InferRequestType<(typeof client.v1)['people:searchContacts']['$get']>,
) {
  return ['v1', '/v1/people:searchContacts', args] as const
}

export function getV1PeopleSearchContactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['people:searchContacts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['people:searchContacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PeopleSearchContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['people:searchContacts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PeopleSearchContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['people:searchContacts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['people:searchContacts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1PeopleSearchContactsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1PeopleSearchDirectoryPeopleQueryKey(
  args: InferRequestType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>,
) {
  return ['v1', '/v1/people:searchDirectoryPeople', args] as const
}

export function getV1PeopleSearchDirectoryPeopleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PeopleSearchDirectoryPeopleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['people:searchDirectoryPeople'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PeopleSearchDirectoryPeople<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1PeopleSearchDirectoryPeopleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ResourceNameQueryKey(
  args: InferRequestType<(typeof client.v1)[':resourceName']['$get']>,
) {
  return ['v1', '/v1/:resourceName', args] as const
}

export function getV1ResourceNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':resourceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ResourceNameQueryKey>
  >({
    queryKey: getV1ResourceNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':resourceName'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ResourceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':resourceName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ResourceNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ResourceNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1ResourceName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':resourceName']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ResourceNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ResourceName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ResourceNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ResourceNameConnectionsQueryKey(
  args: InferRequestType<(typeof client.v1)[':resourceName']['connections']['$get']>,
) {
  return ['v1', '/v1/:resourceName/connections', args] as const
}

export function getV1ResourceNameConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':resourceName']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':resourceName']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ResourceNameConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':resourceName'].connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ResourceNameConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':resourceName']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':resourceName']['connections']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ResourceNameConnectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1ResourceNameMembersModify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ResourceNameMembersModifyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1ResourceNameCopyOtherContactToMyContactsGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ResourceNameCopyOtherContactToMyContactsGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ResourceNameDeleteContact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ResourceNameDeleteContactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ResourceNameDeleteContactPhoto<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ResourceNameDeleteContactPhotoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchV1ResourceNameUpdateContact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1ResourceNameUpdateContactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchV1ResourceNameUpdateContactPhoto<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1ResourceNameUpdateContactPhotoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
