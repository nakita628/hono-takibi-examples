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

export function usePostMimicAccessAddUserAgentsMask<
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
                  ReturnType<(typeof client.mimic.access.add)[':user'][':agents'][':mask']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mimic.access.add)[':user'][':agents'][':mask']['$post']>,
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
  const mutationDefaults = getPostMimicAccessAddUserAgentsMaskMutationOptions<
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

export function useDeleteMimicAccessDelUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMimicAccessDelUserMutationOptions<TError, TOnMutateResult>(
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

export function getMimicAccessGetAcldbQueryKey() {
  return ['mimic', '/mimic/access/get/acldb'] as const
}

export function getMimicAccessGetAcldbQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicAccessGetAcldbQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.access.get.acldb.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAccessGetAcldb<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.acldb.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.acldb.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.acldb.$get>>>
            >
          >,
          ReturnType<typeof getMimicAccessGetAcldbQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.acldb.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAccessGetAcldbQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicAccessGetAcldbQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.access.get.acldb.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAccessGetAdmindirQueryKey() {
  return ['mimic', '/mimic/access/get/admindir'] as const
}

export function getMimicAccessGetAdmindirQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicAccessGetAdmindirQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.access.get.admindir.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAccessGetAdmindir<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.admindir.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.access.get.admindir.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.access.get.admindir.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicAccessGetAdmindirQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.admindir.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAccessGetAdmindirQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicAccessGetAdmindirQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.access.get.admindir.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAccessGetAdminuserQueryKey() {
  return ['mimic', '/mimic/access/get/adminuser'] as const
}

export function getMimicAccessGetAdminuserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicAccessGetAdminuserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.access.get.adminuser.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAccessGetAdminuser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.adminuser.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.access.get.adminuser.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.access.get.adminuser.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicAccessGetAdminuserQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.adminuser.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAccessGetAdminuserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicAccessGetAdminuserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.access.get.adminuser.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAccessGetEnabledQueryKey() {
  return ['mimic', '/mimic/access/get/enabled'] as const
}

export function getMimicAccessGetEnabledQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicAccessGetEnabledQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.access.get.enabled.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAccessGetEnabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.enabled.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.enabled.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.enabled.$get>>>
            >
          >,
          ReturnType<typeof getMimicAccessGetEnabledQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.get.enabled.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAccessGetEnabledQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicAccessGetEnabledQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.access.get.enabled.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAccessListQueryKey() {
  return ['mimic', '/mimic/access/list'] as const
}

export function getMimicAccessListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicAccessListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.access.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAccessList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.list.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.list.$get>>>
            >
          >,
          ReturnType<typeof getMimicAccessListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.access.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAccessListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicAccessListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.access.list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAccessLoadFilename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAccessLoadFilenameMutationOptions<TError, TOnMutateResult>(
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

export function usePutMimicAccessSaveFilename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAccessSaveFilenameMutationOptions<TError, TOnMutateResult>(
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

export function usePutMimicAccessSetAcldbDatabaseName<
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
                Awaited<ReturnType<(typeof client.mimic.access.set.acldb)[':databaseName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mimic.access.set.acldb)[':databaseName']['$put']>,
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
  const mutationDefaults = getPutMimicAccessSetAcldbDatabaseNameMutationOptions<
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

export function usePutMimicAccessSetEnabledEnabledOrNot<
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
                  ReturnType<(typeof client.mimic.access.set.enabled)[':enabledOrNot']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mimic.access.set.enabled)[':enabledOrNot']['$put']>,
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
  const mutationDefaults = getPutMimicAccessSetEnabledEnabledOrNotMutationOptions<
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

export function usePostMimicAgentAgentNumAddIP<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMimicAgentAgentNumAddIPMutationOptions<TError, TOnMutateResult>(
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

export function usePostMimicAgentAgentNumFromAddIPPort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMimicAgentAgentNumFromAddIPPortMutationOptions<
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

export function useDeleteMimicAgentAgentNumFromDeleteIPPort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMimicAgentAgentNumFromDeleteIPPortMutationOptions<
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

export function getMimicAgentAgentNumFromListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/from/list', toValue(args)] as const
}

export function getMimicAgentAgentNumFromListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumFromListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].from.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumFromList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>
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
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumFromListQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['from']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumFromListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumFromListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].from.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetChangedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/changed', toValue(args)] as const
}

export function getMimicAgentAgentNumGetChangedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetChangedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.changed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetChanged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetChangedQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['changed']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetChangedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetChangedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.changed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetConfigChangedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/config_changed', toValue(args)] as const
}

export function getMimicAgentAgentNumGetConfigChangedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetConfigChangedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.config_changed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetConfigChanged<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>
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
                    (typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetConfigChangedQueryKey>
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
            ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['config_changed']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetConfigChangedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetConfigChangedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.config_changed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetDelayQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/delay', toValue(args)] as const
}

export function getMimicAgentAgentNumGetDelayQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetDelayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.delay.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetDelay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>
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
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetDelayQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['delay']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetDelayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetDelayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.delay.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetDropsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/drops', toValue(args)] as const
}

export function getMimicAgentAgentNumGetDropsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetDropsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.drops.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetDrops<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>
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
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetDropsQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['drops']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetDropsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetDropsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.drops.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetHostQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/host', toValue(args)] as const
}

export function getMimicAgentAgentNumGetHostQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetHostQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.host.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetHost<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetHostQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['host']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetHostQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetHostQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.host.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetInformTimeoutQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/inform_timeout', toValue(args)] as const
}

export function getMimicAgentAgentNumGetInformTimeoutQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetInformTimeoutQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.inform_timeout.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetInformTimeout<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>
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
                    (typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetInformTimeoutQueryKey>
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
            ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['inform_timeout']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetInformTimeoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetInformTimeoutQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.inform_timeout.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetInterfaceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/interface', toValue(args)] as const
}

export function getMimicAgentAgentNumGetInterfaceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetInterfaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.interface.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetInterface<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetInterfaceQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['interface']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetInterfaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetInterfaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.interface.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetMaskQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/mask', toValue(args)] as const
}

export function getMimicAgentAgentNumGetMaskQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetMaskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.mask.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetMask<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetMaskQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mask']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetMaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetMaskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.mask.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetMibsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/mibs', toValue(args)] as const
}

export function getMimicAgentAgentNumGetMibsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetMibsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.mibs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetMibs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetMibsQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['mibs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetMibsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetMibsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.mibs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetNumStartsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/num_starts', toValue(args)] as const
}

export function getMimicAgentAgentNumGetNumStartsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetNumStartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.num_starts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetNumStarts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetNumStartsQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['num_starts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetNumStartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetNumStartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.num_starts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetOiddirQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/oiddir', toValue(args)] as const
}

export function getMimicAgentAgentNumGetOiddirQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetOiddirQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.oiddir.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetOiddir<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>
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
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetOiddirQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['oiddir']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetOiddirQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetOiddirQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.oiddir.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetOwnerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/owner', toValue(args)] as const
}

export function getMimicAgentAgentNumGetOwnerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetOwnerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.owner.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetOwner<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>
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
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetOwnerQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['owner']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetOwnerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetOwnerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.owner.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetPdusizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/pdusize', toValue(args)] as const
}

export function getMimicAgentAgentNumGetPdusizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetPdusizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.pdusize.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetPdusize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetPdusizeQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['pdusize']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetPdusizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetPdusizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.pdusize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetPortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/port', toValue(args)] as const
}

export function getMimicAgentAgentNumGetPortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetPortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.port.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetPort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetPortQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['port']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetPortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetPortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.port.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetPrivdirQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/privdir', toValue(args)] as const
}

export function getMimicAgentAgentNumGetPrivdirQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetPrivdirQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.privdir.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetPrivdir<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetPrivdirQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['privdir']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetPrivdirQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetPrivdirQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.privdir.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetProtocolQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/protocol', toValue(args)] as const
}

export function getMimicAgentAgentNumGetProtocolQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetProtocolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.protocol.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetProtocol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetProtocolQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['protocol']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetProtocolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetProtocolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.protocol.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetReadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/read', toValue(args)] as const
}

export function getMimicAgentAgentNumGetReadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetReadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.read.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetRead<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetReadQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['read']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetReadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetReadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.read.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetScenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/scen', toValue(args)] as const
}

export function getMimicAgentAgentNumGetScenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetScenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.scen.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetScen<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetScenQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['scen']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetScenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetScenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.scen.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetSimQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/sim', toValue(args)] as const
}

export function getMimicAgentAgentNumGetSimQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetSimQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.sim.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetSim<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetSimQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['sim']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetSimQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetSimQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.sim.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetStartQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/start', toValue(args)] as const
}

export function getMimicAgentAgentNumGetStartQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetStartQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.start.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetStart<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>
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
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetStartQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['start']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetStartQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetStartQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.start.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetStateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/state', toValue(args)] as const
}

export function getMimicAgentAgentNumGetStateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.state.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>
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
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetStateQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.state.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetStateChangedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/state_changed', toValue(args)] as const
}

export function getMimicAgentAgentNumGetStateChangedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetStateChangedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.state_changed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetStateChanged<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>
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
                    (typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetStateChangedQueryKey>
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
            ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['state_changed']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetStateChangedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetStateChangedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.state_changed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/statistics', toValue(args)] as const
}

export function getMimicAgentAgentNumGetStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetStatisticsQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['statistics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetTraceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/trace', toValue(args)] as const
}

export function getMimicAgentAgentNumGetTraceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetTrace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>
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
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetTraceQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['trace']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetValidateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/validate', toValue(args)] as const
}

export function getMimicAgentAgentNumGetValidateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetValidateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.validate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetValidate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetValidateQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['validate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetValidateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetValidateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.validate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumGetWriteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/get/write', toValue(args)] as const
}

export function getMimicAgentAgentNumGetWriteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumGetWriteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].get.write.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumGetWrite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>
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
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumGetWriteQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['get']['write']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumGetWriteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumGetWriteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].get.write.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumHalt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumHaltMutationOptions<TError, TOnMutateResult>(
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

export function usePostMimicAgentAgentNumIpaliasAddIPPortMaskInterface<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMimicAgentAgentNumIpaliasAddIPPortMaskInterfaceMutationOptions<
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

export function useDeleteMimicAgentAgentNumIpaliasDeleteIPPort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMimicAgentAgentNumIpaliasDeleteIPPortMutationOptions<
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

export function getMimicAgentAgentNumIpaliasListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/ipalias/list', toValue(args)] as const
}

export function getMimicAgentAgentNumIpaliasListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumIpaliasListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].ipalias.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumIpaliasList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumIpaliasListQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['ipalias']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumIpaliasListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumIpaliasListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].ipalias.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumIpaliasStartIPPort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumIpaliasStartIPPortMutationOptions<
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

export function getMimicAgentAgentNumIpaliasStatusIPPortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/ipalias/status/:IP/:port', toValue(args)] as const
}

