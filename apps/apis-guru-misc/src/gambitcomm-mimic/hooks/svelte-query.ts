import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMimicKey() {
  return ['mimic'] as const
}

export function getPostMimicAccessAddUserAgentsMaskMutationKey() {
  return ['mimic', '/mimic/access/add/:user/:agents/:mask', 'POST'] as const
}

export function getPostMimicAccessAddUserAgentsMaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mimic.access.add)[':user'][':agents'][':mask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMimicAccessAddUserAgentsMaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.access.add)[':user'][':agents'][':mask']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.access.add[':user'][':agents'][':mask'].$post(args, options),
      )
    },
  })
}

export function createPostMimicAccessAddUserAgentsMask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.mimic.access.add)[':user'][':agents'][':mask']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMimicAccessAddUserAgentsMaskMutationOptions<
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

export function getDeleteMimicAccessDelUserMutationKey() {
  return ['mimic', '/mimic/access/del/:user', 'DELETE'] as const
}

export function getDeleteMimicAccessDelUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.access.del)[':user']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.access.del)[':user']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAccessDelUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.mimic.access.del)[':user']['$delete']>) {
      return parseResponse(client.mimic.access.del[':user'].$delete(args, options))
    },
  })
}

export function createDeleteMimicAccessDelUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.access.del)[':user']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.access.del)[':user']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMimicAccessDelUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMimicAccessGetAcldbQueryKey() {
  return ['mimic', '/mimic/access/get/acldb'] as const
}

export function getMimicAccessGetAcldbQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.acldb.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.acldb.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAccessGetAcldbQueryKey>
  >({
    queryKey: getMimicAccessGetAcldbQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.access.get.acldb.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAccessGetAcldb<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.acldb.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.acldb.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAccessGetAcldbQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicAccessGetAcldbQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicAccessGetAdmindirQueryKey() {
  return ['mimic', '/mimic/access/get/admindir'] as const
}

export function getMimicAccessGetAdmindirQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.admindir.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.admindir.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAccessGetAdmindirQueryKey>
  >({
    queryKey: getMimicAccessGetAdmindirQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.access.get.admindir.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAccessGetAdmindir<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.admindir.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.admindir.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAccessGetAdmindirQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicAccessGetAdmindirQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicAccessGetAdminuserQueryKey() {
  return ['mimic', '/mimic/access/get/adminuser'] as const
}

export function getMimicAccessGetAdminuserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.adminuser.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.adminuser.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAccessGetAdminuserQueryKey>
  >({
    queryKey: getMimicAccessGetAdminuserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.access.get.adminuser.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAccessGetAdminuser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.adminuser.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.adminuser.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAccessGetAdminuserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicAccessGetAdminuserQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicAccessGetEnabledQueryKey() {
  return ['mimic', '/mimic/access/get/enabled'] as const
}

export function getMimicAccessGetEnabledQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.enabled.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.enabled.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAccessGetEnabledQueryKey>
  >({
    queryKey: getMimicAccessGetEnabledQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.access.get.enabled.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAccessGetEnabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.enabled.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.enabled.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAccessGetEnabledQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicAccessGetEnabledQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicAccessListQueryKey() {
  return ['mimic', '/mimic/access/list'] as const
}

export function getMimicAccessListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.list.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAccessListQueryKey>
  >({
    queryKey: getMimicAccessListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.access.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAccessList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.list.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAccessListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicAccessListQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutMimicAccessLoadFilenameMutationKey() {
  return ['mimic', '/mimic/access/load/:filename', 'PUT'] as const
}

export function getPutMimicAccessLoadFilenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.access.load)[':filename']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.access.load)[':filename']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAccessLoadFilenameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.access.load)[':filename']['$put']>,
    ) {
      return parseResponse(client.mimic.access.load[':filename'].$put(args, options))
    },
  })
}

export function createPutMimicAccessLoadFilename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.access.load)[':filename']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.access.load)[':filename']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAccessLoadFilenameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutMimicAccessSaveFilenameMutationKey() {
  return ['mimic', '/mimic/access/save/:filename', 'PUT'] as const
}

export function getPutMimicAccessSaveFilenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.access.save)[':filename']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.access.save)[':filename']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAccessSaveFilenameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.access.save)[':filename']['$put']>,
    ) {
      return parseResponse(client.mimic.access.save[':filename'].$put(args, options))
    },
  })
}

export function createPutMimicAccessSaveFilename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.access.save)[':filename']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.access.save)[':filename']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAccessSaveFilenameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutMimicAccessSetAcldbDatabaseNameMutationKey() {
  return ['mimic', '/mimic/access/set/acldb/:databaseName', 'PUT'] as const
}

export function getPutMimicAccessSetAcldbDatabaseNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.access.set.acldb)[':databaseName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.access.set.acldb)[':databaseName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAccessSetAcldbDatabaseNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.access.set.acldb)[':databaseName']['$put']>,
    ) {
      return parseResponse(client.mimic.access.set.acldb[':databaseName'].$put(args, options))
    },
  })
}

export function createPutMimicAccessSetAcldbDatabaseName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.access.set.acldb)[':databaseName']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.access.set.acldb)[':databaseName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAccessSetAcldbDatabaseNameMutationOptions<
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

export function getPutMimicAccessSetEnabledEnabledOrNotMutationKey() {
  return ['mimic', '/mimic/access/set/enabled/:enabledOrNot', 'PUT'] as const
}

export function getPutMimicAccessSetEnabledEnabledOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.access.set.enabled)[':enabledOrNot']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.access.set.enabled)[':enabledOrNot']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAccessSetEnabledEnabledOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.access.set.enabled)[':enabledOrNot']['$put']>,
    ) {
      return parseResponse(client.mimic.access.set.enabled[':enabledOrNot'].$put(args, options))
    },
  })
}

export function createPutMimicAccessSetEnabledEnabledOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.access.set.enabled)[':enabledOrNot']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.access.set.enabled)[':enabledOrNot']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAccessSetEnabledEnabledOrNotMutationOptions<
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

export function getPostMimicAgentAgentNumAddIPMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/add/:IP', 'POST'] as const
}

export function getPostMimicAgentAgentNumAddIPMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['add'][':IP']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['add'][':IP']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMimicAgentAgentNumAddIPMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['add'][':IP']['$post']>,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].add[':IP'].$post(args, options))
    },
  })
}

export function createPostMimicAgentAgentNumAddIP<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['add'][':IP']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['add'][':IP']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMimicAgentAgentNumAddIPMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMimicAgentAgentNumFromAddIPPortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/from/add/:IP/:port', 'POST'] as const
}

export function getPostMimicAgentAgentNumFromAddIPPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['from']['add'][':IP'][':port']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMimicAgentAgentNumFromAddIPPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['from']['add'][':IP'][':port']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].from.add[':IP'][':port'].$post(args, options),
      )
    },
  })
}

export function createPostMimicAgentAgentNumFromAddIPPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['from']['add'][':IP'][':port']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMimicAgentAgentNumFromAddIPPortMutationOptions<
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

export function getDeleteMimicAgentAgentNumFromDeleteIPPortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/from/delete/:IP/:port', 'DELETE'] as const
}

export function getDeleteMimicAgentAgentNumFromDeleteIPPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['from']['delete'][':IP'][':port']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumFromDeleteIPPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['from']['delete'][':IP'][':port']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].from.delete[':IP'][':port'].$delete(args, options),
      )
    },
  })
}

export function createDeleteMimicAgentAgentNumFromDeleteIPPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['from']['delete'][':IP'][':port']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMimicAgentAgentNumFromDeleteIPPortMutationOptions<
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

export function getMimicAgentAgentNumFromListQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/from/list', args] as const
}

export function getMimicAgentAgentNumFromListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumFromListQueryKey>
  >({
    queryKey: getMimicAgentAgentNumFromListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].from.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumFromList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumFromListQueryKey>
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
      ...getMimicAgentAgentNumFromListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetChangedQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/changed', args] as const
}

export function getMimicAgentAgentNumGetChangedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetChangedQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetChangedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.changed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetChanged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetChangedQueryKey>
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
      ...getMimicAgentAgentNumGetChangedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetConfigChangedQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/config_changed', args] as const
}

export function getMimicAgentAgentNumGetConfigChangedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetConfigChangedQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetConfigChangedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.config_changed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetConfigChanged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetConfigChangedQueryKey>
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
      ...getMimicAgentAgentNumGetConfigChangedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetDelayQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/delay', args] as const
}

export function getMimicAgentAgentNumGetDelayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetDelayQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetDelayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.delay.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetDelay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetDelayQueryKey>
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
      ...getMimicAgentAgentNumGetDelayQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetDropsQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/drops', args] as const
}

export function getMimicAgentAgentNumGetDropsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetDropsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetDropsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.drops.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetDrops<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetDropsQueryKey>
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
      ...getMimicAgentAgentNumGetDropsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetHostQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/host', args] as const
}

export function getMimicAgentAgentNumGetHostQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetHostQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetHostQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.host.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetHost<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetHostQueryKey>
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
      ...getMimicAgentAgentNumGetHostQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetInformTimeoutQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/inform_timeout', args] as const
}

export function getMimicAgentAgentNumGetInformTimeoutQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetInformTimeoutQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetInformTimeoutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.inform_timeout.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetInformTimeout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetInformTimeoutQueryKey>
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
      ...getMimicAgentAgentNumGetInformTimeoutQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetInterfaceQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/interface', args] as const
}

export function getMimicAgentAgentNumGetInterfaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetInterfaceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetInterfaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.interface.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetInterface<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetInterfaceQueryKey>
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
      ...getMimicAgentAgentNumGetInterfaceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetMaskQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/mask', args] as const
}

export function getMimicAgentAgentNumGetMaskQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetMaskQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetMaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.mask.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetMask<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetMaskQueryKey>
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
      ...getMimicAgentAgentNumGetMaskQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetMibsQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/mibs', args] as const
}

export function getMimicAgentAgentNumGetMibsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetMibsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetMibsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.mibs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetMibs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetMibsQueryKey>
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
      ...getMimicAgentAgentNumGetMibsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetNumStartsQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/num_starts', args] as const
}

export function getMimicAgentAgentNumGetNumStartsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetNumStartsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetNumStartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.num_starts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetNumStarts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetNumStartsQueryKey>
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
      ...getMimicAgentAgentNumGetNumStartsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetOiddirQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/oiddir', args] as const
}

export function getMimicAgentAgentNumGetOiddirQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetOiddirQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetOiddirQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.oiddir.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetOiddir<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetOiddirQueryKey>
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
      ...getMimicAgentAgentNumGetOiddirQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetOwnerQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/owner', args] as const
}

export function getMimicAgentAgentNumGetOwnerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetOwnerQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetOwnerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.owner.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetOwner<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetOwnerQueryKey>
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
      ...getMimicAgentAgentNumGetOwnerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetPdusizeQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/pdusize', args] as const
}

export function getMimicAgentAgentNumGetPdusizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetPdusizeQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetPdusizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.pdusize.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetPdusize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetPdusizeQueryKey>
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
      ...getMimicAgentAgentNumGetPdusizeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetPortQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/port', args] as const
}

export function getMimicAgentAgentNumGetPortQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetPortQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetPortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.port.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetPort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetPortQueryKey>
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
      ...getMimicAgentAgentNumGetPortQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetPrivdirQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/privdir', args] as const
}

export function getMimicAgentAgentNumGetPrivdirQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetPrivdirQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetPrivdirQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.privdir.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetPrivdir<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetPrivdirQueryKey>
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
      ...getMimicAgentAgentNumGetPrivdirQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetProtocolQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/protocol', args] as const
}

export function getMimicAgentAgentNumGetProtocolQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetProtocolQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetProtocolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.protocol.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetProtocol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetProtocolQueryKey>
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
      ...getMimicAgentAgentNumGetProtocolQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetReadQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/read', args] as const
}

export function getMimicAgentAgentNumGetReadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetReadQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetReadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.read.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetRead<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetReadQueryKey>
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
      ...getMimicAgentAgentNumGetReadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetScenQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/scen', args] as const
}

export function getMimicAgentAgentNumGetScenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetScenQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetScenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.scen.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetScen<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetScenQueryKey>
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
      ...getMimicAgentAgentNumGetScenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetSimQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/sim', args] as const
}

export function getMimicAgentAgentNumGetSimQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetSimQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetSimQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.sim.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetSim<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetSimQueryKey>
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
      ...getMimicAgentAgentNumGetSimQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetStartQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/start', args] as const
}

export function getMimicAgentAgentNumGetStartQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetStartQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetStartQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.start.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetStart<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetStartQueryKey>
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
      ...getMimicAgentAgentNumGetStartQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetStateQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/state', args] as const
}

export function getMimicAgentAgentNumGetStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetStateQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.state.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetStateQueryKey>
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
      ...getMimicAgentAgentNumGetStateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetStateChangedQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/state_changed', args] as const
}

export function getMimicAgentAgentNumGetStateChangedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetStateChangedQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetStateChangedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.state_changed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetStateChanged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetStateChangedQueryKey>
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
      ...getMimicAgentAgentNumGetStateChangedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetStatisticsQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/statistics', args] as const
}

export function getMimicAgentAgentNumGetStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetStatisticsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetStatisticsQueryKey>
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
      ...getMimicAgentAgentNumGetStatisticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetTraceQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/trace', args] as const
}

export function getMimicAgentAgentNumGetTraceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetTraceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.trace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetTrace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetTraceQueryKey>
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
      ...getMimicAgentAgentNumGetTraceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetValidateQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/validate', args] as const
}

export function getMimicAgentAgentNumGetValidateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetValidateQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetValidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.validate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetValidate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetValidateQueryKey>
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
      ...getMimicAgentAgentNumGetValidateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumGetWriteQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/write', args] as const
}

export function getMimicAgentAgentNumGetWriteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetWriteQueryKey>
  >({
    queryKey: getMimicAgentAgentNumGetWriteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.write.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumGetWrite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumGetWriteQueryKey>
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
      ...getMimicAgentAgentNumGetWriteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumHaltMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/halt', 'PUT'] as const
}

export function getPutMimicAgentAgentNumHaltMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['halt']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['halt']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumHaltMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['halt']['$put']>,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].halt.$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumHalt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['halt']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['halt']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumHaltMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMimicAgentAgentNumIpaliasAddIPPortMaskInterfaceMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/ipalias/add/:IP/:port/:mask/:interface', 'POST'] as const
}

export function getPostMimicAgentAgentNumIpaliasAddIPPortMaskInterfaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['ipalias']['add'][':IP'][':port'][':mask'][':interface']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMimicAgentAgentNumIpaliasAddIPPortMaskInterfaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['ipalias']['add'][':IP'][':port'][':mask'][':interface']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].ipalias.add[':IP'][':port'][':mask'][':interface'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostMimicAgentAgentNumIpaliasAddIPPortMaskInterface<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['ipalias']['add'][':IP'][':port'][':mask'][':interface']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMimicAgentAgentNumIpaliasAddIPPortMaskInterfaceMutationOptions<
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

export function getDeleteMimicAgentAgentNumIpaliasDeleteIPPortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/ipalias/delete/:IP/:port', 'DELETE'] as const
}

export function getDeleteMimicAgentAgentNumIpaliasDeleteIPPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['ipalias']['delete'][':IP'][':port']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumIpaliasDeleteIPPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['ipalias']['delete'][':IP'][':port']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].ipalias.delete[':IP'][':port'].$delete(args, options),
      )
    },
  })
}

export function createDeleteMimicAgentAgentNumIpaliasDeleteIPPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['ipalias']['delete'][':IP'][':port']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMimicAgentAgentNumIpaliasDeleteIPPortMutationOptions<
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

export function getMimicAgentAgentNumIpaliasListQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/ipalias/list', args] as const
}

export function getMimicAgentAgentNumIpaliasListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumIpaliasListQueryKey>
  >({
    queryKey: getMimicAgentAgentNumIpaliasListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].ipalias.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumIpaliasList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumIpaliasListQueryKey>
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
      ...getMimicAgentAgentNumIpaliasListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumIpaliasStartIPPortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/ipalias/start/:IP/:port', 'PUT'] as const
}

export function getPutMimicAgentAgentNumIpaliasStartIPPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['ipalias']['start'][':IP'][':port']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumIpaliasStartIPPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['ipalias']['start'][':IP'][':port']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].ipalias.start[':IP'][':port'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumIpaliasStartIPPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['ipalias']['start'][':IP'][':port']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumIpaliasStartIPPortMutationOptions<
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

export function getMimicAgentAgentNumIpaliasStatusIPPortQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/ipalias/status/:IP/:port', args] as const
}

export function getMimicAgentAgentNumIpaliasStatusIPPortQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumIpaliasStatusIPPortQueryKey>
  >({
    queryKey: getMimicAgentAgentNumIpaliasStatusIPPortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].ipalias.status[':IP'][':port'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumIpaliasStatusIPPort<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumIpaliasStatusIPPortQueryKey>
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
      ...getMimicAgentAgentNumIpaliasStatusIPPortQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumIpaliasStopIPPortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/ipalias/stop/:IP/:port', 'PUT'] as const
}

export function getPutMimicAgentAgentNumIpaliasStopIPPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['ipalias']['stop'][':IP'][':port']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumIpaliasStopIPPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['ipalias']['stop'][':IP'][':port']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].ipalias.stop[':IP'][':port'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumIpaliasStopIPPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['ipalias']['stop'][':IP'][':port']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumIpaliasStopIPPortMutationOptions<
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

export function getPutMimicAgentAgentNumPauseMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/pause', 'PUT'] as const
}

export function getPutMimicAgentAgentNumPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['pause']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['pause']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['pause']['$put']>,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].pause.$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['pause']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['pause']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumPauseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgCoapGetArgsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/coap/get/args', args] as const
}

export function getMimicAgentAgentNumProtocolMsgCoapGetArgsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetArgsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgCoapGetArgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.coap.get.args.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgCoapGetArgs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetArgsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgCoapGetArgsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgCoapGetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/coap/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolMsgCoapGetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgCoapGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.coap.get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgCoapGetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgCoapGetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgCoapGetStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/coap/get/statistics', args] as const
}

export function getMimicAgentAgentNumProtocolMsgCoapGetStatisticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetStatisticsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgCoapGetStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.coap.get.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgCoapGetStatistics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetStatisticsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgCoapGetStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgCoapGetTraceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/coap/get/trace', args] as const
}

