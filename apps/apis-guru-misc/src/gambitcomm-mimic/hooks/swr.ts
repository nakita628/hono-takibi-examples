import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMimicKey() {
  return ['mimic'] as const
}

export function getPostMimicAccessAddUserAgentsMaskKey() {
  return ['mimic', '/mimic/access/add/:user/:agents/:mask', 'POST'] as const
}

export function usePostMimicAccessAddUserAgentsMask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.access.add)[':user'][':agents'][':mask']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.access.add)[':user'][':agents'][':mask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMimicAccessAddUserAgentsMaskKey()
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
            (typeof client.mimic.access.add)[':user'][':agents'][':mask']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.access.add[':user'][':agents'][':mask'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMimicAccessDelUserKey() {
  return ['mimic', '/mimic/access/del/:user', 'DELETE'] as const
}

export function useDeleteMimicAccessDelUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.access.del)[':user']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.access.del)[':user']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAccessDelUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.mimic.access.del)[':user']['$delete']> },
      ) => parseResponse(client.mimic.access.del[':user'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAccessGetAcldbKey() {
  return ['mimic', '/mimic/access/get/acldb'] as const
}

export function useGetMimicAccessGetAcldb<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.acldb.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicAccessGetAcldbKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.acldb.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.access.get.acldb.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAccessGetAcldb<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.acldb.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicAccessGetAcldbKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.acldb.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.access.get.acldb.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAccessGetAdmindirKey() {
  return ['mimic', '/mimic/access/get/admindir'] as const
}

export function useGetMimicAccessGetAdmindir<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.admindir.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicAccessGetAdmindirKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.admindir.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.access.get.admindir.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAccessGetAdmindir<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.admindir.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicAccessGetAdmindirKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.admindir.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.access.get.admindir.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAccessGetAdminuserKey() {
  return ['mimic', '/mimic/access/get/adminuser'] as const
}

export function useGetMimicAccessGetAdminuser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.adminuser.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicAccessGetAdminuserKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.adminuser.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.access.get.adminuser.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAccessGetAdminuser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.adminuser.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicAccessGetAdminuserKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.adminuser.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.access.get.adminuser.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAccessGetEnabledKey() {
  return ['mimic', '/mimic/access/get/enabled'] as const
}

export function useGetMimicAccessGetEnabled<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.enabled.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicAccessGetEnabledKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.enabled.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.access.get.enabled.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAccessGetEnabled<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.enabled.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicAccessGetEnabledKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.enabled.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.access.get.enabled.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAccessListKey() {
  return ['mimic', '/mimic/access/list'] as const
}

export function useGetMimicAccessList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.list.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicAccessListKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.access.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAccessList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.list.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicAccessListKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.access.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAccessLoadFilenameKey() {
  return ['mimic', '/mimic/access/load/:filename', 'PUT'] as const
}

export function usePutMimicAccessLoadFilename<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.access.load)[':filename']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.access.load)[':filename']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAccessLoadFilenameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.mimic.access.load)[':filename']['$put']> },
      ) => parseResponse(client.mimic.access.load[':filename'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAccessSaveFilenameKey() {
  return ['mimic', '/mimic/access/save/:filename', 'PUT'] as const
}

export function usePutMimicAccessSaveFilename<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.access.save)[':filename']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.access.save)[':filename']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAccessSaveFilenameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.mimic.access.save)[':filename']['$put']> },
      ) => parseResponse(client.mimic.access.save[':filename'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAccessSetAcldbDatabaseNameKey() {
  return ['mimic', '/mimic/access/set/acldb/:databaseName', 'PUT'] as const
}

export function usePutMimicAccessSetAcldbDatabaseName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.access.set.acldb)[':databaseName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.access.set.acldb)[':databaseName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAccessSetAcldbDatabaseNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mimic.access.set.acldb)[':databaseName']['$put']>
        },
      ) => parseResponse(client.mimic.access.set.acldb[':databaseName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAccessSetEnabledEnabledOrNotKey() {
  return ['mimic', '/mimic/access/set/enabled/:enabledOrNot', 'PUT'] as const
}

export function usePutMimicAccessSetEnabledEnabledOrNot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.access.set.enabled)[':enabledOrNot']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.access.set.enabled)[':enabledOrNot']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAccessSetEnabledEnabledOrNotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mimic.access.set.enabled)[':enabledOrNot']['$put']>
        },
      ) => parseResponse(client.mimic.access.set.enabled[':enabledOrNot'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMimicAgentAgentNumAddIPKey() {
  return ['mimic', '/mimic/agent/:agentNum/add/:IP', 'POST'] as const
}

export function usePostMimicAgentAgentNumAddIP<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['add'][':IP']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['add'][':IP']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMimicAgentAgentNumAddIPKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mimic.agent)[':agentNum']['add'][':IP']['$post']>
        },
      ) => parseResponse(client.mimic.agent[':agentNum'].add[':IP'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMimicAgentAgentNumFromAddIPPortKey() {
  return ['mimic', '/mimic/agent/:agentNum/from/add/:IP/:port', 'POST'] as const
}

export function usePostMimicAgentAgentNumFromAddIPPort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['from']['add'][':IP'][':port']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['from']['add'][':IP'][':port']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMimicAgentAgentNumFromAddIPPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['from']['add'][':IP'][':port']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].from.add[':IP'][':port'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumFromDeleteIPPortKey() {
  return ['mimic', '/mimic/agent/:agentNum/from/delete/:IP/:port', 'DELETE'] as const
}

export function useDeleteMimicAgentAgentNumFromDeleteIPPort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['from']['delete'][':IP'][':port']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['from']['delete'][':IP'][':port']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumFromDeleteIPPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['from']['delete'][':IP'][':port']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].from.delete[':IP'][':port'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumFromListKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/from/list', args] as const
}

export function useGetMimicAgentAgentNumFromList<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>>
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
        ? getGetMimicAgentAgentNumFromListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].from.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumFromList<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>>
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
        ? getGetMimicAgentAgentNumFromListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].from.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetChangedKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/changed', args] as const
}

export function useGetMimicAgentAgentNumGetChanged<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>>
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
        ? getGetMimicAgentAgentNumGetChangedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.changed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetChanged<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>>
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
        ? getGetMimicAgentAgentNumGetChangedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.changed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetConfigChangedKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/config_changed', args] as const
}

export function useGetMimicAgentAgentNumGetConfigChanged<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>
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
        ? getGetMimicAgentAgentNumGetConfigChangedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.config_changed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetConfigChanged<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>
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
        ? getGetMimicAgentAgentNumGetConfigChangedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.config_changed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetDelayKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/delay', args] as const
}

export function useGetMimicAgentAgentNumGetDelay<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>>
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
        ? getGetMimicAgentAgentNumGetDelayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.delay.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetDelay<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>>
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
        ? getGetMimicAgentAgentNumGetDelayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.delay.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetDropsKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/drops', args] as const
}

export function useGetMimicAgentAgentNumGetDrops<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>>
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
        ? getGetMimicAgentAgentNumGetDropsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.drops.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetDrops<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>>
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
        ? getGetMimicAgentAgentNumGetDropsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.drops.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetHostKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/host', args] as const
}

export function useGetMimicAgentAgentNumGetHost<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>>
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
        ? getGetMimicAgentAgentNumGetHostKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.agent[':agentNum'].get.host.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetHost<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>>
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
        ? getGetMimicAgentAgentNumGetHostKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.agent[':agentNum'].get.host.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetInformTimeoutKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/inform_timeout', args] as const
}

export function useGetMimicAgentAgentNumGetInformTimeout<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>
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
        ? getGetMimicAgentAgentNumGetInformTimeoutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.inform_timeout.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetInformTimeout<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>
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
        ? getGetMimicAgentAgentNumGetInformTimeoutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.inform_timeout.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetInterfaceKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/interface', args] as const
}

export function useGetMimicAgentAgentNumGetInterface<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>
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
        ? getGetMimicAgentAgentNumGetInterfaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.interface.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetInterface<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>
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
        ? getGetMimicAgentAgentNumGetInterfaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.interface.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetMaskKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/mask', args] as const
}

export function useGetMimicAgentAgentNumGetMask<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>>
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
        ? getGetMimicAgentAgentNumGetMaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.agent[':agentNum'].get.mask.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetMask<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>>
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
        ? getGetMimicAgentAgentNumGetMaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.agent[':agentNum'].get.mask.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetMibsKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/mibs', args] as const
}

export function useGetMimicAgentAgentNumGetMibs<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>>
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
        ? getGetMimicAgentAgentNumGetMibsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.agent[':agentNum'].get.mibs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetMibs<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>>
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
        ? getGetMimicAgentAgentNumGetMibsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.agent[':agentNum'].get.mibs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetNumStartsKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/num_starts', args] as const
}

export function useGetMimicAgentAgentNumGetNumStarts<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>
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
        ? getGetMimicAgentAgentNumGetNumStartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.num_starts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetNumStarts<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>
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
        ? getGetMimicAgentAgentNumGetNumStartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.num_starts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetOiddirKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/oiddir', args] as const
}

export function useGetMimicAgentAgentNumGetOiddir<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>>
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
        ? getGetMimicAgentAgentNumGetOiddirKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.oiddir.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetOiddir<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>>
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
        ? getGetMimicAgentAgentNumGetOiddirKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.oiddir.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetOwnerKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/owner', args] as const
}

export function useGetMimicAgentAgentNumGetOwner<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>>
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
        ? getGetMimicAgentAgentNumGetOwnerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.owner.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetOwner<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>>
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
        ? getGetMimicAgentAgentNumGetOwnerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.owner.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetPdusizeKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/pdusize', args] as const
}

export function useGetMimicAgentAgentNumGetPdusize<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>>
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
        ? getGetMimicAgentAgentNumGetPdusizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.pdusize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetPdusize<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>>
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
        ? getGetMimicAgentAgentNumGetPdusizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.pdusize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetPortKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/port', args] as const
}

export function useGetMimicAgentAgentNumGetPort<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>>
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
        ? getGetMimicAgentAgentNumGetPortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.agent[':agentNum'].get.port.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetPort<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>>
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
        ? getGetMimicAgentAgentNumGetPortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.agent[':agentNum'].get.port.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetPrivdirKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/privdir', args] as const
}

export function useGetMimicAgentAgentNumGetPrivdir<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>>
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
        ? getGetMimicAgentAgentNumGetPrivdirKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.privdir.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetPrivdir<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>>
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
        ? getGetMimicAgentAgentNumGetPrivdirKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.privdir.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetProtocolKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/protocol', args] as const
}

export function useGetMimicAgentAgentNumGetProtocol<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>>
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
        ? getGetMimicAgentAgentNumGetProtocolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.protocol.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetProtocol<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>>
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
        ? getGetMimicAgentAgentNumGetProtocolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.protocol.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetReadKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/read', args] as const
}

export function useGetMimicAgentAgentNumGetRead<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>>
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
        ? getGetMimicAgentAgentNumGetReadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.agent[':agentNum'].get.read.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetRead<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>>
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
        ? getGetMimicAgentAgentNumGetReadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.agent[':agentNum'].get.read.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetScenKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/scen', args] as const
}

export function useGetMimicAgentAgentNumGetScen<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>>
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
        ? getGetMimicAgentAgentNumGetScenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.agent[':agentNum'].get.scen.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetScen<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>>
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
        ? getGetMimicAgentAgentNumGetScenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.agent[':agentNum'].get.scen.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetSimKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/sim', args] as const
}

export function useGetMimicAgentAgentNumGetSim<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>>
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
        ? getGetMimicAgentAgentNumGetSimKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.agent[':agentNum'].get.sim.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetSim<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>>
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
        ? getGetMimicAgentAgentNumGetSimKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.agent[':agentNum'].get.sim.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetStartKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/start', args] as const
}

