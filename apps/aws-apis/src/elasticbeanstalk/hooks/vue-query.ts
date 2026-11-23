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

export function getActionAbortEnvironmentUpdateKey() {
  return ['#Action=AbortEnvironmentUpdate'] as const
}

export function getActionApplyEnvironmentManagedActionKey() {
  return ['#Action=ApplyEnvironmentManagedAction'] as const
}

export function getActionAssociateEnvironmentOperationsRoleKey() {
  return ['#Action=AssociateEnvironmentOperationsRole'] as const
}

export function getActionCheckDNSAvailabilityKey() {
  return ['#Action=CheckDNSAvailability'] as const
}

export function getActionComposeEnvironmentsKey() {
  return ['#Action=ComposeEnvironments'] as const
}

export function getActionCreateApplicationKey() {
  return ['#Action=CreateApplication'] as const
}

export function getActionCreateApplicationVersionKey() {
  return ['#Action=CreateApplicationVersion'] as const
}

export function getActionCreateConfigurationTemplateKey() {
  return ['#Action=CreateConfigurationTemplate'] as const
}

export function getActionCreateEnvironmentKey() {
  return ['#Action=CreateEnvironment'] as const
}

export function getActionCreatePlatformVersionKey() {
  return ['#Action=CreatePlatformVersion'] as const
}

export function getActionCreateStorageLocationKey() {
  return ['#Action=CreateStorageLocation'] as const
}

export function getActionDeleteApplicationKey() {
  return ['#Action=DeleteApplication'] as const
}

export function getActionDeleteApplicationVersionKey() {
  return ['#Action=DeleteApplicationVersion'] as const
}

export function getActionDeleteConfigurationTemplateKey() {
  return ['#Action=DeleteConfigurationTemplate'] as const
}

export function getActionDeleteEnvironmentConfigurationKey() {
  return ['#Action=DeleteEnvironmentConfiguration'] as const
}

export function getActionDeletePlatformVersionKey() {
  return ['#Action=DeletePlatformVersion'] as const
}

export function getActionDescribeAccountAttributesKey() {
  return ['#Action=DescribeAccountAttributes'] as const
}

export function getActionDescribeApplicationVersionsKey() {
  return ['#Action=DescribeApplicationVersions'] as const
}

export function getActionDescribeApplicationsKey() {
  return ['#Action=DescribeApplications'] as const
}

export function getActionDescribeConfigurationOptionsKey() {
  return ['#Action=DescribeConfigurationOptions'] as const
}

export function getActionDescribeConfigurationSettingsKey() {
  return ['#Action=DescribeConfigurationSettings'] as const
}

export function getActionDescribeEnvironmentHealthKey() {
  return ['#Action=DescribeEnvironmentHealth'] as const
}

export function getActionDescribeEnvironmentManagedActionHistoryKey() {
  return ['#Action=DescribeEnvironmentManagedActionHistory'] as const
}

export function getActionDescribeEnvironmentManagedActionsKey() {
  return ['#Action=DescribeEnvironmentManagedActions'] as const
}

export function getActionDescribeEnvironmentResourcesKey() {
  return ['#Action=DescribeEnvironmentResources'] as const
}

export function getActionDescribeEnvironmentsKey() {
  return ['#Action=DescribeEnvironments'] as const
}

export function getActionDescribeEventsKey() {
  return ['#Action=DescribeEvents'] as const
}

export function getActionDescribeInstancesHealthKey() {
  return ['#Action=DescribeInstancesHealth'] as const
}

export function getActionDescribePlatformVersionKey() {
  return ['#Action=DescribePlatformVersion'] as const
}

export function getActionDisassociateEnvironmentOperationsRoleKey() {
  return ['#Action=DisassociateEnvironmentOperationsRole'] as const
}

export function getActionListAvailableSolutionStacksKey() {
  return ['#Action=ListAvailableSolutionStacks'] as const
}

export function getActionListPlatformBranchesKey() {
  return ['#Action=ListPlatformBranches'] as const
}

export function getActionListPlatformVersionsKey() {
  return ['#Action=ListPlatformVersions'] as const
}

export function getActionListTagsForResourceKey() {
  return ['#Action=ListTagsForResource'] as const
}

export function getActionRebuildEnvironmentKey() {
  return ['#Action=RebuildEnvironment'] as const
}

export function getActionRequestEnvironmentInfoKey() {
  return ['#Action=RequestEnvironmentInfo'] as const
}

export function getActionRestartAppServerKey() {
  return ['#Action=RestartAppServer'] as const
}

export function getActionRetrieveEnvironmentInfoKey() {
  return ['#Action=RetrieveEnvironmentInfo'] as const
}

export function getActionSwapEnvironmentCNAMEsKey() {
  return ['#Action=SwapEnvironmentCNAMEs'] as const
}

export function getActionTerminateEnvironmentKey() {
  return ['#Action=TerminateEnvironment'] as const
}

export function getActionUpdateApplicationKey() {
  return ['#Action=UpdateApplication'] as const
}

export function getActionUpdateApplicationResourceLifecycleKey() {
  return ['#Action=UpdateApplicationResourceLifecycle'] as const
}

export function getActionUpdateApplicationVersionKey() {
  return ['#Action=UpdateApplicationVersion'] as const
}

export function getActionUpdateConfigurationTemplateKey() {
  return ['#Action=UpdateConfigurationTemplate'] as const
}

export function getActionUpdateEnvironmentKey() {
  return ['#Action=UpdateEnvironment'] as const
}

export function getActionUpdateTagsForResourceKey() {
  return ['#Action=UpdateTagsForResource'] as const
}

export function getActionValidateConfigurationSettingsKey() {
  return ['#Action=ValidateConfigurationSettings'] as const
}

export function getActionAbortEnvironmentUpdateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AbortEnvironmentUpdate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AbortEnvironmentUpdate', '/#Action=AbortEnvironmentUpdate', keyArgs] as const
}

export function getActionAbortEnvironmentUpdateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AbortEnvironmentUpdate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAbortEnvironmentUpdateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AbortEnvironmentUpdate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAbortEnvironmentUpdate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AbortEnvironmentUpdate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AbortEnvironmentUpdate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AbortEnvironmentUpdate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AbortEnvironmentUpdate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAbortEnvironmentUpdateQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=AbortEnvironmentUpdate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAbortEnvironmentUpdateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAbortEnvironmentUpdateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AbortEnvironmentUpdate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAbortEnvironmentUpdateMutationKey() {
  return ['#Action=AbortEnvironmentUpdate', '/#Action=AbortEnvironmentUpdate', 'POST'] as const
}

export function getPostActionAbortEnvironmentUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AbortEnvironmentUpdate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AbortEnvironmentUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAbortEnvironmentUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AbortEnvironmentUpdate']['$post']>,
    ) {
      return parseResponse(client['#Action=AbortEnvironmentUpdate'].$post(args, options))
    },
  })
}

export function usePostActionAbortEnvironmentUpdate<
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
                Awaited<ReturnType<(typeof client)['#Action=AbortEnvironmentUpdate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AbortEnvironmentUpdate']['$post']>,
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
  const mutationDefaults = getPostActionAbortEnvironmentUpdateMutationOptions<
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

export function getActionApplyEnvironmentManagedActionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ApplyEnvironmentManagedAction',
    '/#Action=ApplyEnvironmentManagedAction',
    keyArgs,
  ] as const
}

export function getActionApplyEnvironmentManagedActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionApplyEnvironmentManagedActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ApplyEnvironmentManagedAction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionApplyEnvironmentManagedAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$get']>
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
                  ReturnType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionApplyEnvironmentManagedActionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionApplyEnvironmentManagedActionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionApplyEnvironmentManagedActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ApplyEnvironmentManagedAction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionApplyEnvironmentManagedActionMutationKey() {
  return [
    '#Action=ApplyEnvironmentManagedAction',
    '/#Action=ApplyEnvironmentManagedAction',
    'POST',
  ] as const
}

export function getPostActionApplyEnvironmentManagedActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionApplyEnvironmentManagedActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$post']>,
    ) {
      return parseResponse(client['#Action=ApplyEnvironmentManagedAction'].$post(args, options))
    },
  })
}

export function usePostActionApplyEnvironmentManagedAction<
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
                  ReturnType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$post']>,
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
  const mutationDefaults = getPostActionApplyEnvironmentManagedActionMutationOptions<
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

export function getActionAssociateEnvironmentOperationsRoleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=AssociateEnvironmentOperationsRole',
    '/#Action=AssociateEnvironmentOperationsRole',
    keyArgs,
  ] as const
}

export function getActionAssociateEnvironmentOperationsRoleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAssociateEnvironmentOperationsRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AssociateEnvironmentOperationsRole'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAssociateEnvironmentOperationsRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$get']>
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
                  ReturnType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionAssociateEnvironmentOperationsRoleQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAssociateEnvironmentOperationsRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAssociateEnvironmentOperationsRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AssociateEnvironmentOperationsRole'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAssociateEnvironmentOperationsRoleMutationKey() {
  return [
    '#Action=AssociateEnvironmentOperationsRole',
    '/#Action=AssociateEnvironmentOperationsRole',
    'POST',
  ] as const
}

export function getPostActionAssociateEnvironmentOperationsRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAssociateEnvironmentOperationsRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=AssociateEnvironmentOperationsRole']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=AssociateEnvironmentOperationsRole'].$post(args, options),
      )
    },
  })
}

export function usePostActionAssociateEnvironmentOperationsRole<
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
                  ReturnType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$post']>,
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
  const mutationDefaults = getPostActionAssociateEnvironmentOperationsRoleMutationOptions<
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

export function getActionCheckDNSAvailabilityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CheckDNSAvailability']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CheckDNSAvailability', '/#Action=CheckDNSAvailability', keyArgs] as const
}

export function getActionCheckDNSAvailabilityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CheckDNSAvailability']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCheckDNSAvailabilityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CheckDNSAvailability'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCheckDNSAvailability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CheckDNSAvailability']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CheckDNSAvailability']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CheckDNSAvailability']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CheckDNSAvailability']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCheckDNSAvailabilityQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CheckDNSAvailability']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCheckDNSAvailabilityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCheckDNSAvailabilityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CheckDNSAvailability'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCheckDNSAvailabilityMutationKey() {
  return ['#Action=CheckDNSAvailability', '/#Action=CheckDNSAvailability', 'POST'] as const
}

export function getPostActionCheckDNSAvailabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CheckDNSAvailability']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CheckDNSAvailability']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCheckDNSAvailabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CheckDNSAvailability']['$post']>,
    ) {
      return parseResponse(client['#Action=CheckDNSAvailability'].$post(args, options))
    },
  })
}

export function usePostActionCheckDNSAvailability<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CheckDNSAvailability']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CheckDNSAvailability']['$post']>,
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
  const mutationDefaults = getPostActionCheckDNSAvailabilityMutationOptions<
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

export function getActionComposeEnvironmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ComposeEnvironments']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ComposeEnvironments', '/#Action=ComposeEnvironments', keyArgs] as const
}

export function getActionComposeEnvironmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ComposeEnvironments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionComposeEnvironmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ComposeEnvironments'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionComposeEnvironments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ComposeEnvironments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ComposeEnvironments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ComposeEnvironments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ComposeEnvironments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionComposeEnvironmentsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ComposeEnvironments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionComposeEnvironmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionComposeEnvironmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ComposeEnvironments'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionComposeEnvironmentsMutationKey() {
  return ['#Action=ComposeEnvironments', '/#Action=ComposeEnvironments', 'POST'] as const
}

export function getPostActionComposeEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ComposeEnvironments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ComposeEnvironments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionComposeEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ComposeEnvironments']['$post']>,
    ) {
      return parseResponse(client['#Action=ComposeEnvironments'].$post(args, options))
    },
  })
}

export function usePostActionComposeEnvironments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ComposeEnvironments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ComposeEnvironments']['$post']>,
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
  const mutationDefaults = getPostActionComposeEnvironmentsMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateApplicationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateApplication']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateApplication', '/#Action=CreateApplication', keyArgs] as const
}

export function getActionCreateApplicationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateApplication']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateApplicationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateApplication'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateApplication']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateApplication']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateApplication']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateApplicationQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateApplication']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateApplicationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateApplicationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateApplication'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateApplicationMutationKey() {
  return ['#Action=CreateApplication', '/#Action=CreateApplication', 'POST'] as const
}

export function getPostActionCreateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateApplication']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateApplication']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateApplication']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateApplication'].$post(args, options))
    },
  })
}

export function usePostActionCreateApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateApplication']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateApplication']['$post']>,
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
  const mutationDefaults = getPostActionCreateApplicationMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateApplicationVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateApplicationVersion']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateApplicationVersion', '/#Action=CreateApplicationVersion', keyArgs] as const
}

export function getActionCreateApplicationVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateApplicationVersion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateApplicationVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateApplicationVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateApplicationVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateApplicationVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateApplicationVersion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateApplicationVersion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateApplicationVersion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateApplicationVersionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateApplicationVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateApplicationVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateApplicationVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateApplicationVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateApplicationVersionMutationKey() {
  return ['#Action=CreateApplicationVersion', '/#Action=CreateApplicationVersion', 'POST'] as const
}

export function getPostActionCreateApplicationVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateApplicationVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateApplicationVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateApplicationVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateApplicationVersion']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateApplicationVersion'].$post(args, options))
    },
  })
}

export function usePostActionCreateApplicationVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateApplicationVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateApplicationVersion']['$post']>,
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
  const mutationDefaults = getPostActionCreateApplicationVersionMutationOptions<
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

export function getActionCreateConfigurationTemplateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateConfigurationTemplate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateConfigurationTemplate',
    '/#Action=CreateConfigurationTemplate',
    keyArgs,
  ] as const
}

export function getActionCreateConfigurationTemplateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateConfigurationTemplate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateConfigurationTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateConfigurationTemplate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateConfigurationTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationTemplate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateConfigurationTemplate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationTemplate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationTemplate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateConfigurationTemplateQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationTemplate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateConfigurationTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateConfigurationTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateConfigurationTemplate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateConfigurationTemplateMutationKey() {
  return [
    '#Action=CreateConfigurationTemplate',
    '/#Action=CreateConfigurationTemplate',
    'POST',
  ] as const
}

export function getPostActionCreateConfigurationTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationTemplate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateConfigurationTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateConfigurationTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateConfigurationTemplate']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateConfigurationTemplate'].$post(args, options))
    },
  })
}

export function usePostActionCreateConfigurationTemplate<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationTemplate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateConfigurationTemplate']['$post']>,
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
  const mutationDefaults = getPostActionCreateConfigurationTemplateMutationOptions<
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

export function getActionCreateEnvironmentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateEnvironment']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateEnvironment', '/#Action=CreateEnvironment', keyArgs] as const
}

export function getActionCreateEnvironmentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateEnvironment']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateEnvironmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateEnvironment'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateEnvironment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateEnvironment']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateEnvironment']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateEnvironment']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateEnvironmentQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateEnvironment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateEnvironmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateEnvironmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateEnvironment'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateEnvironmentMutationKey() {
  return ['#Action=CreateEnvironment', '/#Action=CreateEnvironment', 'POST'] as const
}

export function getPostActionCreateEnvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateEnvironment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateEnvironment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateEnvironmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateEnvironment']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateEnvironment'].$post(args, options))
    },
  })
}

export function usePostActionCreateEnvironment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateEnvironment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateEnvironment']['$post']>,
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
  const mutationDefaults = getPostActionCreateEnvironmentMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreatePlatformVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreatePlatformVersion']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreatePlatformVersion', '/#Action=CreatePlatformVersion', keyArgs] as const
}

export function getActionCreatePlatformVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreatePlatformVersion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreatePlatformVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreatePlatformVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreatePlatformVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreatePlatformVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreatePlatformVersion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreatePlatformVersion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreatePlatformVersion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreatePlatformVersionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreatePlatformVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreatePlatformVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreatePlatformVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreatePlatformVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreatePlatformVersionMutationKey() {
  return ['#Action=CreatePlatformVersion', '/#Action=CreatePlatformVersion', 'POST'] as const
}

export function getPostActionCreatePlatformVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreatePlatformVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreatePlatformVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreatePlatformVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreatePlatformVersion']['$post']>,
    ) {
      return parseResponse(client['#Action=CreatePlatformVersion'].$post(args, options))
    },
  })
}

export function usePostActionCreatePlatformVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=CreatePlatformVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreatePlatformVersion']['$post']>,
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
  const mutationDefaults = getPostActionCreatePlatformVersionMutationOptions<
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

export function getActionCreateStorageLocationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateStorageLocation']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateStorageLocation', '/#Action=CreateStorageLocation', keyArgs] as const
}

export function getActionCreateStorageLocationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateStorageLocation']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateStorageLocationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateStorageLocation'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateStorageLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateStorageLocation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateStorageLocation']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateStorageLocation']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateStorageLocation']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateStorageLocationQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateStorageLocation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateStorageLocationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateStorageLocationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateStorageLocation'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateStorageLocationMutationKey() {
  return ['#Action=CreateStorageLocation', '/#Action=CreateStorageLocation', 'POST'] as const
}

export function getPostActionCreateStorageLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateStorageLocation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateStorageLocation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateStorageLocationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateStorageLocation']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateStorageLocation'].$post(args, options))
    },
  })
}

export function usePostActionCreateStorageLocation<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateStorageLocation']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateStorageLocation']['$post']>,
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
  const mutationDefaults = getPostActionCreateStorageLocationMutationOptions<
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

export function getActionDeleteApplicationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteApplication']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteApplication', '/#Action=DeleteApplication', keyArgs] as const
}

export function getActionDeleteApplicationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteApplication']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteApplicationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteApplication'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteApplication']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteApplication']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteApplication']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteApplicationQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteApplication']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteApplicationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteApplicationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteApplication'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteApplicationMutationKey() {
  return ['#Action=DeleteApplication', '/#Action=DeleteApplication', 'POST'] as const
}

export function getPostActionDeleteApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteApplication']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteApplication']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteApplication']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteApplication'].$post(args, options))
    },
  })
}

export function usePostActionDeleteApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteApplication']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteApplication']['$post']>,
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
  const mutationDefaults = getPostActionDeleteApplicationMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteApplicationVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteApplicationVersion']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteApplicationVersion', '/#Action=DeleteApplicationVersion', keyArgs] as const
}

export function getActionDeleteApplicationVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteApplicationVersion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteApplicationVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteApplicationVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteApplicationVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteApplicationVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteApplicationVersion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteApplicationVersion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteApplicationVersion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteApplicationVersionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteApplicationVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteApplicationVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteApplicationVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteApplicationVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteApplicationVersionMutationKey() {
  return ['#Action=DeleteApplicationVersion', '/#Action=DeleteApplicationVersion', 'POST'] as const
}

export function getPostActionDeleteApplicationVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteApplicationVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteApplicationVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteApplicationVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteApplicationVersion']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteApplicationVersion'].$post(args, options))
    },
  })
}

export function usePostActionDeleteApplicationVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteApplicationVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteApplicationVersion']['$post']>,
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
  const mutationDefaults = getPostActionDeleteApplicationVersionMutationOptions<
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

export function getActionDeleteConfigurationTemplateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteConfigurationTemplate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteConfigurationTemplate',
    '/#Action=DeleteConfigurationTemplate',
    keyArgs,
  ] as const
}

export function getActionDeleteConfigurationTemplateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteConfigurationTemplate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteConfigurationTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteConfigurationTemplate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteConfigurationTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationTemplate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteConfigurationTemplate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationTemplate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationTemplate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteConfigurationTemplateQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationTemplate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteConfigurationTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteConfigurationTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteConfigurationTemplate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteConfigurationTemplateMutationKey() {
  return [
    '#Action=DeleteConfigurationTemplate',
    '/#Action=DeleteConfigurationTemplate',
    'POST',
  ] as const
}

export function getPostActionDeleteConfigurationTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationTemplate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteConfigurationTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteConfigurationTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteConfigurationTemplate']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteConfigurationTemplate'].$post(args, options))
    },
  })
}

export function usePostActionDeleteConfigurationTemplate<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationTemplate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteConfigurationTemplate']['$post']>,
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
  const mutationDefaults = getPostActionDeleteConfigurationTemplateMutationOptions<
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

export function getActionDeleteEnvironmentConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteEnvironmentConfiguration',
    '/#Action=DeleteEnvironmentConfiguration',
    keyArgs,
  ] as const
}

export function getActionDeleteEnvironmentConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteEnvironmentConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteEnvironmentConfiguration'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteEnvironmentConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$get']>
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
                  ReturnType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDeleteEnvironmentConfigurationQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteEnvironmentConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteEnvironmentConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteEnvironmentConfiguration'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteEnvironmentConfigurationMutationKey() {
  return [
    '#Action=DeleteEnvironmentConfiguration',
    '/#Action=DeleteEnvironmentConfiguration',
    'POST',
  ] as const
}

export function getPostActionDeleteEnvironmentConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteEnvironmentConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteEnvironmentConfiguration'].$post(args, options))
    },
  })
}

export function usePostActionDeleteEnvironmentConfiguration<
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
                  ReturnType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$post']>,
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
  const mutationDefaults = getPostActionDeleteEnvironmentConfigurationMutationOptions<
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

export function getActionDeletePlatformVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeletePlatformVersion']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeletePlatformVersion', '/#Action=DeletePlatformVersion', keyArgs] as const
}

export function getActionDeletePlatformVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeletePlatformVersion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeletePlatformVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeletePlatformVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeletePlatformVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeletePlatformVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeletePlatformVersion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeletePlatformVersion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeletePlatformVersion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeletePlatformVersionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeletePlatformVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeletePlatformVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeletePlatformVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeletePlatformVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeletePlatformVersionMutationKey() {
  return ['#Action=DeletePlatformVersion', '/#Action=DeletePlatformVersion', 'POST'] as const
}

export function getPostActionDeletePlatformVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeletePlatformVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeletePlatformVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeletePlatformVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeletePlatformVersion']['$post']>,
    ) {
      return parseResponse(client['#Action=DeletePlatformVersion'].$post(args, options))
    },
  })
}

export function usePostActionDeletePlatformVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=DeletePlatformVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeletePlatformVersion']['$post']>,
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
  const mutationDefaults = getPostActionDeletePlatformVersionMutationOptions<
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

export function getActionDescribeAccountAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeAccountAttributes',
    '/#Action=DescribeAccountAttributes',
    keyArgs,
  ] as const
}

export function getActionDescribeAccountAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeAccountAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeAccountAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeAccountAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeAccountAttributesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAccountAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeAccountAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeAccountAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeAccountAttributesMutationKey() {
  return [
    '#Action=DescribeAccountAttributes',
    '/#Action=DescribeAccountAttributes',
    'POST',
  ] as const
}

export function getPostActionDescribeAccountAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAccountAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeAccountAttributes'].$post(args, options))
    },
  })
}

export function usePostActionDescribeAccountAttributes<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>,
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
  const mutationDefaults = getPostActionDescribeAccountAttributesMutationOptions<
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

export function getActionDescribeApplicationVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeApplicationVersions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeApplicationVersions',
    '/#Action=DescribeApplicationVersions',
    keyArgs,
  ] as const
}

export function getActionDescribeApplicationVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeApplicationVersions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeApplicationVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeApplicationVersions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeApplicationVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeApplicationVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeApplicationVersions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeApplicationVersions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeApplicationVersions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeApplicationVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeApplicationVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeApplicationVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeApplicationVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeApplicationVersions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeApplicationVersionsMutationKey() {
  return [
    '#Action=DescribeApplicationVersions',
    '/#Action=DescribeApplicationVersions',
    'POST',
  ] as const
}

export function getPostActionDescribeApplicationVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeApplicationVersions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeApplicationVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeApplicationVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeApplicationVersions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeApplicationVersions'].$post(args, options))
    },
  })
}

export function usePostActionDescribeApplicationVersions<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeApplicationVersions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeApplicationVersions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeApplicationVersionsMutationOptions<
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

export function getActionDescribeApplicationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeApplications']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeApplications', '/#Action=DescribeApplications', keyArgs] as const
}

export function getActionDescribeApplicationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeApplications']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeApplications'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeApplications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeApplications']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeApplications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeApplications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeApplicationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeApplications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeApplications'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeApplicationsMutationKey() {
  return ['#Action=DescribeApplications', '/#Action=DescribeApplications', 'POST'] as const
}

export function getPostActionDescribeApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeApplications']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeApplications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeApplications']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeApplications'].$post(args, options))
    },
  })
}

export function usePostActionDescribeApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeApplications']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeApplications']['$post']>,
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
  const mutationDefaults = getPostActionDescribeApplicationsMutationOptions<
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

export function getActionDescribeConfigurationOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeConfigurationOptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeConfigurationOptions',
    '/#Action=DescribeConfigurationOptions',
    keyArgs,
  ] as const
}

export function getActionDescribeConfigurationOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeConfigurationOptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeConfigurationOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeConfigurationOptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeConfigurationOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeConfigurationOptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationOptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationOptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeConfigurationOptionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeConfigurationOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeConfigurationOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeConfigurationOptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeConfigurationOptionsMutationKey() {
  return [
    '#Action=DescribeConfigurationOptions',
    '/#Action=DescribeConfigurationOptions',
    'POST',
  ] as const
}

export function getPostActionDescribeConfigurationOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationOptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeConfigurationOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeConfigurationOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeConfigurationOptions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeConfigurationOptions'].$post(args, options))
    },
  })
}

export function usePostActionDescribeConfigurationOptions<
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
                  ReturnType<(typeof client)['#Action=DescribeConfigurationOptions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeConfigurationOptions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeConfigurationOptionsMutationOptions<
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

export function getActionDescribeConfigurationSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeConfigurationSettings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeConfigurationSettings',
    '/#Action=DescribeConfigurationSettings',
    keyArgs,
  ] as const
}

export function getActionDescribeConfigurationSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeConfigurationSettings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeConfigurationSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeConfigurationSettings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeConfigurationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeConfigurationSettings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeConfigurationSettings']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeConfigurationSettings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeConfigurationSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeConfigurationSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeConfigurationSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeConfigurationSettings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeConfigurationSettingsMutationKey() {
  return [
    '#Action=DescribeConfigurationSettings',
    '/#Action=DescribeConfigurationSettings',
    'POST',
  ] as const
}

export function getPostActionDescribeConfigurationSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSettings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeConfigurationSettings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeConfigurationSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeConfigurationSettings']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeConfigurationSettings'].$post(args, options))
    },
  })
}

export function usePostActionDescribeConfigurationSettings<
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
                  ReturnType<(typeof client)['#Action=DescribeConfigurationSettings']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeConfigurationSettings']['$post']>,
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
  const mutationDefaults = getPostActionDescribeConfigurationSettingsMutationOptions<
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

export function getActionDescribeEnvironmentHealthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentHealth']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeEnvironmentHealth',
    '/#Action=DescribeEnvironmentHealth',
    keyArgs,
  ] as const
}

export function getActionDescribeEnvironmentHealthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentHealth']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEnvironmentHealthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEnvironmentHealth'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeEnvironmentHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentHealth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentHealth']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentHealth']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentHealth']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeEnvironmentHealthQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentHealth']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEnvironmentHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEnvironmentHealthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEnvironmentHealth'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeEnvironmentHealthMutationKey() {
  return [
    '#Action=DescribeEnvironmentHealth',
    '/#Action=DescribeEnvironmentHealth',
    'POST',
  ] as const
}

export function getPostActionDescribeEnvironmentHealthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentHealth']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentHealth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEnvironmentHealthMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeEnvironmentHealth']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeEnvironmentHealth'].$post(args, options))
    },
  })
}

export function usePostActionDescribeEnvironmentHealth<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentHealth']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEnvironmentHealth']['$post']>,
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
  const mutationDefaults = getPostActionDescribeEnvironmentHealthMutationOptions<
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

export function getActionDescribeEnvironmentManagedActionHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeEnvironmentManagedActionHistory',
    '/#Action=DescribeEnvironmentManagedActionHistory',
    keyArgs,
  ] as const
}

export function getActionDescribeEnvironmentManagedActionHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEnvironmentManagedActionHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEnvironmentManagedActionHistory'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeEnvironmentManagedActionHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$get']>
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
                    (typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$get']
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
                    (typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeEnvironmentManagedActionHistoryQueryKey>
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
            ReturnType<(typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEnvironmentManagedActionHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEnvironmentManagedActionHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEnvironmentManagedActionHistory'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeEnvironmentManagedActionHistoryMutationKey() {
  return [
    '#Action=DescribeEnvironmentManagedActionHistory',
    '/#Action=DescribeEnvironmentManagedActionHistory',
    'POST',
  ] as const
}

export function getPostActionDescribeEnvironmentManagedActionHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEnvironmentManagedActionHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DescribeEnvironmentManagedActionHistory'].$post(args, options),
      )
    },
  })
}

export function usePostActionDescribeEnvironmentManagedActionHistory<
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
                    (typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$post']
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
  const mutationDefaults = getPostActionDescribeEnvironmentManagedActionHistoryMutationOptions<
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

export function getActionDescribeEnvironmentManagedActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeEnvironmentManagedActions',
    '/#Action=DescribeEnvironmentManagedActions',
    keyArgs,
  ] as const
}

export function getActionDescribeEnvironmentManagedActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEnvironmentManagedActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEnvironmentManagedActions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeEnvironmentManagedActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeEnvironmentManagedActionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEnvironmentManagedActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEnvironmentManagedActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEnvironmentManagedActions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeEnvironmentManagedActionsMutationKey() {
  return [
    '#Action=DescribeEnvironmentManagedActions',
    '/#Action=DescribeEnvironmentManagedActions',
    'POST',
  ] as const
}

export function getPostActionDescribeEnvironmentManagedActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEnvironmentManagedActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeEnvironmentManagedActions'].$post(args, options))
    },
  })
}

export function usePostActionDescribeEnvironmentManagedActions<
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
                  ReturnType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeEnvironmentManagedActionsMutationOptions<
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

export function getActionDescribeEnvironmentResourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentResources']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeEnvironmentResources',
    '/#Action=DescribeEnvironmentResources',
    keyArgs,
  ] as const
}

export function getActionDescribeEnvironmentResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentResources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEnvironmentResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEnvironmentResources'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeEnvironmentResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentResources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentResources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentResources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentResources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeEnvironmentResourcesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentResources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEnvironmentResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEnvironmentResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEnvironmentResources'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeEnvironmentResourcesMutationKey() {
  return [
    '#Action=DescribeEnvironmentResources',
    '/#Action=DescribeEnvironmentResources',
    'POST',
  ] as const
}

export function getPostActionDescribeEnvironmentResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentResources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEnvironmentResources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEnvironmentResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeEnvironmentResources']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeEnvironmentResources'].$post(args, options))
    },
  })
}

export function usePostActionDescribeEnvironmentResources<
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
                  ReturnType<(typeof client)['#Action=DescribeEnvironmentResources']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEnvironmentResources']['$post']>,
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
  const mutationDefaults = getPostActionDescribeEnvironmentResourcesMutationOptions<
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

export function getActionDescribeEnvironmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeEnvironments']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeEnvironments', '/#Action=DescribeEnvironments', keyArgs] as const
}

export function getActionDescribeEnvironmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeEnvironments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEnvironmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEnvironments'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeEnvironments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeEnvironments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeEnvironmentsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEnvironmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEnvironmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEnvironments'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeEnvironmentsMutationKey() {
  return ['#Action=DescribeEnvironments', '/#Action=DescribeEnvironments', 'POST'] as const
}

export function getPostActionDescribeEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEnvironments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeEnvironments']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeEnvironments'].$post(args, options))
    },
  })
}

export function usePostActionDescribeEnvironments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEnvironments']['$post']>,
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
  const mutationDefaults = getPostActionDescribeEnvironmentsMutationOptions<
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

export function getActionDescribeEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeEvents', '/#Action=DescribeEvents', keyArgs] as const
}

export function getActionDescribeEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEvents'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEvents'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeEventsMutationKey() {
  return ['#Action=DescribeEvents', '/#Action=DescribeEvents', 'POST'] as const
}

export function getPostActionDescribeEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEventsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']>) {
      return parseResponse(client['#Action=DescribeEvents'].$post(args, options))
    },
  })
}

export function usePostActionDescribeEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']>,
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
  const mutationDefaults = getPostActionDescribeEventsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeInstancesHealthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeInstancesHealth']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeInstancesHealth', '/#Action=DescribeInstancesHealth', keyArgs] as const
}

export function getActionDescribeInstancesHealthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeInstancesHealth']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeInstancesHealthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeInstancesHealth'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeInstancesHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeInstancesHealth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeInstancesHealth']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeInstancesHealth']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeInstancesHealth']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeInstancesHealthQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeInstancesHealth']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeInstancesHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeInstancesHealthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeInstancesHealth'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeInstancesHealthMutationKey() {
  return ['#Action=DescribeInstancesHealth', '/#Action=DescribeInstancesHealth', 'POST'] as const
}

export function getPostActionDescribeInstancesHealthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeInstancesHealth']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeInstancesHealth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeInstancesHealthMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeInstancesHealth']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeInstancesHealth'].$post(args, options))
    },
  })
}

export function usePostActionDescribeInstancesHealth<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeInstancesHealth']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeInstancesHealth']['$post']>,
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
  const mutationDefaults = getPostActionDescribeInstancesHealthMutationOptions<
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

export function getActionDescribePlatformVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribePlatformVersion']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribePlatformVersion', '/#Action=DescribePlatformVersion', keyArgs] as const
}

export function getActionDescribePlatformVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribePlatformVersion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribePlatformVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribePlatformVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribePlatformVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribePlatformVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribePlatformVersion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribePlatformVersion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribePlatformVersion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribePlatformVersionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribePlatformVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribePlatformVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribePlatformVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribePlatformVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribePlatformVersionMutationKey() {
  return ['#Action=DescribePlatformVersion', '/#Action=DescribePlatformVersion', 'POST'] as const
}

export function getPostActionDescribePlatformVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribePlatformVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribePlatformVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribePlatformVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribePlatformVersion']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribePlatformVersion'].$post(args, options))
    },
  })
}

export function usePostActionDescribePlatformVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribePlatformVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribePlatformVersion']['$post']>,
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
  const mutationDefaults = getPostActionDescribePlatformVersionMutationOptions<
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

export function getActionDisassociateEnvironmentOperationsRoleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DisassociateEnvironmentOperationsRole',
    '/#Action=DisassociateEnvironmentOperationsRole',
    keyArgs,
  ] as const
}

export function getActionDisassociateEnvironmentOperationsRoleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDisassociateEnvironmentOperationsRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DisassociateEnvironmentOperationsRole'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDisassociateEnvironmentOperationsRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$get']>
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
                    (typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$get']
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
                    (typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionDisassociateEnvironmentOperationsRoleQueryKey>
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
            ReturnType<(typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDisassociateEnvironmentOperationsRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDisassociateEnvironmentOperationsRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DisassociateEnvironmentOperationsRole'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDisassociateEnvironmentOperationsRoleMutationKey() {
  return [
    '#Action=DisassociateEnvironmentOperationsRole',
    '/#Action=DisassociateEnvironmentOperationsRole',
    'POST',
  ] as const
}

export function getPostActionDisassociateEnvironmentOperationsRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDisassociateEnvironmentOperationsRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DisassociateEnvironmentOperationsRole'].$post(args, options),
      )
    },
  })
}

export function usePostActionDisassociateEnvironmentOperationsRole<
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
                    (typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$post']
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
  const mutationDefaults = getPostActionDisassociateEnvironmentOperationsRoleMutationOptions<
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

export function getActionListAvailableSolutionStacksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListAvailableSolutionStacks']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ListAvailableSolutionStacks',
    '/#Action=ListAvailableSolutionStacks',
    keyArgs,
  ] as const
}

export function getActionListAvailableSolutionStacksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListAvailableSolutionStacks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListAvailableSolutionStacksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListAvailableSolutionStacks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListAvailableSolutionStacks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListAvailableSolutionStacks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListAvailableSolutionStacks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAvailableSolutionStacks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListAvailableSolutionStacks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListAvailableSolutionStacksQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ListAvailableSolutionStacks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListAvailableSolutionStacksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListAvailableSolutionStacksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListAvailableSolutionStacks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListAvailableSolutionStacksMutationKey() {
  return [
    '#Action=ListAvailableSolutionStacks',
    '/#Action=ListAvailableSolutionStacks',
    'POST',
  ] as const
}

export function getPostActionListAvailableSolutionStacksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAvailableSolutionStacks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListAvailableSolutionStacks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListAvailableSolutionStacksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListAvailableSolutionStacks']['$post']>,
    ) {
      return parseResponse(client['#Action=ListAvailableSolutionStacks'].$post(args, options))
    },
  })
}

export function usePostActionListAvailableSolutionStacks<
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
                Awaited<ReturnType<(typeof client)['#Action=ListAvailableSolutionStacks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListAvailableSolutionStacks']['$post']>,
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
  const mutationDefaults = getPostActionListAvailableSolutionStacksMutationOptions<
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

export function getActionListPlatformBranchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListPlatformBranches']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListPlatformBranches', '/#Action=ListPlatformBranches', keyArgs] as const
}

export function getActionListPlatformBranchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListPlatformBranches']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListPlatformBranchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListPlatformBranches'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListPlatformBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListPlatformBranches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListPlatformBranches']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListPlatformBranches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListPlatformBranches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListPlatformBranchesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ListPlatformBranches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListPlatformBranchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListPlatformBranchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListPlatformBranches'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListPlatformBranchesMutationKey() {
  return ['#Action=ListPlatformBranches', '/#Action=ListPlatformBranches', 'POST'] as const
}

export function getPostActionListPlatformBranchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPlatformBranches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListPlatformBranches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListPlatformBranchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListPlatformBranches']['$post']>,
    ) {
      return parseResponse(client['#Action=ListPlatformBranches'].$post(args, options))
    },
  })
}

export function usePostActionListPlatformBranches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListPlatformBranches']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListPlatformBranches']['$post']>,
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
  const mutationDefaults = getPostActionListPlatformBranchesMutationOptions<
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

export function getActionListPlatformVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListPlatformVersions']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListPlatformVersions', '/#Action=ListPlatformVersions', keyArgs] as const
}

export function getActionListPlatformVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListPlatformVersions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListPlatformVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListPlatformVersions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListPlatformVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListPlatformVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListPlatformVersions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListPlatformVersions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListPlatformVersions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListPlatformVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ListPlatformVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListPlatformVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListPlatformVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListPlatformVersions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListPlatformVersionsMutationKey() {
  return ['#Action=ListPlatformVersions', '/#Action=ListPlatformVersions', 'POST'] as const
}

export function getPostActionListPlatformVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPlatformVersions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListPlatformVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListPlatformVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListPlatformVersions']['$post']>,
    ) {
      return parseResponse(client['#Action=ListPlatformVersions'].$post(args, options))
    },
  })
}

export function usePostActionListPlatformVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListPlatformVersions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListPlatformVersions']['$post']>,
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
  const mutationDefaults = getPostActionListPlatformVersionsMutationOptions<
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

export function getActionListTagsForResourceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', keyArgs] as const
}

export function getActionListTagsForResourceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListTagsForResourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListTagsForResource'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListTagsForResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListTagsForResourceQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListTagsForResourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListTagsForResourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListTagsForResource'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListTagsForResourceMutationKey() {
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', 'POST'] as const
}

export function getPostActionListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
    ) {
      return parseResponse(client['#Action=ListTagsForResource'].$post(args, options))
    },
  })
}

export function usePostActionListTagsForResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
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
  const mutationDefaults = getPostActionListTagsForResourceMutationOptions<TError, TOnMutateResult>(
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

export function getActionRebuildEnvironmentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RebuildEnvironment']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RebuildEnvironment', '/#Action=RebuildEnvironment', keyArgs] as const
}

export function getActionRebuildEnvironmentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RebuildEnvironment']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRebuildEnvironmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RebuildEnvironment'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRebuildEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RebuildEnvironment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RebuildEnvironment']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RebuildEnvironment']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RebuildEnvironment']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRebuildEnvironmentQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RebuildEnvironment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRebuildEnvironmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRebuildEnvironmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RebuildEnvironment'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRebuildEnvironmentMutationKey() {
  return ['#Action=RebuildEnvironment', '/#Action=RebuildEnvironment', 'POST'] as const
}

export function getPostActionRebuildEnvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RebuildEnvironment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RebuildEnvironment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRebuildEnvironmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RebuildEnvironment']['$post']>,
    ) {
      return parseResponse(client['#Action=RebuildEnvironment'].$post(args, options))
    },
  })
}