export function getMimicAgentAgentNumProtocolMsgCoapGetTraceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetTraceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgCoapGetTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.coap.get.trace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgCoapGetTrace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetTraceQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgCoapGetTraceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/coap/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['set']['config'][':argument'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['set']['config'][':argument'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.coap.set.config[':argument'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['set']['config'][':argument'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNotMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/coap/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['set']['trace'][':enableOrNot']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['set']['trace'][':enableOrNot']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.coap.set.trace[':enableOrNot'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['set']['trace'][':enableOrNot']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgDhcpGetArgsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/dhcp/get/args', args] as const
}

export function getMimicAgentAgentNumProtocolMsgDhcpGetArgsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetArgsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgDhcpGetArgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.args.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgDhcpGetArgs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetArgsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgDhcpGetArgsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgDhcpGetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/dhcp/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolMsgDhcpGetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgDhcpGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgDhcpGetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgDhcpGetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/dhcp/get/statistics', args] as const
}

export function getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgDhcpGetStatistics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgDhcpGetTraceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/dhcp/get/trace', args] as const
}

export function getMimicAgentAgentNumProtocolMsgDhcpGetTraceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetTraceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgDhcpGetTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.trace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgDhcpGetTrace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetTraceQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgDhcpGetTraceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgDhcpParamsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/dhcp/params', args] as const
}

export function getMimicAgentAgentNumProtocolMsgDhcpParamsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpParamsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgDhcpParamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.dhcp.params.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgDhcpParams<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpParamsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgDhcpParamsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/dhcp/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['set']['config'][':argument'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['set']['config'][':argument'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.dhcp.set.config[':argument'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['set']['config'][':argument'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNotMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/dhcp/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['set']['trace'][':enableOrNot']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['set']['trace'][':enableOrNot']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.dhcp.set.trace[':enableOrNot'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['set']['trace'][':enableOrNot']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgIpmiGetArgsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/get/args', args] as const
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetArgsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetArgsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgIpmiGetArgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.args.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgIpmiGetArgs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetArgsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgIpmiGetArgsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgIpmiGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgIpmiGetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgIpmiGetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/get/statistics', args] as const
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgIpmiGetStatistics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetTraceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/get/trace', args] as const
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetTraceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetTraceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgIpmiGetTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.trace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgIpmiGetTrace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetTraceQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgIpmiGetTraceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetAttrQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/get/:attr', args] as const
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetAttrQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetAttrQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgIpmiGetAttrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ipmi.get[':attr'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgIpmiGetAttr<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetAttrQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgIpmiGetAttrQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/ipmi/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set']['config'][':argument'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set']['config'][':argument'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ipmi.set.config[':argument'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set']['config'][':argument'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNotMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/ipmi/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set']['trace'][':enableOrNot']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set']['trace'][':enableOrNot']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ipmi.set.trace[':enableOrNot'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set']['trace'][':enableOrNot']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNotMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgIpmiSetAttrValueMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/set/:attr/:value', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgIpmiSetAttrValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set'][':attr'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgIpmiSetAttrValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set'][':attr'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ipmi.set[':attr'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgIpmiSetAttrValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['set'][':attr'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgIpmiSetAttrValueMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/client/get/protstate', args] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.get.protstate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgMqttClientGetProtstate<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgMqttClientGetStateQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/client/get/state', args] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttClientGetStateQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientGetStateQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgMqttClientGetStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.get.state.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgMqttClientGetState<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientGetStateQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgMqttClientGetStateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgMqttClientMessageCardQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/client/message/card', args] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttClientMessageCardQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientMessageCardQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgMqttClientMessageCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.message.card.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgMqttClientMessageCard<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientMessageCardQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgMqttClientMessageCardQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrQueryKey(
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

export function getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.message.get[':msgNum'][
          ':attr'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttr<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/message/set/:msgNum/:attr/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['set'][':msgNum'][':attr'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['set'][':msgNum'][':attr'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.message.set[':msgNum'][':attr'][
          ':value'
        ].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['set'][':msgNum'][':attr'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNumMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/resubscribe/:subNum',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNumMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['resubscribe'][':subNum']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNumMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['resubscribe'][':subNum']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.resubscribe[':subNum'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNum<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['resubscribe'][':subNum']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNumMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/client/runtime/abort', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['abort']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['abort']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.runtime.abort.$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['abort']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbortMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnectMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/runtime/connect',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['connect']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['connect']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.runtime.connect.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['connect']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnectMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnectMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/runtime/disconnect',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['disconnect']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['disconnect']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.runtime.disconnect.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['runtime']['disconnect']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnectMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddrMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/broker/:brokerAddr',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddrMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['broker'][':brokerAddr']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddrMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['broker'][':brokerAddr']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.broker[':brokerAddr'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddr<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['broker'][':brokerAddr']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddrMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNotMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/cleansession/:cleanOrNot',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['cleansession'][':cleanOrNot']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['cleansession'][':cleanOrNot']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.cleansession[
          ':cleanOrNot'
        ].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['cleansession'][':cleanOrNot']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNotMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientIDMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/clientid/:clientID',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['clientid'][':clientID']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['clientid'][':clientID']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.clientid[':clientID'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['clientid'][':clientID']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientIDMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTimeMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/keepalive/:aliveTime',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['keepalive'][':aliveTime']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTimeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['keepalive'][':aliveTime']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.keepalive[':aliveTime'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTime<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['keepalive'][':aliveTime']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTimeMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectActionMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/on_disconnect/:action',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['on_disconnect'][':action']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['on_disconnect'][':action']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.on_disconnect[':action'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['on_disconnect'][':action']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectActionMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPasswordMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/password/:password',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['password'][':password']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['password'][':password']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.password[':password'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['password'][':password']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPasswordMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetPortPortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/port/:port', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetPortPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['port'][':port']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientSetPortPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['port'][':port']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.port[':port'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientSetPortPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['port'][':port']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientSetPortPortMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsernameMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/username/:username',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['username'][':username']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['username'][':username']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.username[':username'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsername<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['username'][':username']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsernameMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsgMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/willmsg/:msg',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willmsg'][':msg']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsgMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willmsg'][':msg']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.willmsg[':msg'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsg<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willmsg'][':msg']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsgMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQosMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/willqos/:qos',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willqos'][':qos']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willqos'][':qos']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.willqos[':qos'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willqos'][':qos']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQosMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetainMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/willretain/:retain',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willretain'][':retain']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willretain'][':retain']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.willretain[':retain'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willretain'][':retain']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetainMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopicMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/willtopic/:topic',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willtopic'][':topic']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopicMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willtopic'][':topic']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.set.willtopic[':topic'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['set']['willtopic'][':topic']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopicMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/client/subscribe/card', args] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.subscribe.card.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgMqttClientSubscribeCard<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrQueryKey(
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

export function getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.subscribe.get[':subNum'][
          ':attr'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttr<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/subscribe/set/:subNum/:attr/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['set'][':subNum'][':attr'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['set'][':subNum'][':attr'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.subscribe.set[':subNum'][':attr'][
          ':value'
        ].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['set'][':subNum'][':attr'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNumMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/unsubscribe/:subNum',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNumMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['unsubscribe'][':subNum']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNumMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['unsubscribe'][':subNum']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.unsubscribe[':subNum'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNum<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['unsubscribe'][':subNum']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNumMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgMqttGetArgsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/get/args', args] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttGetArgsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetArgsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgMqttGetArgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.args.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgMqttGetArgs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetArgsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgMqttGetArgsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgMqttGetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttGetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgMqttGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgMqttGetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgMqttGetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgMqttGetStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/get/statistics', args] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttGetStatisticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetStatisticsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgMqttGetStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgMqttGetStatistics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetStatisticsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgMqttGetStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgMqttGetTraceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/get/trace', args] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttGetTraceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetTraceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgMqttGetTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.trace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgMqttGetTrace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetTraceQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgMqttGetTraceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['set']['config'][':argument'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['set']['config'][':argument'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.set.config[':argument'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['set']['config'][':argument'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNotMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['set']['trace'][':enableOrNot']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['set']['trace'][':enableOrNot']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.set.trace[':enableOrNot'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['set']['trace'][':enableOrNot']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNotMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalIntervalMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/netflow/flow/change/dfs_interval/:interval',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalIntervalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change']['dfs_interval'][':interval']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalIntervalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change']['dfs_interval'][':interval']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.flow.change.dfs_interval[
          ':interval'
        ].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalInterval<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change']['dfs_interval'][':interval']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalIntervalMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalIntervalMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/netflow/flow/change/tfs_interval/:interval',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalIntervalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change']['tfs_interval'][':interval']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalIntervalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change']['tfs_interval'][':interval']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.flow.change.tfs_interval[
          ':interval'
        ].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalInterval<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change']['tfs_interval'][':interval']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalIntervalMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/netflow/flow/change/:flowset-uid/:field-num/:attr/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change'][':flowset-uid'][':field-num'][':attr'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change'][':flowset-uid'][':field-num'][':attr'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.flow.change[':flowset-uid'][
          ':field-num'
        ][':attr'][':value'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['change'][':flowset-uid'][':field-num'][':attr'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValueMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgNetflowFlowListQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/flow/list', args] as const
}

export function getMimicAgentAgentNumProtocolMsgNetflowFlowListQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowFlowListQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgNetflowFlowListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.flow.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgNetflowFlowList<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowFlowListQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgNetflowFlowListQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetArgsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/get/args', args] as const
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetArgsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetArgsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgNetflowGetArgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.get.args.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgNetflowGetArgs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetArgsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgNetflowGetArgsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgNetflowGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgNetflowGetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgNetflowGetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/get/statistics', args] as const
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.get.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgNetflowGetStatistics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetTraceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/get/trace', args] as const
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetTraceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetTraceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgNetflowGetTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.get.trace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgNetflowGetTrace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetTraceQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgNetflowGetTraceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowHaltMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/halt', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowHaltMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['halt']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgNetflowHaltMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['halt']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.halt.$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgNetflowHalt<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['halt']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgNetflowHaltMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgNetflowReloadMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/reload', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowReloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['reload']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgNetflowReloadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['reload']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.reload.$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgNetflowReload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['reload']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgNetflowReloadMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgNetflowResumeMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/resume', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['resume']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgNetflowResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['resume']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.resume.$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgNetflowResume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['resume']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgNetflowResumeMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIPMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/netflow/set/collector/:collectorIP',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIPMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['collector'][':collectorIP']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIPMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['collector'][':collectorIP']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.set.collector[':collectorIP'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIP<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['collector'][':collectorIP']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIPMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/netflow/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['config'][':argument'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['config'][':argument'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.set.config[':argument'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['config'][':argument'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileNameMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/netflow/set/filename/:fileName',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['filename'][':fileName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['filename'][':fileName']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.set.filename[':fileName'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['filename'][':fileName']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileNameMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNotMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/netflow/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['trace'][':enableOrNot']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['trace'][':enableOrNot']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.set.trace[':enableOrNot'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['set']['trace'][':enableOrNot']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgProxyGetArgsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/get/args', args] as const
}

export function getMimicAgentAgentNumProtocolMsgProxyGetArgsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetArgsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgProxyGetArgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.get.args.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgProxyGetArgs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetArgsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgProxyGetArgsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgProxyGetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolMsgProxyGetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgProxyGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgProxyGetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgProxyGetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgProxyGetStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/get/statistics', args] as const
}

export function getMimicAgentAgentNumProtocolMsgProxyGetStatisticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetStatisticsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgProxyGetStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.get.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgProxyGetStatistics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetStatisticsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgProxyGetStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgProxyGetTraceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/get/trace', args] as const
}

export function getMimicAgentAgentNumProtocolMsgProxyGetTraceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetTraceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgProxyGetTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.get.trace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgProxyGetTrace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetTraceQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgProxyGetTraceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPortMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/proxy/port/add/:port/:target/:targetPort',
    'POST',
  ] as const
}

export function getPostMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['add'][':port'][':target'][':targetPort']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['add'][':port'][':target'][':targetPort']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.port.add[':port'][':target'][
          ':targetPort'
        ].$post(args, options),
      )
    },
  })
}

export function createPostMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['add'][':port'][':target'][':targetPort']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPortMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/port/isStarted/:port', args] as const
}

export function getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.port.isStarted[':port'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgProxyPortIsStartedPort<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgProxyPortListQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/port/list', args] as const
}

export function getMimicAgentAgentNumProtocolMsgProxyPortListQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyPortListQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgProxyPortListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.port.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgProxyPortList<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyPortListQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgProxyPortListQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteMimicAgentAgentNumProtocolMsgProxyPortRemovePortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/port/remove/:port', 'DELETE'] as const
}

export function getDeleteMimicAgentAgentNumProtocolMsgProxyPortRemovePortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['remove'][':port']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumProtocolMsgProxyPortRemovePortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['remove'][':port']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.port.remove[':port'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteMimicAgentAgentNumProtocolMsgProxyPortRemovePort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['remove'][':port']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteMimicAgentAgentNumProtocolMsgProxyPortRemovePortMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgProxyPortStartPortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/port/start/:port', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgProxyPortStartPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['start'][':port']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgProxyPortStartPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['start'][':port']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.port.start[':port'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgProxyPortStartPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['start'][':port']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgProxyPortStartPortMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgProxyPortStopPortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/port/stop/:port', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgProxyPortStopPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['stop'][':port']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgProxyPortStopPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['stop'][':port']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.port.stop[':port'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgProxyPortStopPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['stop'][':port']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgProxyPortStopPortMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/proxy/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['set']['config'][':argument'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['set']['config'][':argument'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.set.config[':argument'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['set']['config'][':argument'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNotMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/proxy/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['set']['trace'][':enableOrNot']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['set']['trace'][':enableOrNot']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.set.trace[':enableOrNot'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['set']['trace'][':enableOrNot']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSflowGetArgsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/get/args', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSflowGetArgsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetArgsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSflowGetArgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.sflow.get.args.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSflowGetArgs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetArgsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSflowGetArgsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSflowGetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSflowGetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSflowGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.sflow.get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSflowGetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSflowGetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSflowGetStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/get/statistics', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSflowGetStatisticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetStatisticsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSflowGetStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.sflow.get.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSflowGetStatistics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetStatisticsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSflowGetStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSflowGetTraceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/get/trace', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSflowGetTraceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetTraceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSflowGetTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.sflow.get.trace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSflowGetTrace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetTraceQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSflowGetTraceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgSflowHaltMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/halt', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSflowHaltMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['halt']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSflowHaltMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['halt']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.sflow.halt.$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSflowHalt<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['halt']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgSflowHaltMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgSflowReloadMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/reload', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSflowReloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['reload']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSflowReloadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['reload']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.sflow.reload.$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSflowReload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['reload']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgSflowReloadMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgSflowResumeMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/resume', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSflowResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['resume']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSflowResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['resume']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.sflow.resume.$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSflowResume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['resume']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgSflowResumeMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/sflow/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['set']['config'][':argument'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['set']['config'][':argument'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.sflow.set.config[':argument'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['set']['config'][':argument'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNotMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/sflow/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['set']['trace'][':enableOrNot']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['set']['trace'][':enableOrNot']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.sflow.set.trace[':enableOrNot'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['set']['trace'][':enableOrNot']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/args', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.args.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSnmptcpGetArgs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSnmptcpGetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/statistics', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSnmptcpGetStatistics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/trace', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.trace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSnmptcpGetTrace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPortMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/ipalias/disable/:ipaddress/:port',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['disable'][':ipaddress'][':port']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['disable'][':ipaddress'][':port']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.disable[':ipaddress'][
          ':port'
        ].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['disable'][':ipaddress'][':port']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPortMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPortMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/ipalias/enable/:ipaddress/:port',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['enable'][':ipaddress'][':port']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['enable'][':ipaddress'][':port']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.enable[':ipaddress'][
          ':port'
        ].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['enable'][':ipaddress'][':port']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPortMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortQueryKey(
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

export function getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.isenabled[':ipaddress'][
          ':port'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPort<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortQueryKey
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
      ...getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmptcp/ipalias/list', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSnmptcpIpaliasList<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['set']['config'][':argument'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['set']['config'][':argument'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.set.config[':argument'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['set']['config'][':argument'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNotMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['set']['trace'][':enableOrNot']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['set']['trace'][':enableOrNot']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.set.trace[':enableOrNot'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['set']['trace'][':enableOrNot']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNotMutationOptions<
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

export function getPostMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyViewMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/access/add/:groupName/:prefix/:securityModel/:securityLevel/:contextMatch/:readView/:writeView/:notifyView',
    'POST',
  ] as const
}

export function getPostMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyViewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['add'][':groupName'][':prefix'][':securityModel'][':securityLevel'][':contextMatch'][':readView'][':writeView'][':notifyView']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyViewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['add'][':groupName'][':prefix'][':securityModel'][':securityLevel'][':contextMatch'][':readView'][':writeView'][':notifyView']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.access.add[':groupName'][':prefix'][
          ':securityModel'
        ][':securityLevel'][':contextMatch'][':readView'][':writeView'][':notifyView'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyView<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['add'][':groupName'][':prefix'][':securityModel'][':securityLevel'][':contextMatch'][':readView'][':writeView'][':notifyView']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyViewMutationOptions<
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

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClearMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/access/clear', 'DELETE'] as const
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['clear']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClearMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['clear']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.access.clear.$delete(args, options),
      )
    },
  })
}

export function createDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClear<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['clear']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClearMutationOptions<
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

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessNameMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/access/del/:accessName',
    'DELETE',
  ] as const
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['del'][':accessName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['del'][':accessName']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.access.del[':accessName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['del'][':accessName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessNameMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSnmpv3AccessListQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/access/list', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3AccessListQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3AccessListQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSnmpv3AccessListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.access.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSnmpv3AccessList<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3AccessListQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSnmpv3AccessListQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSnmpv3GetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/context_engineid', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.context_engineid.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineid<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/engineboots', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.engineboots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSnmpv3GetEngineboots<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/engineid', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.engineid.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSnmpv3GetEngineid<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/enginetime', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.enginetime.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetime<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityNameMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/group/add/:groupName/:securityModel/:securityName',
    'POST',
  ] as const
}

export function getPostMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['add'][':groupName'][':securityModel'][':securityName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['add'][':groupName'][':securityModel'][':securityName']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.group.add[':groupName'][
          ':securityModel'
        ][':securityName'].$post(args, options),
      )
    },
  })
}

export function createPostMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['add'][':groupName'][':securityModel'][':securityName']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityNameMutationOptions<
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

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClearMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/group/clear', 'DELETE'] as const
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['clear']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClearMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['clear']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.group.clear.$delete(args, options),
      )
    },
  })
}

export function createDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClear<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['clear']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClearMutationOptions<
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

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupNameMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/group/del/:groupName',
    'DELETE',
  ] as const
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['del'][':groupName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['del'][':groupName']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.group.del[':groupName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['del'][':groupName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupNameMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSnmpv3GroupListQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/group/list', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GroupListQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GroupListQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSnmpv3GroupListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.group.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSnmpv3GroupList<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GroupListQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSnmpv3GroupListQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/set/config/:parameter/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['set']['config'][':parameter'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['set']['config'][':parameter'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.set.config[':parameter'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['set']['config'][':parameter'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValueMutationOptions<
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

export function getPostMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKeyMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/user/add/:userName/:securityName/:authProtocol/:authKey/:privProtocol/:privKey',
    'POST',
  ] as const
}

export function getPostMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['add'][':userName'][':securityName'][':authProtocol'][':authKey'][':privProtocol'][':privKey']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['add'][':userName'][':securityName'][':authProtocol'][':authKey'][':privProtocol'][':privKey']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.user.add[':userName'][':securityName'][
          ':authProtocol'
        ][':authKey'][':privProtocol'][':privKey'].$post(args, options),
      )
    },
  })
}

export function createPostMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['add'][':userName'][':securityName'][':authProtocol'][':authKey'][':privProtocol'][':privKey']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKeyMutationOptions<
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

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserClearMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/user/clear', 'DELETE'] as const
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['clear']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserClearMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['clear']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.user.clear.$delete(args, options),
      )
    },
  })
}