export function getMimicAgentAgentNumIpaliasStatusIPPortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumIpaliasStatusIPPortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].ipalias.status[':IP'][':port'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumIpaliasStatusIPPort<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumIpaliasStatusIPPortQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['ipalias']['status'][':IP'][':port']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumIpaliasStatusIPPortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumIpaliasStatusIPPortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].ipalias.status[':IP'][':port'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumIpaliasStopIPPort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumIpaliasStopIPPortMutationOptions<
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

export function usePutMimicAgentAgentNumPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumPauseMutationOptions<TError, TOnMutateResult>(
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

export function getMimicAgentAgentNumProtocolMsgCoapGetArgsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/coap/get/args', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgCoapGetArgsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgCoapGetArgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.coap.get.args.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgCoapGetArgs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetArgsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['args']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetArgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgCoapGetArgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.coap.get.args.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgCoapGetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/coap/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgCoapGetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgCoapGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.coap.get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgCoapGetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgCoapGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.coap.get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgCoapGetStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/coap/get/statistics',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgCoapGetStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgCoapGetStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.coap.get.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgCoapGetStatistics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetStatisticsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgCoapGetStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.coap.get.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgCoapGetTraceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/coap/get/trace', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgCoapGetTraceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgCoapGetTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.coap.get.trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgCoapGetTrace<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetTraceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['coap']['get']['trace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgCoapGetTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgCoapGetTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.coap.get.trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValue<
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
    getPutMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNot<
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
    getPutMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgDhcpGetArgsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/dhcp/get/args', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgDhcpGetArgsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgDhcpGetArgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.args.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgDhcpGetArgs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetArgsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['args']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetArgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgDhcpGetArgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.args.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgDhcpGetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/dhcp/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgDhcpGetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgDhcpGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgDhcpGetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgDhcpGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/dhcp/get/statistics',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgDhcpGetStatistics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgDhcpGetTraceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/dhcp/get/trace', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgDhcpGetTraceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgDhcpGetTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgDhcpGetTrace<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetTraceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['get']['trace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpGetTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgDhcpGetTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.get.trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgDhcpParamsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/dhcp/params', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgDhcpParamsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgDhcpParamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.dhcp.params.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgDhcpParams<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpParamsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['dhcp']['params']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgDhcpParamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgDhcpParamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.dhcp.params.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValue<
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
    getPutMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNot<
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
    getPutMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgIpmiGetArgsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/get/args', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetArgsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgIpmiGetArgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.args.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgIpmiGetArgs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetArgsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['args']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetArgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgIpmiGetArgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.args.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgIpmiGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgIpmiGetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgIpmiGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/ipmi/get/statistics',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgIpmiGetStatistics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetTraceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/get/trace', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetTraceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgIpmiGetTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgIpmiGetTrace<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetTraceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get']['trace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgIpmiGetTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.get.trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetAttrQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ipmi/get/:attr', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgIpmiGetAttrQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgIpmiGetAttrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ipmi.get[':attr'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgIpmiGetAttr<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetAttrQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ipmi']['get'][':attr']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgIpmiGetAttrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgIpmiGetAttrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ipmi.get[':attr'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValue<
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
    getPutMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNot<
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
    getPutMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNotMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgIpmiSetAttrValue<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgIpmiSetAttrValueMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/get/protstate',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.get.protstate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgMqttClientGetProtstate<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['protstate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.get.protstate.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgMqttClientGetStateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/get/state',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttClientGetStateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgMqttClientGetStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.get.state.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgMqttClientGetState<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientGetStateQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['get']['state']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientGetStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgMqttClientGetStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.get.state.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgMqttClientMessageCardQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/message/card',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttClientMessageCardQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgMqttClientMessageCardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.message.card.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgMqttClientMessageCard<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientMessageCardQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['card']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientMessageCardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgMqttClientMessageCardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.message.card.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/message/get/:msgNum/:attr',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.message.get[':msgNum'][
          ':attr'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttr<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['message']['get'][':msgNum'][':attr']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.message.get[':msgNum'][
            ':attr'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValue<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNum<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNumMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbortMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnect<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnectMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnect<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnectMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddr<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddrMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNot<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNotMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientID<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientIDMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTime<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTimeMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectAction<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectActionMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPassword<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPasswordMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetPortPort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgMqttClientSetPortPortMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsername<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsernameMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsg<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsgMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQos<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQosMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetain<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetainMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopic<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopicMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/subscribe/card',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.subscribe.card.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgMqttClientSubscribeCard<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['card']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.subscribe.card.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/subscribe/get/:subNum/:attr',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.subscribe.get[':subNum'][
          ':attr'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttr<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrQueryKey
          >
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['client']['subscribe']['get'][':subNum'][':attr']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.client.subscribe.get[':subNum'][
            ':attr'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValue<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNum<
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
    getPutMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNumMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgMqttGetArgsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/get/args', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttGetArgsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgMqttGetArgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.args.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgMqttGetArgs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetArgsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['args']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetArgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgMqttGetArgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.args.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgMqttGetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttGetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgMqttGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgMqttGetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgMqttGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgMqttGetStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/mqtt/get/statistics',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttGetStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgMqttGetStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgMqttGetStatistics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetStatisticsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgMqttGetStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgMqttGetTraceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/mqtt/get/trace', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgMqttGetTraceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgMqttGetTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgMqttGetTrace<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetTraceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['mqtt']['get']['trace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgMqttGetTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgMqttGetTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.mqtt.get.trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValue<
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
    getPutMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNot<
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
    getPutMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNotMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalInterval<
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
    getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalIntervalMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalInterval<
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
    getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalIntervalMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValue<
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
    getPutMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValueMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgNetflowFlowListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/flow/list', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgNetflowFlowListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgNetflowFlowListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.flow.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgNetflowFlowList<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowFlowListQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['flow']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowFlowListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgNetflowFlowListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.netflow.flow.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetArgsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/get/args', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetArgsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgNetflowGetArgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.get.args.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgNetflowGetArgs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetArgsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['args']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetArgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgNetflowGetArgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.netflow.get.args.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgNetflowGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgNetflowGetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgNetflowGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.netflow.get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/netflow/get/statistics',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.get.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgNetflowGetStatistics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.netflow.get.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetTraceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/netflow/get/trace', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgNetflowGetTraceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgNetflowGetTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.netflow.get.trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgNetflowGetTrace<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetTraceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['netflow']['get']['trace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgNetflowGetTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgNetflowGetTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.netflow.get.trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgNetflowHalt<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgNetflowHaltMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgNetflowReload<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgNetflowReloadMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgNetflowResume<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgNetflowResumeMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIP<
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
    getPutMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIPMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValue<
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
    getPutMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileName<
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
    getPutMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileNameMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNot<
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
    getPutMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgProxyGetArgsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/get/args', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgProxyGetArgsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgProxyGetArgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.get.args.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgProxyGetArgs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetArgsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['args']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetArgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgProxyGetArgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.proxy.get.args.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgProxyGetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgProxyGetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgProxyGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgProxyGetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgProxyGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.proxy.get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgProxyGetStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/proxy/get/statistics',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgProxyGetStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgProxyGetStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.get.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgProxyGetStatistics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetStatisticsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgProxyGetStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.proxy.get.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgProxyGetTraceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/get/trace', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgProxyGetTraceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgProxyGetTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.get.trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgProxyGetTrace<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetTraceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['get']['trace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyGetTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgProxyGetTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.proxy.get.trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPort<
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
    getPostMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPortMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/proxy/port/isStarted/:port',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.port.isStarted[':port'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgProxyPortIsStartedPort<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['isStarted'][':port']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.proxy.port.isStarted[':port'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgProxyPortListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/proxy/port/list', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgProxyPortListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgProxyPortListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.proxy.port.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgProxyPortList<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyPortListQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['proxy']['port']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgProxyPortListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgProxyPortListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.proxy.port.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteMimicAgentAgentNumProtocolMsgProxyPortRemovePort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMimicAgentAgentNumProtocolMsgProxyPortRemovePortMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgProxyPortStartPort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgProxyPortStartPortMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgProxyPortStopPort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgProxyPortStopPortMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValue<
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
    getPutMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNot<
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
    getPutMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSflowGetArgsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/get/args', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSflowGetArgsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSflowGetArgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.sflow.get.args.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSflowGetArgs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetArgsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['args']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetArgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSflowGetArgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.sflow.get.args.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSflowGetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSflowGetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSflowGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.sflow.get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSflowGetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSflowGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.sflow.get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSflowGetStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/sflow/get/statistics',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgSflowGetStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSflowGetStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.sflow.get.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSflowGetStatistics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetStatisticsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSflowGetStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.sflow.get.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSflowGetTraceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/sflow/get/trace', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSflowGetTraceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSflowGetTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.sflow.get.trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSflowGetTrace<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetTraceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['sflow']['get']['trace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSflowGetTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSflowGetTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.sflow.get.trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgSflowHalt<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgSflowHaltMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgSflowReload<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgSflowReloadMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgSflowResume<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgSflowResumeMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValue<
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
    getPutMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNot<
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
    getPutMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/args', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.args.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSnmptcpGetArgs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['args']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.args.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSnmptcpGetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/statistics',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSnmptcpGetStatistics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/trace', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSnmptcpGetTrace<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['get']['trace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.get.trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPort<
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
    getPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPortMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPort<
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
    getPutMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPortMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/ipalias/isenabled/:ipaddress/:port',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.isenabled[':ipaddress'][
          ':port'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPort<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortQueryKey
          >
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.isenabled[':ipaddress'][
            ':port'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/ipalias/list',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSnmptcpIpaliasList<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmptcp']['ipalias']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmptcp.ipalias.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValue<
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
    getPutMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNot<
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
    getPutMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNotMutationOptions<
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

export function usePostMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyView<
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
    getPostMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyViewMutationOptions<
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

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClear<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClearMutationOptions<
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

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessName<
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
    getDeleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessNameMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSnmpv3AccessListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/access/list', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3AccessListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3AccessListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.access.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSnmpv3AccessList<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3AccessListQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['access']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3AccessListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3AccessListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.access.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSnmpv3GetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/context_engineid',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.context_engineid.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineid<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['context_engineid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.context_engineid.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/engineboots',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.engineboots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSnmpv3GetEngineboots<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineboots']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.engineboots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/engineid',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.engineid.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSnmpv3GetEngineid<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['engineid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.engineid.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/enginetime',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.enginetime.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetime<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['get']['enginetime']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.get.enginetime.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityName<
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
    getPostMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityNameMutationOptions<
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

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClear<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClearMutationOptions<
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

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupName<
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
    getDeleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupNameMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSnmpv3GroupListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/group/list', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3GroupListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3GroupListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.group.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSnmpv3GroupList<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GroupListQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['group']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3GroupListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3GroupListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.group.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValue<
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
    getPutMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValueMutationOptions<
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

export function usePostMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKey<
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
    getPostMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKeyMutationOptions<
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

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserClear<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserClearMutationOptions<
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

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserName<
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
    getDeleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserNameMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSnmpv3UserListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/user/list', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3UserListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3UserListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.user.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSnmpv3UserList<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3UserListQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['user']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3UserListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3UserListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.user.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgSnmpv3UsmSave<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilename<
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
    getPutMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilenameMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgSnmpv3VacmSave<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilename<
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
    getPutMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilenameMutationOptions<
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

export function usePostMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMask<
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
    getPostMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMaskMutationOptions<
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

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClear<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClearMutationOptions<
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

export function useDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewName<
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
    getDeleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewNameMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSnmpv3ViewListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/snmpv3/view/list', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSnmpv3ViewListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3ViewListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.snmpv3.view.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSnmpv3ViewList<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3ViewListQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['snmpv3']['view']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSnmpv3ViewListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSnmpv3ViewListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.snmpv3.view.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSshGetArgsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/get/args', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSshGetArgsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSshGetArgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.get.args.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSshGetArgs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetArgsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['args']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetArgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSshGetArgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ssh.get.args.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSshGetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSshGetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSshGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSshGetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSshGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ssh.get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSshGetStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/get/statistics', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSshGetStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSshGetStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.get.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSshGetStatistics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetStatisticsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSshGetStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ssh.get.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSshGetTraceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/get/trace', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSshGetTraceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSshGetTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.get.trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSshGetTrace<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetTraceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['get']['trace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshGetTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSshGetTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ssh.get.trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPort<
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
    getPutMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPortMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPort<
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
    getPutMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPortMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/ssh/ipalias/isenabled/:ipaddress/:port',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.isenabled[':ipaddress'][
          ':port'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPort<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortQueryKey
          >
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.isenabled[':ipaddress'][
            ':port'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSshIpaliasListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/ssh/ipalias/list', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSshIpaliasListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSshIpaliasListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSshIpaliasList<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshIpaliasListQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['ssh']['ipalias']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSshIpaliasListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSshIpaliasListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.ssh.ipalias.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValue<
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
    getPutMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNot<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgSyslogGetArgsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/get/args', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetArgsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSyslogGetArgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.syslog.get.args.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSyslogGetArgs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetArgsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['args']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetArgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSyslogGetArgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.syslog.get.args.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSyslogGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.syslog.get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSyslogGetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSyslogGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.syslog.get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/syslog/get/statistics',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.syslog.get.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSyslogGetStatistics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.syslog.get.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetTraceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/get/trace', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetTraceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSyslogGetTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.syslog.get.trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSyslogGetTrace<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetTraceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get']['trace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSyslogGetTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.syslog.get.trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetAttrQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/syslog/get/:attr', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgSyslogGetAttrQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSyslogGetAttrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.syslog.get[':attr'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgSyslogGetAttr<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetAttrQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['syslog']['get'][':attr']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgSyslogGetAttrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgSyslogGetAttrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.syslog.get[':attr'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMimicAgentAgentNumProtocolMsgSyslogSendPri<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMimicAgentAgentNumProtocolMsgSyslogSendPriMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValue<
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
    getPutMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNot<
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
    getPutMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNotMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgSyslogSetAttrValue<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgSyslogSetAttrValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPassword<
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
    getPutMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPasswordMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommand<
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
    getPutMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommandMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalName<
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
    getPutMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalNameMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgTelnetGetArgsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/get/args', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetGetArgsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetGetArgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.get.args.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTelnetGetArgs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetArgsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['args']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetArgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetGetArgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.get.args.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTelnetGetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetGetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTelnetGetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/get/statistics',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.get.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTelnetGetStatistics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.get.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTelnetGetTraceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/telnet/get/trace', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetGetTraceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetGetTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.get.trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTelnetGetTrace<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetTraceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['get']['trace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetGetTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetGetTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.get.trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPort<
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
    getPutMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPortMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPort<
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
    getPutMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPortMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/ipalias/isenabled/:ipaddress/:port',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.isenabled[':ipaddress'][
          ':port'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPort<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortQueryKey
          >
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['isenabled'][':ipaddress'][':port']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.isenabled[':ipaddress'][
            ':port'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTelnetIpaliasListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/ipalias/list',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetIpaliasListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetIpaliasListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTelnetIpaliasList<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetIpaliasListQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['ipalias']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetIpaliasListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetIpaliasListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.ipalias.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/connections',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.connections.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTelnetServerGetConnections<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['connections']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.connections.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/keymap',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.keymap.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTelnetServerGetKeymap<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['keymap']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.keymap.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/rulesdb',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.rulesdb.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdb<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['rulesdb']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.rulesdb.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetStateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/state',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetStateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetServerGetStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.state.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTelnetServerGetState<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetStateQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['state']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetServerGetStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.state.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/userdb',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.userdb.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTelnetServerGetUserdb<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['userdb']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.userdb.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/users',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTelnetServerGetUsers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['telnet']['server']['get']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.telnet.server.get.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValue<
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
    getPutMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNot<
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
    getPutMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgTftpGetArgsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/get/args', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgTftpGetArgsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTftpGetArgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp.get.args.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTftpGetArgs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetArgsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['args']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetArgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTftpGetArgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tftp.get.args.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTftpGetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgTftpGetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTftpGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp.get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTftpGetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTftpGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tftp.get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTftpGetStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tftp/get/statistics',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgTftpGetStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTftpGetStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp.get.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTftpGetStatistics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetStatisticsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTftpGetStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tftp.get.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTftpGetTraceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tftp/get/trace', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgTftpGetTraceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTftpGetTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp.get.trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTftpGetTrace<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetTraceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp']['get']['trace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpGetTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTftpGetTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tftp.get.trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfile<
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
    getPostMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfileMutationOptions<
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

export function usePostMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfile<
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
    getPostMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfileMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValue<
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
    getPutMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNot<
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
    getPutMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/get/:parameter',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].get[':parameter'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameter<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['get'][':parameter']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].get[':parameter'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValue<
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
    getPutMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgTftpSessionIDStart<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgTftpSessionIDStartMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/status',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTftpSessionIDStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tftp'][':sessionID']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tftp[':sessionID'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgTftpSessionIDStop<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgTftpSessionIDStopMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgTodGetArgsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tod/get/args', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgTodGetArgsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTodGetArgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tod.get.args.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTodGetArgs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetArgsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['args']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetArgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTodGetArgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tod.get.args.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTodGetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tod/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgTodGetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTodGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tod.get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTodGetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTodGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tod.get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTodGetStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tod/get/statistics', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgTodGetStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTodGetStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tod.get.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTodGetStatistics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetStatisticsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTodGetStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tod.get.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTodGetTraceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/tod/get/trace', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgTodGetTraceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTodGetTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tod.get.trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTodGetTrace<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetTraceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['get']['trace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgTodGetTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgTodGetTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tod.get.trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['gettime']['server'][':serverAddr']['port'][':portNum']['script'][':scriptName']['timeout'][':timeSec']['retries'][':numRetries']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/tod/gettime/server/:serverAddr/port/:portNum/script/:scriptName/timeout/:timeSec/retries/:numRetries',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['gettime']['server'][':serverAddr']['port'][':portNum']['script'][':scriptName']['timeout'][':timeSec']['retries'][':numRetries']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.tod.gettime.server[':serverAddr'].port[
          ':portNum'
        ].script[':scriptName'].timeout[':timeSec'].retries[':numRetries'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetries<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['gettime']['server'][':serverAddr']['port'][':portNum']['script'][':scriptName']['timeout'][':timeSec']['retries'][':numRetries']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['gettime']['server'][':serverAddr']['port'][':portNum']['script'][':scriptName']['timeout'][':timeSec']['retries'][':numRetries']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['tod']['gettime']['server'][':serverAddr']['port'][':portNum']['script'][':scriptName']['timeout'][':timeSec']['retries'][':numRetries']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.tod.gettime.server[':serverAddr'].port[
            ':portNum'
          ].script[':scriptName'].timeout[':timeSec'].retries[':numRetries'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValue<
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
    getPutMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNot<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgWebGetArgsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/get/args', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgWebGetArgsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgWebGetArgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.get.args.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgWebGetArgs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetArgsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['args']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetArgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgWebGetArgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.web.get.args.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgWebGetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgWebGetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgWebGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgWebGetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgWebGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.web.get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgWebGetStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/get/statistics', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgWebGetStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgWebGetStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.get.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgWebGetStatistics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetStatisticsQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgWebGetStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.web.get.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumProtocolMsgWebGetTraceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/msg/web/get/trace', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolMsgWebGetTraceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgWebGetTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.get.trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgWebGetTrace<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetTraceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['get']['trace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebGetTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgWebGetTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.web.get.trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMimicAgentAgentNumProtocolMsgWebPortAddPort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMimicAgentAgentNumProtocolMsgWebPortAddPortMutationOptions<
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

export function getMimicAgentAgentNumProtocolMsgWebPortExistsPortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/protocol/msg/web/port/exists/:port',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumProtocolMsgWebPortExistsPortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolMsgWebPortExistsPortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol.msg.web.port.exists[':port'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolMsgWebPortExistsPort<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebPortExistsPortQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol']['msg']['web']['port']['exists'][':port']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolMsgWebPortExistsPortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolMsgWebPortExistsPortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol.msg.web.port.exists[':port'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteMimicAgentAgentNumProtocolMsgWebPortRemovePort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMimicAgentAgentNumProtocolMsgWebPortRemovePortMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersion<
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
    getPutMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersionMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgWebPortStartPort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgWebPortStartPortMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgWebPortStopPort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgWebPortStopPortMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValue<
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
    getPutMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValueMutationOptions<
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

export function usePutMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNot<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNotMutationOptions<
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

export function getMimicAgentAgentNumProtocolProtGetConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/protocol/:prot/get/config', toValue(args)] as const
}

export function getMimicAgentAgentNumProtocolProtGetConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumProtocolProtGetConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].protocol[':prot'].get.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumProtocolProtGetConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumProtocolProtGetConfigQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['protocol'][':prot']['get']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumProtocolProtGetConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumProtocolProtGetConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].protocol[':prot'].get.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumReload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumReloadMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteMimicAgentAgentNumRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMimicAgentAgentNumRemoveMutationOptions<
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

export function usePutMimicAgentAgentNumResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumResumeMutationOptions<TError, TOnMutateResult>(
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

export function usePutMimicAgentAgentNumSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumSaveMutationOptions<TError, TOnMutateResult>(
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

export function usePutMimicAgentAgentNumSetDelayDelay<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumSetDelayDelayMutationOptions<
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

export function usePutMimicAgentAgentNumSetDropsDrops<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumSetDropsDropsMutationOptions<
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

export function usePutMimicAgentAgentNumSetHostHost<
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
                    (typeof client.mimic.agent)[':agentNum']['set']['host'][':host']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.mimic.agent)[':agentNum']['set']['host'][':host']['$put']
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
  const mutationDefaults = getPutMimicAgentAgentNumSetHostHostMutationOptions<
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

export function usePutMimicAgentAgentNumSetInformTimeoutInformTimeout<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumSetInformTimeoutInformTimeoutMutationOptions<
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

export function usePutMimicAgentAgentNumSetInterfaceInterface<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumSetInterfaceInterfaceMutationOptions<
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

export function usePutMimicAgentAgentNumSetMaskMask<
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
                    (typeof client.mimic.agent)[':agentNum']['set']['mask'][':mask']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.mimic.agent)[':agentNum']['set']['mask'][':mask']['$put']
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
  const mutationDefaults = getPutMimicAgentAgentNumSetMaskMaskMutationOptions<
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

export function usePutMimicAgentAgentNumSetMibs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumSetMibsMutationOptions<TError, TOnMutateResult>(
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

export function usePutMimicAgentAgentNumSetOiddirOiddir<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumSetOiddirOiddirMutationOptions<
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

export function usePutMimicAgentAgentNumSetOwnerOwner<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumSetOwnerOwnerMutationOptions<
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

export function usePutMimicAgentAgentNumSetPdusizePdusize<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumSetPdusizePdusizeMutationOptions<
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

export function usePutMimicAgentAgentNumSetPortPort<
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
                    (typeof client.mimic.agent)[':agentNum']['set']['port'][':port']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.mimic.agent)[':agentNum']['set']['port'][':port']['$put']
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
  const mutationDefaults = getPutMimicAgentAgentNumSetPortPortMutationOptions<
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

export function usePutMimicAgentAgentNumSetPrivdirPrivdir<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumSetPrivdirPrivdirMutationOptions<
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

export function usePutMimicAgentAgentNumSetProtocol<
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
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['set']['protocol']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mimic.agent)[':agentNum']['set']['protocol']['$put']>,
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
  const mutationDefaults = getPutMimicAgentAgentNumSetProtocolMutationOptions<
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

export function usePutMimicAgentAgentNumSetReadRead<
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
                    (typeof client.mimic.agent)[':agentNum']['set']['read'][':read']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.mimic.agent)[':agentNum']['set']['read'][':read']['$put']
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
  const mutationDefaults = getPutMimicAgentAgentNumSetReadReadMutationOptions<
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

export function usePutMimicAgentAgentNumSetStartStart<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumSetStartStartMutationOptions<
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

export function usePutMimicAgentAgentNumSetTraceTrace<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumSetTraceTraceMutationOptions<
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

export function usePutMimicAgentAgentNumSetValidateValidate<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumSetValidateValidateMutationOptions<
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

export function usePutMimicAgentAgentNumSetWriteWrite<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumSetWriteWriteMutationOptions<
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

export function usePutMimicAgentAgentNumStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumStartMutationOptions<TError, TOnMutateResult>(
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

export function usePutMimicAgentAgentNumStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumStopMutationOptions<TError, TOnMutateResult>(
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

export function usePutMimicAgentAgentNumStoreCopyOtherAgent<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumStoreCopyOtherAgentMutationOptions<
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

export function getMimicAgentAgentNumStoreExistsVarQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/store/exists/:var', toValue(args)] as const
}

export function getMimicAgentAgentNumStoreExistsVarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumStoreExistsVarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].store.exists[':var'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumStoreExistsVar<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']>
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
                    (typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumStoreExistsVarQueryKey>
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
            ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['exists'][':var']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumStoreExistsVarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumStoreExistsVarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].store.exists[':var'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumStoreGetVarQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/store/get/:var', toValue(args)] as const
}

export function getMimicAgentAgentNumStoreGetVarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumStoreGetVarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].store.get[':var'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumStoreGetVar<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>
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
                    (typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumStoreGetVarQueryKey>
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
            ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['get'][':var']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumStoreGetVarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumStoreGetVarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].store.get[':var'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumStoreListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/store/list', toValue(args)] as const
}

export function getMimicAgentAgentNumStoreListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumStoreListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].store.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumStoreList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>
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
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumStoreListQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['store']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumStoreListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumStoreListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].store.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumStoreLreplaceVarIndex<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumStoreLreplaceVarIndexMutationOptions<
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

export function getMimicAgentAgentNumStorePersistsVarQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/store/persists/:var', toValue(args)] as const
}

export function getMimicAgentAgentNumStorePersistsVarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumStorePersistsVarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].store.persists[':var'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumStorePersistsVar<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']>
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
                    (typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumStorePersistsVarQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['store']['persists'][':var']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumStorePersistsVarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumStorePersistsVarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].store.persists[':var'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumStoreSetVarPersist<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumStoreSetVarPersistMutationOptions<
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

export function usePutMimicAgentAgentNumStoreUnsetVar<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumStoreUnsetVarMutationOptions<
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

export function usePostMimicAgentAgentNumTimerScriptAddScriptIntervalArg<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMimicAgentAgentNumTimerScriptAddScriptIntervalArgMutationOptions<
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

export function useDeleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArg<
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
    getDeleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArgMutationOptions<
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

export function getMimicAgentAgentNumTimerScriptListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/timer/script/list', toValue(args)] as const
}

export function getMimicAgentAgentNumTimerScriptListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumTimerScriptListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].timer.script.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumTimerScriptList<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']>
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
                    (typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumTimerScriptListQueryKey>
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
            ReturnType<(typeof client.mimic.agent)[':agentNum']['timer']['script']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumTimerScriptListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumTimerScriptListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].timer.script.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMimicAgentAgentNumTrapConfigAddIPPort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMimicAgentAgentNumTrapConfigAddIPPortMutationOptions<
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

export function useDeleteMimicAgentAgentNumTrapConfigDeleteIPPort<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMimicAgentAgentNumTrapConfigDeleteIPPortMutationOptions<
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

export function getMimicAgentAgentNumTrapConfigListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/trap/config/list', toValue(args)] as const
}

export function getMimicAgentAgentNumTrapConfigListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumTrapConfigListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].trap.config.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumTrapConfigList<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']>
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
                    (typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumTrapConfigListQueryKey>
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
            ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['config']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumTrapConfigListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumTrapConfigListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].trap.config.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumTrapListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/trap/list', toValue(args)] as const
}

export function getMimicAgentAgentNumTrapListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumTrapListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].trap.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumTrapList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>
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
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumTrapListQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.agent)[':agentNum']['trap']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumTrapListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumTrapListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].trap.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMimicAgentAgentNumValueAddObjectInstance<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMimicAgentAgentNumValueAddObjectInstanceMutationOptions<
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

export function getMimicAgentAgentNumValueEvalObjectInstanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/eval/:object/:instance', toValue(args)] as const
}

