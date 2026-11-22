import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiV1LivechatUsersTypeKey(
  args: InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/users/:type', keyArgs] as const
}

export function useGetApiV1LivechatUsersType<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type']['$get']>>
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
        ? getGetApiV1LivechatUsersTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.users[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatUsersType<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type']['$get']>>
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
        ? getGetApiV1LivechatUsersTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.users[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatUsersTypeKey() {
  return ['api', '/api/v1/livechat/users/:type', 'POST'] as const
}

export function usePostApiV1LivechatUsersType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatUsersTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.livechat.users)[':type']['$post']> },
      ) => parseResponse(client.api.v1.livechat.users[':type'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatUsersTypeIdKey(
  args: InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/users/:type/:_id', keyArgs] as const
}

export function useGetApiV1LivechatUsersTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>>
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
        ? getGetApiV1LivechatUsersTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.users[':type'][':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatUsersTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>>
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
        ? getGetApiV1LivechatUsersTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.users[':type'][':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1LivechatUsersTypeIdKey() {
  return ['api', '/api/v1/livechat/users/:type/:_id', 'DELETE'] as const
}

export function useDeleteApiV1LivechatUsersTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1LivechatUsersTypeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.livechat.users)[':type'][':_id']['$delete']>
        },
      ) => parseResponse(client.api.v1.livechat.users[':type'][':_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatAgentInfoRidTokenKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>,
) {
  return ['api', '/api/v1/livechat/agent.info/:rid/:token', args] as const
}

export function useGetApiV1LivechatAgentInfoRidToken<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>
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
        ? getGetApiV1LivechatAgentInfoRidTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.livechat['agent.info'][':rid'][':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAgentInfoRidToken<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>
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
        ? getGetApiV1LivechatAgentInfoRidTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat)['agent.info'][':rid'][':token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.livechat['agent.info'][':rid'][':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAgentNextTokenKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>,
) {
  return ['api', '/api/v1/livechat/agent.next/:token', args] as const
}

export function useGetApiV1LivechatAgentNextToken<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>>
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
        ? getGetApiV1LivechatAgentNextTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['agent.next'][':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAgentNextToken<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>>
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
        ? getGetApiV1LivechatAgentNextTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.next'][':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['agent.next'][':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatAgentsSaveInfoKey() {
  return ['api', '/api/v1/livechat/agents.saveInfo', 'POST'] as const
}

export function usePostApiV1LivechatAgentsSaveInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['agents.saveInfo']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['agents.saveInfo']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatAgentsSaveInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['agents.saveInfo']['$post']> },
      ) => parseResponse(client.api.v1.livechat['agents.saveInfo'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatAgentStatusKey() {
  return ['api', '/api/v1/livechat/agent.status', 'POST'] as const
}

export function usePostApiV1LivechatAgentStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['agent.status']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['agent.status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatAgentStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['agent.status']['$post']> },
      ) => parseResponse(client.api.v1.livechat['agent.status'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1OmnichannelContactKey(
  args: InferRequestType<typeof client.api.v1.omnichannel.contact.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/omnichannel/contact', keyArgs] as const
}

export function useGetApiV1OmnichannelContact<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.omnichannel.contact.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.omnichannel.contact.$get>>>
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
        ? getGetApiV1OmnichannelContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.omnichannel.contact.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.omnichannel.contact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1OmnichannelContact<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.omnichannel.contact.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.omnichannel.contact.$get>>>
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
        ? getGetApiV1OmnichannelContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.omnichannel.contact.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.omnichannel.contact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1OmnichannelContactKey() {
  return ['api', '/api/v1/omnichannel/contact', 'POST'] as const
}

export function usePostApiV1OmnichannelContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.omnichannel.contact.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.omnichannel.contact.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1OmnichannelContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.omnichannel.contact.$post> },
      ) => parseResponse(client.api.v1.omnichannel.contact.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1OmnichannelContactSearchKey(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/omnichannel/contact.search', keyArgs] as const
}

export function useGetApiV1OmnichannelContactSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>>
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
        ? getGetApiV1OmnichannelContactSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.omnichannel['contact.search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1OmnichannelContactSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>>
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
        ? getGetApiV1OmnichannelContactSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contact.search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.omnichannel['contact.search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1OmnichannelContactsKey() {
  return ['api', '/api/v1/omnichannel/contacts', 'POST'] as const
}

export function usePostApiV1OmnichannelContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.omnichannel.contacts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.omnichannel.contacts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1OmnichannelContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.omnichannel.contacts.$post> },
      ) => parseResponse(client.api.v1.omnichannel.contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1OmnichannelContactsUpdateKey() {
  return ['api', '/api/v1/omnichannel/contacts.update', 'POST'] as const
}

export function usePostApiV1OmnichannelContactsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1OmnichannelContactsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.update']['$post']>
        },
      ) => parseResponse(client.api.v1.omnichannel['contacts.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1OmnichannelContactsConflictsKey() {
  return ['api', '/api/v1/omnichannel/contacts.conflicts', 'POST'] as const
}

export function usePostApiV1OmnichannelContactsConflicts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.conflicts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.conflicts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1OmnichannelContactsConflictsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.conflicts']['$post']>
        },
      ) => parseResponse(client.api.v1.omnichannel['contacts.conflicts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1OmnichannelContactsGetKey(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/omnichannel/contacts.get', keyArgs] as const
}