export function createDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserClear<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['clear']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserClearMutationOptions<
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

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserNameMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/user/del/:userName',
    'DELETE',
  ] as const
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['del'][':userName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['del'][':userName']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.user.del[':userName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['del'][':userName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserNameMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSnmpv3UserListQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/user/list', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3UserListQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3UserListQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSnmpv3UserListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.user.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSnmpv3UserList<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3UserListQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSnmpv3UserListQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/usm/save', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['usm']['save']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['usm']['save']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.usm.save.$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSave<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['usm']['save']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilenameMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/usm/saveas/:filename',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['usm']['saveas'][':filename']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilenameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['usm']['saveas'][':filename']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.usm.saveas[':filename'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilename<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['usm']['saveas'][':filename']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilenameMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/vacm/save', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['vacm']['save']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['vacm']['save']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.vacm.save.$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSave<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['vacm']['save']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilenameMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/vacm/saveas/:filename',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['vacm']['saveas'][':filename']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilenameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['vacm']['saveas'][':filename']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.vacm.saveas[':filename'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilename<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['vacm']['saveas'][':filename']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilenameMutationOptions<
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

export function getPostMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMaskMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/view/add/:viewName/:viewType/:subtree/:mask',
    'POST',
  ] as const
}

export function getPostMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['add'][':viewName'][':viewType'][':subtree'][':mask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['add'][':viewName'][':viewType'][':subtree'][':mask']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.view.add[':viewName'][':viewType'][
          ':subtree'
        ][':mask'].$post(args, options),
      )
    },
  })
}

export function createPostMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['add'][':viewName'][':viewType'][':subtree'][':mask']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMaskMutationOptions<
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

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClearMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/view/clear', 'DELETE'] as const
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['clear']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClearMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['clear']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.view.clear.$delete(args, options),
      )
    },
  })
}

export function createDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClear<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['clear']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClearMutationOptions<
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

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewNameMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/view/del/:viewName',
    'DELETE',
  ] as const
}

export function getDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['del'][':viewName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['del'][':viewName']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.view.del[':viewName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['del'][':viewName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewNameMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSnmpv3ViewListQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/view/list', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3ViewListQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3ViewListQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSnmpv3ViewListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.view.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSnmpv3ViewList<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3ViewListQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSnmpv3ViewListQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSshGetArgsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/get/args', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSshGetArgsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetArgsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSshGetArgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.get.args.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSshGetArgs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetArgsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSshGetArgsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSshGetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSshGetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSshGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSshGetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSshGetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSshGetStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/get/statistics', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSshGetStatisticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetStatisticsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSshGetStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.get.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSshGetStatistics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetStatisticsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSshGetStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSshGetTraceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/get/trace', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSshGetTraceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetTraceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSshGetTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.get.trace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSshGetTrace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetTraceQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSshGetTraceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPortMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/ssh/ipalias/disable/:ipaddress/:port',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['disable'][':ipaddress'][':port']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['disable'][':ipaddress'][':port']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.disable[':ipaddress'][
          ':port'
        ].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['disable'][':ipaddress'][':port']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPortMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPortMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/ssh/ipalias/enable/:ipaddress/:port',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['enable'][':ipaddress'][':port']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['enable'][':ipaddress'][':port']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.enable[':ipaddress'][':port'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['enable'][':ipaddress'][':port']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPortMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortQueryKey(
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

export function getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.isenabled[':ipaddress'][
          ':port'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPort<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSshIpaliasListQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/ipalias/list', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSshIpaliasListQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshIpaliasListQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSshIpaliasListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSshIpaliasList<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshIpaliasListQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSshIpaliasListQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/ssh/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['set']['config'][':argument'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['set']['config'][':argument'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.set.config[':argument'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['set']['config'][':argument'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNotMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/set/trace/:enableOrNot', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['set']['trace'][':enableOrNot']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['set']['trace'][':enableOrNot']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.set.trace[':enableOrNot'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['set']['trace'][':enableOrNot']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSyslogGetArgsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/get/args', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetArgsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetArgsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSyslogGetArgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.syslog.get.args.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSyslogGetArgs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetArgsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSyslogGetArgsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSyslogGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.syslog.get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSyslogGetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSyslogGetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/get/statistics', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.syslog.get.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSyslogGetStatistics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetTraceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/get/trace', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetTraceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetTraceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSyslogGetTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.syslog.get.trace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSyslogGetTrace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetTraceQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSyslogGetTraceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetAttrQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/get/:attr', args] as const
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetAttrQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetAttrQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgSyslogGetAttrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.syslog.get[':attr'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgSyslogGetAttr<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetAttrQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgSyslogGetAttrQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostMimicAgentAgentNumProtocolMsgSyslogSendPriMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/send/:pri', 'POST'] as const
}

export function getPostMimicAgentAgentNumProtocolMsgSyslogSendPriMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['send'][':pri']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMimicAgentAgentNumProtocolMsgSyslogSendPriMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['send'][':pri']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.syslog.send[':pri'].$post(args, options),
      )
    },
  })
}

export function createPostMimicAgentAgentNumProtocolMsgSyslogSendPri<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['send'][':pri']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMimicAgentAgentNumProtocolMsgSyslogSendPriMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/syslog/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set']['config'][':argument'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set']['config'][':argument'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.syslog.set.config[':argument'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set']['config'][':argument'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNotMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/syslog/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set']['trace'][':enableOrNot']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set']['trace'][':enableOrNot']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.syslog.set.trace[':enableOrNot'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set']['trace'][':enableOrNot']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNotMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgSyslogSetAttrValueMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/set/:attr/:value', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgSyslogSetAttrValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set'][':attr'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgSyslogSetAttrValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set'][':attr'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.syslog.set[':attr'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgSyslogSetAttrValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['set'][':attr'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgSyslogSetAttrValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPasswordMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/connection/logon/:connectionID/:user/:password',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['logon'][':connectionID'][':user'][':password']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['logon'][':connectionID'][':user'][':password']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.connection.logon[':connectionID'][
          ':user'
        ][':password'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['logon'][':connectionID'][':user'][':password']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPasswordMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommandMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/connection/request/:connectionID/:command',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['request'][':connectionID'][':command']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommandMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['request'][':connectionID'][':command']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.connection.request[':connectionID'][
          ':command'
        ].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommand<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['request'][':connectionID'][':command']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommandMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalNameMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/connection/signal/:connectionID/:signalName',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['signal'][':connectionID'][':signalName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['signal'][':connectionID'][':signalName']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.connection.signal[':connectionID'][
          ':signalName'
        ].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['connection']['signal'][':connectionID'][':signalName']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalNameMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgTelnetGetArgsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/get/args', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetGetArgsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetArgsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTelnetGetArgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.get.args.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTelnetGetArgs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetArgsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTelnetGetArgsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTelnetGetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetGetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTelnetGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTelnetGetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTelnetGetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/get/statistics', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.get.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTelnetGetStatistics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTelnetGetTraceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/get/trace', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetGetTraceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetTraceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTelnetGetTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.get.trace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTelnetGetTrace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetTraceQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTelnetGetTraceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPortMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/ipalias/disable/:ipaddress/:port',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['disable'][':ipaddress'][':port']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['disable'][':ipaddress'][':port']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.disable[':ipaddress'][
          ':port'
        ].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['disable'][':ipaddress'][':port']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPortMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPortMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/ipalias/enable/:ipaddress/:port',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['enable'][':ipaddress'][':port']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['enable'][':ipaddress'][':port']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.enable[':ipaddress'][
          ':port'
        ].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['enable'][':ipaddress'][':port']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPortMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortQueryKey(
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

export function getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.isenabled[':ipaddress'][
          ':port'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPort<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortQueryKey
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
      ...getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTelnetIpaliasListQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/ipalias/list', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetIpaliasListQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetIpaliasListQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTelnetIpaliasListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTelnetIpaliasList<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetIpaliasListQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTelnetIpaliasListQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsQueryKey(
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

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTelnetServerGetConnections<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/keymap', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.keymap.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTelnetServerGetKeymap<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/rulesdb', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.rulesdb.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdb<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetStateQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/state', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetStateQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetStateQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTelnetServerGetStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.state.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTelnetServerGetState<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetStateQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTelnetServerGetStateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/userdb', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.userdb.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTelnetServerGetUserdb<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/users', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTelnetServerGetUsers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['set']['config'][':argument'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['set']['config'][':argument'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.set.config[':argument'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['set']['config'][':argument'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNotMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['set']['trace'][':enableOrNot']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['set']['trace'][':enableOrNot']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.set.trace[':enableOrNot'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['set']['trace'][':enableOrNot']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgTftpGetArgsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/get/args', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTftpGetArgsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetArgsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTftpGetArgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp.get.args.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTftpGetArgs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetArgsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTftpGetArgsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTftpGetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTftpGetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTftpGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp.get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTftpGetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTftpGetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTftpGetStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/get/statistics', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTftpGetStatisticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetStatisticsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTftpGetStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp.get.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTftpGetStatistics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetStatisticsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTftpGetStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTftpGetTraceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/get/trace', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTftpGetTraceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetTraceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTftpGetTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp.get.trace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTftpGetTrace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetTraceQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTftpGetTraceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfileMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tftp/session/read/server/:srcfile',
    'POST',
  ] as const
}

export function getPostMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['session']['read']['server'][':srcfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['session']['read']['server'][':srcfile']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp.session.read.server[':srcfile'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['session']['read']['server'][':srcfile']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfileMutationOptions<
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

export function getPostMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfileMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tftp/session/write/server/:srcfile',
    'POST',
  ] as const
}

export function getPostMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['session']['write']['server'][':srcfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['session']['write']['server'][':srcfile']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp.session.write.server[':srcfile'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['session']['write']['server'][':srcfile']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfileMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tftp/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['set']['config'][':argument'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['set']['config'][':argument'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp.set.config[':argument'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['set']['config'][':argument'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNotMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tftp/set/trace/:enableOrNot',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['set']['trace'][':enableOrNot']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['set']['trace'][':enableOrNot']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp.set.trace[':enableOrNot'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['set']['trace'][':enableOrNot']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterQueryKey(
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

export function getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].get[':parameter'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameter<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/set/:parameter/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['set'][':parameter'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['set'][':parameter'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].set[':parameter'][
          ':value'
        ].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['set'][':parameter'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgTftpSessionIDStartMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/start', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgTftpSessionIDStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['start']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgTftpSessionIDStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['start']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].start.$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgTftpSessionIDStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['start']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgTftpSessionIDStartMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/status', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTftpSessionIDStatus<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgTftpSessionIDStopMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/stop', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgTftpSessionIDStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['stop']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgTftpSessionIDStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['stop']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].stop.$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgTftpSessionIDStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['stop']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgTftpSessionIDStopMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgTodGetArgsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tod/get/args', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTodGetArgsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetArgsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTodGetArgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tod.get.args.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTodGetArgs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetArgsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTodGetArgsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTodGetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tod/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTodGetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTodGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tod.get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTodGetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTodGetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTodGetStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tod/get/statistics', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTodGetStatisticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetStatisticsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTodGetStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tod.get.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTodGetStatistics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetStatisticsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTodGetStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTodGetTraceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tod/get/trace', args] as const
}

export function getMimicAgentAgentNumProtocolMsgTodGetTraceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetTraceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgTodGetTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tod.get.trace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTodGetTrace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetTraceQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgTodGetTraceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesQueryKey(
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

export function getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['gettime']['server'][':serverAddr']['port'][':portNum']['script'][':scriptName']['timeout'][':timeSec']['retries'][':numRetries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesQueryKey
    >
  >({
    queryKey:
      getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tod.gettime.server[':serverAddr'].port[
          ':portNum'
        ].script[':scriptName'].timeout[':timeSec'].retries[':numRetries'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetries<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['gettime']['server'][':serverAddr']['port'][':portNum']['script'][':scriptName']['timeout'][':timeSec']['retries'][':numRetries']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesQueryKey
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
      ...getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tod/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['set']['config'][':argument'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['set']['config'][':argument'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tod.set.config[':argument'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['set']['config'][':argument'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNotMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tod/set/trace/:enableOrNot', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['set']['trace'][':enableOrNot']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['set']['trace'][':enableOrNot']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tod.set.trace[':enableOrNot'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['set']['trace'][':enableOrNot']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgWebGetArgsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/get/args', args] as const
}

export function getMimicAgentAgentNumProtocolMsgWebGetArgsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetArgsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgWebGetArgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.get.args.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgWebGetArgs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetArgsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgWebGetArgsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgWebGetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolMsgWebGetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgWebGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgWebGetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgWebGetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgWebGetStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/get/statistics', args] as const
}

export function getMimicAgentAgentNumProtocolMsgWebGetStatisticsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetStatisticsQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgWebGetStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.get.statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgWebGetStatistics<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetStatisticsQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgWebGetStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumProtocolMsgWebGetTraceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/get/trace', args] as const
}

export function getMimicAgentAgentNumProtocolMsgWebGetTraceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetTraceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgWebGetTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.get.trace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgWebGetTrace<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetTraceQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgWebGetTraceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostMimicAgentAgentNumProtocolMsgWebPortAddPortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/port/add/:port', 'POST'] as const
}

export function getPostMimicAgentAgentNumProtocolMsgWebPortAddPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['add'][':port']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMimicAgentAgentNumProtocolMsgWebPortAddPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['add'][':port']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.port.add[':port'].$post(args, options),
      )
    },
  })
}

export function createPostMimicAgentAgentNumProtocolMsgWebPortAddPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['add'][':port']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMimicAgentAgentNumProtocolMsgWebPortAddPortMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgWebPortExistsPortQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/port/exists/:port', args] as const
}

export function getMimicAgentAgentNumProtocolMsgWebPortExistsPortQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebPortExistsPortQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolMsgWebPortExistsPortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.port.exists[':port'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolMsgWebPortExistsPort<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebPortExistsPortQueryKey>
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
      ...getMimicAgentAgentNumProtocolMsgWebPortExistsPortQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteMimicAgentAgentNumProtocolMsgWebPortRemovePortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/port/remove/:port', 'DELETE'] as const
}

export function getDeleteMimicAgentAgentNumProtocolMsgWebPortRemovePortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['remove'][':port']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumProtocolMsgWebPortRemovePortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['remove'][':port']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.port.remove[':port'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteMimicAgentAgentNumProtocolMsgWebPortRemovePort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['remove'][':port']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMimicAgentAgentNumProtocolMsgWebPortRemovePortMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersionMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/web/port/set/:port/:protocol/:version',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['set'][':port'][':protocol'][':version']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['set'][':port'][':protocol'][':version']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.port.set[':port'][':protocol'][
          ':version'
        ].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['set'][':port'][':protocol'][':version']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersionMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgWebPortStartPortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/port/start/:port', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgWebPortStartPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['start'][':port']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgWebPortStartPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['start'][':port']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.port.start[':port'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgWebPortStartPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['start'][':port']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgWebPortStartPortMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgWebPortStopPortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/port/stop/:port', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgWebPortStopPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['stop'][':port']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgWebPortStopPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['stop'][':port']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.port.stop[':port'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgWebPortStopPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['stop'][':port']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgWebPortStopPortMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValueMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/web/set/config/:argument/:value',
    'PUT',
  ] as const
}