export function getMimicAgentAgentNumValueEvalObjectInstanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumValueEvalObjectInstanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.eval[':object'][':instance'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumValueEvalObjectInstance<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumValueEvalObjectInstanceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['value']['eval'][':object'][':instance']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueEvalObjectInstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumValueEvalObjectInstanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].value.eval[':object'][':instance'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumValueGetObjectInstanceVariableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/value/get/:object/:instance/:variable',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumValueGetObjectInstanceVariableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumValueGetObjectInstanceVariableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.get[':object'][':instance'][':variable'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMimicAgentAgentNumValueGetObjectInstanceVariable<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumValueGetObjectInstanceVariableQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['value']['get'][':object'][':instance'][':variable']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueGetObjectInstanceVariableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumValueGetObjectInstanceVariableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].value.get[':object'][':instance'][':variable'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumValueInfoObjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/info/:object', toValue(args)] as const
}

export function getMimicAgentAgentNumValueInfoObjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumValueInfoObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.info[':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumValueInfoObject<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']>
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
                    (typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumValueInfoObjectQueryKey>
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
            ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['info'][':object']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueInfoObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumValueInfoObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].value.info[':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumValueInstancesObjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/instances/:object', toValue(args)] as const
}

export function getMimicAgentAgentNumValueInstancesObjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumValueInstancesObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.instances[':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumValueInstancesObject<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumValueInstancesObjectQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['value']['instances'][':object']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueInstancesObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumValueInstancesObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].value.instances[':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumValueListOIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/list/:OID', toValue(args)] as const
}

export function getMimicAgentAgentNumValueListOIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumValueListOIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.list[':OID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumValueListOID<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>
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
                    (typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumValueListOIDQueryKey>
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
            ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['list'][':OID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueListOIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumValueListOIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].value.list[':OID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumValueMevalObjInsArrayQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/meval/:objInsArray', toValue(args)] as const
}

export function getMimicAgentAgentNumValueMevalObjInsArrayQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumValueMevalObjInsArrayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.meval[':objInsArray'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumValueMevalObjInsArray<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumValueMevalObjInsArrayQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['value']['meval'][':objInsArray']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueMevalObjInsArrayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumValueMevalObjInsArrayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].value.meval[':objInsArray'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumValueMgetObjInsVarArrayQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/mget/:objInsVarArray', toValue(args)] as const
}

export function getMimicAgentAgentNumValueMgetObjInsVarArrayQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumValueMgetObjInsVarArrayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.mget[':objInsVarArray'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumValueMgetObjInsVarArray<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumValueMgetObjInsVarArrayQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['value']['mget'][':objInsVarArray']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueMgetObjInsVarArrayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumValueMgetObjInsVarArrayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].value.mget[':objInsVarArray'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumValueMibObjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/mib/:object', toValue(args)] as const
}

export function getMimicAgentAgentNumValueMibObjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumValueMibObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.mib[':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumValueMibObject<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']>
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
                    (typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumValueMibObjectQueryKey>
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
            ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['mib'][':object']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueMibObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumValueMibObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].value.mib[':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumValueMset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['mset']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['mset']['$put']>,
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
  const mutationDefaults = getPutMimicAgentAgentNumValueMsetMutationOptions<
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

export function usePutMimicAgentAgentNumValueMunset<
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
                  ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['munset']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['munset']['$put']>,
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
  const mutationDefaults = getPutMimicAgentAgentNumValueMunsetMutationOptions<
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

export function getMimicAgentAgentNumValueNameOIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/name/:OID', toValue(args)] as const
}

export function getMimicAgentAgentNumValueNameOIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumValueNameOIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.name[':OID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumValueNameOID<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>
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
                    (typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumValueNameOIDQueryKey>
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
            ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['name'][':OID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueNameOIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumValueNameOIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].value.name[':OID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumValueOidObjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/oid/:object', toValue(args)] as const
}

export function getMimicAgentAgentNumValueOidObjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumValueOidObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.oid[':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumValueOidObject<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']>
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
                    (typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumValueOidObjectQueryKey>
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
            ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['oid'][':object']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueOidObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumValueOidObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].value.oid[':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteMimicAgentAgentNumValueRemoveObjectInstance<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMimicAgentAgentNumValueRemoveObjectInstanceMutationOptions<
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

export function usePutMimicAgentAgentNumValueSetObjectInstanceVariable<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumValueSetObjectInstanceVariableMutationOptions<
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

export function getMimicAgentAgentNumValueSplitOIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']>
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/split/:OID', toValue(args)] as const
}

export function getMimicAgentAgentNumValueSplitOIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumValueSplitOIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.split[':OID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumValueSplitOID<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']>
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
                    (typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumValueSplitOIDQueryKey>
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
            ReturnType<(typeof client.mimic.agent)[':agentNum']['value']['split'][':OID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueSplitOIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumValueSplitOIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].value.split[':OID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicAgentAgentNumValueStateGetObjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
    >
  >,
) {
  return ['mimic', '/mimic/agent/:agentNum/value/state/get/:object', toValue(args)] as const
}

export function getMimicAgentAgentNumValueStateGetObjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumValueStateGetObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.state.get[':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicAgentAgentNumValueStateGetObject<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumValueStateGetObjectQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['value']['state']['get'][':object']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueStateGetObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumValueStateGetObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].value.state.get[':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicAgentAgentNumValueStateSetObjectState<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumValueStateSetObjectStateMutationOptions<
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

export function usePutMimicAgentAgentNumValueUnsetObjectInstanceVariable<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicAgentAgentNumValueUnsetObjectInstanceVariableMutationOptions<
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

export function getMimicAgentAgentNumValueVariablesObjectInstanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
    >
  >,
) {
  return [
    'mimic',
    '/mimic/agent/:agentNum/value/variables/:object/:instance',
    toValue(args),
  ] as const
}

export function getMimicAgentAgentNumValueVariablesObjectInstanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicAgentAgentNumValueVariablesObjectInstanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.agent[':agentNum'].value.variables[':object'][':instance'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMimicAgentAgentNumValueVariablesObjectInstance<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
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
                    (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMimicAgentAgentNumValueVariablesObjectInstanceQueryKey>
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
              (typeof client.mimic.agent)[':agentNum']['value']['variables'][':object'][':instance']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicAgentAgentNumValueVariablesObjectInstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicAgentAgentNumValueVariablesObjectInstanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.agent[':agentNum'].value.variables[':object'][':instance'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicClearFirstAgentNumLastAgentNum<
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
                  ReturnType<(typeof client.mimic.clear)[':firstAgentNum'][':lastAgentNum']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mimic.clear)[':firstAgentNum'][':lastAgentNum']['$put']>,
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
  const mutationDefaults = getPutMimicClearFirstAgentNumLastAgentNumMutationOptions<
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

export function getMimicGetActiveDataListQueryKey() {
  return ['mimic', '/mimic/get/active_data_list'] as const
}

export function getMimicGetActiveDataListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetActiveDataListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.active_data_list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicGetActiveDataList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_data_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.get.active_data_list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.get.active_data_list.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicGetActiveDataListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_data_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetActiveDataListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetActiveDataListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.active_data_list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetActiveListQueryKey() {
  return ['mimic', '/mimic/get/active_list'] as const
}

export function getMimicGetActiveListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetActiveListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.active_list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicGetActiveList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_list.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_list.$get>>>
            >
          >,
          ReturnType<typeof getMimicGetActiveListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.active_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetActiveListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetActiveListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.active_list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetCfgfileQueryKey() {
  return ['mimic', '/mimic/get/cfgfile'] as const
}

export function getMimicGetCfgfileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetCfgfileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.cfgfile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicGetCfgfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile.$get>>>
            >
          >,
          ReturnType<typeof getMimicGetCfgfileQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetCfgfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetCfgfileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.cfgfile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetCfgfileChangedQueryKey() {
  return ['mimic', '/mimic/get/cfgfile_changed'] as const
}

export function getMimicGetCfgfileChangedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetCfgfileChangedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.cfgfile_changed.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicGetCfgfileChanged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile_changed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.get.cfgfile_changed.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.get.cfgfile_changed.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicGetCfgfileChangedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.cfgfile_changed.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetCfgfileChangedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetCfgfileChangedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.cfgfile_changed.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetChangedConfigListQueryKey() {
  return ['mimic', '/mimic/get/changed_config_list'] as const
}

export function getMimicGetChangedConfigListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetChangedConfigListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.changed_config_list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicGetChangedConfigList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_config_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.get.changed_config_list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.get.changed_config_list.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicGetChangedConfigListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_config_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetChangedConfigListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetChangedConfigListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.changed_config_list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetChangedStateListQueryKey() {
  return ['mimic', '/mimic/get/changed_state_list'] as const
}

export function getMimicGetChangedStateListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetChangedStateListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.changed_state_list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicGetChangedStateList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_state_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.get.changed_state_list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.get.changed_state_list.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicGetChangedStateListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.changed_state_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetChangedStateListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetChangedStateListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.changed_state_list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetClientsQueryKey() {
  return ['mimic', '/mimic/get/clients'] as const
}

export function getMimicGetClientsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetClientsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.clients.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicGetClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.clients.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.clients.$get>>>
            >
          >,
          ReturnType<typeof getMimicGetClientsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.clients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetClientsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.clients.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetConfiguredListQueryKey() {
  return ['mimic', '/mimic/get/configured_list'] as const
}

export function getMimicGetConfiguredListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetConfiguredListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.configured_list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicGetConfiguredList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.configured_list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.get.configured_list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.get.configured_list.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicGetConfiguredListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.configured_list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetConfiguredListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetConfiguredListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.configured_list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetInterfacesQueryKey() {
  return ['mimic', '/mimic/get/interfaces'] as const
}

export function getMimicGetInterfacesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetInterfacesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.interfaces.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicGetInterfaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.interfaces.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.interfaces.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.interfaces.$get>>>
            >
          >,
          ReturnType<typeof getMimicGetInterfacesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.interfaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetInterfacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetInterfacesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.interfaces.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetLastQueryKey() {
  return ['mimic', '/mimic/get/last'] as const
}

export function getMimicGetLastQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetLastQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.last.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMimicGetLast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.last.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.last.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.last.$get>>>>
          >,
          ReturnType<typeof getMimicGetLastQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.last.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetLastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetLastQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.last.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetLogQueryKey() {
  return ['mimic', '/mimic/get/log'] as const
}

export function getMimicGetLogQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetLogQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.log.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMimicGetLog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.log.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.log.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.log.$get>>>>
          >,
          ReturnType<typeof getMimicGetLogQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.log.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetLogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetLogQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.log.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetMaxQueryKey() {
  return ['mimic', '/mimic/get/max'] as const
}

export function getMimicGetMaxQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetMaxQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.max.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMimicGetMax<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.max.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.max.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.max.$get>>>>
          >,
          ReturnType<typeof getMimicGetMaxQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.max.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetMaxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetMaxQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.max.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetNetaddrQueryKey() {
  return ['mimic', '/mimic/get/netaddr'] as const
}

export function getMimicGetNetaddrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetNetaddrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.netaddr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicGetNetaddr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netaddr.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netaddr.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netaddr.$get>>>
            >
          >,
          ReturnType<typeof getMimicGetNetaddrQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netaddr.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetNetaddrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetNetaddrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.netaddr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetNetdevQueryKey() {
  return ['mimic', '/mimic/get/netdev'] as const
}

export function getMimicGetNetdevQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetNetdevQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.netdev.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMimicGetNetdev<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netdev.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netdev.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netdev.$get>>>
            >
          >,
          ReturnType<typeof getMimicGetNetdevQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.netdev.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetNetdevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetNetdevQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.netdev.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetProductQueryKey() {
  return ['mimic', '/mimic/get/product'] as const
}

export function getMimicGetProductQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetProductQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.product.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicGetProduct<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.product.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.product.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.product.$get>>>
            >
          >,
          ReturnType<typeof getMimicGetProductQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.product.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetProductQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetProductQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.product.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetProtocolsQueryKey() {
  return ['mimic', '/mimic/get/protocols'] as const
}

export function getMimicGetProtocolsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetProtocolsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.protocols.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicGetProtocols<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.protocols.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.protocols.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.protocols.$get>>>
            >
          >,
          ReturnType<typeof getMimicGetProtocolsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.protocols.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetProtocolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetProtocolsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.protocols.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetReturnQueryKey() {
  return ['mimic', '/mimic/get/return'] as const
}

export function getMimicGetReturnQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetReturnQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.return.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMimicGetReturn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.return.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.return.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.return.$get>>>
            >
          >,
          ReturnType<typeof getMimicGetReturnQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.return.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetReturnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetReturnQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.return.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicGetVersionQueryKey() {
  return ['mimic', '/mimic/get/version'] as const
}

export function getMimicGetVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicGetVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.get.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicGetVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.version.$get>>>
            >
          >,
          ReturnType<typeof getMimicGetVersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.get.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicGetVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicGetVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.get.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNum<
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
    getPutMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNumMutationOptions<
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

export function getMimicMgetInfoArrayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mimic.mget)[':infoArray']['$get']>>,
) {
  return ['mimic', '/mimic/mget/:infoArray', toValue(args)] as const
}

export function getMimicMgetInfoArrayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mimic.mget)[':infoArray']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicMgetInfoArrayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.mget[':infoArray'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicMgetInfoArray<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.mget)[':infoArray']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mimic.mget)[':infoArray']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.mget)[':infoArray']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.mget)[':infoArray']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMimicMgetInfoArrayQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.mget)[':infoArray']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicMgetInfoArrayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicMgetInfoArrayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.mget[':infoArray'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicProtocolMsgCoapGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/coap/get/stats_hdr'] as const
}

