import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1ContactGroupsKey(
  args: InferRequestType<typeof client.v1.contactGroups.$get>,
) {
  return ['v1', '/v1/contactGroups', args] as const
}

export function useGetV1ContactGroups<TError = unknown>(
  args: InferRequestType<typeof client.v1.contactGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$get>>>>
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
        ? getGetV1ContactGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.contactGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContactGroups<TError = unknown>(
  args: InferRequestType<typeof client.v1.contactGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$get>>>>
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
        ? getGetV1ContactGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.contactGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ContactGroupsKey() {
  return ['v1', '/v1/contactGroups', 'POST'] as const
}

export function usePostV1ContactGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.contactGroups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.contactGroups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContactGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.contactGroups.$post> }) =>
        parseResponse(client.v1.contactGroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ContactGroupsBatchGetKey(
  args: InferRequestType<(typeof client.v1)['contactGroups:batchGet']['$get']>,
) {
  return ['v1', '/v1/contactGroups:batchGet', args] as const
}

export function useGetV1ContactGroupsBatchGet<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contactGroups:batchGet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contactGroups:batchGet']['$get']>>
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
        ? getGetV1ContactGroupsBatchGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contactGroups:batchGet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['contactGroups:batchGet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContactGroupsBatchGet<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contactGroups:batchGet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contactGroups:batchGet']['$get']>>
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
        ? getGetV1ContactGroupsBatchGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contactGroups:batchGet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['contactGroups:batchGet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OtherContactsKey(
  args: InferRequestType<typeof client.v1.otherContacts.$get>,
) {
  return ['v1', '/v1/otherContacts', args] as const
}

export function useGetV1OtherContacts<TError = unknown>(
  args: InferRequestType<typeof client.v1.otherContacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.otherContacts.$get>>>>
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
        ? getGetV1OtherContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.otherContacts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.otherContacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OtherContacts<TError = unknown>(
  args: InferRequestType<typeof client.v1.otherContacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.otherContacts.$get>>>>
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
        ? getGetV1OtherContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.otherContacts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.otherContacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OtherContactsSearchKey(
  args: InferRequestType<(typeof client.v1)['otherContacts:search']['$get']>,
) {
  return ['v1', '/v1/otherContacts:search', args] as const
}

export function useGetV1OtherContactsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['otherContacts:search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['otherContacts:search']['$get']>>
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
        ? getGetV1OtherContactsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['otherContacts:search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['otherContacts:search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OtherContactsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['otherContacts:search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['otherContacts:search']['$get']>>
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
        ? getGetV1OtherContactsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['otherContacts:search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['otherContacts:search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PeopleBatchCreateContactsKey() {
  return ['v1', '/v1/people:batchCreateContacts', 'POST'] as const
}

export function usePostV1PeopleBatchCreateContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['people:batchCreateContacts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['people:batchCreateContacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PeopleBatchCreateContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['people:batchCreateContacts']['$post']> },
      ) => parseResponse(client.v1['people:batchCreateContacts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PeopleBatchDeleteContactsKey() {
  return ['v1', '/v1/people:batchDeleteContacts', 'POST'] as const
}

export function usePostV1PeopleBatchDeleteContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['people:batchDeleteContacts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['people:batchDeleteContacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PeopleBatchDeleteContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['people:batchDeleteContacts']['$post']> },
      ) => parseResponse(client.v1['people:batchDeleteContacts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PeopleBatchGetKey(
  args: InferRequestType<(typeof client.v1)['people:batchGet']['$get']>,
) {
  return ['v1', '/v1/people:batchGet', args] as const
}

export function useGetV1PeopleBatchGet<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['people:batchGet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['people:batchGet']['$get']>>>
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
        ? getGetV1PeopleBatchGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['people:batchGet']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['people:batchGet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PeopleBatchGet<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['people:batchGet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['people:batchGet']['$get']>>>
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
        ? getGetV1PeopleBatchGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['people:batchGet']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['people:batchGet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PeopleBatchUpdateContactsKey() {
  return ['v1', '/v1/people:batchUpdateContacts', 'POST'] as const
}

export function usePostV1PeopleBatchUpdateContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['people:batchUpdateContacts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['people:batchUpdateContacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PeopleBatchUpdateContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['people:batchUpdateContacts']['$post']> },
      ) => parseResponse(client.v1['people:batchUpdateContacts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PeopleCreateContactKey() {
  return ['v1', '/v1/people:createContact', 'POST'] as const
}

export function usePostV1PeopleCreateContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['people:createContact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['people:createContact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PeopleCreateContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['people:createContact']['$post']> },
      ) => parseResponse(client.v1['people:createContact'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PeopleListDirectoryPeopleKey(
  args: InferRequestType<(typeof client.v1)['people:listDirectoryPeople']['$get']>,
) {
  return ['v1', '/v1/people:listDirectoryPeople', args] as const
}

export function useGetV1PeopleListDirectoryPeople<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['people:listDirectoryPeople']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['people:listDirectoryPeople']['$get']>>
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
        ? getGetV1PeopleListDirectoryPeopleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['people:listDirectoryPeople']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['people:listDirectoryPeople'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PeopleListDirectoryPeople<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['people:listDirectoryPeople']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['people:listDirectoryPeople']['$get']>>
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
        ? getGetV1PeopleListDirectoryPeopleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['people:listDirectoryPeople']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['people:listDirectoryPeople'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PeopleSearchContactsKey(
  args: InferRequestType<(typeof client.v1)['people:searchContacts']['$get']>,
) {
  return ['v1', '/v1/people:searchContacts', args] as const
}

export function useGetV1PeopleSearchContacts<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['people:searchContacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['people:searchContacts']['$get']>>
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
        ? getGetV1PeopleSearchContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['people:searchContacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['people:searchContacts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PeopleSearchContacts<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['people:searchContacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['people:searchContacts']['$get']>>
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
        ? getGetV1PeopleSearchContactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['people:searchContacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['people:searchContacts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PeopleSearchDirectoryPeopleKey(
  args: InferRequestType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>,
) {
  return ['v1', '/v1/people:searchDirectoryPeople', args] as const
}

export function useGetV1PeopleSearchDirectoryPeople<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>>
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
        ? getGetV1PeopleSearchDirectoryPeopleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['people:searchDirectoryPeople'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PeopleSearchDirectoryPeople<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>>
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
        ? getGetV1PeopleSearchDirectoryPeopleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['people:searchDirectoryPeople']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['people:searchDirectoryPeople'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ResourceNameKey(
  args: InferRequestType<(typeof client.v1)[':resourceName']['$get']>,
) {
  return ['v1', '/v1/:resourceName', args] as const
}

export function useGetV1ResourceName<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':resourceName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ResourceNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':resourceName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ResourceName<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':resourceName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ResourceNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':resourceName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ResourceNameKey() {
  return ['v1', '/v1/:resourceName', 'PUT'] as const
}

export function usePutV1ResourceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':resourceName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ResourceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':resourceName']['$put']> },
      ) => parseResponse(client.v1[':resourceName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ResourceNameKey() {
  return ['v1', '/v1/:resourceName', 'DELETE'] as const
}

export function useDeleteV1ResourceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':resourceName']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':resourceName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ResourceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':resourceName']['$delete']> },
      ) => parseResponse(client.v1[':resourceName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ResourceNameConnectionsKey(
  args: InferRequestType<(typeof client.v1)[':resourceName']['connections']['$get']>,
) {
  return ['v1', '/v1/:resourceName/connections', args] as const
}

export function useGetV1ResourceNameConnections<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':resourceName']['connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':resourceName']['connections']['$get']>>
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
        ? getGetV1ResourceNameConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':resourceName']['connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':resourceName'].connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ResourceNameConnections<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':resourceName']['connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':resourceName']['connections']['$get']>>
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
        ? getGetV1ResourceNameConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':resourceName']['connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':resourceName'].connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ResourceNameMembersModifyKey() {
  return ['v1', '/v1/:resourceName/members:modify', 'POST'] as const
}

export function usePostV1ResourceNameMembersModify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resourceName']['members:modify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':resourceName']['members:modify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ResourceNameMembersModifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)[':resourceName']['members:modify']['$post']>
        },
      ) => parseResponse(client.v1[':resourceName']['members:modify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ResourceNameCopyOtherContactToMyContactsGroupKey() {
  return ['v1', '/v1/:resourceName:copyOtherContactToMyContactsGroup', 'POST'] as const
}

export function usePostV1ResourceNameCopyOtherContactToMyContactsGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)[':resourceName:copyOtherContactToMyContactsGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ResourceNameCopyOtherContactToMyContactsGroupKey()
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
            (typeof client.v1)[':resourceName:copyOtherContactToMyContactsGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1[':resourceName:copyOtherContactToMyContactsGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ResourceNameDeleteContactKey() {
  return ['v1', '/v1/:resourceName:deleteContact', 'DELETE'] as const
}

export function useDeleteV1ResourceNameDeleteContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resourceName:deleteContact']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':resourceName:deleteContact']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ResourceNameDeleteContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)[':resourceName:deleteContact']['$delete']> },
      ) => parseResponse(client.v1[':resourceName:deleteContact'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ResourceNameDeleteContactPhotoKey() {
  return ['v1', '/v1/:resourceName:deleteContactPhoto', 'DELETE'] as const
}

export function useDeleteV1ResourceNameDeleteContactPhoto<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resourceName:deleteContactPhoto']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':resourceName:deleteContactPhoto']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ResourceNameDeleteContactPhotoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)[':resourceName:deleteContactPhoto']['$delete']>
        },
      ) => parseResponse(client.v1[':resourceName:deleteContactPhoto'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ResourceNameUpdateContactKey() {
  return ['v1', '/v1/:resourceName:updateContact', 'PATCH'] as const
}

export function usePatchV1ResourceNameUpdateContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resourceName:updateContact']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':resourceName:updateContact']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ResourceNameUpdateContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)[':resourceName:updateContact']['$patch']> },
      ) => parseResponse(client.v1[':resourceName:updateContact'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ResourceNameUpdateContactPhotoKey() {
  return ['v1', '/v1/:resourceName:updateContactPhoto', 'PATCH'] as const
}

export function usePatchV1ResourceNameUpdateContactPhoto<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resourceName:updateContactPhoto']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':resourceName:updateContactPhoto']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ResourceNameUpdateContactPhotoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)[':resourceName:updateContactPhoto']['$patch']>
        },
      ) => parseResponse(client.v1[':resourceName:updateContactPhoto'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