export function getPutMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['set']['config'][':argument'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['set']['config'][':argument'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.set.config[':argument'][':value'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['set']['config'][':argument'][':value']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValueMutationOptions<
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

export function getPutMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNotMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/set/trace/:enableOrNot', 'PUT'] as const
}

export function getPutMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['set']['trace'][':enableOrNot']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['set']['trace'][':enableOrNot']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.set.trace[':enableOrNot'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['set']['trace'][':enableOrNot']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolProtGetConfigQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/:prot/get/config', args] as const
}

export function getMimicAgentAgentNumProtocolProtGetConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolProtGetConfigQueryKey>
  >({
    queryKey: getMimicAgentAgentNumProtocolProtGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol[':prot'].get.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumProtocolProtGetConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumProtocolProtGetConfigQueryKey>
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
      ...getMimicAgentAgentNumProtocolProtGetConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumReloadMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/reload', 'PUT'] as const
}

export function getPutMimicAgentAgentNumReloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['reload']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['reload']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumReloadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['reload']['$put']>,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].reload.$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumReload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['reload']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['reload']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumReloadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteMimicAgentAgentNumRemoveMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/remove', 'DELETE'] as const
}

export function getDeleteMimicAgentAgentNumRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['remove']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['remove']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['remove']['$delete']>,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].remove.$delete(args, options))
    },
  })
}

export function createDeleteMimicAgentAgentNumRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['remove']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['remove']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMimicAgentAgentNumRemoveMutationOptions<
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

export function getPutMimicAgentAgentNumResumeMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/resume', 'PUT'] as const
}

export function getPutMimicAgentAgentNumResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['resume']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['resume']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['resume']['$put']>,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].resume.$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['resume']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['resume']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumResumeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumSaveMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/save', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['save']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['save']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['save']['$put']>,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].save.$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['save']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['save']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumSetDelayDelayMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/delay/:delay', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetDelayDelayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['delay'][':delay']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetDelayDelayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['delay'][':delay']['$put']
      >,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].set.delay[':delay'].$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumSetDelayDelay<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mimic.agent)[':agentNum']['set']['delay'][':delay']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['set']['delay'][':delay']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetDelayDelayMutationOptions<
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

export function getPutMimicAgentAgentNumSetDropsDropsMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/drops/:drops', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetDropsDropsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['drops'][':drops']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetDropsDropsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['drops'][':drops']['$put']
      >,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].set.drops[':drops'].$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumSetDropsDrops<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mimic.agent)[':agentNum']['set']['drops'][':drops']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['set']['drops'][':drops']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetDropsDropsMutationOptions<
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

export function getPutMimicAgentAgentNumSetHostHostMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/host/:host', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetHostHostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['host'][':host']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetHostHostMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['host'][':host']['$put']
      >,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].set.host[':host'].$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumSetHostHost<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['host'][':host']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetHostHostMutationOptions<
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

export function getPutMimicAgentAgentNumSetInformTimeoutInformTimeoutMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/inform_timeout/:inform_timeout', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetInformTimeoutInformTimeoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['set']['inform_timeout'][':inform_timeout']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetInformTimeoutInformTimeoutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['inform_timeout'][':inform_timeout']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].set.inform_timeout[':inform_timeout'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumSetInformTimeoutInformTimeout<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['set']['inform_timeout'][':inform_timeout']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetInformTimeoutInformTimeoutMutationOptions<
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

export function getPutMimicAgentAgentNumSetInterfaceInterfaceMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/interface/:interface', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetInterfaceInterfaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['set']['interface'][':interface']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetInterfaceInterfaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['interface'][':interface']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].set.interface[':interface'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumSetInterfaceInterface<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['set']['interface'][':interface']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetInterfaceInterfaceMutationOptions<
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

export function getPutMimicAgentAgentNumSetMaskMaskMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/mask/:mask', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetMaskMaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['mask'][':mask']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetMaskMaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['mask'][':mask']['$put']
      >,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].set.mask[':mask'].$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumSetMaskMask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['mask'][':mask']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetMaskMaskMutationOptions<
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

export function getPutMimicAgentAgentNumSetMibsMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/mibs', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetMibsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['mibs']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['mibs']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetMibsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['mibs']['$put']>,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].set.mibs.$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumSetMibs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['mibs']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['mibs']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetMibsMutationOptions<
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

export function getPutMimicAgentAgentNumSetOiddirOiddirMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/oiddir/:oiddir', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetOiddirOiddirMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['oiddir'][':oiddir']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetOiddirOiddirMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['oiddir'][':oiddir']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].set.oiddir[':oiddir'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumSetOiddirOiddir<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mimic.agent)[':agentNum']['set']['oiddir'][':oiddir']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['set']['oiddir'][':oiddir']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetOiddirOiddirMutationOptions<
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

export function getPutMimicAgentAgentNumSetOwnerOwnerMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/owner/:owner', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetOwnerOwnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['owner'][':owner']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetOwnerOwnerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['owner'][':owner']['$put']
      >,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].set.owner[':owner'].$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumSetOwnerOwner<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mimic.agent)[':agentNum']['set']['owner'][':owner']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['set']['owner'][':owner']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetOwnerOwnerMutationOptions<
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

export function getPutMimicAgentAgentNumSetPdusizePdusizeMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/pdusize/:pdusize', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetPdusizePdusizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['set']['pdusize'][':pdusize']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetPdusizePdusizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['pdusize'][':pdusize']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].set.pdusize[':pdusize'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumSetPdusizePdusize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['set']['pdusize'][':pdusize']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetPdusizePdusizeMutationOptions<
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

export function getPutMimicAgentAgentNumSetPortPortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/port/:port', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetPortPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['port'][':port']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetPortPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['port'][':port']['$put']
      >,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].set.port[':port'].$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumSetPortPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['port'][':port']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetPortPortMutationOptions<
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

export function getPutMimicAgentAgentNumSetPrivdirPrivdirMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/privdir/:privdir', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetPrivdirPrivdirMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['set']['privdir'][':privdir']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetPrivdirPrivdirMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['privdir'][':privdir']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].set.privdir[':privdir'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumSetPrivdirPrivdir<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['set']['privdir'][':privdir']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetPrivdirPrivdirMutationOptions<
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

export function getPutMimicAgentAgentNumSetProtocolMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/protocol', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetProtocolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['protocol']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['protocol']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetProtocolMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['protocol']['$put']>,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].set.protocol.$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumSetProtocol<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['protocol']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['protocol']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetProtocolMutationOptions<
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

export function getPutMimicAgentAgentNumSetReadReadMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/read/:read', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetReadReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['read'][':read']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetReadReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['read'][':read']['$put']
      >,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].set.read[':read'].$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumSetReadRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['read'][':read']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetReadReadMutationOptions<
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

export function getPutMimicAgentAgentNumSetStartStartMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/start/:start', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetStartStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['start'][':start']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetStartStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['start'][':start']['$put']
      >,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].set.start[':start'].$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumSetStartStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mimic.agent)[':agentNum']['set']['start'][':start']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['set']['start'][':start']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetStartStartMutationOptions<
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

export function getPutMimicAgentAgentNumSetTraceTraceMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/trace/:trace', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetTraceTraceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['trace'][':trace']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetTraceTraceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['trace'][':trace']['$put']
      >,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].set.trace[':trace'].$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumSetTraceTrace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mimic.agent)[':agentNum']['set']['trace'][':trace']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['set']['trace'][':trace']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetTraceTraceMutationOptions<
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

export function getPutMimicAgentAgentNumSetValidateValidateMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/validate/:validate', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetValidateValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['set']['validate'][':validate']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetValidateValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['validate'][':validate']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].set.validate[':validate'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumSetValidateValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['set']['validate'][':validate']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetValidateValidateMutationOptions<
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

export function getPutMimicAgentAgentNumSetWriteWriteMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/set/write/:write', 'PUT'] as const
}

export function getPutMimicAgentAgentNumSetWriteWriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['write'][':write']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumSetWriteWriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['set']['write'][':write']['$put']
      >,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].set.write[':write'].$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumSetWriteWrite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mimic.agent)[':agentNum']['set']['write'][':write']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['set']['write'][':write']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumSetWriteWriteMutationOptions<
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

export function getPutMimicAgentAgentNumStartMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/start', 'PUT'] as const
}

export function getPutMimicAgentAgentNumStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['start']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['start']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['start']['$put']>,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].start.$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['start']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['start']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumStartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumStopMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/stop', 'PUT'] as const
}

export function getPutMimicAgentAgentNumStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['stop']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['stop']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['stop']['$put']>,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].stop.$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['stop']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['stop']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumStoreCopyOtherAgentMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/store/copy/:otherAgent', 'PUT'] as const
}

export function getPutMimicAgentAgentNumStoreCopyOtherAgentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['store']['copy'][':otherAgent']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumStoreCopyOtherAgentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['store']['copy'][':otherAgent']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].store.copy[':otherAgent'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumStoreCopyOtherAgent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['store']['copy'][':otherAgent']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumStoreCopyOtherAgentMutationOptions<
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

export function getMimicAgentAgentNumStoreExistsVarQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/store/exists/:var', args] as const
}

export function getMimicAgentAgentNumStoreExistsVarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumStoreExistsVarQueryKey>
  >({
    queryKey: getMimicAgentAgentNumStoreExistsVarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].store.exists[':var'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumStoreExistsVar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumStoreExistsVarQueryKey>
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
      ...getMimicAgentAgentNumStoreExistsVarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumStoreGetVarQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/store/get/:var', args] as const
}

export function getMimicAgentAgentNumStoreGetVarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumStoreGetVarQueryKey>
  >({
    queryKey: getMimicAgentAgentNumStoreGetVarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].store.get[':var'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumStoreGetVar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumStoreGetVarQueryKey>
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
      ...getMimicAgentAgentNumStoreGetVarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumStoreListQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/store/list', args] as const
}

export function getMimicAgentAgentNumStoreListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumStoreListQueryKey>
  >({
    queryKey: getMimicAgentAgentNumStoreListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].store.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumStoreList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumStoreListQueryKey>
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
      ...getMimicAgentAgentNumStoreListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumStoreLreplaceVarIndexMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/store/lreplace/:var/:index', 'PUT'] as const
}

export function getPutMimicAgentAgentNumStoreLreplaceVarIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['store']['lreplace'][':var'][':index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumStoreLreplaceVarIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['store']['lreplace'][':var'][':index']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].store.lreplace[':var'][':index'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumStoreLreplaceVarIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['store']['lreplace'][':var'][':index']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumStoreLreplaceVarIndexMutationOptions<
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

export function getMimicAgentAgentNumStorePersistsVarQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/store/persists/:var', args] as const
}

export function getMimicAgentAgentNumStorePersistsVarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumStorePersistsVarQueryKey>
  >({
    queryKey: getMimicAgentAgentNumStorePersistsVarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].store.persists[':var'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumStorePersistsVar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumStorePersistsVarQueryKey>
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
      ...getMimicAgentAgentNumStorePersistsVarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumStoreSetVarPersistMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/store/set/:var/:persist', 'PUT'] as const
}

export function getPutMimicAgentAgentNumStoreSetVarPersistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['store']['set'][':var'][':persist']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumStoreSetVarPersistMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['store']['set'][':var'][':persist']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].store.set[':var'][':persist'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumStoreSetVarPersist<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['store']['set'][':var'][':persist']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumStoreSetVarPersistMutationOptions<
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

export function getPutMimicAgentAgentNumStoreUnsetVarMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/store/unset/:var', 'PUT'] as const
}

export function getPutMimicAgentAgentNumStoreUnsetVarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['unset'][':var']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumStoreUnsetVarMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['store']['unset'][':var']['$put']
      >,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].store.unset[':var'].$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumStoreUnsetVar<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mimic.agent)[':agentNum']['store']['unset'][':var']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['store']['unset'][':var']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumStoreUnsetVarMutationOptions<
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