export function getMimicProtocolMsgCoapGetStatsHdrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicProtocolMsgCoapGetStatsHdrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.protocol.msg.coap.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicProtocolMsgCoapGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.coap.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.coap.get.stats_hdr.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.coap.get.stats_hdr.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicProtocolMsgCoapGetStatsHdrQueryKey>
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
          Awaited<ReturnType<typeof client.mimic.protocol.msg.coap.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgCoapGetStatsHdrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicProtocolMsgCoapGetStatsHdrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.protocol.msg.coap.get.stats_hdr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicProtocolMsgDhcpGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/dhcp/get/stats_hdr'] as const
}

export function getMimicProtocolMsgDhcpGetStatsHdrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicProtocolMsgDhcpGetStatsHdrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.protocol.msg.dhcp.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicProtocolMsgDhcpGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.dhcp.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.dhcp.get.stats_hdr.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.dhcp.get.stats_hdr.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicProtocolMsgDhcpGetStatsHdrQueryKey>
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
          Awaited<ReturnType<typeof client.mimic.protocol.msg.dhcp.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgDhcpGetStatsHdrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicProtocolMsgDhcpGetStatsHdrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.protocol.msg.dhcp.get.stats_hdr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicProtocolMsgIpmiGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/ipmi/get/stats_hdr'] as const
}