export function usePostActionRebuildEnvironment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RebuildEnvironment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RebuildEnvironment']['$post']>,
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
  const mutationDefaults = getPostActionRebuildEnvironmentMutationOptions<TError, TOnMutateResult>(
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

export function getActionRequestEnvironmentInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RequestEnvironmentInfo']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RequestEnvironmentInfo', '/#Action=RequestEnvironmentInfo', keyArgs] as const
}

export function getActionRequestEnvironmentInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RequestEnvironmentInfo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRequestEnvironmentInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RequestEnvironmentInfo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRequestEnvironmentInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RequestEnvironmentInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RequestEnvironmentInfo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RequestEnvironmentInfo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RequestEnvironmentInfo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRequestEnvironmentInfoQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RequestEnvironmentInfo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRequestEnvironmentInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRequestEnvironmentInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RequestEnvironmentInfo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRequestEnvironmentInfoMutationKey() {
  return ['#Action=RequestEnvironmentInfo', '/#Action=RequestEnvironmentInfo', 'POST'] as const
}

export function getPostActionRequestEnvironmentInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RequestEnvironmentInfo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RequestEnvironmentInfo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRequestEnvironmentInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RequestEnvironmentInfo']['$post']>,
    ) {
      return parseResponse(client['#Action=RequestEnvironmentInfo'].$post(args, options))
    },
  })
}

export function usePostActionRequestEnvironmentInfo<
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
                Awaited<ReturnType<(typeof client)['#Action=RequestEnvironmentInfo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RequestEnvironmentInfo']['$post']>,
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
  const mutationDefaults = getPostActionRequestEnvironmentInfoMutationOptions<
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

export function getActionRestartAppServerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RestartAppServer']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RestartAppServer', '/#Action=RestartAppServer', keyArgs] as const
}

export function getActionRestartAppServerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RestartAppServer']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRestartAppServerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RestartAppServer'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRestartAppServer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RestartAppServer']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RestartAppServer']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RestartAppServer']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RestartAppServer']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRestartAppServerQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RestartAppServer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRestartAppServerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRestartAppServerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RestartAppServer'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRestartAppServerMutationKey() {
  return ['#Action=RestartAppServer', '/#Action=RestartAppServer', 'POST'] as const
}

export function getPostActionRestartAppServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestartAppServer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RestartAppServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRestartAppServerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=RestartAppServer']['$post']>) {
      return parseResponse(client['#Action=RestartAppServer'].$post(args, options))
    },
  })
}

export function usePostActionRestartAppServer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RestartAppServer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RestartAppServer']['$post']>,
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
  const mutationDefaults = getPostActionRestartAppServerMutationOptions<TError, TOnMutateResult>(
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

export function getActionRetrieveEnvironmentInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RetrieveEnvironmentInfo', '/#Action=RetrieveEnvironmentInfo', keyArgs] as const
}

export function getActionRetrieveEnvironmentInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRetrieveEnvironmentInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RetrieveEnvironmentInfo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRetrieveEnvironmentInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRetrieveEnvironmentInfoQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRetrieveEnvironmentInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRetrieveEnvironmentInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RetrieveEnvironmentInfo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRetrieveEnvironmentInfoMutationKey() {
  return ['#Action=RetrieveEnvironmentInfo', '/#Action=RetrieveEnvironmentInfo', 'POST'] as const
}

export function getPostActionRetrieveEnvironmentInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRetrieveEnvironmentInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$post']>,
    ) {
      return parseResponse(client['#Action=RetrieveEnvironmentInfo'].$post(args, options))
    },
  })
}

export function usePostActionRetrieveEnvironmentInfo<
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
                Awaited<ReturnType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$post']>,
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
  const mutationDefaults = getPostActionRetrieveEnvironmentInfoMutationOptions<
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

export function getActionSwapEnvironmentCNAMEsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SwapEnvironmentCNAMEs', '/#Action=SwapEnvironmentCNAMEs', keyArgs] as const
}

export function getActionSwapEnvironmentCNAMEsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSwapEnvironmentCNAMEsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SwapEnvironmentCNAMEs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSwapEnvironmentCNAMEs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSwapEnvironmentCNAMEsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSwapEnvironmentCNAMEsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSwapEnvironmentCNAMEsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SwapEnvironmentCNAMEs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionSwapEnvironmentCNAMEsMutationKey() {
  return ['#Action=SwapEnvironmentCNAMEs', '/#Action=SwapEnvironmentCNAMEs', 'POST'] as const
}

export function getPostActionSwapEnvironmentCNAMEsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSwapEnvironmentCNAMEsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$post']>,
    ) {
      return parseResponse(client['#Action=SwapEnvironmentCNAMEs'].$post(args, options))
    },
  })
}

export function usePostActionSwapEnvironmentCNAMEs<
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
                Awaited<ReturnType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$post']>,
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
  const mutationDefaults = getPostActionSwapEnvironmentCNAMEsMutationOptions<
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

export function getActionTerminateEnvironmentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TerminateEnvironment']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=TerminateEnvironment', '/#Action=TerminateEnvironment', keyArgs] as const
}

export function getActionTerminateEnvironmentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TerminateEnvironment']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionTerminateEnvironmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=TerminateEnvironment'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionTerminateEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=TerminateEnvironment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TerminateEnvironment']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TerminateEnvironment']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TerminateEnvironment']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionTerminateEnvironmentQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=TerminateEnvironment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTerminateEnvironmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionTerminateEnvironmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=TerminateEnvironment'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionTerminateEnvironmentMutationKey() {
  return ['#Action=TerminateEnvironment', '/#Action=TerminateEnvironment', 'POST'] as const
}

export function getPostActionTerminateEnvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=TerminateEnvironment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TerminateEnvironment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTerminateEnvironmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=TerminateEnvironment']['$post']>,
    ) {
      return parseResponse(client['#Action=TerminateEnvironment'].$post(args, options))
    },
  })
}

export function usePostActionTerminateEnvironment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TerminateEnvironment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=TerminateEnvironment']['$post']>,
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
  const mutationDefaults = getPostActionTerminateEnvironmentMutationOptions<
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

export function getActionUpdateApplicationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateApplication']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateApplication', '/#Action=UpdateApplication', keyArgs] as const
}

export function getActionUpdateApplicationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateApplication']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateApplicationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateApplication'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateApplication']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateApplication']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateApplication']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateApplicationQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=UpdateApplication']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateApplicationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateApplicationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateApplication'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateApplicationMutationKey() {
  return ['#Action=UpdateApplication', '/#Action=UpdateApplication', 'POST'] as const
}

export function getPostActionUpdateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateApplication']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateApplication']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateApplication']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateApplication'].$post(args, options))
    },
  })
}

export function usePostActionUpdateApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateApplication']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateApplication']['$post']>,
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
  const mutationDefaults = getPostActionUpdateApplicationMutationOptions<TError, TOnMutateResult>(
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

export function getActionUpdateApplicationResourceLifecycleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=UpdateApplicationResourceLifecycle',
    '/#Action=UpdateApplicationResourceLifecycle',
    keyArgs,
  ] as const
}

export function getActionUpdateApplicationResourceLifecycleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateApplicationResourceLifecycleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateApplicationResourceLifecycle'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateApplicationResourceLifecycle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$get']>
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
                  ReturnType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionUpdateApplicationResourceLifecycleQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateApplicationResourceLifecycleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateApplicationResourceLifecycleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateApplicationResourceLifecycle'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateApplicationResourceLifecycleMutationKey() {
  return [
    '#Action=UpdateApplicationResourceLifecycle',
    '/#Action=UpdateApplicationResourceLifecycle',
    'POST',
  ] as const
}

export function getPostActionUpdateApplicationResourceLifecycleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateApplicationResourceLifecycleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=UpdateApplicationResourceLifecycle']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=UpdateApplicationResourceLifecycle'].$post(args, options),
      )
    },
  })
}

export function usePostActionUpdateApplicationResourceLifecycle<
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
                  ReturnType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$post']>,
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
  const mutationDefaults = getPostActionUpdateApplicationResourceLifecycleMutationOptions<
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

export function getActionUpdateApplicationVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateApplicationVersion']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateApplicationVersion', '/#Action=UpdateApplicationVersion', keyArgs] as const
}

export function getActionUpdateApplicationVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateApplicationVersion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateApplicationVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateApplicationVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateApplicationVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateApplicationVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateApplicationVersion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateApplicationVersion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateApplicationVersion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateApplicationVersionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=UpdateApplicationVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateApplicationVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateApplicationVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateApplicationVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateApplicationVersionMutationKey() {
  return ['#Action=UpdateApplicationVersion', '/#Action=UpdateApplicationVersion', 'POST'] as const
}

export function getPostActionUpdateApplicationVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateApplicationVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateApplicationVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateApplicationVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateApplicationVersion']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateApplicationVersion'].$post(args, options))
    },
  })
}

export function usePostActionUpdateApplicationVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=UpdateApplicationVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateApplicationVersion']['$post']>,
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
  const mutationDefaults = getPostActionUpdateApplicationVersionMutationOptions<
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

export function getActionUpdateConfigurationTemplateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateConfigurationTemplate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=UpdateConfigurationTemplate',
    '/#Action=UpdateConfigurationTemplate',
    keyArgs,
  ] as const
}

export function getActionUpdateConfigurationTemplateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateConfigurationTemplate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateConfigurationTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateConfigurationTemplate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateConfigurationTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateConfigurationTemplate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateConfigurationTemplate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateConfigurationTemplate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateConfigurationTemplate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateConfigurationTemplateQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=UpdateConfigurationTemplate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateConfigurationTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateConfigurationTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateConfigurationTemplate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateConfigurationTemplateMutationKey() {
  return [
    '#Action=UpdateConfigurationTemplate',
    '/#Action=UpdateConfigurationTemplate',
    'POST',
  ] as const
}

export function getPostActionUpdateConfigurationTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateConfigurationTemplate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateConfigurationTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateConfigurationTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateConfigurationTemplate']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateConfigurationTemplate'].$post(args, options))
    },
  })
}

export function usePostActionUpdateConfigurationTemplate<
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
                Awaited<ReturnType<(typeof client)['#Action=UpdateConfigurationTemplate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateConfigurationTemplate']['$post']>,
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
  const mutationDefaults = getPostActionUpdateConfigurationTemplateMutationOptions<
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

export function getActionUpdateEnvironmentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateEnvironment']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateEnvironment', '/#Action=UpdateEnvironment', keyArgs] as const
}

export function getActionUpdateEnvironmentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateEnvironment']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateEnvironmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateEnvironment'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateEnvironment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=UpdateEnvironment']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateEnvironment']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateEnvironment']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateEnvironmentQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=UpdateEnvironment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateEnvironmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateEnvironmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateEnvironment'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateEnvironmentMutationKey() {
  return ['#Action=UpdateEnvironment', '/#Action=UpdateEnvironment', 'POST'] as const
}

export function getPostActionUpdateEnvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateEnvironment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateEnvironment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateEnvironmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateEnvironment']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateEnvironment'].$post(args, options))
    },
  })
}

export function usePostActionUpdateEnvironment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateEnvironment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateEnvironment']['$post']>,
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
  const mutationDefaults = getPostActionUpdateEnvironmentMutationOptions<TError, TOnMutateResult>(
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

export function getActionUpdateTagsForResourceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateTagsForResource']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateTagsForResource', '/#Action=UpdateTagsForResource', keyArgs] as const
}

export function getActionUpdateTagsForResourceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateTagsForResource']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateTagsForResourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateTagsForResource'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateTagsForResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateTagsForResource']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateTagsForResource']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateTagsForResource']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateTagsForResourceQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=UpdateTagsForResource']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateTagsForResourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateTagsForResourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateTagsForResource'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionUpdateTagsForResourceMutationKey() {
  return ['#Action=UpdateTagsForResource', '/#Action=UpdateTagsForResource', 'POST'] as const
}

export function getPostActionUpdateTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateTagsForResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateTagsForResource']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateTagsForResource'].$post(args, options))
    },
  })
}

export function usePostActionUpdateTagsForResource<
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
                Awaited<ReturnType<(typeof client)['#Action=UpdateTagsForResource']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateTagsForResource']['$post']>,
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
  const mutationDefaults = getPostActionUpdateTagsForResourceMutationOptions<
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

export function getActionValidateConfigurationSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ValidateConfigurationSettings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ValidateConfigurationSettings',
    '/#Action=ValidateConfigurationSettings',
    keyArgs,
  ] as const
}

export function getActionValidateConfigurationSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ValidateConfigurationSettings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionValidateConfigurationSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ValidateConfigurationSettings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionValidateConfigurationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ValidateConfigurationSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ValidateConfigurationSettings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ValidateConfigurationSettings']['$get']>
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
                  ReturnType<(typeof client)['#Action=ValidateConfigurationSettings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionValidateConfigurationSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ValidateConfigurationSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionValidateConfigurationSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionValidateConfigurationSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ValidateConfigurationSettings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionValidateConfigurationSettingsMutationKey() {
  return [
    '#Action=ValidateConfigurationSettings',
    '/#Action=ValidateConfigurationSettings',
    'POST',
  ] as const
}

export function getPostActionValidateConfigurationSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ValidateConfigurationSettings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ValidateConfigurationSettings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionValidateConfigurationSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ValidateConfigurationSettings']['$post']>,
    ) {
      return parseResponse(client['#Action=ValidateConfigurationSettings'].$post(args, options))
    },
  })
}

export function usePostActionValidateConfigurationSettings<
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
                  ReturnType<(typeof client)['#Action=ValidateConfigurationSettings']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ValidateConfigurationSettings']['$post']>,
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
  const mutationDefaults = getPostActionValidateConfigurationSettingsMutationOptions<
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