export function getPostMimicAgentAgentNumTimerScriptAddScriptIntervalArgMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/timer/script/add/:script/:interval/:arg',
    'POST',
  ] as const
}

export function getPostMimicAgentAgentNumTimerScriptAddScriptIntervalArgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['timer']['script']['add'][':script'][':interval'][':arg']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMimicAgentAgentNumTimerScriptAddScriptIntervalArgMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['timer']['script']['add'][':script'][':interval'][':arg']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].timer.script.add[':script'][':interval'][':arg'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostMimicAgentAgentNumTimerScriptAddScriptIntervalArg<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['timer']['script']['add'][':script'][':interval'][':arg']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMimicAgentAgentNumTimerScriptAddScriptIntervalArgMutationOptions<
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

export function getDeleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArgMutationKey() {
  return [
    'mimic',
    '/mimic/agent/:agentNum/timer/script/delete/:script/:interval/:arg',
    'DELETE',
  ] as const
}

export function getDeleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['timer']['script']['delete'][':script'][':interval'][':arg']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArgMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['timer']['script']['delete'][':script'][':interval'][':arg']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].timer.script.delete[':script'][':interval'][':arg'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArg<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['timer']['script']['delete'][':script'][':interval'][':arg']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArgMutationOptions<
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

export function getMimicAgentAgentNumTimerScriptListQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/timer/script/list', args] as const
}

export function getMimicAgentAgentNumTimerScriptListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumTimerScriptListQueryKey>
  >({
    queryKey: getMimicAgentAgentNumTimerScriptListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].timer.script.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumTimerScriptList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumTimerScriptListQueryKey>
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
      ...getMimicAgentAgentNumTimerScriptListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostMimicAgentAgentNumTrapConfigAddIPPortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/trap/config/add/:IP/:port', 'POST'] as const
}

export function getPostMimicAgentAgentNumTrapConfigAddIPPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['trap']['config']['add'][':IP'][':port']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMimicAgentAgentNumTrapConfigAddIPPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['trap']['config']['add'][':IP'][':port']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].trap.config.add[':IP'][':port'].$post(args, options),
      )
    },
  })
}

export function createPostMimicAgentAgentNumTrapConfigAddIPPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['trap']['config']['add'][':IP'][':port']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMimicAgentAgentNumTrapConfigAddIPPortMutationOptions<
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

export function getDeleteMimicAgentAgentNumTrapConfigDeleteIPPortMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/trap/config/delete/:IP/:port', 'DELETE'] as const
}

export function getDeleteMimicAgentAgentNumTrapConfigDeleteIPPortMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['trap']['config']['delete'][':IP'][':port']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumTrapConfigDeleteIPPortMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['trap']['config']['delete'][':IP'][':port']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].trap.config.delete[':IP'][':port'].$delete(args, options),
      )
    },
  })
}

export function createDeleteMimicAgentAgentNumTrapConfigDeleteIPPort<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['trap']['config']['delete'][':IP'][':port']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMimicAgentAgentNumTrapConfigDeleteIPPortMutationOptions<
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

export function getMimicAgentAgentNumTrapConfigListQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/trap/config/list', args] as const
}

export function getMimicAgentAgentNumTrapConfigListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumTrapConfigListQueryKey>
  >({
    queryKey: getMimicAgentAgentNumTrapConfigListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].trap.config.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumTrapConfigList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumTrapConfigListQueryKey>
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
      ...getMimicAgentAgentNumTrapConfigListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumTrapListQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/trap/list', args] as const
}

export function getMimicAgentAgentNumTrapListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumTrapListQueryKey>
  >({
    queryKey: getMimicAgentAgentNumTrapListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].trap.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumTrapList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumTrapListQueryKey>
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
      ...getMimicAgentAgentNumTrapListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostMimicAgentAgentNumValueAddObjectInstanceMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/value/add/:object/:instance', 'POST'] as const
}

export function getPostMimicAgentAgentNumValueAddObjectInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['add'][':object'][':instance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMimicAgentAgentNumValueAddObjectInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['value']['add'][':object'][':instance']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.add[':object'][':instance'].$post(args, options),
      )
    },
  })
}

export function createPostMimicAgentAgentNumValueAddObjectInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['value']['add'][':object'][':instance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMimicAgentAgentNumValueAddObjectInstanceMutationOptions<
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

export function getMimicAgentAgentNumValueEvalObjectInstanceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/eval/:object/:instance', args] as const
}

export function getMimicAgentAgentNumValueEvalObjectInstanceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueEvalObjectInstanceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumValueEvalObjectInstanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.eval[':object'][':instance'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumValueEvalObjectInstance<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumValueEvalObjectInstanceQueryKey>
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
      ...getMimicAgentAgentNumValueEvalObjectInstanceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumValueGetObjectInstanceVariableQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/get/:object/:instance/:variable', args] as const
}

export function getMimicAgentAgentNumValueGetObjectInstanceVariableQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueGetObjectInstanceVariableQueryKey>
  >({
    queryKey: getMimicAgentAgentNumValueGetObjectInstanceVariableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.get[':object'][':instance'][':variable'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumValueGetObjectInstanceVariable<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumValueGetObjectInstanceVariableQueryKey>
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
      ...getMimicAgentAgentNumValueGetObjectInstanceVariableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumValueInfoObjectQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/info/:object', args] as const
}

export function getMimicAgentAgentNumValueInfoObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueInfoObjectQueryKey>
  >({
    queryKey: getMimicAgentAgentNumValueInfoObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.info[':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumValueInfoObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumValueInfoObjectQueryKey>
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
      ...getMimicAgentAgentNumValueInfoObjectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumValueInstancesObjectQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/instances/:object', args] as const
}

export function getMimicAgentAgentNumValueInstancesObjectQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueInstancesObjectQueryKey>
  >({
    queryKey: getMimicAgentAgentNumValueInstancesObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.instances[':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumValueInstancesObject<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumValueInstancesObjectQueryKey>
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
      ...getMimicAgentAgentNumValueInstancesObjectQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumValueListOIDQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/list/:OID', args] as const
}

export function getMimicAgentAgentNumValueListOIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueListOIDQueryKey>
  >({
    queryKey: getMimicAgentAgentNumValueListOIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.list[':OID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumValueListOID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumValueListOIDQueryKey>
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
      ...getMimicAgentAgentNumValueListOIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumValueMevalObjInsArrayQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/meval/:objInsArray', args] as const
}

export function getMimicAgentAgentNumValueMevalObjInsArrayQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueMevalObjInsArrayQueryKey>
  >({
    queryKey: getMimicAgentAgentNumValueMevalObjInsArrayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.meval[':objInsArray'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumValueMevalObjInsArray<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumValueMevalObjInsArrayQueryKey>
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
      ...getMimicAgentAgentNumValueMevalObjInsArrayQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumValueMgetObjInsVarArrayQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/mget/:objInsVarArray', args] as const
}

export function getMimicAgentAgentNumValueMgetObjInsVarArrayQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueMgetObjInsVarArrayQueryKey>
  >({
    queryKey: getMimicAgentAgentNumValueMgetObjInsVarArrayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.mget[':objInsVarArray'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumValueMgetObjInsVarArray<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumValueMgetObjInsVarArrayQueryKey>
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
      ...getMimicAgentAgentNumValueMgetObjInsVarArrayQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumValueMibObjectQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/mib/:object', args] as const
}

export function getMimicAgentAgentNumValueMibObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueMibObjectQueryKey>
  >({
    queryKey: getMimicAgentAgentNumValueMibObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.mib[':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumValueMibObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumValueMibObjectQueryKey>
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
      ...getMimicAgentAgentNumValueMibObjectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumValueMsetMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/value/mset', 'PUT'] as const
}

export function getPutMimicAgentAgentNumValueMsetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['mset']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['mset']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumValueMsetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['mset']['$put']>,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].value.mset.$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumValueMset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['mset']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['mset']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumValueMsetMutationOptions<
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

export function getPutMimicAgentAgentNumValueMunsetMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/value/munset', 'PUT'] as const
}

export function getPutMimicAgentAgentNumValueMunsetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['munset']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['munset']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumValueMunsetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['munset']['$put']>,
    ) {
      return parseResponse(client.mimic.agent[':agentNum'].value.munset.$put(args, options))
    },
  })
}

export function createPutMimicAgentAgentNumValueMunset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['munset']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['munset']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumValueMunsetMutationOptions<
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

export function getMimicAgentAgentNumValueNameOIDQueryKey(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/name/:OID', args] as const
}

export function getMimicAgentAgentNumValueNameOIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueNameOIDQueryKey>
  >({
    queryKey: getMimicAgentAgentNumValueNameOIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.name[':OID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumValueNameOID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumValueNameOIDQueryKey>
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
      ...getMimicAgentAgentNumValueNameOIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumValueOidObjectQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/oid/:object', args] as const
}

export function getMimicAgentAgentNumValueOidObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueOidObjectQueryKey>
  >({
    queryKey: getMimicAgentAgentNumValueOidObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.oid[':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumValueOidObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumValueOidObjectQueryKey>
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
      ...getMimicAgentAgentNumValueOidObjectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteMimicAgentAgentNumValueRemoveObjectInstanceMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/value/remove/:object/:instance', 'DELETE'] as const
}

export function getDeleteMimicAgentAgentNumValueRemoveObjectInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['remove'][':object'][':instance']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicAgentAgentNumValueRemoveObjectInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['value']['remove'][':object'][':instance']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.remove[':object'][':instance'].$delete(args, options),
      )
    },
  })
}

export function createDeleteMimicAgentAgentNumValueRemoveObjectInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['value']['remove'][':object'][':instance']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMimicAgentAgentNumValueRemoveObjectInstanceMutationOptions<
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

export function getPutMimicAgentAgentNumValueSetObjectInstanceVariableMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/value/set/:object/:instance/:variable', 'PUT'] as const
}

export function getPutMimicAgentAgentNumValueSetObjectInstanceVariableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['set'][':object'][':instance'][':variable']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumValueSetObjectInstanceVariableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['value']['set'][':object'][':instance'][':variable']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.set[':object'][':instance'][':variable'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumValueSetObjectInstanceVariable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['value']['set'][':object'][':instance'][':variable']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumValueSetObjectInstanceVariableMutationOptions<
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

export function getMimicAgentAgentNumValueSplitOIDQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/split/:OID', args] as const
}

export function getMimicAgentAgentNumValueSplitOIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueSplitOIDQueryKey>
  >({
    queryKey: getMimicAgentAgentNumValueSplitOIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.split[':OID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumValueSplitOID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumValueSplitOIDQueryKey>
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
      ...getMimicAgentAgentNumValueSplitOIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicAgentAgentNumValueStateGetObjectQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/state/get/:object', args] as const
}

export function getMimicAgentAgentNumValueStateGetObjectQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueStateGetObjectQueryKey>
  >({
    queryKey: getMimicAgentAgentNumValueStateGetObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.state.get[':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumValueStateGetObject<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumValueStateGetObjectQueryKey>
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
      ...getMimicAgentAgentNumValueStateGetObjectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicAgentAgentNumValueStateSetObjectStateMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/value/state/set/:object/:state', 'PUT'] as const
}

export function getPutMimicAgentAgentNumValueStateSetObjectStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['state']['set'][':object'][':state']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumValueStateSetObjectStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['value']['state']['set'][':object'][':state']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.state.set[':object'][':state'].$put(args, options),
      )
    },
  })
}

export function createPutMimicAgentAgentNumValueStateSetObjectState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['value']['state']['set'][':object'][':state']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicAgentAgentNumValueStateSetObjectStateMutationOptions<
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

export function getPutMimicAgentAgentNumValueUnsetObjectInstanceVariableMutationKey() {
  return ['mimic', '/mimic/agent/:agentNum/value/unset/:object/:instance/:variable', 'PUT'] as const
}

export function getPutMimicAgentAgentNumValueUnsetObjectInstanceVariableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['unset'][':object'][':instance'][':variable']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicAgentAgentNumValueUnsetObjectInstanceVariableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.agent)[':agentNum']['value']['unset'][':object'][':instance'][':variable']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.unset[':object'][':instance'][':variable'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicAgentAgentNumValueUnsetObjectInstanceVariable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.agent)[':agentNum']['value']['unset'][':object'][':instance'][':variable']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicAgentAgentNumValueUnsetObjectInstanceVariableMutationOptions<
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

export function getMimicAgentAgentNumValueVariablesObjectInstanceQueryKey(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/variables/:object/:instance', args] as const
}

export function getMimicAgentAgentNumValueVariablesObjectInstanceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueVariablesObjectInstanceQueryKey>
  >({
    queryKey: getMimicAgentAgentNumValueVariablesObjectInstanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.variables[':object'][':instance'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicAgentAgentNumValueVariablesObjectInstance<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMimicAgentAgentNumValueVariablesObjectInstanceQueryKey>
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
      ...getMimicAgentAgentNumValueVariablesObjectInstanceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicClearFirstAgentNumLastAgentNumMutationKey() {
  return ['mimic', '/mimic/clear/:firstAgentNum/:lastAgentNum', 'PUT'] as const
}

export function getPutMimicClearFirstAgentNumLastAgentNumMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mimic.clear)[':firstAgentNum'][':lastAgentNum']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicClearFirstAgentNumLastAgentNumMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.clear)[':firstAgentNum'][':lastAgentNum']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.clear[':firstAgentNum'][':lastAgentNum'].$put(args, options),
      )
    },
  })
}