export function getMimicProtocolMsgIpmiGetStatsHdrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicProtocolMsgIpmiGetStatsHdrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.protocol.msg.ipmi.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicProtocolMsgIpmiGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.ipmi.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.ipmi.get.stats_hdr.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.ipmi.get.stats_hdr.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicProtocolMsgIpmiGetStatsHdrQueryKey>
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
          Awaited<ReturnType<typeof client.mimic.protocol.msg.ipmi.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgIpmiGetStatsHdrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicProtocolMsgIpmiGetStatsHdrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.protocol.msg.ipmi.get.stats_hdr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicProtocolMsgMqttGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/mqtt/get/stats_hdr'] as const
}

export function getMimicProtocolMsgMqttGetStatsHdrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicProtocolMsgMqttGetStatsHdrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.protocol.msg.mqtt.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicProtocolMsgMqttGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.mqtt.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.mqtt.get.stats_hdr.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.mqtt.get.stats_hdr.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicProtocolMsgMqttGetStatsHdrQueryKey>
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
          Awaited<ReturnType<typeof client.mimic.protocol.msg.mqtt.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgMqttGetStatsHdrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicProtocolMsgMqttGetStatsHdrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.protocol.msg.mqtt.get.stats_hdr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicProtocolMsgNetflowGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/netflow/get/stats_hdr'] as const
}

export function getMimicProtocolMsgNetflowGetStatsHdrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicProtocolMsgNetflowGetStatsHdrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.protocol.msg.netflow.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicProtocolMsgNetflowGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.netflow.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.netflow.get.stats_hdr.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.netflow.get.stats_hdr.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicProtocolMsgNetflowGetStatsHdrQueryKey>
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
          Awaited<ReturnType<typeof client.mimic.protocol.msg.netflow.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgNetflowGetStatsHdrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicProtocolMsgNetflowGetStatsHdrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.protocol.msg.netflow.get.stats_hdr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicProtocolMsgProxyGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/proxy/get/stats_hdr'] as const
}

export function getMimicProtocolMsgProxyGetStatsHdrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicProtocolMsgProxyGetStatsHdrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.protocol.msg.proxy.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicProtocolMsgProxyGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.proxy.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.proxy.get.stats_hdr.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.proxy.get.stats_hdr.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicProtocolMsgProxyGetStatsHdrQueryKey>
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
          Awaited<ReturnType<typeof client.mimic.protocol.msg.proxy.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgProxyGetStatsHdrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicProtocolMsgProxyGetStatsHdrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.protocol.msg.proxy.get.stats_hdr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicProtocolMsgSflowGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/sflow/get/stats_hdr'] as const
}

export function getMimicProtocolMsgSflowGetStatsHdrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicProtocolMsgSflowGetStatsHdrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.protocol.msg.sflow.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicProtocolMsgSflowGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.sflow.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.sflow.get.stats_hdr.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.sflow.get.stats_hdr.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicProtocolMsgSflowGetStatsHdrQueryKey>
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
          Awaited<ReturnType<typeof client.mimic.protocol.msg.sflow.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgSflowGetStatsHdrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicProtocolMsgSflowGetStatsHdrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.protocol.msg.sflow.get.stats_hdr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicProtocolMsgSnmptcpGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/snmptcp/get/stats_hdr'] as const
}

export function getMimicProtocolMsgSnmptcpGetStatsHdrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicProtocolMsgSnmptcpGetStatsHdrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicProtocolMsgSnmptcpGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicProtocolMsgSnmptcpGetStatsHdrQueryKey>
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
          Awaited<ReturnType<typeof client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgSnmptcpGetStatsHdrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicProtocolMsgSnmptcpGetStatsHdrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.protocol.msg.snmptcp.get.stats_hdr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicProtocolMsgSshGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/ssh/get/stats_hdr'] as const
}