export function useGetMimicAgentAgentNumGetStart<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>>
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
        ? getGetMimicAgentAgentNumGetStartKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.start.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetStart<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>>
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
        ? getGetMimicAgentAgentNumGetStartKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.start.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetStateKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/state', args] as const
}

export function useGetMimicAgentAgentNumGetState<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>>
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
        ? getGetMimicAgentAgentNumGetStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetState<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>>
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
        ? getGetMimicAgentAgentNumGetStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetStateChangedKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/state_changed', args] as const
}

export function useGetMimicAgentAgentNumGetStateChanged<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>
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
        ? getGetMimicAgentAgentNumGetStateChangedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.state_changed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetStateChanged<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>
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
        ? getGetMimicAgentAgentNumGetStateChangedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.state_changed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetStatisticsKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/statistics', args] as const
}

export function useGetMimicAgentAgentNumGetStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>
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
        ? getGetMimicAgentAgentNumGetStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetStatistics<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>
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
        ? getGetMimicAgentAgentNumGetStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetTraceKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/trace', args] as const
}

export function useGetMimicAgentAgentNumGetTrace<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>>
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
        ? getGetMimicAgentAgentNumGetTraceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.trace.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetTrace<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>>
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
        ? getGetMimicAgentAgentNumGetTraceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.trace.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetValidateKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/validate', args] as const
}

export function useGetMimicAgentAgentNumGetValidate<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>>
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
        ? getGetMimicAgentAgentNumGetValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetValidate<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>>
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
        ? getGetMimicAgentAgentNumGetValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumGetWriteKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/write', args] as const
}

export function useGetMimicAgentAgentNumGetWrite<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>>
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
        ? getGetMimicAgentAgentNumGetWriteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.write.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumGetWrite<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>>
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
        ? getGetMimicAgentAgentNumGetWriteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].get.write.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumHaltKey() {
  return ['mimic', '/mimic/agent/:agentNum/halt', 'PUT'] as const
}

export function usePutMimicAgentAgentNumHalt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['halt']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['halt']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumHaltKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mimic.agent)[':agentNum']['halt']['$put']> },
      ) => parseResponse(client.mimic.agent[':agentNum'].halt.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMimicAgentAgentNumIpaliasAddIPPortMaskInterfaceKey() {
  return ['mimic', '/mimic/agent/:agentNum/ipalias/add/:IP/:port/:mask/:interface', 'POST'] as const
}

export function usePostMimicAgentAgentNumIpaliasAddIPPortMaskInterface<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['ipalias']['add'][':IP'][':port'][':mask'][':interface']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['ipalias']['add'][':IP'][':port'][':mask'][':interface']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMimicAgentAgentNumIpaliasAddIPPortMaskInterfaceKey()
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
            (typeof client.mimic.agent)[':agentNum']['ipalias']['add'][':IP'][':port'][':mask'][':interface']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].ipalias.add[':IP'][':port'][':mask'][':interface'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumIpaliasDeleteIPPortKey() {
  return ['mimic', '/mimic/agent/:agentNum/ipalias/delete/:IP/:port', 'DELETE'] as const
}

export function useDeleteMimicAgentAgentNumIpaliasDeleteIPPort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['ipalias']['delete'][':IP'][':port']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['ipalias']['delete'][':IP'][':port']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumIpaliasDeleteIPPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['ipalias']['delete'][':IP'][':port']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].ipalias.delete[':IP'][':port'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumIpaliasListKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/ipalias/list', args] as const
}

export function useGetMimicAgentAgentNumIpaliasList<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>>
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
        ? getGetMimicAgentAgentNumIpaliasListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].ipalias.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumIpaliasList<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>>
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
        ? getGetMimicAgentAgentNumIpaliasListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].ipalias.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumIpaliasStartIPPortKey() {
  return ['mimic', '/mimic/agent/:agentNum/ipalias/start/:IP/:port', 'PUT'] as const
}

export function usePutMimicAgentAgentNumIpaliasStartIPPort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['ipalias']['start'][':IP'][':port']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['ipalias']['start'][':IP'][':port']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumIpaliasStartIPPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['ipalias']['start'][':IP'][':port']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].ipalias.start[':IP'][':port'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumIpaliasStatusIPPortKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/ipalias/status/:IP/:port', args] as const
}

export function useGetMimicAgentAgentNumIpaliasStatusIPPort<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
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
        ? getGetMimicAgentAgentNumIpaliasStatusIPPortKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
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
          client.mimic.agent[':agentNum'].ipalias.status[':IP'][':port'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumIpaliasStatusIPPort<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
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
        ? getGetMimicAgentAgentNumIpaliasStatusIPPortKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
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
          client.mimic.agent[':agentNum'].ipalias.status[':IP'][':port'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumIpaliasStopIPPortKey() {
  return ['mimic', '/mimic/agent/:agentNum/ipalias/stop/:IP/:port', 'PUT'] as const
}

export function usePutMimicAgentAgentNumIpaliasStopIPPort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['ipalias']['stop'][':IP'][':port']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['ipalias']['stop'][':IP'][':port']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumIpaliasStopIPPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['ipalias']['stop'][':IP'][':port']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].ipalias.stop[':IP'][':port'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumPauseKey() {
  return ['mimic', '/mimic/agent/:agentNum/pause', 'PUT'] as const
}

export function usePutMimicAgentAgentNumPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['pause']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['pause']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mimic.agent)[':agentNum']['pause']['$put']> },
      ) => parseResponse(client.mimic.agent[':agentNum'].pause.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgCoapGetArgsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/coap/get/args', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgCoapGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgCoapGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.coap.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgCoapGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgCoapGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.coap.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgCoapGetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/coap/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgCoapGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgCoapGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.coap.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgCoapGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgCoapGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.coap.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgCoapGetStatisticsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/coap/get/statistics', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgCoapGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgCoapGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.coap.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgCoapGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgCoapGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.coap.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgCoapGetTraceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/coap/get/trace', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgCoapGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgCoapGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.coap.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgCoapGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgCoapGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.coap.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/coap/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['set']['config'][':argument'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['set']['config'][':argument'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['set']['config'][':argument'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.coap.set.config[':argument'][':value'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNotKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/coap/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['set']['trace'][':enableOrNot']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['set']['trace'][':enableOrNot']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNotKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['set']['trace'][':enableOrNot']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.coap.set.trace[':enableOrNot'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgDhcpGetArgsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/dhcp/get/args', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgDhcpGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgDhcpGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgDhcpGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgDhcpGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgDhcpGetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/dhcp/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgDhcpGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgDhcpGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgDhcpGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgDhcpGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgDhcpGetStatisticsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/dhcp/get/statistics', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgDhcpGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgDhcpGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgDhcpGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgDhcpGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgDhcpGetTraceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/dhcp/get/trace', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgDhcpGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgDhcpGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgDhcpGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgDhcpGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgDhcpParamsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/dhcp/params', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgDhcpParams<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgDhcpParamsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.params.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgDhcpParams<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgDhcpParamsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.params.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/dhcp/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['set']['config'][':argument'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['set']['config'][':argument'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['set']['config'][':argument'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.set.config[':argument'][':value'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNotKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/dhcp/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['set']['trace'][':enableOrNot']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['set']['trace'][':enableOrNot']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNotKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['set']['trace'][':enableOrNot']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.set.trace[':enableOrNot'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgIpmiGetArgsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/get/args', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgIpmiGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgIpmiGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgIpmiGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgIpmiGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgIpmiGetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgIpmiGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgIpmiGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgIpmiGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgIpmiGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgIpmiGetStatisticsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/get/statistics', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgIpmiGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgIpmiGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgIpmiGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgIpmiGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgIpmiGetTraceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/get/trace', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgIpmiGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgIpmiGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgIpmiGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgIpmiGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgIpmiGetAttrKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/get/:attr', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgIpmiGetAttr<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgIpmiGetAttrKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.get[':attr'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgIpmiGetAttr<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgIpmiGetAttrKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.get[':attr'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/ipmi/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set']['config'][':argument'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set']['config'][':argument'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set']['config'][':argument'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.set.config[':argument'][':value'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNotKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/ipmi/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set']['trace'][':enableOrNot']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set']['trace'][':enableOrNot']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNotKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set']['trace'][':enableOrNot']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.set.trace[':enableOrNot'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgIpmiSetAttrValueKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/set/:attr/:value', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgIpmiSetAttrValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set'][':attr'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set'][':attr'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgIpmiSetAttrValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set'][':attr'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.set[':attr'][':value'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgMqttClientGetProtstateKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/client/get/protstate', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgMqttClientGetProtstate<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttClientGetProtstateKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.get.protstate.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgMqttClientGetProtstate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttClientGetProtstateKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.get.protstate.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgMqttClientGetStateKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/client/get/state', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgMqttClientGetState<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttClientGetStateKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.get.state.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgMqttClientGetState<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttClientGetStateKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.get.state.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgMqttClientMessageCardKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/client/message/card', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgMqttClientMessageCard<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttClientMessageCardKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.message.card.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgMqttClientMessageCard<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttClientMessageCardKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.message.card.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/message/get/:msgNum/:attr',
    args,
  ] as const
}