export function createPutMimicClearFirstAgentNumLastAgentNum<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.mimic.clear)[':firstAgentNum'][':lastAgentNum']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicClearFirstAgentNumLastAgentNumMutationOptions<
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

export function getMimicGetActiveDataListQueryKey() {
  return ['mimic', '/mimic/get/active_data_list'] as const
}

export function getMimicGetActiveDataListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_data_list.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_data_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetActiveDataListQueryKey>
  >({
    queryKey: getMimicGetActiveDataListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.active_data_list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicGetActiveDataList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_data_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_data_list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetActiveDataListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetActiveDataListQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetActiveListQueryKey() {
  return ['mimic', '/mimic/get/active_list'] as const
}

export function getMimicGetActiveListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_list.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetActiveListQueryKey>
  >({
    queryKey: getMimicGetActiveListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.active_list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicGetActiveList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_list.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetActiveListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetActiveListQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetCfgfileQueryKey() {
  return ['mimic', '/mimic/get/cfgfile'] as const
}

export function getMimicGetCfgfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetCfgfileQueryKey>
  >({
    queryKey: getMimicGetCfgfileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.cfgfile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicGetCfgfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetCfgfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetCfgfileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetCfgfileChangedQueryKey() {
  return ['mimic', '/mimic/get/cfgfile_changed'] as const
}

export function getMimicGetCfgfileChangedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile_changed.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile_changed.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetCfgfileChangedQueryKey>
  >({
    queryKey: getMimicGetCfgfileChangedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.cfgfile_changed.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicGetCfgfileChanged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile_changed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile_changed.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetCfgfileChangedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetCfgfileChangedQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetChangedConfigListQueryKey() {
  return ['mimic', '/mimic/get/changed_config_list'] as const
}

export function getMimicGetChangedConfigListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_config_list.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_config_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetChangedConfigListQueryKey>
  >({
    queryKey: getMimicGetChangedConfigListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.changed_config_list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicGetChangedConfigList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_config_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.get.changed_config_list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetChangedConfigListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetChangedConfigListQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetChangedStateListQueryKey() {
  return ['mimic', '/mimic/get/changed_state_list'] as const
}

export function getMimicGetChangedStateListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_state_list.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_state_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetChangedStateListQueryKey>
  >({
    queryKey: getMimicGetChangedStateListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.changed_state_list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicGetChangedStateList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_state_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.get.changed_state_list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetChangedStateListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetChangedStateListQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetClientsQueryKey() {
  return ['mimic', '/mimic/get/clients'] as const
}

export function getMimicGetClientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.clients.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.clients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetClientsQueryKey>
  >({
    queryKey: getMimicGetClientsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.clients.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicGetClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.clients.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetClientsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetConfiguredListQueryKey() {
  return ['mimic', '/mimic/get/configured_list'] as const
}

export function getMimicGetConfiguredListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.configured_list.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.configured_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetConfiguredListQueryKey>
  >({
    queryKey: getMimicGetConfiguredListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.configured_list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicGetConfiguredList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.configured_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.configured_list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetConfiguredListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetConfiguredListQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetInterfacesQueryKey() {
  return ['mimic', '/mimic/get/interfaces'] as const
}

export function getMimicGetInterfacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.interfaces.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.interfaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetInterfacesQueryKey>
  >({
    queryKey: getMimicGetInterfacesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.interfaces.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicGetInterfaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.interfaces.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.interfaces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetInterfacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetInterfacesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetLastQueryKey() {
  return ['mimic', '/mimic/get/last'] as const
}

export function getMimicGetLastQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.last.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.last.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetLastQueryKey>
  >({
    queryKey: getMimicGetLastQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.last.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMimicGetLast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.last.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.last.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetLastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetLastQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetLogQueryKey() {
  return ['mimic', '/mimic/get/log'] as const
}

export function getMimicGetLogQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.log.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.log.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetLogQueryKey>
  >({
    queryKey: getMimicGetLogQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.log.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMimicGetLog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.log.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.log.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetLogQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetLogQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetMaxQueryKey() {
  return ['mimic', '/mimic/get/max'] as const
}

export function getMimicGetMaxQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.max.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.max.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetMaxQueryKey>
  >({
    queryKey: getMimicGetMaxQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.max.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMimicGetMax<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.max.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.max.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetMaxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetMaxQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetNetaddrQueryKey() {
  return ['mimic', '/mimic/get/netaddr'] as const
}

export function getMimicGetNetaddrQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netaddr.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netaddr.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetNetaddrQueryKey>
  >({
    queryKey: getMimicGetNetaddrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.netaddr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicGetNetaddr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netaddr.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netaddr.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetNetaddrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetNetaddrQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetNetdevQueryKey() {
  return ['mimic', '/mimic/get/netdev'] as const
}

export function getMimicGetNetdevQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netdev.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netdev.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetNetdevQueryKey>
  >({
    queryKey: getMimicGetNetdevQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.netdev.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMimicGetNetdev<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netdev.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netdev.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetNetdevQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetNetdevQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetProductQueryKey() {
  return ['mimic', '/mimic/get/product'] as const
}

export function getMimicGetProductQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.product.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.product.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetProductQueryKey>
  >({
    queryKey: getMimicGetProductQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.product.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicGetProduct<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.product.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.product.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetProductQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetProductQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetProtocolsQueryKey() {
  return ['mimic', '/mimic/get/protocols'] as const
}

export function getMimicGetProtocolsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.protocols.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.protocols.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetProtocolsQueryKey>
  >({
    queryKey: getMimicGetProtocolsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.protocols.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicGetProtocols<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.protocols.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.protocols.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetProtocolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetProtocolsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetReturnQueryKey() {
  return ['mimic', '/mimic/get/return'] as const
}

export function getMimicGetReturnQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.return.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.return.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetReturnQueryKey>
  >({
    queryKey: getMimicGetReturnQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.return.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMimicGetReturn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.return.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.return.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetReturnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetReturnQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMimicGetVersionQueryKey() {
  return ['mimic', '/mimic/get/version'] as const
}

export function getMimicGetVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetVersionQueryKey>
  >({
    queryKey: getMimicGetVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.get.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicGetVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.version.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicGetVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicGetVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNumMutationKey() {
  return [
    'mimic',
    '/mimic/load/:cfgFile/:firstAgentNum/:lastAgentNum/:startAgentNum',
    'PUT',
  ] as const
}

export function getPutMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNumMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.load)[':cfgFile'][':firstAgentNum'][':lastAgentNum'][':startAgentNum']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNumMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.load)[':cfgFile'][':firstAgentNum'][':lastAgentNum'][':startAgentNum']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.load[':cfgFile'][':firstAgentNum'][':lastAgentNum'][':startAgentNum'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNum<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.load)[':cfgFile'][':firstAgentNum'][':lastAgentNum'][':startAgentNum']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNumMutationOptions<
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

export function getMimicMgetInfoArrayQueryKey(
  args: InferRequestType<(typeof client.mimic.mget)[':infoArray']['$get']>,
) {
  return ['mimic', '/mimic/mget/:infoArray', args] as const
}

export function getMimicMgetInfoArrayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.mget)[':infoArray']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.mget)[':infoArray']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.mget)[':infoArray']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicMgetInfoArrayQueryKey>
  >({
    queryKey: getMimicMgetInfoArrayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.mget[':infoArray'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicMgetInfoArray<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.mget)[':infoArray']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.mget)[':infoArray']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.mget)[':infoArray']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicMgetInfoArrayQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicMgetInfoArrayQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMimicProtocolMsgCoapGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/coap/get/stats_hdr'] as const
}

export function getMimicProtocolMsgCoapGetStatsHdrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.coap.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.coap.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgCoapGetStatsHdrQueryKey>
  >({
    queryKey: getMimicProtocolMsgCoapGetStatsHdrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.protocol.msg.coap.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicProtocolMsgCoapGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.coap.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.protocol.msg.coap.get.stats_hdr.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicProtocolMsgCoapGetStatsHdrQueryKey>
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
      ...getMimicProtocolMsgCoapGetStatsHdrQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicProtocolMsgDhcpGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/dhcp/get/stats_hdr'] as const
}

export function getMimicProtocolMsgDhcpGetStatsHdrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.dhcp.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.dhcp.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgDhcpGetStatsHdrQueryKey>
  >({
    queryKey: getMimicProtocolMsgDhcpGetStatsHdrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.protocol.msg.dhcp.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicProtocolMsgDhcpGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.dhcp.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.protocol.msg.dhcp.get.stats_hdr.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicProtocolMsgDhcpGetStatsHdrQueryKey>
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
      ...getMimicProtocolMsgDhcpGetStatsHdrQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicProtocolMsgIpmiGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/ipmi/get/stats_hdr'] as const
}

export function getMimicProtocolMsgIpmiGetStatsHdrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.ipmi.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.ipmi.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgIpmiGetStatsHdrQueryKey>
  >({
    queryKey: getMimicProtocolMsgIpmiGetStatsHdrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.protocol.msg.ipmi.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicProtocolMsgIpmiGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.ipmi.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.protocol.msg.ipmi.get.stats_hdr.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicProtocolMsgIpmiGetStatsHdrQueryKey>
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
      ...getMimicProtocolMsgIpmiGetStatsHdrQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicProtocolMsgMqttGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/mqtt/get/stats_hdr'] as const
}

export function getMimicProtocolMsgMqttGetStatsHdrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.mqtt.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.mqtt.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgMqttGetStatsHdrQueryKey>
  >({
    queryKey: getMimicProtocolMsgMqttGetStatsHdrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.protocol.msg.mqtt.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicProtocolMsgMqttGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.mqtt.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.protocol.msg.mqtt.get.stats_hdr.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicProtocolMsgMqttGetStatsHdrQueryKey>
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
      ...getMimicProtocolMsgMqttGetStatsHdrQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicProtocolMsgNetflowGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/netflow/get/stats_hdr'] as const
}

export function getMimicProtocolMsgNetflowGetStatsHdrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.netflow.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.netflow.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgNetflowGetStatsHdrQueryKey>
  >({
    queryKey: getMimicProtocolMsgNetflowGetStatsHdrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.protocol.msg.netflow.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicProtocolMsgNetflowGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.netflow.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.protocol.msg.netflow.get.stats_hdr.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicProtocolMsgNetflowGetStatsHdrQueryKey>
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
      ...getMimicProtocolMsgNetflowGetStatsHdrQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicProtocolMsgProxyGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/proxy/get/stats_hdr'] as const
}

export function getMimicProtocolMsgProxyGetStatsHdrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.proxy.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.proxy.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgProxyGetStatsHdrQueryKey>
  >({
    queryKey: getMimicProtocolMsgProxyGetStatsHdrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.protocol.msg.proxy.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicProtocolMsgProxyGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.proxy.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.protocol.msg.proxy.get.stats_hdr.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicProtocolMsgProxyGetStatsHdrQueryKey>
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
      ...getMimicProtocolMsgProxyGetStatsHdrQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicProtocolMsgSflowGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/sflow/get/stats_hdr'] as const
}

export function getMimicProtocolMsgSflowGetStatsHdrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.sflow.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.sflow.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgSflowGetStatsHdrQueryKey>
  >({
    queryKey: getMimicProtocolMsgSflowGetStatsHdrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.protocol.msg.sflow.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicProtocolMsgSflowGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.sflow.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.protocol.msg.sflow.get.stats_hdr.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicProtocolMsgSflowGetStatsHdrQueryKey>
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
      ...getMimicProtocolMsgSflowGetStatsHdrQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicProtocolMsgSnmptcpGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/snmptcp/get/stats_hdr'] as const
}

export function getMimicProtocolMsgSnmptcpGetStatsHdrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgSnmptcpGetStatsHdrQueryKey>
  >({
    queryKey: getMimicProtocolMsgSnmptcpGetStatsHdrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicProtocolMsgSnmptcpGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicProtocolMsgSnmptcpGetStatsHdrQueryKey>
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
      ...getMimicProtocolMsgSnmptcpGetStatsHdrQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicProtocolMsgSshGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/ssh/get/stats_hdr'] as const
}

export function getMimicProtocolMsgSshGetStatsHdrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.ssh.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.ssh.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgSshGetStatsHdrQueryKey>
  >({
    queryKey: getMimicProtocolMsgSshGetStatsHdrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.protocol.msg.ssh.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicProtocolMsgSshGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.ssh.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.protocol.msg.ssh.get.stats_hdr.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicProtocolMsgSshGetStatsHdrQueryKey>
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
      ...getMimicProtocolMsgSshGetStatsHdrQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicProtocolMsgSyslogGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/syslog/get/stats_hdr'] as const
}

export function getMimicProtocolMsgSyslogGetStatsHdrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.syslog.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.syslog.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgSyslogGetStatsHdrQueryKey>
  >({
    queryKey: getMimicProtocolMsgSyslogGetStatsHdrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.protocol.msg.syslog.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicProtocolMsgSyslogGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.syslog.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.protocol.msg.syslog.get.stats_hdr.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicProtocolMsgSyslogGetStatsHdrQueryKey>
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
      ...getMimicProtocolMsgSyslogGetStatsHdrQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicProtocolMsgTelnetGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/telnet/get/stats_hdr'] as const
}

export function getMimicProtocolMsgTelnetGetStatsHdrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.telnet.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.telnet.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgTelnetGetStatsHdrQueryKey>
  >({
    queryKey: getMimicProtocolMsgTelnetGetStatsHdrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.protocol.msg.telnet.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicProtocolMsgTelnetGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.telnet.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.protocol.msg.telnet.get.stats_hdr.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicProtocolMsgTelnetGetStatsHdrQueryKey>
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
      ...getMimicProtocolMsgTelnetGetStatsHdrQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicProtocolMsgTftpGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/tftp/get/stats_hdr'] as const
}

export function getMimicProtocolMsgTftpGetStatsHdrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.tftp.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.tftp.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgTftpGetStatsHdrQueryKey>
  >({
    queryKey: getMimicProtocolMsgTftpGetStatsHdrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.protocol.msg.tftp.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicProtocolMsgTftpGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.tftp.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.protocol.msg.tftp.get.stats_hdr.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicProtocolMsgTftpGetStatsHdrQueryKey>
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
      ...getMimicProtocolMsgTftpGetStatsHdrQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicProtocolMsgTodGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/tod/get/stats_hdr'] as const
}

export function getMimicProtocolMsgTodGetStatsHdrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.tod.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.tod.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgTodGetStatsHdrQueryKey>
  >({
    queryKey: getMimicProtocolMsgTodGetStatsHdrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.protocol.msg.tod.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicProtocolMsgTodGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.tod.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.protocol.msg.tod.get.stats_hdr.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicProtocolMsgTodGetStatsHdrQueryKey>
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
      ...getMimicProtocolMsgTodGetStatsHdrQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMimicProtocolMsgWebGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/web/get/stats_hdr'] as const
}

export function getMimicProtocolMsgWebGetStatsHdrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.web.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mimic.protocol.msg.web.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgWebGetStatsHdrQueryKey>
  >({
    queryKey: getMimicProtocolMsgWebGetStatsHdrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.protocol.msg.web.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicProtocolMsgWebGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.web.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mimic.protocol.msg.web.get.stats_hdr.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicProtocolMsgWebGetStatsHdrQueryKey>
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
      ...getMimicProtocolMsgWebGetStatsHdrQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicSaveMutationKey() {
  return ['mimic', '/mimic/save', 'PUT'] as const
}

export function getPutMimicSaveMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.save.$put>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutMimicSaveMutationKey(),
    async mutationFn() {
      return parseResponse(client.mimic.save.$put(undefined, options))
    },
  })
}

export function createPutMimicSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.save.$put>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicSaveMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutMimicSaveasCfgFileFirstAgentNumLastAgentNumMutationKey() {
  return ['mimic', '/mimic/saveas/:cfgFile/:firstAgentNum/:lastAgentNum', 'PUT'] as const
}

export function getPutMimicSaveasCfgFileFirstAgentNumLastAgentNumMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.saveas)[':cfgFile'][':firstAgentNum'][':lastAgentNum']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMimicSaveasCfgFileFirstAgentNumLastAgentNumMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.saveas)[':cfgFile'][':firstAgentNum'][':lastAgentNum']['$put']
      >,
    ) {
      return parseResponse(
        client.mimic.saveas[':cfgFile'][':firstAgentNum'][':lastAgentNum'].$put(args, options),
      )
    },
  })
}

export function createPutMimicSaveasCfgFileFirstAgentNumLastAgentNum<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.saveas)[':cfgFile'][':firstAgentNum'][':lastAgentNum']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicSaveasCfgFileFirstAgentNumLastAgentNumMutationOptions<
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

export function getPutMimicSetLogMutationKey() {
  return ['mimic', '/mimic/set/log', 'PUT'] as const
}

export function getPutMimicSetLogMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.set.log.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.mimic.set.log.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicSetLogMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mimic.set.log.$put>) {
      return parseResponse(client.mimic.set.log.$put(args, options))
    },
  })
}

export function createPutMimicSetLog<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.set.log.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.mimic.set.log.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicSetLogMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutMimicSetNetdevMutationKey() {
  return ['mimic', '/mimic/set/netdev', 'PUT'] as const
}

export function getPutMimicSetNetdevMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.set.netdev.$put>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutMimicSetNetdevMutationKey(),
    async mutationFn() {
      return parseResponse(client.mimic.set.netdev.$put(undefined, options))
    },
  })
}

export function createPutMimicSetNetdev<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.set.netdev.$put>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicSetNetdevMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutMimicSetPersistentMutationKey() {
  return ['mimic', '/mimic/set/persistent', 'PUT'] as const
}

export function getPutMimicSetPersistentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.set.persistent.$put>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutMimicSetPersistentMutationKey(),
    async mutationFn() {
      return parseResponse(client.mimic.set.persistent.$put(undefined, options))
    },
  })
}

export function createPutMimicSetPersistent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.set.persistent.$put>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicSetPersistentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutMimicStartMutationKey() {
  return ['mimic', '/mimic/start', 'PUT'] as const
}

export function getPutMimicStartMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.start.$put>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutMimicStartMutationKey(),
    async mutationFn() {
      return parseResponse(client.mimic.start.$put(undefined, options))
    },
  })
}

export function createPutMimicStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.start.$put>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicStartMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutMimicStopMutationKey() {
  return ['mimic', '/mimic/stop', 'PUT'] as const
}

export function getPutMimicStopMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.stop.$put>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutMimicStopMutationKey(),
    async mutationFn() {
      return parseResponse(client.mimic.stop.$put(undefined, options))
    },
  })
}

export function createPutMimicStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.stop.$put>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicStopMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMimicStoreExistsVarQueryKey(
  args: InferRequestType<(typeof client.mimic.store.exists)[':var']['$get']>,
) {
  return ['mimic', '/mimic/store/exists/:var', args] as const
}

export function getMimicStoreExistsVarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.store.exists)[':var']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.store.exists)[':var']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.store.exists)[':var']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicStoreExistsVarQueryKey>
  >({
    queryKey: getMimicStoreExistsVarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.store.exists[':var'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicStoreExistsVar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.store.exists)[':var']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.store.exists)[':var']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.store.exists)[':var']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicStoreExistsVarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicStoreExistsVarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMimicStoreGetVarQueryKey(
  args: InferRequestType<(typeof client.mimic.store.get)[':var']['$get']>,
) {
  return ['mimic', '/mimic/store/get/:var', args] as const
}

export function getMimicStoreGetVarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.store.get)[':var']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.store.get)[':var']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.store.get)[':var']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicStoreGetVarQueryKey>
  >({
    queryKey: getMimicStoreGetVarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.store.get[':var'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicStoreGetVar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.store.get)[':var']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.store.get)[':var']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.store.get)[':var']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicStoreGetVarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicStoreGetVarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMimicStoreListQueryKey() {
  return ['mimic', '/mimic/store/list'] as const
}

export function getMimicStoreListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.store.list.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.store.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicStoreListQueryKey>
  >({
    queryKey: getMimicStoreListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.store.list.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMimicStoreList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.store.list.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.store.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMimicStoreListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicStoreListQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutMimicStoreLreplaceVarIndexMutationKey() {
  return ['mimic', '/mimic/store/lreplace/:var/:index', 'PUT'] as const
}

export function getPutMimicStoreLreplaceVarIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.store.lreplace)[':var'][':index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.store.lreplace)[':var'][':index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicStoreLreplaceVarIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.store.lreplace)[':var'][':index']['$put']>,
    ) {
      return parseResponse(client.mimic.store.lreplace[':var'][':index'].$put(args, options))
    },
  })
}

export function createPutMimicStoreLreplaceVarIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.store.lreplace)[':var'][':index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.store.lreplace)[':var'][':index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicStoreLreplaceVarIndexMutationOptions<
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

export function getMimicStorePersistsVarQueryKey(
  args: InferRequestType<(typeof client.mimic.store.persists)[':var']['$get']>,
) {
  return ['mimic', '/mimic/store/persists/:var', args] as const
}

export function getMimicStorePersistsVarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.store.persists)[':var']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mimic.store.persists)[':var']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.store.persists)[':var']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicStorePersistsVarQueryKey>
  >({
    queryKey: getMimicStorePersistsVarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.store.persists[':var'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicStorePersistsVar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.store.persists)[':var']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mimic.store.persists)[':var']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.store.persists)[':var']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicStorePersistsVarQueryKey>
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
      ...getMimicStorePersistsVarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMimicStoreSetVarPersistMutationKey() {
  return ['mimic', '/mimic/store/set/:var/:persist', 'PUT'] as const
}

export function getPutMimicStoreSetVarPersistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mimic.store.set)[':var'][':persist']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.store.set)[':var'][':persist']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicStoreSetVarPersistMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mimic.store.set)[':var'][':persist']['$put']>,
    ) {
      return parseResponse(client.mimic.store.set[':var'][':persist'].$put(args, options))
    },
  })
}