export function useGetApiV1OmnichannelContactsGet<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>>
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
        ? getGetApiV1OmnichannelContactsGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.omnichannel['contacts.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1OmnichannelContactsGet<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>>
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
        ? getGetApiV1OmnichannelContactsGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.get']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.omnichannel['contacts.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1OmnichannelContactsSearchKey(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/omnichannel/contacts.search', keyArgs] as const
}

export function useGetApiV1OmnichannelContactsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>>
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
        ? getGetApiV1OmnichannelContactsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.omnichannel['contacts.search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1OmnichannelContactsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>>
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
        ? getGetApiV1OmnichannelContactsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.omnichannel['contacts.search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1OmnichannelContactsChannelsKey(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/omnichannel/contacts.channels', keyArgs] as const
}

export function useGetApiV1OmnichannelContactsChannels<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>>
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
        ? getGetApiV1OmnichannelContactsChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.omnichannel['contacts.channels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1OmnichannelContactsChannels<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>>
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
        ? getGetApiV1OmnichannelContactsChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.omnichannel['contacts.channels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1OmnichannelContactsHistoryKey(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/omnichannel/contacts.history', keyArgs] as const
}

export function useGetApiV1OmnichannelContactsHistory<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>>
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
        ? getGetApiV1OmnichannelContactsHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.omnichannel['contacts.history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1OmnichannelContactsHistory<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>>
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
        ? getGetApiV1OmnichannelContactsHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.omnichannel['contacts.history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1OmnichannelContactsCheckExistenceKey(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/omnichannel/contacts.checkExistence', keyArgs] as const
}

export function useGetApiV1OmnichannelContactsCheckExistence<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>
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
        ? getGetApiV1OmnichannelContactsCheckExistenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.omnichannel['contacts.checkExistence'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1OmnichannelContactsCheckExistence<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>
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
        ? getGetApiV1OmnichannelContactsCheckExistenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.omnichannel)['contacts.checkExistence']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.omnichannel['contacts.checkExistence'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1OmnichannelContactsBlockKey() {
  return ['api', '/api/v1/omnichannel/contacts.block', 'POST'] as const
}

export function usePostApiV1OmnichannelContactsBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.block']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.block']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1OmnichannelContactsBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.block']['$post']> },
      ) => parseResponse(client.api.v1.omnichannel['contacts.block'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1OmnichannelContactsUnblockKey() {
  return ['api', '/api/v1/omnichannel/contacts.unblock', 'POST'] as const
}

export function usePostApiV1OmnichannelContactsUnblock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.omnichannel)['contacts.unblock']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.omnichannel)['contacts.unblock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1OmnichannelContactsUnblockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.omnichannel)['contacts.unblock']['$post']>
        },
      ) => parseResponse(client.api.v1.omnichannel['contacts.unblock'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsAgentOverviewKey(
  args: InferRequestType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/agent-overview', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsAgentOverview<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>>
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
        ? getGetApiV1LivechatAnalyticsAgentOverviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.analytics['agent-overview'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsAgentOverview<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>>
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
        ? getGetApiV1LivechatAnalyticsAgentOverviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.analytics)['agent-overview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.analytics['agent-overview'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsOverviewKey(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.overview.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/overview', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsOverview<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.overview.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.analytics.overview.$get>>
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
        ? getGetApiV1LivechatAnalyticsOverviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.analytics.overview.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.analytics.overview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsOverview<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.overview.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.analytics.overview.$get>>
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
        ? getGetApiV1LivechatAnalyticsOverviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.analytics.overview.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.analytics.overview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatConfigKey(
  args: InferRequestType<typeof client.api.v1.livechat.config.$get>,
) {
  return ['api', '/api/v1/livechat/config', args] as const
}

export function useGetApiV1LivechatConfig<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.$get>>>
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
        ? getGetApiV1LivechatConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatConfig<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.$get>>>
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
        ? getGetApiV1LivechatConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatRoomsKey(
  args: InferRequestType<typeof client.api.v1.livechat.rooms.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/rooms', keyArgs] as const
}

export function useGetApiV1LivechatRooms<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.rooms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.$get>>>
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
        ? getGetApiV1LivechatRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.rooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatRooms<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.rooms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.$get>>>
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
        ? getGetApiV1LivechatRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.rooms.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.rooms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatRoomKey(
  args: InferRequestType<typeof client.api.v1.livechat.room.$get>,
) {
  return ['api', '/api/v1/livechat/room', args] as const
}

export function useGetApiV1LivechatRoom<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.room.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.room.$get>>>
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
        ? getGetApiV1LivechatRoomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.room.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.room.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatRoom<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.room.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.room.$get>>>
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
        ? getGetApiV1LivechatRoomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.room.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.room.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatRoomCloseKey() {
  return ['api', '/api/v1/livechat/room.close', 'POST'] as const
}

export function usePostApiV1LivechatRoomClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.close']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['room.close']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatRoomCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.livechat)['room.close']['$post']> },
      ) => parseResponse(client.api.v1.livechat['room.close'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatRoomCloseByUserKey() {
  return ['api', '/api/v1/livechat/room.closeByUser', 'POST'] as const
}

export function usePostApiV1LivechatRoomCloseByUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.closeByUser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['room.closeByUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatRoomCloseByUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['room.closeByUser']['$post']> },
      ) => parseResponse(client.api.v1.livechat['room.closeByUser'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatRoomJoinKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['room.join']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/room.join', keyArgs] as const
}

export function useGetApiV1LivechatRoomJoin<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['room.join']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['room.join']['$get']>>
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
        ? getGetApiV1LivechatRoomJoinKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['room.join']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat['room.join'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatRoomJoin<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['room.join']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['room.join']['$get']>>
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
        ? getGetApiV1LivechatRoomJoinKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['room.join']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat['room.join'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatRoomSaveInfoKey() {
  return ['api', '/api/v1/livechat/room.saveInfo', 'POST'] as const
}

export function usePostApiV1LivechatRoomSaveInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.saveInfo']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['room.saveInfo']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatRoomSaveInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['room.saveInfo']['$post']> },
      ) => parseResponse(client.api.v1.livechat['room.saveInfo'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatRoomForwardKey() {
  return ['api', '/api/v1/livechat/room.forward', 'POST'] as const
}

export function usePostApiV1LivechatRoomForward<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.forward']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['room.forward']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatRoomForwardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['room.forward']['$post']> },
      ) => parseResponse(client.api.v1.livechat['room.forward'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatTransferHistoryRidKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/transfer.history/:rid', keyArgs] as const
}

export function useGetApiV1LivechatTransferHistoryRid<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>>
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
        ? getGetApiV1LivechatTransferHistoryRidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['transfer.history'][':rid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatTransferHistoryRid<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>>
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
        ? getGetApiV1LivechatTransferHistoryRidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['transfer.history'][':rid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['transfer.history'][':rid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatRoomSurveyKey() {
  return ['api', '/api/v1/livechat/room.survey', 'POST'] as const
}

export function usePostApiV1LivechatRoomSurvey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.survey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['room.survey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatRoomSurveyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.livechat)['room.survey']['$post']> },
      ) => parseResponse(client.api.v1.livechat['room.survey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatRoomOnHoldKey() {
  return ['api', '/api/v1/livechat/room.onHold', 'POST'] as const
}

export function usePostApiV1LivechatRoomOnHold<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.onHold']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['room.onHold']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatRoomOnHoldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.livechat)['room.onHold']['$post']> },
      ) => parseResponse(client.api.v1.livechat['room.onHold'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatUploadRidKey() {
  return ['api', '/api/v1/livechat/upload/:rid', 'POST'] as const
}

export function usePostApiV1LivechatUploadRid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.upload)[':rid']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.upload)[':rid']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatUploadRidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.livechat.upload)[':rid']['$post']> },
      ) => parseResponse(client.api.v1.livechat.upload[':rid'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatRoomRidPriorityKey() {
  return ['api', '/api/v1/livechat/room/:rid/priority', 'POST'] as const
}

export function usePostApiV1LivechatRoomRidPriority<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatRoomRidPriorityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$post']>
        },
      ) => parseResponse(client.api.v1.livechat.room[':rid'].priority.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1LivechatRoomRidPriorityKey() {
  return ['api', '/api/v1/livechat/room/:rid/priority', 'DELETE'] as const
}

export function useDeleteApiV1LivechatRoomRidPriority<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1LivechatRoomRidPriorityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.livechat.room)[':rid']['priority']['$delete']>
        },
      ) => parseResponse(client.api.v1.livechat.room[':rid'].priority.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatRoomsRemoveAllClosedRoomsKey() {
  return ['api', '/api/v1/livechat/rooms.removeAllClosedRooms', 'POST'] as const
}

export function usePostApiV1LivechatRoomsRemoveAllClosedRooms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.livechat)['rooms.removeAllClosedRooms']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['rooms.removeAllClosedRooms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatRoomsRemoveAllClosedRoomsKey()
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
            (typeof client.api.v1.livechat)['rooms.removeAllClosedRooms']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.livechat['rooms.removeAllClosedRooms'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatRoomsDeleteKey() {
  return ['api', '/api/v1/livechat/rooms.delete', 'POST'] as const
}

export function usePostApiV1LivechatRoomsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['rooms.delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['rooms.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatRoomsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['rooms.delete']['$post']> },
      ) => parseResponse(client.api.v1.livechat['rooms.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatRoomResumeOnHoldKey() {
  return ['api', '/api/v1/livechat/room.resumeOnHold', 'POST'] as const
}

export function usePostApiV1LivechatRoomResumeOnHold<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['room.resumeOnHold']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['room.resumeOnHold']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatRoomResumeOnHoldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['room.resumeOnHold']['$post']> },
      ) => parseResponse(client.api.v1.livechat['room.resumeOnHold'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatRoomsFiltersKey(
  args: InferRequestType<typeof client.api.v1.livechat.rooms.filters.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/rooms/filters', keyArgs] as const
}

export function useGetApiV1LivechatRoomsFilters<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.rooms.filters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.rooms.filters.$get>>
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
        ? getGetApiV1LivechatRoomsFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.rooms.filters.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.rooms.filters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatRoomsFilters<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.rooms.filters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.rooms.filters.$get>>
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
        ? getGetApiV1LivechatRoomsFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.rooms.filters.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.rooms.filters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatVisitorDepartmentTransferKey() {
  return ['api', '/api/v1/livechat/visitor/department.transfer', 'POST'] as const
}

export function usePostApiV1LivechatVisitorDepartmentTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.livechat.visitor)['department.transfer']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.visitor)['department.transfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatVisitorDepartmentTransferKey()
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
            (typeof client.api.v1.livechat.visitor)['department.transfer']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.livechat.visitor['department.transfer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatDepartmentKey(
  args: InferRequestType<typeof client.api.v1.livechat.department.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/department', keyArgs] as const
}

export function useGetApiV1LivechatDepartment<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.department.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.department.$get>>>
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
        ? getGetApiV1LivechatDepartmentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.department.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.department.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatDepartment<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.department.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.department.$get>>>
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
        ? getGetApiV1LivechatDepartmentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.department.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.department.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatDepartmentKey() {
  return ['api', '/api/v1/livechat/department', 'POST'] as const
}

export function usePostApiV1LivechatDepartment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.department.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.livechat.department.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatDepartmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.livechat.department.$post> },
      ) => parseResponse(client.api.v1.livechat.department.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatDepartmentIdKey(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/department/:_id', keyArgs] as const
}

export function useGetApiV1LivechatDepartmentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$get']>>
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
        ? getGetApiV1LivechatDepartmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.department[':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatDepartmentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$get']>>
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
        ? getGetApiV1LivechatDepartmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.department[':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1LivechatDepartmentIdKey() {
  return ['api', '/api/v1/livechat/department/:_id', 'PUT'] as const
}

export function usePutApiV1LivechatDepartmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1LivechatDepartmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$put']> },
      ) => parseResponse(client.api.v1.livechat.department[':_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1LivechatDepartmentIdKey() {
  return ['api', '/api/v1/livechat/department/:_id', 'DELETE'] as const
}

export function useDeleteApiV1LivechatDepartmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1LivechatDepartmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['$delete']> },
      ) => parseResponse(client.api.v1.livechat.department[':_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatDepartmentAutocompleteKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/department.autocomplete', keyArgs] as const
}

export function useGetApiV1LivechatDepartmentAutocomplete<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>>
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
        ? getGetApiV1LivechatDepartmentAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['department.autocomplete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatDepartmentAutocomplete<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>>
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
        ? getGetApiV1LivechatDepartmentAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['department.autocomplete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['department.autocomplete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatDepartmentIdAgentsKey(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/department/:_id/agents', keyArgs] as const
}

export function useGetApiV1LivechatDepartmentIdAgents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>
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
        ? getGetApiV1LivechatDepartmentIdAgentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.department[':_id'].agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatDepartmentIdAgents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>
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
        ? getGetApiV1LivechatDepartmentIdAgentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.department[':_id'].agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatDepartmentIdAgentsKey() {
  return ['api', '/api/v1/livechat/department/:_id/agents', 'POST'] as const
}

export function usePostApiV1LivechatDepartmentIdAgents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['agents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatDepartmentIdAgentsKey()
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
            (typeof client.api.v1.livechat.department)[':_id']['agents']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.livechat.department[':_id'].agents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatDepartmentListByIdsKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/department.listByIds', keyArgs] as const
}

export function useGetApiV1LivechatDepartmentListByIds<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>>
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
        ? getGetApiV1LivechatDepartmentListByIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['department.listByIds'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatDepartmentListByIds<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>>
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
        ? getGetApiV1LivechatDepartmentListByIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['department.listByIds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['department.listByIds'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDepartmentsAmountOfChatsKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/departments/amount-of-chats', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDepartmentsAmountOfChats<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsAmountOfChatsKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
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
          client.api.v1.livechat.analytics.departments['amount-of-chats'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDepartmentsAmountOfChats<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsAmountOfChatsKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['amount-of-chats']['$get']
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
          client.api.v1.livechat.analytics.departments['amount-of-chats'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDepartmentsAverageServiceTimeKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/departments/average-service-time', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDepartmentsAverageServiceTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsAverageServiceTimeKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
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
          client.api.v1.livechat.analytics.departments['average-service-time'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDepartmentsAverageServiceTime<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsAverageServiceTimeKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['average-service-time']['$get']
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
          client.api.v1.livechat.analytics.departments['average-service-time'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/analytics/departments/average-chat-duration-time',
    keyArgs,
  ] as const
}

export function useGetApiV1LivechatAnalyticsDepartmentsAverageChatDurationTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
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
          client.api.v1.livechat.analytics.departments['average-chat-duration-time'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDepartmentsAverageChatDurationTime<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['average-chat-duration-time']['$get']
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
          client.api.v1.livechat.analytics.departments['average-chat-duration-time'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDepartmentsTotalServiceTimeKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/departments/total-service-time', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDepartmentsTotalServiceTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsTotalServiceTimeKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
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
          client.api.v1.livechat.analytics.departments['total-service-time'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDepartmentsTotalServiceTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsTotalServiceTimeKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['total-service-time']['$get']
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
          client.api.v1.livechat.analytics.departments['total-service-time'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/departments/average-waiting-time', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDepartmentsAverageWaitingTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
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
          client.api.v1.livechat.analytics.departments['average-waiting-time'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDepartmentsAverageWaitingTime<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['average-waiting-time']['$get']
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
          client.api.v1.livechat.analytics.departments['average-waiting-time'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/departments/total-transferred-chats', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDepartmentsTotalTransferredChats<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
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
          client.api.v1.livechat.analytics.departments['total-transferred-chats'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDepartmentsTotalTransferredChats<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['total-transferred-chats']['$get']
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
          client.api.v1.livechat.analytics.departments['total-transferred-chats'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/departments/total-abandoned-chats', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDepartmentsTotalAbandonedChats<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
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
          client.api.v1.livechat.analytics.departments['total-abandoned-chats'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDepartmentsTotalAbandonedChats<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['total-abandoned-chats']['$get']
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
          client.api.v1.livechat.analytics.departments['total-abandoned-chats'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/analytics/departments/percentage-abandoned-chats',
    keyArgs,
  ] as const
}

export function useGetApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChats<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
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
          client.api.v1.livechat.analytics.departments['percentage-abandoned-chats'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChats<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
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
        ? getGetApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsKey(args)
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
                (typeof client.api.v1.livechat.analytics.departments)['percentage-abandoned-chats']['$get']
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
          client.api.v1.livechat.analytics.departments['percentage-abandoned-chats'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatDepartmentsArchivedKey(
  args: InferRequestType<typeof client.api.v1.livechat.departments.archived.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/departments/archived', keyArgs] as const
}

export function useGetApiV1LivechatDepartmentsArchived<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.departments.archived.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.departments.archived.$get>>
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
        ? getGetApiV1LivechatDepartmentsArchivedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.departments.archived.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.departments.archived.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatDepartmentsArchived<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.departments.archived.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.departments.archived.$get>>
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
        ? getGetApiV1LivechatDepartmentsArchivedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.departments.archived.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.departments.archived.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatDepartmentIdArchiveKey() {
  return ['api', '/api/v1/livechat/department/:_id/archive', 'POST'] as const
}

export function usePostApiV1LivechatDepartmentIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.livechat.department)[':_id']['archive']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatDepartmentIdArchiveKey()
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
            (typeof client.api.v1.livechat.department)[':_id']['archive']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.livechat.department[':_id'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatDepartmentIdUnarchiveKey() {
  return ['api', '/api/v1/livechat/department/:_id/unarchive', 'POST'] as const
}

export function usePostApiV1LivechatDepartmentIdUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.livechat.department)[':_id']['unarchive']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.department)[':_id']['unarchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatDepartmentIdUnarchiveKey()
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
            (typeof client.api.v1.livechat.department)[':_id']['unarchive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.livechat.department[':_id'].unarchive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatDepartmentIsDepartmentCreationAvailableKey(
  args: InferRequestType<
    typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/department/isDepartmentCreationAvailable', keyArgs] as const
}

export function useGetApiV1LivechatDepartmentIsDepartmentCreationAvailable<TError = unknown>(
  args: InferRequestType<
    typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get
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
        ? getGetApiV1LivechatDepartmentIsDepartmentCreationAvailableKey(args)
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
                typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get
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
          client.api.v1.livechat.department.isDepartmentCreationAvailable.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatDepartmentIsDepartmentCreationAvailable<
  TError = unknown,
>(
  args: InferRequestType<
    typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get
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
        ? getGetApiV1LivechatDepartmentIsDepartmentCreationAvailableKey(args)
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
                typeof client.api.v1.livechat.department.isDepartmentCreationAvailable.$get
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
          client.api.v1.livechat.department.isDepartmentCreationAvailable.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatCustomFieldsSaveKey() {
  return ['api', '/api/v1/livechat/custom-fields.save', 'POST'] as const
}

export function usePostApiV1LivechatCustomFieldsSave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields.save']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['custom-fields.save']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatCustomFieldsSaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.livechat)['custom-fields.save']['$post']>
        },
      ) => parseResponse(client.api.v1.livechat['custom-fields.save'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatCustomFieldKey() {
  return ['api', '/api/v1/livechat/custom.field', 'POST'] as const
}

export function usePostApiV1LivechatCustomField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['custom.field']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['custom.field']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatCustomFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['custom.field']['$post']> },
      ) => parseResponse(client.api.v1.livechat['custom.field'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatCustomFieldsKey() {
  return ['api', '/api/v1/livechat/custom.fields', 'POST'] as const
}

export function usePostApiV1LivechatCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['custom.fields']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['custom.fields']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['custom.fields']['$post']> },
      ) => parseResponse(client.api.v1.livechat['custom.fields'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatCustomFields2Key(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/custom-fields', keyArgs] as const
}

export function useGetApiV1LivechatCustomFields2<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields']['$get']>>
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
        ? getGetApiV1LivechatCustomFields2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat['custom-fields'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatCustomFields2<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields']['$get']>>
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
        ? getGetApiV1LivechatCustomFields2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat['custom-fields'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatCustomFieldsIdKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/custom-fields/:_id', keyArgs] as const
}

export function useGetApiV1LivechatCustomFieldsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>>
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
        ? getGetApiV1LivechatCustomFieldsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['custom-fields'][':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatCustomFieldsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>>
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
        ? getGetApiV1LivechatCustomFieldsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields'][':_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['custom-fields'][':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatCustomFieldsDeleteKey() {
  return ['api', '/api/v1/livechat/custom-fields.delete', 'POST'] as const
}

export function usePostApiV1LivechatCustomFieldsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['custom-fields.delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['custom-fields.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatCustomFieldsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.livechat)['custom-fields.delete']['$post']>
        },
      ) => parseResponse(client.api.v1.livechat['custom-fields.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatPageVisitedKey() {
  return ['api', '/api/v1/livechat/page.visited', 'POST'] as const
}

export function usePostApiV1LivechatPageVisited<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['page.visited']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['page.visited']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatPageVisitedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['page.visited']['$post']> },
      ) => parseResponse(client.api.v1.livechat['page.visited'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatTranscriptKey() {
  return ['api', '/api/v1/livechat/transcript', 'POST'] as const
}

export function usePostApiV1LivechatTranscript<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.transcript.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.livechat.transcript.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatTranscriptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.livechat.transcript.$post> },
      ) => parseResponse(client.api.v1.livechat.transcript.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatTranscriptRidKey() {
  return ['api', '/api/v1/livechat/transcript/:rid', 'POST'] as const
}

export function usePostApiV1LivechatTranscriptRid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.transcript)[':rid']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.transcript)[':rid']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatTranscriptRidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat.transcript)[':rid']['$post']> },
      ) => parseResponse(client.api.v1.livechat.transcript[':rid'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1LivechatTranscriptRidKey() {
  return ['api', '/api/v1/livechat/transcript/:rid', 'DELETE'] as const
}

export function useDeleteApiV1LivechatTranscriptRid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.transcript)[':rid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.transcript)[':rid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1LivechatTranscriptRidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat.transcript)[':rid']['$delete']> },
      ) => parseResponse(client.api.v1.livechat.transcript[':rid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1OmnichannelRidRequestTranscriptKey() {
  return ['api', '/api/v1/omnichannel/:rid/request-transcript', 'POST'] as const
}

export function usePostApiV1OmnichannelRidRequestTranscript<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.omnichannel)[':rid']['request-transcript']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.omnichannel)[':rid']['request-transcript']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1OmnichannelRidRequestTranscriptKey()
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
            (typeof client.api.v1.omnichannel)[':rid']['request-transcript']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.omnichannel[':rid']['request-transcript'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatAgentsAgentIdDepartmentsKey(
  args: InferRequestType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/agents/:agentId/departments', keyArgs] as const
}

export function useGetApiV1LivechatAgentsAgentIdDepartments<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>
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
        ? getGetApiV1LivechatAgentsAgentIdDepartmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.livechat.agents[':agentId'].departments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAgentsAgentIdDepartments<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>
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
        ? getGetApiV1LivechatAgentsAgentIdDepartmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.agents)[':agentId']['departments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.livechat.agents[':agentId'].departments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsAgentsAverageServiceTimeKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/agents/average-service-time', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsAgentsAverageServiceTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
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
        ? getGetApiV1LivechatAnalyticsAgentsAverageServiceTimeKey(args)
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
                (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
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
          client.api.v1.livechat.analytics.agents['average-service-time'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsAgentsAverageServiceTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
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
        ? getGetApiV1LivechatAnalyticsAgentsAverageServiceTimeKey(args)
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
                (typeof client.api.v1.livechat.analytics.agents)['average-service-time']['$get']
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
          client.api.v1.livechat.analytics.agents['average-service-time'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsAgentsTotalServiceTimeKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/agents/total-service-time', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsAgentsTotalServiceTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
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
        ? getGetApiV1LivechatAnalyticsAgentsTotalServiceTimeKey(args)
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
                (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
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
          client.api.v1.livechat.analytics.agents['total-service-time'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsAgentsTotalServiceTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
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
        ? getGetApiV1LivechatAnalyticsAgentsTotalServiceTimeKey(args)
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
                (typeof client.api.v1.livechat.analytics.agents)['total-service-time']['$get']
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
          client.api.v1.livechat.analytics.agents['total-service-time'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/analytics/agents/available-for-service-history',
    keyArgs,
  ] as const
}

export function useGetApiV1LivechatAnalyticsAgentsAvailableForServiceHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
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
        ? getGetApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryKey(args)
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
                (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
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
          client.api.v1.livechat.analytics.agents['available-for-service-history'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsAgentsAvailableForServiceHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
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
        ? getGetApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryKey(args)
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
                (typeof client.api.v1.livechat.analytics.agents)['available-for-service-history']['$get']
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
          client.api.v1.livechat.analytics.agents['available-for-service-history'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAppearanceKey(
  args: InferRequestType<typeof client.api.v1.livechat.appearance.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/appearance', keyArgs] as const
}

export function useGetApiV1LivechatAppearance<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.appearance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.appearance.$get>>>
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
        ? getGetApiV1LivechatAppearanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.appearance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.appearance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAppearance<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.appearance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.appearance.$get>>>
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
        ? getGetApiV1LivechatAppearanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.appearance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.appearance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatAppearanceKey() {
  return ['api', '/api/v1/livechat/appearance', 'POST'] as const
}

export function usePostApiV1LivechatAppearance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.appearance.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.livechat.appearance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatAppearanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.livechat.appearance.$post> },
      ) => parseResponse(client.api.v1.livechat.appearance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatBusinessHoursKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['business-hours']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/business-hours', keyArgs] as const
}

export function useGetApiV1LivechatBusinessHours<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['business-hours']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours']['$get']>>
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
        ? getGetApiV1LivechatBusinessHoursKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat['business-hours'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatBusinessHours<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['business-hours']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours']['$get']>>
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
        ? getGetApiV1LivechatBusinessHoursKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat['business-hours'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatBusinessHourKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['business-hour']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/business-hour', keyArgs] as const
}

export function useGetApiV1LivechatBusinessHour<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['business-hour']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hour']['$get']>>
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
        ? getGetApiV1LivechatBusinessHourKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hour']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat['business-hour'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatBusinessHour<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['business-hour']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hour']['$get']>>
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
        ? getGetApiV1LivechatBusinessHourKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hour']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat['business-hour'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatBusinessHoursRemoveKey() {
  return ['api', '/api/v1/livechat/business-hours.remove', 'POST'] as const
}

export function usePostApiV1LivechatBusinessHoursRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours.remove']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['business-hours.remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatBusinessHoursRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.livechat)['business-hours.remove']['$post']>
        },
      ) => parseResponse(client.api.v1.livechat['business-hours.remove'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatBusinessHoursSaveKey() {
  return ['api', '/api/v1/livechat/business-hours.save', 'POST'] as const
}

export function usePostApiV1LivechatBusinessHoursSave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['business-hours.save']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['business-hours.save']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatBusinessHoursSaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.livechat)['business-hours.save']['$post']>
        },
      ) => parseResponse(client.api.v1.livechat['business-hours.save'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDashboardsConversationTotalizersKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/conversation-totalizers', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDashboardsConversationTotalizers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsConversationTotalizersKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
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
          client.api.v1.livechat.analytics.dashboards['conversation-totalizers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDashboardsConversationTotalizers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsConversationTotalizersKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['conversation-totalizers']['$get']
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
          client.api.v1.livechat.analytics.dashboards['conversation-totalizers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/analytics/dashboards/agents-productivity-totalizers',
    keyArgs,
  ] as const
}

export function useGetApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
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
          client.api.v1.livechat.analytics.dashboards['agents-productivity-totalizers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['agents-productivity-totalizers']['$get']
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
          client.api.v1.livechat.analytics.dashboards['agents-productivity-totalizers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDashboardsChatsTotalizersKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/chats-totalizers', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDashboardsChatsTotalizers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsChatsTotalizersKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
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
          client.api.v1.livechat.analytics.dashboards['chats-totalizers'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDashboardsChatsTotalizers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsChatsTotalizersKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['chats-totalizers']['$get']
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
          client.api.v1.livechat.analytics.dashboards['chats-totalizers'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDashboardsProductivityTotalizersKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/productivity-totalizers', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDashboardsProductivityTotalizers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsProductivityTotalizersKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
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
          client.api.v1.livechat.analytics.dashboards['productivity-totalizers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDashboardsProductivityTotalizers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsProductivityTotalizersKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['productivity-totalizers']['$get']
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
          client.api.v1.livechat.analytics.dashboards['productivity-totalizers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDashboardsChartsChatsKey(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/charts/chats', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDashboardsChartsChats<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>
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
        ? getGetApiV1LivechatAnalyticsDashboardsChartsChatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.livechat.analytics.dashboards.charts.chats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDashboardsChartsChats<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>
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
        ? getGetApiV1LivechatAnalyticsDashboardsChartsChatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.chats.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.livechat.analytics.dashboards.charts.chats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/charts/chats-per-agent', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDashboardsChartsChatsPerAgent<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
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
          client.api.v1.livechat.analytics.dashboards.charts['chats-per-agent'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDashboardsChartsChatsPerAgent<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-agent']['$get']
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
          client.api.v1.livechat.analytics.dashboards.charts['chats-per-agent'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDashboardsChartsAgentsStatusKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/charts/agents-status', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDashboardsChartsAgentsStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsChartsAgentsStatusKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
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
          client.api.v1.livechat.analytics.dashboards.charts['agents-status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDashboardsChartsAgentsStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsChartsAgentsStatusKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards.charts)['agents-status']['$get']
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
          client.api.v1.livechat.analytics.dashboards.charts['agents-status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/analytics/dashboards/charts/chats-per-department',
    keyArgs,
  ] as const
}

export function useGetApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartment<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
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
          client.api.v1.livechat.analytics.dashboards.charts['chats-per-department'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards.charts)['chats-per-department']['$get']
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
          client.api.v1.livechat.analytics.dashboards.charts['chats-per-department'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDashboardsChartsTimingsKey(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/charts/timings', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDashboardsChartsTimings<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>
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
        ? getGetApiV1LivechatAnalyticsDashboardsChartsTimingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.livechat.analytics.dashboards.charts.timings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDashboardsChartsTimings<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>
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
        ? getGetApiV1LivechatAnalyticsDashboardsChartsTimingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.v1.livechat.analytics.dashboards.charts.timings.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.livechat.analytics.dashboards.charts.timings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatLivechatAnalyticsDashboardsChartsDataKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/livechat/analytics/dashboards/charts-data', keyArgs] as const
}

export function useGetApiV1LivechatLivechatAnalyticsDashboardsChartsData<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
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
        ? getGetApiV1LivechatLivechatAnalyticsDashboardsChartsDataKey(args)
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
                (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
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
          client.api.v1.livechat.livechat.analytics.dashboards['charts-data'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatLivechatAnalyticsDashboardsChartsData<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
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
        ? getGetApiV1LivechatLivechatAnalyticsDashboardsChartsDataKey(args)
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
                (typeof client.api.v1.livechat.livechat.analytics.dashboards)['charts-data']['$get']
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
          client.api.v1.livechat.livechat.analytics.dashboards['charts-data'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatInquiriesListKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/inquiries.list', keyArgs] as const
}

export function useGetApiV1LivechatInquiriesList<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>>
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
        ? getGetApiV1LivechatInquiriesListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat['inquiries.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatInquiriesList<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>>
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
        ? getGetApiV1LivechatInquiriesListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat['inquiries.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatInquiriesTakeKey() {
  return ['api', '/api/v1/livechat/inquiries.take', 'POST'] as const
}

export function usePostApiV1LivechatInquiriesTake<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.take']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['inquiries.take']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatInquiriesTakeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['inquiries.take']['$post']> },
      ) => parseResponse(client.api.v1.livechat['inquiries.take'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatInquiriesQueuedForUserKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/inquiries.queuedForUser', keyArgs] as const
}

export function useGetApiV1LivechatInquiriesQueuedForUser<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>>
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
        ? getGetApiV1LivechatInquiriesQueuedForUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['inquiries.queuedForUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatInquiriesQueuedForUser<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>>
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
        ? getGetApiV1LivechatInquiriesQueuedForUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.queuedForUser']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['inquiries.queuedForUser'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatInquiriesGetOneKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/inquiries.getOne', keyArgs] as const
}

export function useGetApiV1LivechatInquiriesGetOne<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>>
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
        ? getGetApiV1LivechatInquiriesGetOneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['inquiries.getOne'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatInquiriesGetOne<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>>
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
        ? getGetApiV1LivechatInquiriesGetOneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.getOne']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['inquiries.getOne'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1LivechatInquirySetSLAKey() {
  return ['api', '/api/v1/livechat/inquiry.setSLA', 'PUT'] as const
}

export function usePutApiV1LivechatInquirySetSLA<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiry.setSLA']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['inquiry.setSLA']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1LivechatInquirySetSLAKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['inquiry.setSLA']['$put']> },
      ) => parseResponse(client.api.v1.livechat['inquiry.setSLA'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatInquiriesReturnAsInquiryKey() {
  return ['api', '/api/v1/livechat/inquiries.returnAsInquiry', 'POST'] as const
}

export function usePostApiV1LivechatInquiriesReturnAsInquiry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['inquiries.returnAsInquiry']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['inquiries.returnAsInquiry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatInquiriesReturnAsInquiryKey()
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
            (typeof client.api.v1.livechat)['inquiries.returnAsInquiry']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.livechat['inquiries.returnAsInquiry'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatIntegrationsSettingsKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/integrations.settings', keyArgs] as const
}

export function useGetApiV1LivechatIntegrationsSettings<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>>
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
        ? getGetApiV1LivechatIntegrationsSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['integrations.settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatIntegrationsSettings<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>>
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
        ? getGetApiV1LivechatIntegrationsSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['integrations.settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['integrations.settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatQueueKey(
  args: InferRequestType<typeof client.api.v1.livechat.queue.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/queue', keyArgs] as const
}

export function useGetApiV1LivechatQueue<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.queue.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.queue.$get>>>
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
        ? getGetApiV1LivechatQueueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.queue.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.queue.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatQueue<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.queue.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.queue.$get>>>
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
        ? getGetApiV1LivechatQueueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.queue.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.queue.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatSmsIncomingServiceKey() {
  return ['api', '/api/v1/livechat/sms-incoming/:service', 'POST'] as const
}

export function usePostApiV1LivechatSmsIncomingService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['sms-incoming'][':service']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['sms-incoming'][':service']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatSmsIncomingServiceKey()
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
            (typeof client.api.v1.livechat)['sms-incoming'][':service']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.livechat['sms-incoming'][':service'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatConfigRoutingKey(
  args: InferRequestType<typeof client.api.v1.livechat.config.routing.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/config/routing', keyArgs] as const
}

export function useGetApiV1LivechatConfigRouting<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.config.routing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.config.routing.$get>>
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
        ? getGetApiV1LivechatConfigRoutingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.config.routing.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.config.routing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatConfigRouting<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.config.routing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.config.routing.$get>>
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
        ? getGetApiV1LivechatConfigRoutingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.livechat.config.routing.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.config.routing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatTriggersKey(
  args: InferRequestType<typeof client.api.v1.livechat.triggers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/triggers', keyArgs] as const
}

export function useGetApiV1LivechatTriggers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.triggers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$get>>>
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
        ? getGetApiV1LivechatTriggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.triggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatTriggers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.triggers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$get>>>
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
        ? getGetApiV1LivechatTriggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.triggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatTriggersKey() {
  return ['api', '/api/v1/livechat/triggers', 'POST'] as const
}

export function usePostApiV1LivechatTriggers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.triggers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.livechat.triggers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatTriggersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.livechat.triggers.$post> },
      ) => parseResponse(client.api.v1.livechat.triggers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatTriggersIdKey(
  args: InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/triggers/:_id', keyArgs] as const
}

export function useGetApiV1LivechatTriggersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>>
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
        ? getGetApiV1LivechatTriggersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.triggers[':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatTriggersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>>
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
        ? getGetApiV1LivechatTriggersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.triggers)[':_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.triggers[':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1LivechatTriggersIdKey() {
  return ['api', '/api/v1/livechat/triggers/:_id', 'DELETE'] as const
}

export function useDeleteApiV1LivechatTriggersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.triggers)[':_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1LivechatTriggersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat.triggers)[':_id']['$delete']> },
      ) => parseResponse(client.api.v1.livechat.triggers[':_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatTriggersExternalServiceTestKey() {
  return ['api', '/api/v1/livechat/triggers/external-service/test', 'POST'] as const
}

export function usePostApiV1LivechatTriggersExternalServiceTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.livechat.triggers)['external-service']['test']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.triggers)['external-service']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatTriggersExternalServiceTestKey()
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
            (typeof client.api.v1.livechat.triggers)['external-service']['test']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.livechat.triggers['external-service'].test.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatMonitorsKey(
  args: InferRequestType<typeof client.api.v1.livechat.monitors.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/monitors', keyArgs] as const
}

export function useGetApiV1LivechatMonitors<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.monitors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.monitors.$get>>>
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
        ? getGetApiV1LivechatMonitorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.monitors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.monitors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatMonitors<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.monitors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.monitors.$get>>>
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
        ? getGetApiV1LivechatMonitorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.monitors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.monitors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatMonitorsUsernameKey(
  args: InferRequestType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/monitors/:username', keyArgs] as const
}

export function useGetApiV1LivechatMonitorsUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>>
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
        ? getGetApiV1LivechatMonitorsUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.monitors[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatMonitorsUsername<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>>
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
        ? getGetApiV1LivechatMonitorsUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.monitors)[':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.monitors[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatMonitorsDeleteKey() {
  return ['api', '/api/v1/livechat/monitors.delete', 'POST'] as const
}

export function usePostApiV1LivechatMonitorsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['monitors.delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['monitors.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatMonitorsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['monitors.delete']['$post']> },
      ) => parseResponse(client.api.v1.livechat['monitors.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatMonitorsCreateKey() {
  return ['api', '/api/v1/livechat/monitors.create', 'POST'] as const
}

export function usePostApiV1LivechatMonitorsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['monitors.create']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['monitors.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatMonitorsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['monitors.create']['$post']> },
      ) => parseResponse(client.api.v1.livechat['monitors.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatPrioritiesKey(
  args: InferRequestType<typeof client.api.v1.livechat.priorities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/priorities', keyArgs] as const
}

export function useGetApiV1LivechatPriorities<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.priorities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.priorities.$get>>>
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
        ? getGetApiV1LivechatPrioritiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.priorities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.priorities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatPriorities<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.priorities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.priorities.$get>>>
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
        ? getGetApiV1LivechatPrioritiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.priorities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.priorities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatPrioritiesPriorityIdKey(
  args: InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/priorities/:priorityId', keyArgs] as const
}

export function useGetApiV1LivechatPrioritiesPriorityId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>>
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
        ? getGetApiV1LivechatPrioritiesPriorityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.priorities[':priorityId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatPrioritiesPriorityId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>>
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
        ? getGetApiV1LivechatPrioritiesPriorityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.priorities[':priorityId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1LivechatPrioritiesPriorityIdKey() {
  return ['api', '/api/v1/livechat/priorities/:priorityId', 'PUT'] as const
}

export function usePutApiV1LivechatPrioritiesPriorityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1LivechatPrioritiesPriorityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.livechat.priorities)[':priorityId']['$put']>
        },
      ) => parseResponse(client.api.v1.livechat.priorities[':priorityId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatPrioritiesResetKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/priorities.reset', keyArgs] as const
}

export function useGetApiV1LivechatPrioritiesReset<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>>
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
        ? getGetApiV1LivechatPrioritiesResetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['priorities.reset'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatPrioritiesReset<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>>
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
        ? getGetApiV1LivechatPrioritiesResetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['priorities.reset'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatPrioritiesResetKey() {
  return ['api', '/api/v1/livechat/priorities.reset', 'POST'] as const
}

export function usePostApiV1LivechatPrioritiesReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['priorities.reset']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatPrioritiesResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['priorities.reset']['$post']> },
      ) => parseResponse(client.api.v1.livechat['priorities.reset'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatTagsKey(
  args: InferRequestType<typeof client.api.v1.livechat.tags.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/tags', keyArgs] as const
}

export function useGetApiV1LivechatTags<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.tags.$get>>>
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
        ? getGetApiV1LivechatTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.tags.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatTags<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.tags.$get>>>
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
        ? getGetApiV1LivechatTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.tags.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatTagsTagIdKey(
  args: InferRequestType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/tags/:tagId', keyArgs] as const
}

export function useGetApiV1LivechatTagsTagId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>>
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
        ? getGetApiV1LivechatTagsTagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.tags[':tagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatTagsTagId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>>
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
        ? getGetApiV1LivechatTagsTagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.tags)[':tagId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.tags[':tagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatTagsDeleteKey() {
  return ['api', '/api/v1/livechat/tags.delete', 'POST'] as const
}

export function usePostApiV1LivechatTagsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['tags.delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['tags.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatTagsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.livechat)['tags.delete']['$post']> },
      ) => parseResponse(client.api.v1.livechat['tags.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatTagsSaveKey() {
  return ['api', '/api/v1/livechat/tags.save', 'POST'] as const
}

export function usePostApiV1LivechatTagsSave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['tags.save']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['tags.save']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatTagsSaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.livechat)['tags.save']['$post']> },
      ) => parseResponse(client.api.v1.livechat['tags.save'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatUnitsKey(
  args: InferRequestType<typeof client.api.v1.livechat.units.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/units', keyArgs] as const
}

export function useGetApiV1LivechatUnits<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.units.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$get>>>
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
        ? getGetApiV1LivechatUnitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.units.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatUnits<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.units.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$get>>>
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
        ? getGetApiV1LivechatUnitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.units.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatUnitsKey() {
  return ['api', '/api/v1/livechat/units', 'POST'] as const
}

export function usePostApiV1LivechatUnits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.units.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.livechat.units.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatUnitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.livechat.units.$post> },
      ) => parseResponse(client.api.v1.livechat.units.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatUnitsIdKey(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/units/:id', keyArgs] as const
}

export function useGetApiV1LivechatUnitsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$get']>>
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
        ? getGetApiV1LivechatUnitsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.units[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatUnitsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$get']>>
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
        ? getGetApiV1LivechatUnitsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.units[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatUnitsIdKey() {
  return ['api', '/api/v1/livechat/units/:id', 'POST'] as const
}

export function usePostApiV1LivechatUnitsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatUnitsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$post']> },
      ) => parseResponse(client.api.v1.livechat.units[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1LivechatUnitsIdKey() {
  return ['api', '/api/v1/livechat/units/:id', 'DELETE'] as const
}

export function useDeleteApiV1LivechatUnitsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.units)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1LivechatUnitsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.livechat.units)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.livechat.units[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatUnitsUnitIdMonitorsKey(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/units/:unitId/monitors', keyArgs] as const
}

export function useGetApiV1LivechatUnitsUnitIdMonitors<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>
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
        ? getGetApiV1LivechatUnitsUnitIdMonitorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.units[':unitId'].monitors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatUnitsUnitIdMonitors<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>
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
        ? getGetApiV1LivechatUnitsUnitIdMonitorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['monitors']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.units[':unitId'].monitors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatUnitsUnitIdDepartmentsAvailableKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/units/:unitId/departments/available', keyArgs] as const
}

export function useGetApiV1LivechatUnitsUnitIdDepartmentsAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
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
        ? getGetApiV1LivechatUnitsUnitIdDepartmentsAvailableKey(args)
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
                (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
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
          client.api.v1.livechat.units[':unitId'].departments.available.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatUnitsUnitIdDepartmentsAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
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
        ? getGetApiV1LivechatUnitsUnitIdDepartmentsAvailableKey(args)
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
                (typeof client.api.v1.livechat.units)[':unitId']['departments']['available']['$get']
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
          client.api.v1.livechat.units[':unitId'].departments.available.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatUnitsUnitIdDepartmentsKey(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/units/:unitId/departments', keyArgs] as const
}

export function useGetApiV1LivechatUnitsUnitIdDepartments<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>
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
        ? getGetApiV1LivechatUnitsUnitIdDepartmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.livechat.units[':unitId'].departments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatUnitsUnitIdDepartments<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>
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
        ? getGetApiV1LivechatUnitsUnitIdDepartmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.livechat.units)[':unitId']['departments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.livechat.units[':unitId'].departments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDashboardsConversationsByStatusKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/conversations-by-status', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDashboardsConversationsByStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsConversationsByStatusKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
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
          client.api.v1.livechat.analytics.dashboards['conversations-by-status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDashboardsConversationsByStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsConversationsByStatusKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-status']['$get']
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
          client.api.v1.livechat.analytics.dashboards['conversations-by-status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDashboardsConversationsByDepartmentKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/analytics/dashboards/conversations-by-department',
    keyArgs,
  ] as const
}

export function useGetApiV1LivechatAnalyticsDashboardsConversationsByDepartment<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsConversationsByDepartmentKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
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
          client.api.v1.livechat.analytics.dashboards['conversations-by-department'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDashboardsConversationsByDepartment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsConversationsByDepartmentKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-department']['$get']
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
          client.api.v1.livechat.analytics.dashboards['conversations-by-department'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDashboardsConversationsByTagsKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/conversations-by-tags', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDashboardsConversationsByTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsConversationsByTagsKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
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
          client.api.v1.livechat.analytics.dashboards['conversations-by-tags'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDashboardsConversationsByTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsConversationsByTagsKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-tags']['$get']
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
          client.api.v1.livechat.analytics.dashboards['conversations-by-tags'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDashboardsConversationsByAgentKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/conversations-by-agent', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDashboardsConversationsByAgent<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsConversationsByAgentKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
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
          client.api.v1.livechat.analytics.dashboards['conversations-by-agent'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDashboardsConversationsByAgent<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsConversationsByAgentKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-agent']['$get']
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
          client.api.v1.livechat.analytics.dashboards['conversations-by-agent'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatAnalyticsDashboardsConversationsBySourceKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/analytics/dashboards/conversations-by-source', keyArgs] as const
}

export function useGetApiV1LivechatAnalyticsDashboardsConversationsBySource<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsConversationsBySourceKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
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
          client.api.v1.livechat.analytics.dashboards['conversations-by-source'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatAnalyticsDashboardsConversationsBySource<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
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
        ? getGetApiV1LivechatAnalyticsDashboardsConversationsBySourceKey(args)
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
                (typeof client.api.v1.livechat.analytics.dashboards)['conversations-by-source']['$get']
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
          client.api.v1.livechat.analytics.dashboards['conversations-by-source'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatSlaKey(
  args: InferRequestType<typeof client.api.v1.livechat.sla.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/sla', keyArgs] as const
}

export function useGetApiV1LivechatSla<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.sla.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$get>>>
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
        ? getGetApiV1LivechatSlaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.sla.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatSla<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.livechat.sla.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$get>>>
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
        ? getGetApiV1LivechatSlaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.sla.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatSlaKey() {
  return ['api', '/api/v1/livechat/sla', 'POST'] as const
}

export function usePostApiV1LivechatSla<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.sla.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.livechat.sla.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatSlaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.livechat.sla.$post> }) =>
        parseResponse(client.api.v1.livechat.sla.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatSlaSlaIdKey(
  args: InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/sla/:slaId', keyArgs] as const
}

export function useGetApiV1LivechatSlaSlaId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>>
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
        ? getGetApiV1LivechatSlaSlaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.sla[':slaId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatSlaSlaId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>>
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
        ? getGetApiV1LivechatSlaSlaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.sla[':slaId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1LivechatSlaSlaIdKey() {
  return ['api', '/api/v1/livechat/sla/:slaId', 'PUT'] as const
}

export function usePutApiV1LivechatSlaSlaId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1LivechatSlaSlaIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$put']> },
      ) => parseResponse(client.api.v1.livechat.sla[':slaId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1LivechatSlaSlaIdKey() {
  return ['api', '/api/v1/livechat/sla/:slaId', 'DELETE'] as const
}

export function useDeleteApiV1LivechatSlaSlaId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.sla)[':slaId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1LivechatSlaSlaIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat.sla)[':slaId']['$delete']> },
      ) => parseResponse(client.api.v1.livechat.sla[':slaId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatVisitorKey() {
  return ['api', '/api/v1/livechat/visitor', 'POST'] as const
}

export function usePostApiV1LivechatVisitor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.visitor.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.livechat.visitor.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatVisitorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.livechat.visitor.$post> },
      ) => parseResponse(client.api.v1.livechat.visitor.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatVisitorTokenKey(
  args: InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>,
) {
  return ['api', '/api/v1/livechat/visitor/:token', args] as const
}

export function useGetApiV1LivechatVisitorToken<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>>
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
        ? getGetApiV1LivechatVisitorTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.visitor[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatVisitorToken<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>>
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
        ? getGetApiV1LivechatVisitorTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.visitor[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1LivechatVisitorTokenKey() {
  return ['api', '/api/v1/livechat/visitor/:token', 'DELETE'] as const
}

export function useDeleteApiV1LivechatVisitorToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1LivechatVisitorTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['$delete']> },
      ) => parseResponse(client.api.v1.livechat.visitor[':token'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatVisitorsInfoKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/visitors.info', keyArgs] as const
}

export function useGetApiV1LivechatVisitorsInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.info']['$get']>>
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
        ? getGetApiV1LivechatVisitorsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat['visitors.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatVisitorsInfo<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.info']['$get']>>
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
        ? getGetApiV1LivechatVisitorsInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat['visitors.info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatVisitorTokenRoomKey(
  args: InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/visitor/:token/room', keyArgs] as const
}

export function useGetApiV1LivechatVisitorTokenRoom<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>>
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
        ? getGetApiV1LivechatVisitorTokenRoomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.visitor[':token'].room.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatVisitorTokenRoom<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>>
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
        ? getGetApiV1LivechatVisitorTokenRoomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.visitor)[':token']['room']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat.visitor[':token'].room.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatVisitorsSearchKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/visitors.search', keyArgs] as const
}

export function useGetApiV1LivechatVisitorsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.search']['$get']>>
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
        ? getGetApiV1LivechatVisitorsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['visitors.search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatVisitorsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.search']['$get']>>
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
        ? getGetApiV1LivechatVisitorsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['visitors.search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatVisitorsPagesVisitedRoomIdKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/visitors.pagesVisited/:roomId', keyArgs] as const
}

export function useGetApiV1LivechatVisitorsPagesVisitedRoomId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']
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
        ? getGetApiV1LivechatVisitorsPagesVisitedRoomIdKey(args)
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
                (typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']
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
          client.api.v1.livechat['visitors.pagesVisited'][':roomId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatVisitorsPagesVisitedRoomId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']
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
        ? getGetApiV1LivechatVisitorsPagesVisitedRoomIdKey(args)
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
                (typeof client.api.v1.livechat)['visitors.pagesVisited'][':roomId']['$get']
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
          client.api.v1.livechat['visitors.pagesVisited'][':roomId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/visitors.chatHistory/room/:roomId/visitor/:visitorId',
    keyArgs,
  ] as const
}

export function useGetApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
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
        ? getGetApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdKey(args)
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
                (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
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
          client.api.v1.livechat['visitors.chatHistory'].room[':roomId'].visitor[':visitorId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
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
        ? getGetApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdKey(args)
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
                (typeof client.api.v1.livechat)['visitors.chatHistory']['room'][':roomId']['visitor'][':visitorId']['$get']
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
          client.api.v1.livechat['visitors.chatHistory'].room[':roomId'].visitor[':visitorId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdKey(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/livechat/visitors.searchChats/room/:roomId/visitor/:visitorId',
    keyArgs,
  ] as const
}

export function useGetApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
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
        ? getGetApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdKey(args)
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
                (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
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
          client.api.v1.livechat['visitors.searchChats'].room[':roomId'].visitor[':visitorId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
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
        ? getGetApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdKey(args)
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
                (typeof client.api.v1.livechat)['visitors.searchChats']['room'][':roomId']['visitor'][':visitorId']['$get']
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
          client.api.v1.livechat['visitors.searchChats'].room[':roomId'].visitor[':visitorId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LivechatVisitorsAutocompleteKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/visitors.autocomplete', keyArgs] as const
}

export function useGetApiV1LivechatVisitorsAutocomplete<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>>
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
        ? getGetApiV1LivechatVisitorsAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['visitors.autocomplete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatVisitorsAutocomplete<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>>
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
        ? getGetApiV1LivechatVisitorsAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['visitors.autocomplete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['visitors.autocomplete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatVisitorStatusKey() {
  return ['api', '/api/v1/livechat/visitor.status', 'POST'] as const
}

export function usePostApiV1LivechatVisitorStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['visitor.status']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['visitor.status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatVisitorStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['visitor.status']['$post']> },
      ) => parseResponse(client.api.v1.livechat['visitor.status'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CannedResponsesKey(
  args: InferRequestType<(typeof client.api.v1)['canned-responses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/canned-responses', keyArgs] as const
}

export function useGetApiV1CannedResponses<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['canned-responses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['canned-responses']['$get']>>
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
        ? getGetApiV1CannedResponsesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['canned-responses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['canned-responses'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CannedResponses<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['canned-responses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['canned-responses']['$get']>>
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
        ? getGetApiV1CannedResponsesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['canned-responses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['canned-responses'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1CannedResponsesKey() {
  return ['api', '/api/v1/canned-responses', 'POST'] as const
}

export function usePostApiV1CannedResponses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['canned-responses']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['canned-responses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CannedResponsesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['canned-responses']['$post']> },
      ) => parseResponse(client.api.v1['canned-responses'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CannedResponsesGetKey(
  args: InferRequestType<(typeof client.api.v1)['canned-responses.get']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/canned-responses.get', keyArgs] as const
}

export function useGetApiV1CannedResponsesGet<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['canned-responses.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['canned-responses.get']['$get']>>
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
        ? getGetApiV1CannedResponsesGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['canned-responses.get']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['canned-responses.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CannedResponsesGet<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['canned-responses.get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['canned-responses.get']['$get']>>
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
        ? getGetApiV1CannedResponsesGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['canned-responses.get']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['canned-responses.get'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1CannedResponsesIdKey(
  args: InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/canned-responses/:_id', keyArgs] as const
}

export function useGetApiV1CannedResponsesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>>
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
        ? getGetApiV1CannedResponsesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['canned-responses'][':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CannedResponsesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>>
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
        ? getGetApiV1CannedResponsesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['canned-responses'][':_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['canned-responses'][':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1CannedResponsesIdKey() {
  return ['api', '/api/v1/canned-responses/:_id', 'DELETE'] as const
}

export function useDeleteApiV1CannedResponsesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['canned-responses'][':_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1CannedResponsesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['canned-responses'][':_id']['$delete']> },
      ) => parseResponse(client.api.v1['canned-responses'][':_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatMessageKey() {
  return ['api', '/api/v1/livechat/message', 'POST'] as const
}

export function usePostApiV1LivechatMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.message.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.livechat.message.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.livechat.message.$post> },
      ) => parseResponse(client.api.v1.livechat.message.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatMessagesKey() {
  return ['api', '/api/v1/livechat/messages', 'POST'] as const
}

export function usePostApiV1LivechatMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.livechat.messages.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.livechat.messages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.livechat.messages.$post> },
      ) => parseResponse(client.api.v1.livechat.messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatMessageIdKey(
  args: InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$get']>,
) {
  return ['api', '/api/v1/livechat/message/:_id', args] as const
}

export function useGetApiV1LivechatMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$get']>>
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
        ? getGetApiV1LivechatMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.message[':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$get']>>
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
        ? getGetApiV1LivechatMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat.message[':_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1LivechatMessageIdKey() {
  return ['api', '/api/v1/livechat/message/:_id', 'PUT'] as const
}

export function usePutApiV1LivechatMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1LivechatMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$put']> },
      ) => parseResponse(client.api.v1.livechat.message[':_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1LivechatMessageIdKey() {
  return ['api', '/api/v1/livechat/message/:_id', 'DELETE'] as const
}

export function useDeleteApiV1LivechatMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat.message)[':_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1LivechatMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat.message)[':_id']['$delete']> },
      ) => parseResponse(client.api.v1.livechat.message[':_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatMessagesHistoryRidKey(
  args: InferRequestType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>,
) {
  return ['api', '/api/v1/livechat/messages.history/:rid', args] as const
}

export function useGetApiV1LivechatMessagesHistoryRid<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>>
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
        ? getGetApiV1LivechatMessagesHistoryRidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['messages.history'][':rid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatMessagesHistoryRid<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>>
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
        ? getGetApiV1LivechatMessagesHistoryRidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)['messages.history'][':rid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.livechat['messages.history'][':rid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LivechatOfflineMessageKey() {
  return ['api', '/api/v1/livechat/offline.message', 'POST'] as const
}

export function usePostApiV1LivechatOfflineMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['offline.message']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['offline.message']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatOfflineMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['offline.message']['$post']> },
      ) => parseResponse(client.api.v1.livechat['offline.message'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LivechatRidMessagesKey(
  args: InferRequestType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/livechat/:rid/messages', keyArgs] as const
}

export function useGetApiV1LivechatRidMessages<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>>
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
        ? getGetApiV1LivechatRidMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat[':rid'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LivechatRidMessages<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>>
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
        ? getGetApiV1LivechatRidMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.livechat)[':rid']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.livechat[':rid'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1OmnichannelIntegrationsKey() {
  return ['api', '/api/v1/omnichannel/integrations', 'POST'] as const
}

export function usePostApiV1OmnichannelIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.omnichannel.integrations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.omnichannel.integrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1OmnichannelIntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.omnichannel.integrations.$post> },
      ) => parseResponse(client.api.v1.omnichannel.integrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LivechatWebhookTestKey() {
  return ['api', '/api/v1/livechat/webhook.test', 'POST'] as const
}

export function usePostApiV1LivechatWebhookTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.livechat)['webhook.test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.livechat)['webhook.test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LivechatWebhookTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.livechat)['webhook.test']['$post']> },
      ) => parseResponse(client.api.v1.livechat['webhook.test'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