export function useGetMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttr<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.message.get[':msgNum'][
            ':attr'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttr<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.message.get[':msgNum'][
            ':attr'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/message/set/:msgNum/:attr/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['set'][':msgNum'][':attr'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['set'][':msgNum'][':attr'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['set'][':msgNum'][':attr'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.message.set[':msgNum'][':attr'][
            ':value'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNumKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/resubscribe/:subNum',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNum<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['resubscribe'][':subNum']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['resubscribe'][':subNum']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNumKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['resubscribe'][':subNum']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.resubscribe[':subNum'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbortKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/client/runtime/abort', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbort<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['abort']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['abort']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['abort']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.runtime.abort.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnectKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/runtime/connect',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnect<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['connect']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['connect']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnectKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['connect']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.runtime.connect.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnectKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/runtime/disconnect',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnect<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['disconnect']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['disconnect']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnectKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['disconnect']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.runtime.disconnect.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddrKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/broker/:brokerAddr',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddr<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['broker'][':brokerAddr']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['broker'][':brokerAddr']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddrKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['broker'][':brokerAddr']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.broker[':brokerAddr'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNotKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/cleansession/:cleanOrNot',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['cleansession'][':cleanOrNot']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['cleansession'][':cleanOrNot']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNotKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['cleansession'][':cleanOrNot']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.cleansession[
            ':cleanOrNot'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientIDKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/clientid/:clientID',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['clientid'][':clientID']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['clientid'][':clientID']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientIDKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['clientid'][':clientID']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.clientid[':clientID'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTimeKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/keepalive/:aliveTime',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTime<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['keepalive'][':aliveTime']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['keepalive'][':aliveTime']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTimeKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['keepalive'][':aliveTime']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.keepalive[':aliveTime'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectActionKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/on_disconnect/:action',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['on_disconnect'][':action']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['on_disconnect'][':action']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectActionKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['on_disconnect'][':action']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.on_disconnect[
            ':action'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPasswordKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/password/:password',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPassword<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['password'][':password']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['password'][':password']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPasswordKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['password'][':password']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.password[':password'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetPortPortKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/port/:port', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetPortPort<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['port'][':port']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['port'][':port']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientSetPortPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['port'][':port']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.port[':port'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsernameKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/username/:username',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsername<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['username'][':username']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['username'][':username']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsernameKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['username'][':username']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.username[':username'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsgKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/willmsg/:msg',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsg<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willmsg'][':msg']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willmsg'][':msg']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsgKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willmsg'][':msg']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.willmsg[':msg'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQosKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/willqos/:qos',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQos<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willqos'][':qos']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willqos'][':qos']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQosKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willqos'][':qos']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.willqos[':qos'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetainKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/willretain/:retain',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetain<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willretain'][':retain']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willretain'][':retain']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetainKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willretain'][':retain']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.willretain[':retain'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopicKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/willtopic/:topic',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopic<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willtopic'][':topic']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willtopic'][':topic']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopicKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willtopic'][':topic']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.willtopic[':topic'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/client/subscribe/card', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgMqttClientSubscribeCard<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.subscribe.card.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgMqttClientSubscribeCard<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.subscribe.card.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/subscribe/get/:subNum/:attr',
    args,
  ] as const
}

export function useGetMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttr<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.subscribe.get[':subNum'][
            ':attr'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttr<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.subscribe.get[':subNum'][
            ':attr'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/subscribe/set/:subNum/:attr/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['set'][':subNum'][':attr'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['set'][':subNum'][':attr'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['set'][':subNum'][':attr'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.subscribe.set[':subNum'][
            ':attr'
          ][':value'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNumKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/unsubscribe/:subNum',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNum<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['unsubscribe'][':subNum']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['unsubscribe'][':subNum']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNumKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['unsubscribe'][':subNum']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.unsubscribe[':subNum'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgMqttGetArgsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/get/args', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgMqttGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgMqttGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgMqttGetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgMqttGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgMqttGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgMqttGetStatisticsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/get/statistics', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgMqttGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgMqttGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgMqttGetTraceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/get/trace', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgMqttGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgMqttGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgMqttGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['set']['config'][':argument'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['set']['config'][':argument'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['set']['config'][':argument'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.set.config[':argument'][':value'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNotKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['set']['trace'][':enableOrNot']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['set']['trace'][':enableOrNot']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNotKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['set']['trace'][':enableOrNot']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.set.trace[':enableOrNot'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalIntervalKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/netflow/flow/change/dfs_interval/:interval',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalInterval<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change']['dfs_interval'][':interval']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change']['dfs_interval'][':interval']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalIntervalKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change']['dfs_interval'][':interval']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.netflow.flow.change.dfs_interval[
            ':interval'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalIntervalKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/netflow/flow/change/tfs_interval/:interval',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalInterval<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change']['tfs_interval'][':interval']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change']['tfs_interval'][':interval']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalIntervalKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change']['tfs_interval'][':interval']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.netflow.flow.change.tfs_interval[
            ':interval'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/netflow/flow/change/:flowset-uid/:field-num/:attr/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change'][':flowset-uid'][':field-num'][':attr'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change'][':flowset-uid'][':field-num'][':attr'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change'][':flowset-uid'][':field-num'][':attr'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.netflow.flow.change[':flowset-uid'][
            ':field-num'
          ][':attr'][':value'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgNetflowFlowListKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/flow/list', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgNetflowFlowList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgNetflowFlowListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.netflow.flow.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgNetflowFlowList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgNetflowFlowListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.netflow.flow.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgNetflowGetArgsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/get/args', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgNetflowGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgNetflowGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.netflow.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgNetflowGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgNetflowGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.netflow.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgNetflowGetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgNetflowGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgNetflowGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.netflow.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgNetflowGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgNetflowGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.netflow.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgNetflowGetStatisticsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/get/statistics', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgNetflowGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgNetflowGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.netflow.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgNetflowGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgNetflowGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.netflow.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgNetflowGetTraceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/get/trace', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgNetflowGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgNetflowGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.netflow.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgNetflowGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgNetflowGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.netflow.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowHaltKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/halt', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgNetflowHalt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['halt']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['halt']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgNetflowHaltKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['halt']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.netflow.halt.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowReloadKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/reload', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgNetflowReload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['reload']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['reload']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgNetflowReloadKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['reload']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.netflow.reload.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowResumeKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/resume', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgNetflowResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['resume']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['resume']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgNetflowResumeKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['resume']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.netflow.resume.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIPKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/netflow/set/collector/:collectorIP',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIP<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['collector'][':collectorIP']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['collector'][':collectorIP']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIPKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['collector'][':collectorIP']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.netflow.set.collector[':collectorIP'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/netflow/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['config'][':argument'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['config'][':argument'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['config'][':argument'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.netflow.set.config[':argument'][
            ':value'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileNameKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/netflow/set/filename/:fileName',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['filename'][':fileName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['filename'][':fileName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileNameKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['filename'][':fileName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.netflow.set.filename[':fileName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNotKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/netflow/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['trace'][':enableOrNot']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['trace'][':enableOrNot']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNotKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['trace'][':enableOrNot']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.netflow.set.trace[':enableOrNot'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgProxyGetArgsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/get/args', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgProxyGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgProxyGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.proxy.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgProxyGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgProxyGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.proxy.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgProxyGetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgProxyGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgProxyGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.proxy.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgProxyGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgProxyGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.proxy.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgProxyGetStatisticsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/get/statistics', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgProxyGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgProxyGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.proxy.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgProxyGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgProxyGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.proxy.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgProxyGetTraceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/get/trace', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgProxyGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgProxyGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.proxy.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgProxyGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgProxyGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.proxy.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPortKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/proxy/port/add/:port/:target/:targetPort',
    'POST',
  ] as const
}

export function usePostMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPort<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['add'][':port'][':target'][':targetPort']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['add'][':port'][':target'][':targetPort']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['add'][':port'][':target'][':targetPort']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.proxy.port.add[':port'][':target'][
            ':targetPort'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/port/isStarted/:port', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgProxyPortIsStartedPort<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.proxy.port.isStarted[':port'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgProxyPortIsStartedPort<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.proxy.port.isStarted[':port'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgProxyPortListKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/port/list', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgProxyPortList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgProxyPortListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.proxy.port.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgProxyPortList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgProxyPortListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.proxy.port.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumProtocolMsgProxyPortRemovePortKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/port/remove/:port', 'DELETE'] as const
}

export function useDeleteMimicAgentAgentNumProtocolMsgProxyPortRemovePort<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['remove'][':port']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['remove'][':port']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumProtocolMsgProxyPortRemovePortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['remove'][':port']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.proxy.port.remove[':port'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgProxyPortStartPortKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/port/start/:port', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgProxyPortStartPort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['start'][':port']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['start'][':port']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgProxyPortStartPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['start'][':port']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.proxy.port.start[':port'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgProxyPortStopPortKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/port/stop/:port', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgProxyPortStopPort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['stop'][':port']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['stop'][':port']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgProxyPortStopPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['stop'][':port']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.proxy.port.stop[':port'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/proxy/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['set']['config'][':argument'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['set']['config'][':argument'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['set']['config'][':argument'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.proxy.set.config[':argument'][':value'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNotKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/proxy/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['set']['trace'][':enableOrNot']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['set']['trace'][':enableOrNot']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNotKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['set']['trace'][':enableOrNot']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.proxy.set.trace[':enableOrNot'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSflowGetArgsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/get/args', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSflowGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSflowGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.sflow.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSflowGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSflowGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.sflow.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSflowGetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSflowGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSflowGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.sflow.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSflowGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSflowGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.sflow.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSflowGetStatisticsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/get/statistics', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSflowGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSflowGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.sflow.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSflowGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSflowGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.sflow.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSflowGetTraceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/get/trace', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSflowGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSflowGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.sflow.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSflowGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSflowGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.sflow.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSflowHaltKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/halt', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSflowHalt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['halt']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['halt']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSflowHaltKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['halt']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.sflow.halt.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSflowReloadKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/reload', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSflowReload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['reload']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['reload']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSflowReloadKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['reload']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.sflow.reload.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSflowResumeKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/resume', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSflowResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['resume']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['resume']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSflowResumeKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['resume']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.sflow.resume.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/sflow/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['set']['config'][':argument'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['set']['config'][':argument'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['set']['config'][':argument'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.sflow.set.config[':argument'][':value'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNotKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/sflow/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['set']['trace'][':enableOrNot']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['set']['trace'][':enableOrNot']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNotKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['set']['trace'][':enableOrNot']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.sflow.set.trace[':enableOrNot'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSnmptcpGetArgsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/args', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSnmptcpGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmptcpGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSnmptcpGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmptcpGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSnmptcpGetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSnmptcpGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmptcpGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSnmptcpGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmptcpGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/statistics', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSnmptcpGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSnmptcpGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSnmptcpGetTraceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/trace', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSnmptcpGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmptcpGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSnmptcpGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmptcpGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPortKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/ipalias/disable/:ipaddress/:port',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPort<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['disable'][':ipaddress'][':port']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['disable'][':ipaddress'][':port']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['disable'][':ipaddress'][':port']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.disable[':ipaddress'][
            ':port'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPortKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/ipalias/enable/:ipaddress/:port',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPort<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['enable'][':ipaddress'][':port']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['enable'][':ipaddress'][':port']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['enable'][':ipaddress'][':port']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.enable[':ipaddress'][
            ':port'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/ipalias/isenabled/:ipaddress/:port',
    args,
  ] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPort<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.isenabled[':ipaddress'][
            ':port'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPort<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.isenabled[':ipaddress'][
            ':port'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmptcp/ipalias/list', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSnmptcpIpaliasList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.list.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSnmptcpIpaliasList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.list.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['set']['config'][':argument'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['set']['config'][':argument'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['set']['config'][':argument'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.set.config[':argument'][
            ':value'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNotKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['set']['trace'][':enableOrNot']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['set']['trace'][':enableOrNot']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNotKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['set']['trace'][':enableOrNot']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.set.trace[':enableOrNot'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyViewKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/access/add/:groupName/:prefix/:securityModel/:securityLevel/:contextMatch/:readView/:writeView/:notifyView',
    'POST',
  ] as const
}

export function usePostMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyView<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['add'][':groupName'][':prefix'][':securityModel'][':securityLevel'][':contextMatch'][':readView'][':writeView'][':notifyView']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['add'][':groupName'][':prefix'][':securityModel'][':securityLevel'][':contextMatch'][':readView'][':writeView'][':notifyView']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyViewKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['add'][':groupName'][':prefix'][':securityModel'][':securityLevel'][':contextMatch'][':readView'][':writeView'][':notifyView']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.access.add[':groupName'][':prefix'][
            ':securityModel'
          ][':securityLevel'][':contextMatch'][':readView'][':writeView'][':notifyView'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClearKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/access/clear', 'DELETE'] as const
}

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClear<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['clear']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['clear']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClearKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['clear']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.access.clear.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessNameKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/access/del/:accessName',
    'DELETE',
  ] as const
}

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['del'][':accessName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['del'][':accessName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessNameKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['del'][':accessName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.access.del[':accessName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSnmpv3AccessListKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/access/list', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSnmpv3AccessList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3AccessListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.access.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSnmpv3AccessList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3AccessListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.access.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSnmpv3GetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSnmpv3GetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3GetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSnmpv3GetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3GetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/context_engineid', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineid<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.context_engineid.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.context_engineid.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/engineboots', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSnmpv3GetEngineboots<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.engineboots.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSnmpv3GetEngineboots<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.engineboots.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/engineid', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSnmpv3GetEngineid<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.engineid.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSnmpv3GetEngineid<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.engineid.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/enginetime', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetime<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.enginetime.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetime<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.enginetime.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityNameKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/group/add/:groupName/:securityModel/:securityName',
    'POST',
  ] as const
}

export function usePostMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['add'][':groupName'][':securityModel'][':securityName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['add'][':groupName'][':securityModel'][':securityName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityNameKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['add'][':groupName'][':securityModel'][':securityName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.group.add[':groupName'][
            ':securityModel'
          ][':securityName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClearKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/group/clear', 'DELETE'] as const
}

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['clear']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['clear']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClearKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['clear']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.group.clear.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupNameKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/group/del/:groupName',
    'DELETE',
  ] as const
}

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['del'][':groupName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['del'][':groupName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupNameKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['del'][':groupName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.group.del[':groupName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSnmpv3GroupListKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/group/list', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSnmpv3GroupList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3GroupListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.group.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSnmpv3GroupList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3GroupListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.group.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/set/config/:parameter/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['set']['config'][':parameter'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['set']['config'][':parameter'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['set']['config'][':parameter'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.set.config[':parameter'][
            ':value'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKeyKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/user/add/:userName/:securityName/:authProtocol/:authKey/:privProtocol/:privKey',
    'POST',
  ] as const
}

export function usePostMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['add'][':userName'][':securityName'][':authProtocol'][':authKey'][':privProtocol'][':privKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['add'][':userName'][':securityName'][':authProtocol'][':authKey'][':privProtocol'][':privKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKeyKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['add'][':userName'][':securityName'][':authProtocol'][':authKey'][':privProtocol'][':privKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.user.add[':userName'][
            ':securityName'
          ][':authProtocol'][':authKey'][':privProtocol'][':privKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserClearKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/user/clear', 'DELETE'] as const
}

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['clear']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['clear']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserClearKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['clear']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.user.clear.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserNameKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/user/del/:userName',
    'DELETE',
  ] as const
}

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['del'][':userName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['del'][':userName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserNameKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['del'][':userName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.user.del[':userName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSnmpv3UserListKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/user/list', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSnmpv3UserList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3UserListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.user.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSnmpv3UserList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3UserListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.user.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/usm/save', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSnmpv3UsmSave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['usm']['save']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['usm']['save']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['usm']['save']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.usm.save.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilenameKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/usm/saveas/:filename',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilename<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['usm']['saveas'][':filename']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['usm']['saveas'][':filename']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilenameKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['usm']['saveas'][':filename']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.usm.saveas[':filename'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/vacm/save', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSnmpv3VacmSave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['vacm']['save']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['vacm']['save']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['vacm']['save']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.vacm.save.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilenameKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/vacm/saveas/:filename',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilename<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['vacm']['saveas'][':filename']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['vacm']['saveas'][':filename']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilenameKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['vacm']['saveas'][':filename']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.vacm.saveas[':filename'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMaskKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/view/add/:viewName/:viewType/:subtree/:mask',
    'POST',
  ] as const
}

export function usePostMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['add'][':viewName'][':viewType'][':subtree'][':mask']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['add'][':viewName'][':viewType'][':subtree'][':mask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMaskKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['add'][':viewName'][':viewType'][':subtree'][':mask']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.view.add[':viewName'][':viewType'][
            ':subtree'
          ][':mask'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClearKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/view/clear', 'DELETE'] as const
}

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['clear']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['clear']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClearKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['clear']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.view.clear.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewNameKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/view/del/:viewName',
    'DELETE',
  ] as const
}

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['del'][':viewName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['del'][':viewName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewNameKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['del'][':viewName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.view.del[':viewName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSnmpv3ViewListKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/view/list', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSnmpv3ViewList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3ViewListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.view.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSnmpv3ViewList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSnmpv3ViewListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.view.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSshGetArgsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/get/args', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSshGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSshGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ssh.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSshGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSshGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ssh.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSshGetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSshGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSshGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ssh.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSshGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSshGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ssh.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSshGetStatisticsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/get/statistics', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSshGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSshGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ssh.get.statistics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSshGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSshGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ssh.get.statistics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSshGetTraceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/get/trace', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSshGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSshGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ssh.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSshGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSshGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ssh.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPortKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/ssh/ipalias/disable/:ipaddress/:port',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPort<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['disable'][':ipaddress'][':port']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['disable'][':ipaddress'][':port']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['disable'][':ipaddress'][':port']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.disable[':ipaddress'][
            ':port'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPortKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/ssh/ipalias/enable/:ipaddress/:port',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPort<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['enable'][':ipaddress'][':port']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['enable'][':ipaddress'][':port']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['enable'][':ipaddress'][':port']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.enable[':ipaddress'][
            ':port'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/ssh/ipalias/isenabled/:ipaddress/:port',
    args,
  ] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPort<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.isenabled[':ipaddress'][
            ':port'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPort<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.isenabled[':ipaddress'][
            ':port'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSshIpaliasListKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/ipalias/list', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSshIpaliasList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSshIpaliasListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSshIpaliasList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSshIpaliasListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/ssh/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['set']['config'][':argument'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['set']['config'][':argument'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['set']['config'][':argument'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ssh.set.config[':argument'][':value'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNotKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/set/trace/:enableOrNot', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['set']['trace'][':enableOrNot']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['set']['trace'][':enableOrNot']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNotKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['set']['trace'][':enableOrNot']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ssh.set.trace[':enableOrNot'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSyslogGetArgsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/get/args', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSyslogGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSyslogGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.syslog.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSyslogGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSyslogGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.syslog.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSyslogGetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSyslogGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSyslogGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.syslog.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSyslogGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSyslogGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.syslog.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSyslogGetStatisticsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/get/statistics', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSyslogGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSyslogGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.syslog.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSyslogGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSyslogGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.syslog.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSyslogGetTraceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/get/trace', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSyslogGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSyslogGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.syslog.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSyslogGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSyslogGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.syslog.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgSyslogGetAttrKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/get/:attr', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgSyslogGetAttr<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSyslogGetAttrKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.syslog.get[':attr'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgSyslogGetAttr<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgSyslogGetAttrKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.syslog.get[':attr'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMimicAgentAgentNumProtocolMsgSyslogSendPriKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/send/:pri', 'POST'] as const
}

export function usePostMimicAgentAgentNumProtocolMsgSyslogSendPri<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['send'][':pri']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['send'][':pri']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMimicAgentAgentNumProtocolMsgSyslogSendPriKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['send'][':pri']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.syslog.send[':pri'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/syslog/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set']['config'][':argument'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set']['config'][':argument'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set']['config'][':argument'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.syslog.set.config[':argument'][
            ':value'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNotKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/syslog/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set']['trace'][':enableOrNot']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set']['trace'][':enableOrNot']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNotKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set']['trace'][':enableOrNot']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.syslog.set.trace[':enableOrNot'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgSyslogSetAttrValueKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/set/:attr/:value', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgSyslogSetAttrValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set'][':attr'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set'][':attr'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgSyslogSetAttrValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set'][':attr'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.syslog.set[':attr'][':value'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPasswordKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/connection/logon/:connectionID/:user/:password',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPassword<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['logon'][':connectionID'][':user'][':password']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['logon'][':connectionID'][':user'][':password']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPasswordKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['logon'][':connectionID'][':user'][':password']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.connection.logon[':connectionID'][
            ':user'
          ][':password'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommandKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/connection/request/:connectionID/:command',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommand<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['request'][':connectionID'][':command']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['request'][':connectionID'][':command']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommandKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['request'][':connectionID'][':command']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.connection.request[':connectionID'][
            ':command'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalNameKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/connection/signal/:connectionID/:signalName',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['signal'][':connectionID'][':signalName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['signal'][':connectionID'][':signalName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalNameKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['signal'][':connectionID'][':signalName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.connection.signal[':connectionID'][
            ':signalName'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTelnetGetArgsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/get/args', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTelnetGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTelnetGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTelnetGetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTelnetGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTelnetGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTelnetGetStatisticsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/get/statistics', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTelnetGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTelnetGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTelnetGetTraceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/get/trace', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTelnetGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTelnetGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPortKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/ipalias/disable/:ipaddress/:port',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPort<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['disable'][':ipaddress'][':port']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['disable'][':ipaddress'][':port']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['disable'][':ipaddress'][':port']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.disable[':ipaddress'][
            ':port'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPortKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/ipalias/enable/:ipaddress/:port',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPort<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['enable'][':ipaddress'][':port']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['enable'][':ipaddress'][':port']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['enable'][':ipaddress'][':port']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.enable[':ipaddress'][
            ':port'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/ipalias/isenabled/:ipaddress/:port',
    args,
  ] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPort<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.isenabled[':ipaddress'][
            ':port'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPort<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.isenabled[':ipaddress'][
            ':port'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTelnetIpaliasListKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/ipalias/list', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTelnetIpaliasList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetIpaliasListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.list.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTelnetIpaliasList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetIpaliasListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.list.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/connections',
    args,
  ] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTelnetServerGetConnections<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.connections.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTelnetServerGetConnections<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.connections.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/keymap', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTelnetServerGetKeymap<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.keymap.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTelnetServerGetKeymap<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.keymap.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/rulesdb', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdb<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.rulesdb.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdb<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.rulesdb.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTelnetServerGetStateKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/state', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTelnetServerGetState<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetServerGetStateKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.state.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTelnetServerGetState<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetServerGetStateKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.state.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/userdb', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTelnetServerGetUserdb<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.userdb.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTelnetServerGetUserdb<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.userdb.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTelnetServerGetUsersKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/users', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTelnetServerGetUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetServerGetUsersKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTelnetServerGetUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTelnetServerGetUsersKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['set']['config'][':argument'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['set']['config'][':argument'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['set']['config'][':argument'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.set.config[':argument'][
            ':value'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNotKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['set']['trace'][':enableOrNot']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['set']['trace'][':enableOrNot']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNotKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['set']['trace'][':enableOrNot']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.set.trace[':enableOrNot'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTftpGetArgsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/get/args', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTftpGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTftpGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tftp.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTftpGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTftpGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tftp.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTftpGetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTftpGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTftpGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tftp.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTftpGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTftpGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tftp.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTftpGetStatisticsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/get/statistics', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTftpGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTftpGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tftp.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTftpGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTftpGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tftp.get.statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTftpGetTraceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/get/trace', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTftpGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTftpGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tftp.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTftpGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTftpGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tftp.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfileKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tftp/session/read/server/:srcfile',
    'POST',
  ] as const
}

export function usePostMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfile<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['session']['read']['server'][':srcfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['session']['read']['server'][':srcfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfileKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['session']['read']['server'][':srcfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tftp.session.read.server[':srcfile'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfileKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tftp/session/write/server/:srcfile',
    'POST',
  ] as const
}

export function usePostMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfile<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['session']['write']['server'][':srcfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['session']['write']['server'][':srcfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfileKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['session']['write']['server'][':srcfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tftp.session.write.server[':srcfile'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tftp/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['set']['config'][':argument'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['set']['config'][':argument'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['set']['config'][':argument'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tftp.set.config[':argument'][':value'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNotKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tftp/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['set']['trace'][':enableOrNot']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['set']['trace'][':enableOrNot']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNotKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['set']['trace'][':enableOrNot']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tftp.set.trace[':enableOrNot'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/get/:parameter',
    args,
  ] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameter<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].get[':parameter'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameter<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].get[':parameter'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/set/:parameter/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['set'][':parameter'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['set'][':parameter'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['set'][':parameter'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].set[':parameter'][
            ':value'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgTftpSessionIDStartKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/start', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgTftpSessionIDStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['start']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['start']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgTftpSessionIDStartKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['start']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].start.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTftpSessionIDStatusKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/status', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTftpSessionIDStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTftpSessionIDStatusKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTftpSessionIDStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTftpSessionIDStatusKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgTftpSessionIDStopKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/stop', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgTftpSessionIDStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['stop']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['stop']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgTftpSessionIDStopKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['stop']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].stop.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTodGetArgsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tod/get/args', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTodGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTodGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tod.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTodGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTodGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tod.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTodGetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tod/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTodGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTodGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tod.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTodGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTodGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tod.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTodGetStatisticsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tod/get/statistics', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTodGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTodGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tod.get.statistics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTodGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTodGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tod.get.statistics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTodGetTraceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tod/get/trace', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTodGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTodGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tod.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTodGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTodGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tod.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['gettime']['server'][':serverAddr']['port'][':portNum']['script'][':scriptName']['timeout'][':timeSec']['retries'][':numRetries']['$get']
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tod/gettime/server/:serverAddr/port/:portNum/script/:scriptName/timeout/:timeSec/retries/:numRetries',
    args,
  ] as const
}

export function useGetMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['gettime']['server'][':serverAddr']['port'][':portNum']['script'][':scriptName']['timeout'][':timeSec']['retries'][':numRetries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['gettime']['server'][':serverAddr']['port'][':portNum']['script'][':scriptName']['timeout'][':timeSec']['retries'][':numRetries']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesKey(
            args,
          )
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['gettime']['server'][':serverAddr']['port'][':portNum']['script'][':scriptName']['timeout'][':timeSec']['retries'][':numRetries']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tod.gettime.server[':serverAddr'].port[
            ':portNum'
          ].script[':scriptName'].timeout[':timeSec'].retries[':numRetries'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['gettime']['server'][':serverAddr']['port'][':portNum']['script'][':scriptName']['timeout'][':timeSec']['retries'][':numRetries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['gettime']['server'][':serverAddr']['port'][':portNum']['script'][':scriptName']['timeout'][':timeSec']['retries'][':numRetries']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesKey(
            args,
          )
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['gettime']['server'][':serverAddr']['port'][':portNum']['script'][':scriptName']['timeout'][':timeSec']['retries'][':numRetries']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.tod.gettime.server[':serverAddr'].port[
            ':portNum'
          ].script[':scriptName'].timeout[':timeSec'].retries[':numRetries'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tod/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['set']['config'][':argument'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['set']['config'][':argument'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['set']['config'][':argument'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tod.set.config[':argument'][':value'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNotKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tod/set/trace/:enableOrNot', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['set']['trace'][':enableOrNot']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['set']['trace'][':enableOrNot']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNotKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['set']['trace'][':enableOrNot']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tod.set.trace[':enableOrNot'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgWebGetArgsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/get/args', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgWebGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgWebGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.web.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgWebGetArgs<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgWebGetArgsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.web.get.args.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgWebGetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgWebGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgWebGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.web.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgWebGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgWebGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.web.get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgWebGetStatisticsKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/get/statistics', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgWebGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgWebGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.web.get.statistics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgWebGetStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgWebGetStatisticsKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.web.get.statistics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgWebGetTraceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/get/trace', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgWebGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgWebGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.web.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgWebGetTrace<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgWebGetTraceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.web.get.trace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMimicAgentAgentNumProtocolMsgWebPortAddPortKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/port/add/:port', 'POST'] as const
}

export function usePostMimicAgentAgentNumProtocolMsgWebPortAddPort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['add'][':port']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['add'][':port']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMimicAgentAgentNumProtocolMsgWebPortAddPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['add'][':port']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.web.port.add[':port'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolMsgWebPortExistsPortKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/port/exists/:port', args] as const
}

export function useGetMimicAgentAgentNumProtocolMsgWebPortExistsPort<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgWebPortExistsPortKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.web.port.exists[':port'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolMsgWebPortExistsPort<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
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
        ? getGetMimicAgentAgentNumProtocolMsgWebPortExistsPortKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
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
          client.mimic.agent[':agentNum'].protocol.msg.web.port.exists[':port'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumProtocolMsgWebPortRemovePortKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/port/remove/:port', 'DELETE'] as const
}

export function useDeleteMimicAgentAgentNumProtocolMsgWebPortRemovePort<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['remove'][':port']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['remove'][':port']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumProtocolMsgWebPortRemovePortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['remove'][':port']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.web.port.remove[':port'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersionKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/web/port/set/:port/:protocol/:version',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['set'][':port'][':protocol'][':version']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['set'][':port'][':protocol'][':version']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersionKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['set'][':port'][':protocol'][':version']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.web.port.set[':port'][':protocol'][
            ':version'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgWebPortStartPortKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/port/start/:port', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgWebPortStartPort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['start'][':port']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['start'][':port']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgWebPortStartPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['start'][':port']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.web.port.start[':port'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgWebPortStopPortKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/port/stop/:port', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgWebPortStopPort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['stop'][':port']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['stop'][':port']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgWebPortStopPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['stop'][':port']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.web.port.stop[':port'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValueKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/web/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function usePutMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['set']['config'][':argument'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['set']['config'][':argument'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValueKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['set']['config'][':argument'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.web.set.config[':argument'][':value'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNotKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/set/trace/:enableOrNot', 'PUT'] as const
}

export function usePutMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['set']['trace'][':enableOrNot']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['set']['trace'][':enableOrNot']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNotKey()
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
            (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['set']['trace'][':enableOrNot']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.web.set.trace[':enableOrNot'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumProtocolProtGetConfigKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/:prot/get/config', args] as const
}

export function useGetMimicAgentAgentNumProtocolProtGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolProtGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol[':prot'].get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumProtocolProtGetConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
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
        ? getGetMimicAgentAgentNumProtocolProtGetConfigKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
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
          client.mimic.agent[':agentNum'].protocol[':prot'].get.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumReloadKey() {
  return ['mimic', '/mimic/agent/:agentNum/reload', 'PUT'] as const
}

export function usePutMimicAgentAgentNumReload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['reload']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['reload']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumReloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mimic.agent)[':agentNum']['reload']['$put']> },
      ) => parseResponse(client.mimic.agent[':agentNum'].reload.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumRemoveKey() {
  return ['mimic', '/mimic/agent/:agentNum/remove', 'DELETE'] as const
}

export function useDeleteMimicAgentAgentNumRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['remove']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['remove']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mimic.agent)[':agentNum']['remove']['$delete']> },
      ) => parseResponse(client.mimic.agent[':agentNum'].remove.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumResumeKey() {
  return ['mimic', '/mimic/agent/:agentNum/resume', 'PUT'] as const
}

export function usePutMimicAgentAgentNumResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['resume']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['resume']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mimic.agent)[':agentNum']['resume']['$put']> },
      ) => parseResponse(client.mimic.agent[':agentNum'].resume.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSaveKey() {
  return ['mimic', '/mimic/agent/:agentNum/save', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['save']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['save']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mimic.agent)[':agentNum']['save']['$put']> },
      ) => parseResponse(client.mimic.agent[':agentNum'].save.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetDelayDelayKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/delay/:delay', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetDelayDelay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['delay'][':delay']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['delay'][':delay']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetDelayDelayKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['delay'][':delay']['$put']
          >
        },
      ) =>
        parseResponse(client.mimic.agent[':agentNum'].set.delay[':delay'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetDropsDropsKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/drops/:drops', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetDropsDrops<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['drops'][':drops']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['drops'][':drops']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetDropsDropsKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['drops'][':drops']['$put']
          >
        },
      ) =>
        parseResponse(client.mimic.agent[':agentNum'].set.drops[':drops'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetHostHostKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/host/:host', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetHostHost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['host'][':host']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['host'][':host']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetHostHostKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['host'][':host']['$put']
          >
        },
      ) =>
        parseResponse(client.mimic.agent[':agentNum'].set.host[':host'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetInformTimeoutInformTimeoutKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/inform_timeout/:inform_timeout', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetInformTimeoutInformTimeout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['set']['inform_timeout'][':inform_timeout']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['set']['inform_timeout'][':inform_timeout']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetInformTimeoutInformTimeoutKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['inform_timeout'][':inform_timeout']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].set.inform_timeout[':inform_timeout'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetInterfaceInterfaceKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/interface/:interface', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetInterfaceInterface<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['set']['interface'][':interface']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['set']['interface'][':interface']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetInterfaceInterfaceKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['interface'][':interface']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].set.interface[':interface'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetMaskMaskKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/mask/:mask', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetMaskMask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['mask'][':mask']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['mask'][':mask']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetMaskMaskKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['mask'][':mask']['$put']
          >
        },
      ) =>
        parseResponse(client.mimic.agent[':agentNum'].set.mask[':mask'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetMibsKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/mibs', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetMibs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['mibs']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['mibs']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetMibsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['mibs']['$put']>
        },
      ) => parseResponse(client.mimic.agent[':agentNum'].set.mibs.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetOiddirOiddirKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/oiddir/:oiddir', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetOiddirOiddir<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['oiddir'][':oiddir']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['oiddir'][':oiddir']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetOiddirOiddirKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['oiddir'][':oiddir']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].set.oiddir[':oiddir'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetOwnerOwnerKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/owner/:owner', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetOwnerOwner<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['owner'][':owner']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['owner'][':owner']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetOwnerOwnerKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['owner'][':owner']['$put']
          >
        },
      ) =>
        parseResponse(client.mimic.agent[':agentNum'].set.owner[':owner'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetPdusizePdusizeKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/pdusize/:pdusize', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetPdusizePdusize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['set']['pdusize'][':pdusize']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['pdusize'][':pdusize']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetPdusizePdusizeKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['pdusize'][':pdusize']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].set.pdusize[':pdusize'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetPortPortKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/port/:port', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetPortPort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['port'][':port']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['port'][':port']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetPortPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['port'][':port']['$put']
          >
        },
      ) =>
        parseResponse(client.mimic.agent[':agentNum'].set.port[':port'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetPrivdirPrivdirKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/privdir/:privdir', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetPrivdirPrivdir<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['set']['privdir'][':privdir']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['privdir'][':privdir']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetPrivdirPrivdirKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['privdir'][':privdir']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].set.privdir[':privdir'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetProtocolKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/protocol', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetProtocol<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['protocol']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['protocol']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetProtocolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['protocol']['$put']>
        },
      ) => parseResponse(client.mimic.agent[':agentNum'].set.protocol.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetReadReadKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/read/:read', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetReadRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['read'][':read']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['read'][':read']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetReadReadKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['read'][':read']['$put']
          >
        },
      ) =>
        parseResponse(client.mimic.agent[':agentNum'].set.read[':read'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetStartStartKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/start/:start', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetStartStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['start'][':start']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['start'][':start']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetStartStartKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['start'][':start']['$put']
          >
        },
      ) =>
        parseResponse(client.mimic.agent[':agentNum'].set.start[':start'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetTraceTraceKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/trace/:trace', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetTraceTrace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['trace'][':trace']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['trace'][':trace']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetTraceTraceKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['trace'][':trace']['$put']
          >
        },
      ) =>
        parseResponse(client.mimic.agent[':agentNum'].set.trace[':trace'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetValidateValidateKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/validate/:validate', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetValidateValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['set']['validate'][':validate']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['set']['validate'][':validate']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetValidateValidateKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['validate'][':validate']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].set.validate[':validate'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumSetWriteWriteKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/write/:write', 'PUT'] as const
}

export function usePutMimicAgentAgentNumSetWriteWrite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['write'][':write']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['write'][':write']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumSetWriteWriteKey()
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
            (typeof client.mimic.agent)[':agentNum']['set']['write'][':write']['$put']
          >
        },
      ) =>
        parseResponse(client.mimic.agent[':agentNum'].set.write[':write'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumStartKey() {
  return ['mimic', '/mimic/agent/:agentNum/start', 'PUT'] as const
}

export function usePutMimicAgentAgentNumStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['start']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['start']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mimic.agent)[':agentNum']['start']['$put']> },
      ) => parseResponse(client.mimic.agent[':agentNum'].start.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumStopKey() {
  return ['mimic', '/mimic/agent/:agentNum/stop', 'PUT'] as const
}

export function usePutMimicAgentAgentNumStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['stop']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['stop']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mimic.agent)[':agentNum']['stop']['$put']> },
      ) => parseResponse(client.mimic.agent[':agentNum'].stop.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumStoreCopyOtherAgentKey() {
  return ['mimic', '/mimic/agent/:agentNum/store/copy/:otherAgent', 'PUT'] as const
}

export function usePutMimicAgentAgentNumStoreCopyOtherAgent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['store']['copy'][':otherAgent']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['store']['copy'][':otherAgent']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumStoreCopyOtherAgentKey()
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
            (typeof client.mimic.agent)[':agentNum']['store']['copy'][':otherAgent']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].store.copy[':otherAgent'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumStoreExistsVarKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/store/exists/:var', args] as const
}

export function useGetMimicAgentAgentNumStoreExistsVar<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']
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
        ? getGetMimicAgentAgentNumStoreExistsVarKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']
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
          client.mimic.agent[':agentNum'].store.exists[':var'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumStoreExistsVar<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']
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
        ? getGetMimicAgentAgentNumStoreExistsVarKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']
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
          client.mimic.agent[':agentNum'].store.exists[':var'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumStoreGetVarKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/store/get/:var', args] as const
}

export function useGetMimicAgentAgentNumStoreGetVar<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>
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
        ? getGetMimicAgentAgentNumStoreGetVarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].store.get[':var'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumStoreGetVar<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>
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
        ? getGetMimicAgentAgentNumStoreGetVarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].store.get[':var'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumStoreListKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/store/list', args] as const
}

export function useGetMimicAgentAgentNumStoreList<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>>
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
        ? getGetMimicAgentAgentNumStoreListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].store.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumStoreList<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>>
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
        ? getGetMimicAgentAgentNumStoreListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].store.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumStoreLreplaceVarIndexKey() {
  return ['mimic', '/mimic/agent/:agentNum/store/lreplace/:var/:index', 'PUT'] as const
}

export function usePutMimicAgentAgentNumStoreLreplaceVarIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['store']['lreplace'][':var'][':index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['store']['lreplace'][':var'][':index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumStoreLreplaceVarIndexKey()
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
            (typeof client.mimic.agent)[':agentNum']['store']['lreplace'][':var'][':index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].store.lreplace[':var'][':index'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumStorePersistsVarKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/store/persists/:var', args] as const
}

export function useGetMimicAgentAgentNumStorePersistsVar<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']
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
        ? getGetMimicAgentAgentNumStorePersistsVarKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']
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
          client.mimic.agent[':agentNum'].store.persists[':var'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumStorePersistsVar<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']
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
        ? getGetMimicAgentAgentNumStorePersistsVarKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']
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
          client.mimic.agent[':agentNum'].store.persists[':var'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumStoreSetVarPersistKey() {
  return ['mimic', '/mimic/agent/:agentNum/store/set/:var/:persist', 'PUT'] as const
}

export function usePutMimicAgentAgentNumStoreSetVarPersist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['store']['set'][':var'][':persist']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['store']['set'][':var'][':persist']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumStoreSetVarPersistKey()
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
            (typeof client.mimic.agent)[':agentNum']['store']['set'][':var'][':persist']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].store.set[':var'][':persist'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumStoreUnsetVarKey() {
  return ['mimic', '/mimic/agent/:agentNum/store/unset/:var', 'PUT'] as const
}

export function usePutMimicAgentAgentNumStoreUnsetVar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['unset'][':var']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['unset'][':var']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumStoreUnsetVarKey()
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
            (typeof client.mimic.agent)[':agentNum']['store']['unset'][':var']['$put']
          >
        },
      ) =>
        parseResponse(client.mimic.agent[':agentNum'].store.unset[':var'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMimicAgentAgentNumTimerScriptAddScriptIntervalArgKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/timer/script/add/:script/:interval/:arg',
    'POST',
  ] as const
}

export function usePostMimicAgentAgentNumTimerScriptAddScriptIntervalArg<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['timer']['script']['add'][':script'][':interval'][':arg']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['timer']['script']['add'][':script'][':interval'][':arg']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMimicAgentAgentNumTimerScriptAddScriptIntervalArgKey()
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
            (typeof client.mimic.agent)[':agentNum']['timer']['script']['add'][':script'][':interval'][':arg']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].timer.script.add[':script'][':interval'][':arg'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArgKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/timer/script/delete/:script/:interval/:arg',
    'DELETE',
  ] as const
}

export function useDeleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArg<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['timer']['script']['delete'][':script'][':interval'][':arg']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['timer']['script']['delete'][':script'][':interval'][':arg']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArgKey()
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
            (typeof client.mimic.agent)[':agentNum']['timer']['script']['delete'][':script'][':interval'][':arg']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].timer.script.delete[':script'][':interval'][
            ':arg'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumTimerScriptListKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/timer/script/list', args] as const
}

export function useGetMimicAgentAgentNumTimerScriptList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']
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
        ? getGetMimicAgentAgentNumTimerScriptListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].timer.script.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumTimerScriptList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']
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
        ? getGetMimicAgentAgentNumTimerScriptListKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].timer.script.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMimicAgentAgentNumTrapConfigAddIPPortKey() {
  return ['mimic', '/mimic/agent/:agentNum/trap/config/add/:IP/:port', 'POST'] as const
}

export function usePostMimicAgentAgentNumTrapConfigAddIPPort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['trap']['config']['add'][':IP'][':port']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['trap']['config']['add'][':IP'][':port']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMimicAgentAgentNumTrapConfigAddIPPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['trap']['config']['add'][':IP'][':port']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].trap.config.add[':IP'][':port'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumTrapConfigDeleteIPPortKey() {
  return ['mimic', '/mimic/agent/:agentNum/trap/config/delete/:IP/:port', 'DELETE'] as const
}

export function useDeleteMimicAgentAgentNumTrapConfigDeleteIPPort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['trap']['config']['delete'][':IP'][':port']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['trap']['config']['delete'][':IP'][':port']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumTrapConfigDeleteIPPortKey()
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
            (typeof client.mimic.agent)[':agentNum']['trap']['config']['delete'][':IP'][':port']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].trap.config.delete[':IP'][':port'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumTrapConfigListKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/trap/config/list', args] as const
}

export function useGetMimicAgentAgentNumTrapConfigList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']>
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
        ? getGetMimicAgentAgentNumTrapConfigListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].trap.config.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumTrapConfigList<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']>
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
        ? getGetMimicAgentAgentNumTrapConfigListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].trap.config.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumTrapListKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/trap/list', args] as const
}

export function useGetMimicAgentAgentNumTrapList<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>>
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
        ? getGetMimicAgentAgentNumTrapListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].trap.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumTrapList<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>>
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
        ? getGetMimicAgentAgentNumTrapListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].trap.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMimicAgentAgentNumValueAddObjectInstanceKey() {
  return ['mimic', '/mimic/agent/:agentNum/value/add/:object/:instance', 'POST'] as const
}

export function usePostMimicAgentAgentNumValueAddObjectInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['value']['add'][':object'][':instance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['add'][':object'][':instance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMimicAgentAgentNumValueAddObjectInstanceKey()
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
            (typeof client.mimic.agent)[':agentNum']['value']['add'][':object'][':instance']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].value.add[':object'][':instance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumValueEvalObjectInstanceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/eval/:object/:instance', args] as const
}

export function useGetMimicAgentAgentNumValueEvalObjectInstance<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
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
        ? getGetMimicAgentAgentNumValueEvalObjectInstanceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
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
          client.mimic.agent[':agentNum'].value.eval[':object'][':instance'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumValueEvalObjectInstance<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
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
        ? getGetMimicAgentAgentNumValueEvalObjectInstanceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
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
          client.mimic.agent[':agentNum'].value.eval[':object'][':instance'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumValueGetObjectInstanceVariableKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/get/:object/:instance/:variable', args] as const
}

export function useGetMimicAgentAgentNumValueGetObjectInstanceVariable<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
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
        ? getGetMimicAgentAgentNumValueGetObjectInstanceVariableKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
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
          client.mimic.agent[':agentNum'].value.get[':object'][':instance'][':variable'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumValueGetObjectInstanceVariable<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
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
        ? getGetMimicAgentAgentNumValueGetObjectInstanceVariableKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
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
          client.mimic.agent[':agentNum'].value.get[':object'][':instance'][':variable'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumValueInfoObjectKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/info/:object', args] as const
}

export function useGetMimicAgentAgentNumValueInfoObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']
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
        ? getGetMimicAgentAgentNumValueInfoObjectKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']
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
          client.mimic.agent[':agentNum'].value.info[':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumValueInfoObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']
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
        ? getGetMimicAgentAgentNumValueInfoObjectKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']
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
          client.mimic.agent[':agentNum'].value.info[':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumValueInstancesObjectKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/instances/:object', args] as const
}

export function useGetMimicAgentAgentNumValueInstancesObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
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
        ? getGetMimicAgentAgentNumValueInstancesObjectKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
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
          client.mimic.agent[':agentNum'].value.instances[':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumValueInstancesObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
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
        ? getGetMimicAgentAgentNumValueInstancesObjectKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
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
          client.mimic.agent[':agentNum'].value.instances[':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumValueListOIDKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/list/:OID', args] as const
}

export function useGetMimicAgentAgentNumValueListOID<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>
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
        ? getGetMimicAgentAgentNumValueListOIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].value.list[':OID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumValueListOID<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>
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
        ? getGetMimicAgentAgentNumValueListOIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].value.list[':OID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumValueMevalObjInsArrayKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/meval/:objInsArray', args] as const
}

export function useGetMimicAgentAgentNumValueMevalObjInsArray<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
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
        ? getGetMimicAgentAgentNumValueMevalObjInsArrayKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
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
          client.mimic.agent[':agentNum'].value.meval[':objInsArray'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumValueMevalObjInsArray<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
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
        ? getGetMimicAgentAgentNumValueMevalObjInsArrayKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
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
          client.mimic.agent[':agentNum'].value.meval[':objInsArray'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumValueMgetObjInsVarArrayKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/mget/:objInsVarArray', args] as const
}

export function useGetMimicAgentAgentNumValueMgetObjInsVarArray<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
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
        ? getGetMimicAgentAgentNumValueMgetObjInsVarArrayKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
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
          client.mimic.agent[':agentNum'].value.mget[':objInsVarArray'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumValueMgetObjInsVarArray<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
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
        ? getGetMimicAgentAgentNumValueMgetObjInsVarArrayKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
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
          client.mimic.agent[':agentNum'].value.mget[':objInsVarArray'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumValueMibObjectKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/mib/:object', args] as const
}

export function useGetMimicAgentAgentNumValueMibObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']
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
        ? getGetMimicAgentAgentNumValueMibObjectKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']
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
          client.mimic.agent[':agentNum'].value.mib[':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumValueMibObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']
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
        ? getGetMimicAgentAgentNumValueMibObjectKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']
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
          client.mimic.agent[':agentNum'].value.mib[':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumValueMsetKey() {
  return ['mimic', '/mimic/agent/:agentNum/value/mset', 'PUT'] as const
}

export function usePutMimicAgentAgentNumValueMset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['mset']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['mset']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumValueMsetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['mset']['$put']>
        },
      ) => parseResponse(client.mimic.agent[':agentNum'].value.mset.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumValueMunsetKey() {
  return ['mimic', '/mimic/agent/:agentNum/value/munset', 'PUT'] as const
}

export function usePutMimicAgentAgentNumValueMunset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['munset']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['munset']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumValueMunsetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['munset']['$put']>
        },
      ) => parseResponse(client.mimic.agent[':agentNum'].value.munset.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumValueNameOIDKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/name/:OID', args] as const
}

export function useGetMimicAgentAgentNumValueNameOID<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>
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
        ? getGetMimicAgentAgentNumValueNameOIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].value.name[':OID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumValueNameOID<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>
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
        ? getGetMimicAgentAgentNumValueNameOIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.agent[':agentNum'].value.name[':OID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumValueOidObjectKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/oid/:object', args] as const
}

export function useGetMimicAgentAgentNumValueOidObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']
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
        ? getGetMimicAgentAgentNumValueOidObjectKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']
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
          client.mimic.agent[':agentNum'].value.oid[':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumValueOidObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']
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
        ? getGetMimicAgentAgentNumValueOidObjectKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']
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
          client.mimic.agent[':agentNum'].value.oid[':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMimicAgentAgentNumValueRemoveObjectInstanceKey() {
  return ['mimic', '/mimic/agent/:agentNum/value/remove/:object/:instance', 'DELETE'] as const
}

export function useDeleteMimicAgentAgentNumValueRemoveObjectInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['value']['remove'][':object'][':instance']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['remove'][':object'][':instance']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicAgentAgentNumValueRemoveObjectInstanceKey()
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
            (typeof client.mimic.agent)[':agentNum']['value']['remove'][':object'][':instance']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].value.remove[':object'][':instance'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumValueSetObjectInstanceVariableKey() {
  return ['mimic', '/mimic/agent/:agentNum/value/set/:object/:instance/:variable', 'PUT'] as const
}

export function usePutMimicAgentAgentNumValueSetObjectInstanceVariable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['value']['set'][':object'][':instance'][':variable']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['set'][':object'][':instance'][':variable']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumValueSetObjectInstanceVariableKey()
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
            (typeof client.mimic.agent)[':agentNum']['value']['set'][':object'][':instance'][':variable']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].value.set[':object'][':instance'][':variable'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumValueSplitOIDKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/split/:OID', args] as const
}

export function useGetMimicAgentAgentNumValueSplitOID<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']>
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
        ? getGetMimicAgentAgentNumValueSplitOIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mimic.agent[':agentNum'].value.split[':OID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumValueSplitOID<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']>
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
        ? getGetMimicAgentAgentNumValueSplitOIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mimic.agent[':agentNum'].value.split[':OID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumValueStateGetObjectKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/state/get/:object', args] as const
}

export function useGetMimicAgentAgentNumValueStateGetObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
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
        ? getGetMimicAgentAgentNumValueStateGetObjectKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
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
          client.mimic.agent[':agentNum'].value.state.get[':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumValueStateGetObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
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
        ? getGetMimicAgentAgentNumValueStateGetObjectKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
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
          client.mimic.agent[':agentNum'].value.state.get[':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumValueStateSetObjectStateKey() {
  return ['mimic', '/mimic/agent/:agentNum/value/state/set/:object/:state', 'PUT'] as const
}

export function usePutMimicAgentAgentNumValueStateSetObjectState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['value']['state']['set'][':object'][':state']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['state']['set'][':object'][':state']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumValueStateSetObjectStateKey()
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
            (typeof client.mimic.agent)[':agentNum']['value']['state']['set'][':object'][':state']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].value.state.set[':object'][':state'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicAgentAgentNumValueUnsetObjectInstanceVariableKey() {
  return ['mimic', '/mimic/agent/:agentNum/value/unset/:object/:instance/:variable', 'PUT'] as const
}

export function usePutMimicAgentAgentNumValueUnsetObjectInstanceVariable<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.agent)[':agentNum']['value']['unset'][':object'][':instance'][':variable']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['unset'][':object'][':instance'][':variable']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicAgentAgentNumValueUnsetObjectInstanceVariableKey()
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
            (typeof client.mimic.agent)[':agentNum']['value']['unset'][':object'][':instance'][':variable']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.agent[':agentNum'].value.unset[':object'][':instance'][':variable'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicAgentAgentNumValueVariablesObjectInstanceKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/variables/:object/:instance', args] as const
}

export function useGetMimicAgentAgentNumValueVariablesObjectInstance<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
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
        ? getGetMimicAgentAgentNumValueVariablesObjectInstanceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
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
          client.mimic.agent[':agentNum'].value.variables[':object'][':instance'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicAgentAgentNumValueVariablesObjectInstance<TError = unknown>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
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
        ? getGetMimicAgentAgentNumValueVariablesObjectInstanceKey(args)
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
                (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
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
          client.mimic.agent[':agentNum'].value.variables[':object'][':instance'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMimicClearFirstAgentNumLastAgentNumKey() {
  return ['mimic', '/mimic/clear/:firstAgentNum/:lastAgentNum', 'PUT'] as const
}

export function usePutMimicClearFirstAgentNumLastAgentNum<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.clear)[':firstAgentNum'][':lastAgentNum']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.clear)[':firstAgentNum'][':lastAgentNum']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicClearFirstAgentNumLastAgentNumKey()
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
            (typeof client.mimic.clear)[':firstAgentNum'][':lastAgentNum']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.clear[':firstAgentNum'][':lastAgentNum'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicGetActiveDataListKey() {
  return ['mimic', '/mimic/get/active_data_list'] as const
}

export function useGetMimicGetActiveDataList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_data_list.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicGetActiveDataListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_data_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.active_data_list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetActiveDataList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_data_list.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicGetActiveDataListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_data_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.active_data_list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetActiveListKey() {
  return ['mimic', '/mimic/get/active_list'] as const
}

export function useGetMimicGetActiveList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_list.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetActiveListKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.active_list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetActiveList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_list.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetActiveListKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.active_list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetCfgfileKey() {
  return ['mimic', '/mimic/get/cfgfile'] as const
}

export function useGetMimicGetCfgfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetCfgfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.cfgfile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetCfgfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetCfgfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.cfgfile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetCfgfileChangedKey() {
  return ['mimic', '/mimic/get/cfgfile_changed'] as const
}

export function useGetMimicGetCfgfileChanged<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile_changed.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicGetCfgfileChangedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile_changed.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.cfgfile_changed.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetCfgfileChanged<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile_changed.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicGetCfgfileChangedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile_changed.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.cfgfile_changed.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetChangedConfigListKey() {
  return ['mimic', '/mimic/get/changed_config_list'] as const
}

export function useGetMimicGetChangedConfigList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_config_list.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicGetChangedConfigListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.get.changed_config_list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.get.changed_config_list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetChangedConfigList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_config_list.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicGetChangedConfigListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.get.changed_config_list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.get.changed_config_list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetChangedStateListKey() {
  return ['mimic', '/mimic/get/changed_state_list'] as const
}

export function useGetMimicGetChangedStateList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_state_list.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicGetChangedStateListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_state_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.changed_state_list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetChangedStateList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_state_list.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicGetChangedStateListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_state_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.changed_state_list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetClientsKey() {
  return ['mimic', '/mimic/get/clients'] as const
}

export function useGetMimicGetClients<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.clients.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetClientsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.clients.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetClients<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.clients.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetClientsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.clients.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetConfiguredListKey() {
  return ['mimic', '/mimic/get/configured_list'] as const
}

export function useGetMimicGetConfiguredList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.configured_list.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicGetConfiguredListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.configured_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.configured_list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetConfiguredList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.configured_list.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicGetConfiguredListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.configured_list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.configured_list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetInterfacesKey() {
  return ['mimic', '/mimic/get/interfaces'] as const
}

export function useGetMimicGetInterfaces<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.interfaces.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetInterfacesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.interfaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.interfaces.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetInterfaces<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.interfaces.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetInterfacesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.interfaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.interfaces.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetLastKey() {
  return ['mimic', '/mimic/get/last'] as const
}

export function useGetMimicGetLast<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.last.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetLastKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.last.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.last.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetLast<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.last.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetLastKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.last.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.last.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetLogKey() {
  return ['mimic', '/mimic/get/log'] as const
}

export function useGetMimicGetLog<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.log.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetLogKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.log.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.log.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetLog<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.log.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetLogKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.log.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.log.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetMaxKey() {
  return ['mimic', '/mimic/get/max'] as const
}

export function useGetMimicGetMax<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.max.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetMaxKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.max.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.max.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetMax<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.max.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetMaxKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.max.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.max.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetNetaddrKey() {
  return ['mimic', '/mimic/get/netaddr'] as const
}

export function useGetMimicGetNetaddr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netaddr.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetNetaddrKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netaddr.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.netaddr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetNetaddr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netaddr.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetNetaddrKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netaddr.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.netaddr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetNetdevKey() {
  return ['mimic', '/mimic/get/netdev'] as const
}

export function useGetMimicGetNetdev<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netdev.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetNetdevKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netdev.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.netdev.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetNetdev<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netdev.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetNetdevKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netdev.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.netdev.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetProductKey() {
  return ['mimic', '/mimic/get/product'] as const
}

export function useGetMimicGetProduct<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.product.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetProductKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.product.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.product.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetProduct<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.product.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetProductKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.product.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.product.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetProtocolsKey() {
  return ['mimic', '/mimic/get/protocols'] as const
}

export function useGetMimicGetProtocols<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.protocols.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetProtocolsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.protocols.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.protocols.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetProtocols<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.protocols.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetProtocolsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.protocols.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.protocols.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetReturnKey() {
  return ['mimic', '/mimic/get/return'] as const
}

export function useGetMimicGetReturn<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.return.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetReturnKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.return.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.return.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetReturn<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.return.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetReturnKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.return.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.return.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicGetVersionKey() {
  return ['mimic', '/mimic/get/version'] as const
}

export function useGetMimicGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.get.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNumKey() {
  return [
    'mimic',
    '/mimic/load/:cfgFile/:firstAgentNum/:lastAgentNum/:startAgentNum',
    'PUT',
  ] as const
}

export function usePutMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNum<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.load)[':cfgFile'][':firstAgentNum'][':lastAgentNum'][':startAgentNum']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.load)[':cfgFile'][':firstAgentNum'][':lastAgentNum'][':startAgentNum']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNumKey()
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
            (typeof client.mimic.load)[':cfgFile'][':firstAgentNum'][':lastAgentNum'][':startAgentNum']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.load[':cfgFile'][':firstAgentNum'][':lastAgentNum'][':startAgentNum'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicMgetInfoArrayKey(
  args: InferRequestType<(typeof client.mimic.mget)[':infoArray']['$get']>,
) {
  return ['mimic', '/mimic/mget/:infoArray', args] as const
}

export function useGetMimicMgetInfoArray<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.mget)[':infoArray']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.mget)[':infoArray']['$get']>>
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
        ? getGetMimicMgetInfoArrayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.mget)[':infoArray']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.mget[':infoArray'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicMgetInfoArray<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.mget)[':infoArray']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.mget)[':infoArray']['$get']>>
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
        ? getGetMimicMgetInfoArrayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.mget)[':infoArray']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.mget[':infoArray'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicProtocolMsgCoapGetStatsHdrKey() {
  return ['mimic', '/mimic/protocol/msg/coap/get/stats_hdr'] as const
}

export function useGetMimicProtocolMsgCoapGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.coap.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgCoapGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.coap.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.coap.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicProtocolMsgCoapGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.coap.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgCoapGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.coap.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.coap.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicProtocolMsgDhcpGetStatsHdrKey() {
  return ['mimic', '/mimic/protocol/msg/dhcp/get/stats_hdr'] as const
}

export function useGetMimicProtocolMsgDhcpGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.dhcp.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgDhcpGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.dhcp.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.dhcp.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicProtocolMsgDhcpGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.dhcp.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgDhcpGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.dhcp.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.dhcp.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicProtocolMsgIpmiGetStatsHdrKey() {
  return ['mimic', '/mimic/protocol/msg/ipmi/get/stats_hdr'] as const
}

export function useGetMimicProtocolMsgIpmiGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.ipmi.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgIpmiGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.ipmi.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.ipmi.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicProtocolMsgIpmiGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.ipmi.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgIpmiGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.ipmi.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.ipmi.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicProtocolMsgMqttGetStatsHdrKey() {
  return ['mimic', '/mimic/protocol/msg/mqtt/get/stats_hdr'] as const
}

export function useGetMimicProtocolMsgMqttGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.mqtt.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgMqttGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.mqtt.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.mqtt.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicProtocolMsgMqttGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.mqtt.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgMqttGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.mqtt.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.mqtt.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicProtocolMsgNetflowGetStatsHdrKey() {
  return ['mimic', '/mimic/protocol/msg/netflow/get/stats_hdr'] as const
}

export function useGetMimicProtocolMsgNetflowGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.netflow.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgNetflowGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.netflow.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mimic.protocol.msg.netflow.get.stats_hdr.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicProtocolMsgNetflowGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.netflow.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgNetflowGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.netflow.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mimic.protocol.msg.netflow.get.stats_hdr.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicProtocolMsgProxyGetStatsHdrKey() {
  return ['mimic', '/mimic/protocol/msg/proxy/get/stats_hdr'] as const
}

export function useGetMimicProtocolMsgProxyGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.proxy.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgProxyGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.proxy.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.proxy.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicProtocolMsgProxyGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.proxy.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgProxyGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.proxy.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.proxy.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicProtocolMsgSflowGetStatsHdrKey() {
  return ['mimic', '/mimic/protocol/msg/sflow/get/stats_hdr'] as const
}

export function useGetMimicProtocolMsgSflowGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.sflow.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgSflowGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.sflow.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.sflow.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicProtocolMsgSflowGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.sflow.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgSflowGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.sflow.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.sflow.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicProtocolMsgSnmptcpGetStatsHdrKey() {
  return ['mimic', '/mimic/protocol/msg/snmptcp/get/stats_hdr'] as const
}

export function useGetMimicProtocolMsgSnmptcpGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgSnmptcpGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicProtocolMsgSnmptcpGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgSnmptcpGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicProtocolMsgSshGetStatsHdrKey() {
  return ['mimic', '/mimic/protocol/msg/ssh/get/stats_hdr'] as const
}

export function useGetMimicProtocolMsgSshGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.ssh.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgSshGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.ssh.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.ssh.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicProtocolMsgSshGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.ssh.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgSshGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.ssh.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.ssh.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicProtocolMsgSyslogGetStatsHdrKey() {
  return ['mimic', '/mimic/protocol/msg/syslog/get/stats_hdr'] as const
}

export function useGetMimicProtocolMsgSyslogGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.syslog.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgSyslogGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.syslog.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mimic.protocol.msg.syslog.get.stats_hdr.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicProtocolMsgSyslogGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.syslog.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgSyslogGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.syslog.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mimic.protocol.msg.syslog.get.stats_hdr.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicProtocolMsgTelnetGetStatsHdrKey() {
  return ['mimic', '/mimic/protocol/msg/telnet/get/stats_hdr'] as const
}

export function useGetMimicProtocolMsgTelnetGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.telnet.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgTelnetGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.telnet.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mimic.protocol.msg.telnet.get.stats_hdr.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicProtocolMsgTelnetGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.telnet.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgTelnetGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.telnet.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mimic.protocol.msg.telnet.get.stats_hdr.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMimicProtocolMsgTftpGetStatsHdrKey() {
  return ['mimic', '/mimic/protocol/msg/tftp/get/stats_hdr'] as const
}

export function useGetMimicProtocolMsgTftpGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.tftp.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgTftpGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.tftp.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.tftp.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicProtocolMsgTftpGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.tftp.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgTftpGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.tftp.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.tftp.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicProtocolMsgTodGetStatsHdrKey() {
  return ['mimic', '/mimic/protocol/msg/tod/get/stats_hdr'] as const
}

export function useGetMimicProtocolMsgTodGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.tod.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgTodGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.tod.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.tod.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicProtocolMsgTodGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.tod.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgTodGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.tod.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.tod.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicProtocolMsgWebGetStatsHdrKey() {
  return ['mimic', '/mimic/protocol/msg/web/get/stats_hdr'] as const
}

export function useGetMimicProtocolMsgWebGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.web.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgWebGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.web.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.web.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicProtocolMsgWebGetStatsHdr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.web.get.stats_hdr.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicProtocolMsgWebGetStatsHdrKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mimic.protocol.msg.web.get.stats_hdr.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mimic.protocol.msg.web.get.stats_hdr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMimicSaveKey() {
  return ['mimic', '/mimic/save', 'PUT'] as const
}

export function usePutMimicSave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.save.$put>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicSaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.mimic.save.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicSaveasCfgFileFirstAgentNumLastAgentNumKey() {
  return ['mimic', '/mimic/saveas/:cfgFile/:firstAgentNum/:lastAgentNum', 'PUT'] as const
}

export function usePutMimicSaveasCfgFileFirstAgentNumLastAgentNum<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.saveas)[':cfgFile'][':firstAgentNum'][':lastAgentNum']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.saveas)[':cfgFile'][':firstAgentNum'][':lastAgentNum']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicSaveasCfgFileFirstAgentNumLastAgentNumKey()
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
            (typeof client.mimic.saveas)[':cfgFile'][':firstAgentNum'][':lastAgentNum']['$put']
          >
        },
      ) =>
        parseResponse(
          client.mimic.saveas[':cfgFile'][':firstAgentNum'][':lastAgentNum'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMimicSetLogKey() {
  return ['mimic', '/mimic/set/log', 'PUT'] as const
}

export function usePutMimicSetLog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.set.log.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mimic.set.log.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicSetLogKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mimic.set.log.$put> }) =>
        parseResponse(client.mimic.set.log.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicSetNetdevKey() {
  return ['mimic', '/mimic/set/netdev', 'PUT'] as const
}

export function usePutMimicSetNetdev<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.set.netdev.$put>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicSetNetdevKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.mimic.set.netdev.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicSetPersistentKey() {
  return ['mimic', '/mimic/set/persistent', 'PUT'] as const
}

export function usePutMimicSetPersistent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.set.persistent.$put>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicSetPersistentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.mimic.set.persistent.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicStartKey() {
  return ['mimic', '/mimic/start', 'PUT'] as const
}

export function usePutMimicStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.start.$put>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.mimic.start.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicStopKey() {
  return ['mimic', '/mimic/stop', 'PUT'] as const
}

export function usePutMimicStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.stop.$put>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.mimic.stop.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMimicStoreExistsVarKey(
  args: InferRequestType<(typeof client.mimic.store.exists)[':var']['$get']>,
) {
  return ['mimic', '/mimic/store/exists/:var', args] as const
}

export function useGetMimicStoreExistsVar<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.store.exists)[':var']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.store.exists)[':var']['$get']>>
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
        ? getGetMimicStoreExistsVarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.store.exists)[':var']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.store.exists[':var'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicStoreExistsVar<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.store.exists)[':var']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.store.exists)[':var']['$get']>>
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
        ? getGetMimicStoreExistsVarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.store.exists)[':var']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.store.exists[':var'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicStoreGetVarKey(
  args: InferRequestType<(typeof client.mimic.store.get)[':var']['$get']>,
) {
  return ['mimic', '/mimic/store/get/:var', args] as const
}

export function useGetMimicStoreGetVar<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.store.get)[':var']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.store.get)[':var']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicStoreGetVarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.store.get)[':var']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.store.get[':var'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicStoreGetVar<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.store.get)[':var']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.store.get)[':var']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicStoreGetVarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.store.get)[':var']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.store.get[':var'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMimicStoreListKey() {
  return ['mimic', '/mimic/store/list'] as const
}

export function useGetMimicStoreList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.store.list.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicStoreListKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.store.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.store.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicStoreList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.store.list.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMimicStoreListKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.store.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.store.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMimicStoreLreplaceVarIndexKey() {
  return ['mimic', '/mimic/store/lreplace/:var/:index', 'PUT'] as const
}

export function usePutMimicStoreLreplaceVarIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.store.lreplace)[':var'][':index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.store.lreplace)[':var'][':index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicStoreLreplaceVarIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mimic.store.lreplace)[':var'][':index']['$put']>
        },
      ) => parseResponse(client.mimic.store.lreplace[':var'][':index'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMimicStorePersistsVarKey(
  args: InferRequestType<(typeof client.mimic.store.persists)[':var']['$get']>,
) {
  return ['mimic', '/mimic/store/persists/:var', args] as const
}

export function useGetMimicStorePersistsVar<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.store.persists)[':var']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.store.persists)[':var']['$get']>>
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
        ? getGetMimicStorePersistsVarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.store.persists)[':var']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.store.persists[':var'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicStorePersistsVar<TError = unknown>(
  args: InferRequestType<(typeof client.mimic.store.persists)[':var']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.store.persists)[':var']['$get']>>
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
        ? getGetMimicStorePersistsVarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mimic.store.persists)[':var']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.store.persists[':var'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMimicStoreSetVarPersistKey() {
  return ['mimic', '/mimic/store/set/:var/:persist', 'PUT'] as const
}

export function usePutMimicStoreSetVarPersist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.store.set)[':var'][':persist']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.store.set)[':var'][':persist']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicStoreSetVarPersistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mimic.store.set)[':var'][':persist']['$put']> },
      ) => parseResponse(client.mimic.store.set[':var'][':persist'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicStoreUnsetVarKey() {
  return ['mimic', '/mimic/store/unset/:var', 'PUT'] as const
}

export function usePutMimicStoreUnsetVar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.store.unset)[':var']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mimic.store.unset)[':var']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicStoreUnsetVarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.mimic.store.unset)[':var']['$put']> },
      ) => parseResponse(client.mimic.store.unset[':var'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMimicTerminateKey() {
  return ['mimic', '/mimic/terminate', 'PUT'] as const
}

export function usePutMimicTerminate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.terminate.$put>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMimicTerminateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.mimic.terminate.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMimicTimerScriptAddScriptIntervalArgKey() {
  return ['mimic', '/mimic/timer/script/add/:script/:interval/:arg', 'POST'] as const
}

export function usePostMimicTimerScriptAddScriptIntervalArg<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.timer.script.add)[':script'][':interval'][':arg']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.timer.script.add)[':script'][':interval'][':arg']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMimicTimerScriptAddScriptIntervalArgKey()
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
            (typeof client.mimic.timer.script.add)[':script'][':interval'][':arg']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mimic.timer.script.add[':script'][':interval'][':arg'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMimicTimerScriptDeleteScriptIntervalArgKey() {
  return ['mimic', '/mimic/timer/script/delete/:script/:interval/:arg', 'DELETE'] as const
}

export function useDeleteMimicTimerScriptDeleteScriptIntervalArg<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mimic.timer.script.delete)[':script'][':interval'][':arg']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mimic.timer.script.delete)[':script'][':interval'][':arg']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMimicTimerScriptDeleteScriptIntervalArgKey()
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
            (typeof client.mimic.timer.script.delete)[':script'][':interval'][':arg']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mimic.timer.script.delete[':script'][':interval'][':arg'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMimicTimerScriptListKey() {
  return ['mimic', '/mimic/timer/script/list'] as const
}

export function useGetMimicTimerScriptList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.timer.script.list.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicTimerScriptListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.timer.script.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.timer.script.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMimicTimerScriptList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.timer.script.list.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMimicTimerScriptListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mimic.timer.script.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mimic.timer.script.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