export function createPutMimicStoreSetVarPersist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.store.set)[':var'][':persist']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.store.set)[':var'][':persist']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicStoreSetVarPersistMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutMimicStoreUnsetVarMutationKey() {
  return ['mimic', '/mimic/store/unset/:var', 'PUT'] as const
}

export function getPutMimicStoreUnsetVarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.store.unset)[':var']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.mimic.store.unset)[':var']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMimicStoreUnsetVarMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.mimic.store.unset)[':var']['$put']>) {
      return parseResponse(client.mimic.store.unset[':var'].$put(args, options))
    },
  })
}

export function createPutMimicStoreUnsetVar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mimic.store.unset)[':var']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mimic.store.unset)[':var']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicStoreUnsetVarMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutMimicTerminateMutationKey() {
  return ['mimic', '/mimic/terminate', 'PUT'] as const
}

export function getPutMimicTerminateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.terminate.$put>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutMimicTerminateMutationKey(),
    async mutationFn() {
      return parseResponse(client.mimic.terminate.$put(undefined, options))
    },
  })
}

export function createPutMimicTerminate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.terminate.$put>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMimicTerminateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMimicTimerScriptAddScriptIntervalArgMutationKey() {
  return ['mimic', '/mimic/timer/script/add/:script/:interval/:arg', 'POST'] as const
}

export function getPostMimicTimerScriptAddScriptIntervalArgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.timer.script.add)[':script'][':interval'][':arg']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMimicTimerScriptAddScriptIntervalArgMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.timer.script.add)[':script'][':interval'][':arg']['$post']
      >,
    ) {
      return parseResponse(
        client.mimic.timer.script.add[':script'][':interval'][':arg'].$post(args, options),
      )
    },
  })
}

export function createPostMimicTimerScriptAddScriptIntervalArg<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.timer.script.add)[':script'][':interval'][':arg']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMimicTimerScriptAddScriptIntervalArgMutationOptions<
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

export function getDeleteMimicTimerScriptDeleteScriptIntervalArgMutationKey() {
  return ['mimic', '/mimic/timer/script/delete/:script/:interval/:arg', 'DELETE'] as const
}

export function getDeleteMimicTimerScriptDeleteScriptIntervalArgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mimic.timer.script.delete)[':script'][':interval'][':arg']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMimicTimerScriptDeleteScriptIntervalArgMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mimic.timer.script.delete)[':script'][':interval'][':arg']['$delete']
      >,
    ) {
      return parseResponse(
        client.mimic.timer.script.delete[':script'][':interval'][':arg'].$delete(args, options),
      )
    },
  })
}

export function createDeleteMimicTimerScriptDeleteScriptIntervalArg<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.mimic.timer.script.delete)[':script'][':interval'][':arg']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMimicTimerScriptDeleteScriptIntervalArgMutationOptions<
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

export function getMimicTimerScriptListQueryKey() {
  return ['mimic', '/mimic/timer/script/list'] as const
}

export function getMimicTimerScriptListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.timer.script.list.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.timer.script.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicTimerScriptListQueryKey>
  >({
    queryKey: getMimicTimerScriptListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mimic.timer.script.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMimicTimerScriptList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.timer.script.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mimic.timer.script.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMimicTimerScriptListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMimicTimerScriptListQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