export function getMimicProtocolMsgSshGetStatsHdrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicProtocolMsgSshGetStatsHdrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.protocol.msg.ssh.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicProtocolMsgSshGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.ssh.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.ssh.get.stats_hdr.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.ssh.get.stats_hdr.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicProtocolMsgSshGetStatsHdrQueryKey>
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
          Awaited<ReturnType<typeof client.mimic.protocol.msg.ssh.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgSshGetStatsHdrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicProtocolMsgSshGetStatsHdrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.protocol.msg.ssh.get.stats_hdr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicProtocolMsgSyslogGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/syslog/get/stats_hdr'] as const
}

export function getMimicProtocolMsgSyslogGetStatsHdrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicProtocolMsgSyslogGetStatsHdrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.protocol.msg.syslog.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicProtocolMsgSyslogGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.syslog.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.syslog.get.stats_hdr.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.syslog.get.stats_hdr.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicProtocolMsgSyslogGetStatsHdrQueryKey>
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
          Awaited<ReturnType<typeof client.mimic.protocol.msg.syslog.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgSyslogGetStatsHdrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicProtocolMsgSyslogGetStatsHdrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.protocol.msg.syslog.get.stats_hdr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicProtocolMsgTelnetGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/telnet/get/stats_hdr'] as const
}

export function getMimicProtocolMsgTelnetGetStatsHdrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicProtocolMsgTelnetGetStatsHdrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.protocol.msg.telnet.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicProtocolMsgTelnetGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.telnet.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.telnet.get.stats_hdr.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.telnet.get.stats_hdr.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicProtocolMsgTelnetGetStatsHdrQueryKey>
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
          Awaited<ReturnType<typeof client.mimic.protocol.msg.telnet.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgTelnetGetStatsHdrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicProtocolMsgTelnetGetStatsHdrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.protocol.msg.telnet.get.stats_hdr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicProtocolMsgTftpGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/tftp/get/stats_hdr'] as const
}

export function getMimicProtocolMsgTftpGetStatsHdrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicProtocolMsgTftpGetStatsHdrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.protocol.msg.tftp.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicProtocolMsgTftpGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.tftp.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.tftp.get.stats_hdr.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.tftp.get.stats_hdr.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicProtocolMsgTftpGetStatsHdrQueryKey>
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
          Awaited<ReturnType<typeof client.mimic.protocol.msg.tftp.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgTftpGetStatsHdrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicProtocolMsgTftpGetStatsHdrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.protocol.msg.tftp.get.stats_hdr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicProtocolMsgTodGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/tod/get/stats_hdr'] as const
}

export function getMimicProtocolMsgTodGetStatsHdrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicProtocolMsgTodGetStatsHdrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.protocol.msg.tod.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicProtocolMsgTodGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.tod.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.tod.get.stats_hdr.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.tod.get.stats_hdr.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicProtocolMsgTodGetStatsHdrQueryKey>
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
          Awaited<ReturnType<typeof client.mimic.protocol.msg.tod.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgTodGetStatsHdrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicProtocolMsgTodGetStatsHdrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.protocol.msg.tod.get.stats_hdr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicProtocolMsgWebGetStatsHdrQueryKey() {
  return ['mimic', '/mimic/protocol/msg/web/get/stats_hdr'] as const
}

export function getMimicProtocolMsgWebGetStatsHdrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicProtocolMsgWebGetStatsHdrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.protocol.msg.web.get.stats_hdr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicProtocolMsgWebGetStatsHdr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mimic.protocol.msg.web.get.stats_hdr.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.web.get.stats_hdr.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mimic.protocol.msg.web.get.stats_hdr.$get>>
              >
            >
          >,
          ReturnType<typeof getMimicProtocolMsgWebGetStatsHdrQueryKey>
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
          Awaited<ReturnType<typeof client.mimic.protocol.msg.web.get.stats_hdr.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicProtocolMsgWebGetStatsHdrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicProtocolMsgWebGetStatsHdrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.protocol.msg.web.get.stats_hdr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.save.$put>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPutMimicSaveMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutMimicSaveasCfgFileFirstAgentNumLastAgentNum<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicSaveasCfgFileFirstAgentNumLastAgentNumMutationOptions<
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

export function usePutMimicSetLog<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.set.log.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.mimic.set.log.$put>,
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
  const mutationDefaults = getPutMimicSetLogMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutMimicSetNetdev<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.set.netdev.$put>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPutMimicSetNetdevMutationOptions<TError, TOnMutateResult>(
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

export function usePutMimicSetPersistent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.set.persistent.$put>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPutMimicSetPersistentMutationOptions<TError, TOnMutateResult>(
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

export function usePutMimicStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.start.$put>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPutMimicStartMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutMimicStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.stop.$put>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPutMimicStopMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMimicStoreExistsVarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mimic.store.exists)[':var']['$get']>>,
) {
  return ['mimic', '/mimic/store/exists/:var', toValue(args)] as const
}

export function getMimicStoreExistsVarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mimic.store.exists)[':var']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicStoreExistsVarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.store.exists[':var'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicStoreExistsVar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.store.exists)[':var']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mimic.store.exists)[':var']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.store.exists)[':var']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.store.exists)[':var']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMimicStoreExistsVarQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.store.exists)[':var']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicStoreExistsVarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicStoreExistsVarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.store.exists[':var'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicStoreGetVarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mimic.store.get)[':var']['$get']>>,
) {
  return ['mimic', '/mimic/store/get/:var', toValue(args)] as const
}

export function getMimicStoreGetVarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mimic.store.get)[':var']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicStoreGetVarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.store.get[':var'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicStoreGetVar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.store.get)[':var']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mimic.store.get)[':var']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.store.get)[':var']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.store.get)[':var']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMimicStoreGetVarQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.mimic.store.get)[':var']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicStoreGetVarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicStoreGetVarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.store.get[':var'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMimicStoreListQueryKey() {
  return ['mimic', '/mimic/store/list'] as const
}

export function getMimicStoreListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicStoreListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.store.list.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMimicStoreList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.store.list.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.store.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.store.list.$get>>>
            >
          >,
          ReturnType<typeof getMimicStoreListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mimic.store.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMimicStoreListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicStoreListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.store.list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicStoreLreplaceVarIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicStoreLreplaceVarIndexMutationOptions<TError, TOnMutateResult>(
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

export function getMimicStorePersistsVarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mimic.store.persists)[':var']['$get']>>,
) {
  return ['mimic', '/mimic/store/persists/:var', toValue(args)] as const
}

export function getMimicStorePersistsVarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mimic.store.persists)[':var']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMimicStorePersistsVarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.store.persists[':var'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicStorePersistsVar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mimic.store.persists)[':var']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mimic.store.persists)[':var']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.store.persists)[':var']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mimic.store.persists)[':var']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMimicStorePersistsVarQueryKey>
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
          Awaited<ReturnType<(typeof client.mimic.store.persists)[':var']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicStorePersistsVarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMimicStorePersistsVarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.store.persists[':var'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMimicStoreSetVarPersist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicStoreSetVarPersistMutationOptions<TError, TOnMutateResult>(
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

export function usePutMimicStoreUnsetVar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMimicStoreUnsetVarMutationOptions<TError, TOnMutateResult>(
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

export function usePutMimicTerminate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.terminate.$put>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPutMimicTerminateMutationOptions<TError, TOnMutateResult>(
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

export function usePostMimicTimerScriptAddScriptIntervalArg<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMimicTimerScriptAddScriptIntervalArgMutationOptions<
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

export function useDeleteMimicTimerScriptDeleteScriptIntervalArg<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMimicTimerScriptDeleteScriptIntervalArgMutationOptions<
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

export function getMimicTimerScriptListQueryKey() {
  return ['mimic', '/mimic/timer/script/list'] as const
}

export function getMimicTimerScriptListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMimicTimerScriptListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mimic.timer.script.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMimicTimerScriptList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mimic.timer.script.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.timer.script.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mimic.timer.script.list.$get>>>
            >
          >,
          ReturnType<typeof getMimicTimerScriptListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mimic.timer.script.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMimicTimerScriptListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMimicTimerScriptListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mimic.timer.script.list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
