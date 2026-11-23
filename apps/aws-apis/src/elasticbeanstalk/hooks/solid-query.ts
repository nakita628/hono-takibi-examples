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
  args: InferRequestType<(typeof client)['#Action=AbortEnvironmentUpdate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AbortEnvironmentUpdate', '/#Action=AbortEnvironmentUpdate', keyArgs] as const
}

export function getActionAbortEnvironmentUpdateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AbortEnvironmentUpdate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AbortEnvironmentUpdate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionAbortEnvironmentUpdateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AbortEnvironmentUpdate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionAbortEnvironmentUpdate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AbortEnvironmentUpdate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=AbortEnvironmentUpdate']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionAbortEnvironmentUpdateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionAbortEnvironmentUpdate<
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
                Awaited<ReturnType<(typeof client)['#Action=AbortEnvironmentUpdate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AbortEnvironmentUpdate']['$post']>,
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
    const mutationDefaults = getPostActionAbortEnvironmentUpdateMutationOptions<
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

export function getActionApplyEnvironmentManagedActionQueryKey(
  args: InferRequestType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ApplyEnvironmentManagedAction',
    '/#Action=ApplyEnvironmentManagedAction',
    keyArgs,
  ] as const
}

export function getActionApplyEnvironmentManagedActionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionApplyEnvironmentManagedActionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ApplyEnvironmentManagedAction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionApplyEnvironmentManagedAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionApplyEnvironmentManagedActionQueryKey>
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
      ...getActionApplyEnvironmentManagedActionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionApplyEnvironmentManagedAction<
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
                  ReturnType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$post']>,
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
    const mutationDefaults = getPostActionApplyEnvironmentManagedActionMutationOptions<
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

export function getActionAssociateEnvironmentOperationsRoleQueryKey(
  args: InferRequestType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=AssociateEnvironmentOperationsRole',
    '/#Action=AssociateEnvironmentOperationsRole',
    keyArgs,
  ] as const
}

export function getActionAssociateEnvironmentOperationsRoleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionAssociateEnvironmentOperationsRoleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AssociateEnvironmentOperationsRole'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionAssociateEnvironmentOperationsRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=AssociateEnvironmentOperationsRole']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionAssociateEnvironmentOperationsRoleQueryKey>
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
      ...getActionAssociateEnvironmentOperationsRoleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionAssociateEnvironmentOperationsRole<
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
                  ReturnType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$post']>,
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
    const mutationDefaults = getPostActionAssociateEnvironmentOperationsRoleMutationOptions<
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

export function getActionCheckDNSAvailabilityQueryKey(
  args: InferRequestType<(typeof client)['#Action=CheckDNSAvailability']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CheckDNSAvailability', '/#Action=CheckDNSAvailability', keyArgs] as const
}

export function getActionCheckDNSAvailabilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CheckDNSAvailability']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CheckDNSAvailability']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCheckDNSAvailabilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CheckDNSAvailability'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCheckDNSAvailability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CheckDNSAvailability']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CheckDNSAvailability']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCheckDNSAvailabilityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCheckDNSAvailability<
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
                Awaited<ReturnType<(typeof client)['#Action=CheckDNSAvailability']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CheckDNSAvailability']['$post']>,
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
    const mutationDefaults = getPostActionCheckDNSAvailabilityMutationOptions<
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

export function getActionComposeEnvironmentsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ComposeEnvironments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ComposeEnvironments', '/#Action=ComposeEnvironments', keyArgs] as const
}

export function getActionComposeEnvironmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ComposeEnvironments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ComposeEnvironments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionComposeEnvironmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ComposeEnvironments'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionComposeEnvironments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ComposeEnvironments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ComposeEnvironments']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionComposeEnvironmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionComposeEnvironments<
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
                Awaited<ReturnType<(typeof client)['#Action=ComposeEnvironments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ComposeEnvironments']['$post']>,
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
    const mutationDefaults = getPostActionComposeEnvironmentsMutationOptions<
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

export function getActionCreateApplicationQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateApplication']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateApplication', '/#Action=CreateApplication', keyArgs] as const
}

export function getActionCreateApplicationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateApplication']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateApplicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateApplication'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateApplication']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateApplicationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionCreateApplicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionCreateApplicationVersionQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateApplicationVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateApplicationVersion', '/#Action=CreateApplicationVersion', keyArgs] as const
}

export function getActionCreateApplicationVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateApplicationVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateApplicationVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateApplicationVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateApplicationVersion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateApplicationVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateApplicationVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateApplicationVersion']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateApplicationVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateApplicationVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateApplicationVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateApplicationVersion']['$post']>,
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
    const mutationDefaults = getPostActionCreateApplicationVersionMutationOptions<
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

export function getActionCreateConfigurationTemplateQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateConfigurationTemplate',
    '/#Action=CreateConfigurationTemplate',
    keyArgs,
  ] as const
}

export function getActionCreateConfigurationTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationTemplate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateConfigurationTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateConfigurationTemplate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateConfigurationTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationTemplate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateConfigurationTemplate']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateConfigurationTemplateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateConfigurationTemplate<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateConfigurationTemplate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateConfigurationTemplate']['$post']>,
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
    const mutationDefaults = getPostActionCreateConfigurationTemplateMutationOptions<
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

export function getActionCreateEnvironmentQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateEnvironment']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateEnvironment', '/#Action=CreateEnvironment', keyArgs] as const
}

export function getActionCreateEnvironmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateEnvironment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateEnvironment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateEnvironmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateEnvironment'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateEnvironment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateEnvironment']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateEnvironmentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateEnvironment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionCreateEnvironmentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionCreatePlatformVersionQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreatePlatformVersion', '/#Action=CreatePlatformVersion', keyArgs] as const
}

export function getActionCreatePlatformVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreatePlatformVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreatePlatformVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreatePlatformVersion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreatePlatformVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreatePlatformVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreatePlatformVersion']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreatePlatformVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreatePlatformVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=CreatePlatformVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreatePlatformVersion']['$post']>,
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
    const mutationDefaults = getPostActionCreatePlatformVersionMutationOptions<
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

export function getActionCreateStorageLocationQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateStorageLocation']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateStorageLocation', '/#Action=CreateStorageLocation', keyArgs] as const
}

export function getActionCreateStorageLocationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateStorageLocation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateStorageLocation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateStorageLocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateStorageLocation'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateStorageLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateStorageLocation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateStorageLocation']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateStorageLocationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateStorageLocation<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateStorageLocation']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateStorageLocation']['$post']>,
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
    const mutationDefaults = getPostActionCreateStorageLocationMutationOptions<
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

export function getActionDeleteApplicationQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteApplication']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteApplication', '/#Action=DeleteApplication', keyArgs] as const
}

export function getActionDeleteApplicationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteApplication']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteApplicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteApplication'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteApplication']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteApplicationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionDeleteApplicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDeleteApplicationVersionQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteApplicationVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteApplicationVersion', '/#Action=DeleteApplicationVersion', keyArgs] as const
}

export function getActionDeleteApplicationVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteApplicationVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteApplicationVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteApplicationVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteApplicationVersion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteApplicationVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteApplicationVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteApplicationVersion']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteApplicationVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteApplicationVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteApplicationVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteApplicationVersion']['$post']>,
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
    const mutationDefaults = getPostActionDeleteApplicationVersionMutationOptions<
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

export function getActionDeleteConfigurationTemplateQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteConfigurationTemplate',
    '/#Action=DeleteConfigurationTemplate',
    keyArgs,
  ] as const
}

export function getActionDeleteConfigurationTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationTemplate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteConfigurationTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteConfigurationTemplate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteConfigurationTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationTemplate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteConfigurationTemplate']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteConfigurationTemplateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteConfigurationTemplate<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteConfigurationTemplate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteConfigurationTemplate']['$post']>,
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
    const mutationDefaults = getPostActionDeleteConfigurationTemplateMutationOptions<
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

export function getActionDeleteEnvironmentConfigurationQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteEnvironmentConfiguration',
    '/#Action=DeleteEnvironmentConfiguration',
    keyArgs,
  ] as const
}

export function getActionDeleteEnvironmentConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteEnvironmentConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteEnvironmentConfiguration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteEnvironmentConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionDeleteEnvironmentConfigurationQueryKey>
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
      ...getActionDeleteEnvironmentConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteEnvironmentConfiguration<
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
                  ReturnType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$post']>,
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
    const mutationDefaults = getPostActionDeleteEnvironmentConfigurationMutationOptions<
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

export function getActionDeletePlatformVersionQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeletePlatformVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeletePlatformVersion', '/#Action=DeletePlatformVersion', keyArgs] as const
}

export function getActionDeletePlatformVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeletePlatformVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeletePlatformVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeletePlatformVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeletePlatformVersion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeletePlatformVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeletePlatformVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeletePlatformVersion']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeletePlatformVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeletePlatformVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=DeletePlatformVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeletePlatformVersion']['$post']>,
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
    const mutationDefaults = getPostActionDeletePlatformVersionMutationOptions<
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

export function getActionDescribeAccountAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeAccountAttributes',
    '/#Action=DescribeAccountAttributes',
    keyArgs,
  ] as const
}

export function getActionDescribeAccountAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeAccountAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeAccountAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeAccountAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeAccountAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeAccountAttributes<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>,
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
    const mutationDefaults = getPostActionDescribeAccountAttributesMutationOptions<
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

export function getActionDescribeApplicationVersionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeApplicationVersions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeApplicationVersions',
    '/#Action=DescribeApplicationVersions',
    keyArgs,
  ] as const
}

export function getActionDescribeApplicationVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeApplicationVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeApplicationVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeApplicationVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeApplicationVersions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeApplicationVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeApplicationVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeApplicationVersions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeApplicationVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeApplicationVersions<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeApplicationVersions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeApplicationVersions']['$post']>,
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
    const mutationDefaults = getPostActionDescribeApplicationVersionsMutationOptions<
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

export function getActionDescribeApplicationsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeApplications']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeApplications', '/#Action=DescribeApplications', keyArgs] as const
}

export function getActionDescribeApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeApplications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeApplications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeApplications'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeApplications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeApplications']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeApplicationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeApplications<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeApplications']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeApplications']['$post']>,
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
    const mutationDefaults = getPostActionDescribeApplicationsMutationOptions<
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

export function getActionDescribeConfigurationOptionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeConfigurationOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeConfigurationOptions',
    '/#Action=DescribeConfigurationOptions',
    keyArgs,
  ] as const
}

export function getActionDescribeConfigurationOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeConfigurationOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeConfigurationOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeConfigurationOptions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeConfigurationOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeConfigurationOptions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeConfigurationOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeConfigurationOptions<
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
                  ReturnType<(typeof client)['#Action=DescribeConfigurationOptions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeConfigurationOptions']['$post']>,
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
    const mutationDefaults = getPostActionDescribeConfigurationOptionsMutationOptions<
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

export function getActionDescribeConfigurationSettingsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeConfigurationSettings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeConfigurationSettings',
    '/#Action=DescribeConfigurationSettings',
    keyArgs,
  ] as const
}

export function getActionDescribeConfigurationSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeConfigurationSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeConfigurationSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeConfigurationSettings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeConfigurationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeConfigurationSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeConfigurationSettings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionDescribeConfigurationSettingsQueryKey>
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
      ...getActionDescribeConfigurationSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeConfigurationSettings<
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
                  ReturnType<(typeof client)['#Action=DescribeConfigurationSettings']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeConfigurationSettings']['$post']>,
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
    const mutationDefaults = getPostActionDescribeConfigurationSettingsMutationOptions<
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

export function getActionDescribeEnvironmentHealthQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironmentHealth']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeEnvironmentHealth',
    '/#Action=DescribeEnvironmentHealth',
    keyArgs,
  ] as const
}

export function getActionDescribeEnvironmentHealthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentHealth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironmentHealth']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeEnvironmentHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeEnvironmentHealth'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeEnvironmentHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentHealth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeEnvironmentHealth']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeEnvironmentHealthQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeEnvironmentHealth<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentHealth']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEnvironmentHealth']['$post']>,
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
    const mutationDefaults = getPostActionDescribeEnvironmentHealthMutationOptions<
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

export function getActionDescribeEnvironmentManagedActionHistoryQueryKey(
  args: InferRequestType<
    (typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeEnvironmentManagedActionHistory',
    '/#Action=DescribeEnvironmentManagedActionHistory',
    keyArgs,
  ] as const
}

export function getActionDescribeEnvironmentManagedActionHistoryQueryOptions<
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
  args: InferRequestType<
    (typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeEnvironmentManagedActionHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeEnvironmentManagedActionHistory'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeEnvironmentManagedActionHistory<
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
  args: () => InferRequestType<
    (typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionDescribeEnvironmentManagedActionHistoryQueryKey>
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
      ...getActionDescribeEnvironmentManagedActionHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeEnvironmentManagedActionHistory<
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
    const mutationDefaults = getPostActionDescribeEnvironmentManagedActionHistoryMutationOptions<
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

export function getActionDescribeEnvironmentManagedActionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeEnvironmentManagedActions',
    '/#Action=DescribeEnvironmentManagedActions',
    keyArgs,
  ] as const
}

export function getActionDescribeEnvironmentManagedActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeEnvironmentManagedActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeEnvironmentManagedActions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeEnvironmentManagedActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DescribeEnvironmentManagedActions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionDescribeEnvironmentManagedActionsQueryKey>
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
      ...getActionDescribeEnvironmentManagedActionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeEnvironmentManagedActions<
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
                  ReturnType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$post']>,
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
    const mutationDefaults = getPostActionDescribeEnvironmentManagedActionsMutationOptions<
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

export function getActionDescribeEnvironmentResourcesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironmentResources']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeEnvironmentResources',
    '/#Action=DescribeEnvironmentResources',
    keyArgs,
  ] as const
}

export function getActionDescribeEnvironmentResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentResources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironmentResources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeEnvironmentResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeEnvironmentResources'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeEnvironmentResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironmentResources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeEnvironmentResources']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeEnvironmentResourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeEnvironmentResources<
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
                  ReturnType<(typeof client)['#Action=DescribeEnvironmentResources']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEnvironmentResources']['$post']>,
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
    const mutationDefaults = getPostActionDescribeEnvironmentResourcesMutationOptions<
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

export function getActionDescribeEnvironmentsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeEnvironments', '/#Action=DescribeEnvironments', keyArgs] as const
}

export function getActionDescribeEnvironmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeEnvironmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeEnvironments'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeEnvironments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeEnvironments']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeEnvironmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeEnvironments<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeEnvironments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEnvironments']['$post']>,
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
    const mutationDefaults = getPostActionDescribeEnvironmentsMutationOptions<
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

export function getActionDescribeEventsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeEvents', '/#Action=DescribeEvents', keyArgs] as const
}

export function getActionDescribeEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEventsQueryKey>
  >({
    queryKey: getActionDescribeEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeEvents'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDescribeEventsQueryKey>
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
      ...getActionDescribeEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionDescribeEventsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDescribeInstancesHealthQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeInstancesHealth']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeInstancesHealth', '/#Action=DescribeInstancesHealth', keyArgs] as const
}

export function getActionDescribeInstancesHealthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeInstancesHealth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeInstancesHealth']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeInstancesHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeInstancesHealth'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeInstancesHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeInstancesHealth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeInstancesHealth']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeInstancesHealthQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeInstancesHealth<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeInstancesHealth']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeInstancesHealth']['$post']>,
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
    const mutationDefaults = getPostActionDescribeInstancesHealthMutationOptions<
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

export function getActionDescribePlatformVersionQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribePlatformVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribePlatformVersion', '/#Action=DescribePlatformVersion', keyArgs] as const
}

export function getActionDescribePlatformVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribePlatformVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribePlatformVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribePlatformVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribePlatformVersion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribePlatformVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribePlatformVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribePlatformVersion']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribePlatformVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribePlatformVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribePlatformVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribePlatformVersion']['$post']>,
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
    const mutationDefaults = getPostActionDescribePlatformVersionMutationOptions<
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

export function getActionDisassociateEnvironmentOperationsRoleQueryKey(
  args: InferRequestType<(typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DisassociateEnvironmentOperationsRole',
    '/#Action=DisassociateEnvironmentOperationsRole',
    keyArgs,
  ] as const
}

export function getActionDisassociateEnvironmentOperationsRoleQueryOptions<
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
  args: InferRequestType<(typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDisassociateEnvironmentOperationsRoleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DisassociateEnvironmentOperationsRole'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDisassociateEnvironmentOperationsRole<
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
  args: () => InferRequestType<
    (typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionDisassociateEnvironmentOperationsRoleQueryKey>
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
      ...getActionDisassociateEnvironmentOperationsRoleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDisassociateEnvironmentOperationsRole<
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
    const mutationDefaults = getPostActionDisassociateEnvironmentOperationsRoleMutationOptions<
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

export function getActionListAvailableSolutionStacksQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListAvailableSolutionStacks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListAvailableSolutionStacks',
    '/#Action=ListAvailableSolutionStacks',
    keyArgs,
  ] as const
}

export function getActionListAvailableSolutionStacksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListAvailableSolutionStacks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListAvailableSolutionStacks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionListAvailableSolutionStacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListAvailableSolutionStacks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionListAvailableSolutionStacks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListAvailableSolutionStacks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListAvailableSolutionStacks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionListAvailableSolutionStacksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionListAvailableSolutionStacks<
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
                Awaited<ReturnType<(typeof client)['#Action=ListAvailableSolutionStacks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListAvailableSolutionStacks']['$post']>,
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
    const mutationDefaults = getPostActionListAvailableSolutionStacksMutationOptions<
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

export function getActionListPlatformBranchesQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListPlatformBranches']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListPlatformBranches', '/#Action=ListPlatformBranches', keyArgs] as const
}

export function getActionListPlatformBranchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListPlatformBranches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListPlatformBranches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionListPlatformBranchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListPlatformBranches'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionListPlatformBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListPlatformBranches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListPlatformBranches']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionListPlatformBranchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionListPlatformBranches<
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
                Awaited<ReturnType<(typeof client)['#Action=ListPlatformBranches']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListPlatformBranches']['$post']>,
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
    const mutationDefaults = getPostActionListPlatformBranchesMutationOptions<
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

export function getActionListPlatformVersionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListPlatformVersions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListPlatformVersions', '/#Action=ListPlatformVersions', keyArgs] as const
}

export function getActionListPlatformVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListPlatformVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListPlatformVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionListPlatformVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListPlatformVersions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionListPlatformVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListPlatformVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListPlatformVersions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionListPlatformVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionListPlatformVersions<
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
                Awaited<ReturnType<(typeof client)['#Action=ListPlatformVersions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListPlatformVersions']['$post']>,
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
    const mutationDefaults = getPostActionListPlatformVersionsMutationOptions<
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

export function getActionListTagsForResourceQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', keyArgs] as const
}

export function getActionListTagsForResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionListTagsForResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListTagsForResource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionListTagsForResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionListTagsForResourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionListTagsForResource<
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
                Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
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
    const mutationDefaults = getPostActionListTagsForResourceMutationOptions<
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

export function getActionRebuildEnvironmentQueryKey(
  args: InferRequestType<(typeof client)['#Action=RebuildEnvironment']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RebuildEnvironment', '/#Action=RebuildEnvironment', keyArgs] as const
}

export function getActionRebuildEnvironmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RebuildEnvironment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RebuildEnvironment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRebuildEnvironmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RebuildEnvironment'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRebuildEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RebuildEnvironment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RebuildEnvironment']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionRebuildEnvironmentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRebuildEnvironment<
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
                Awaited<ReturnType<(typeof client)['#Action=RebuildEnvironment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RebuildEnvironment']['$post']>,
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
    const mutationDefaults = getPostActionRebuildEnvironmentMutationOptions<
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

export function getActionRequestEnvironmentInfoQueryKey(
  args: InferRequestType<(typeof client)['#Action=RequestEnvironmentInfo']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RequestEnvironmentInfo', '/#Action=RequestEnvironmentInfo', keyArgs] as const
}

export function getActionRequestEnvironmentInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RequestEnvironmentInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RequestEnvironmentInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRequestEnvironmentInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RequestEnvironmentInfo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRequestEnvironmentInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RequestEnvironmentInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RequestEnvironmentInfo']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionRequestEnvironmentInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRequestEnvironmentInfo<
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
                Awaited<ReturnType<(typeof client)['#Action=RequestEnvironmentInfo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RequestEnvironmentInfo']['$post']>,
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
    const mutationDefaults = getPostActionRequestEnvironmentInfoMutationOptions<
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

export function getActionRestartAppServerQueryKey(
  args: InferRequestType<(typeof client)['#Action=RestartAppServer']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RestartAppServer', '/#Action=RestartAppServer', keyArgs] as const
}

export function getActionRestartAppServerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RestartAppServer']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RestartAppServer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRestartAppServerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RestartAppServer'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRestartAppServer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RestartAppServer']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RestartAppServer']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionRestartAppServerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRestartAppServer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionRestartAppServerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionRetrieveEnvironmentInfoQueryKey(
  args: InferRequestType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RetrieveEnvironmentInfo', '/#Action=RetrieveEnvironmentInfo', keyArgs] as const
}

export function getActionRetrieveEnvironmentInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRetrieveEnvironmentInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RetrieveEnvironmentInfo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRetrieveEnvironmentInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionRetrieveEnvironmentInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRetrieveEnvironmentInfo<
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
                Awaited<ReturnType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$post']>,
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
    const mutationDefaults = getPostActionRetrieveEnvironmentInfoMutationOptions<
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

export function getActionSwapEnvironmentCNAMEsQueryKey(
  args: InferRequestType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SwapEnvironmentCNAMEs', '/#Action=SwapEnvironmentCNAMEs', keyArgs] as const
}

export function getActionSwapEnvironmentCNAMEsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionSwapEnvironmentCNAMEsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SwapEnvironmentCNAMEs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionSwapEnvironmentCNAMEs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionSwapEnvironmentCNAMEsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionSwapEnvironmentCNAMEs<
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
                Awaited<ReturnType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$post']>,
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
    const mutationDefaults = getPostActionSwapEnvironmentCNAMEsMutationOptions<
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

export function getActionTerminateEnvironmentQueryKey(
  args: InferRequestType<(typeof client)['#Action=TerminateEnvironment']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TerminateEnvironment', '/#Action=TerminateEnvironment', keyArgs] as const
}

export function getActionTerminateEnvironmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=TerminateEnvironment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=TerminateEnvironment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionTerminateEnvironmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=TerminateEnvironment'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionTerminateEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=TerminateEnvironment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=TerminateEnvironment']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionTerminateEnvironmentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionTerminateEnvironment<
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
                Awaited<ReturnType<(typeof client)['#Action=TerminateEnvironment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=TerminateEnvironment']['$post']>,
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
    const mutationDefaults = getPostActionTerminateEnvironmentMutationOptions<
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

export function getActionUpdateApplicationQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateApplication']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateApplication', '/#Action=UpdateApplication', keyArgs] as const
}

export function getActionUpdateApplicationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateApplication']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionUpdateApplicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateApplication'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionUpdateApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateApplication']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionUpdateApplicationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionUpdateApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionUpdateApplicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionUpdateApplicationResourceLifecycleQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateApplicationResourceLifecycle',
    '/#Action=UpdateApplicationResourceLifecycle',
    keyArgs,
  ] as const
}

export function getActionUpdateApplicationResourceLifecycleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionUpdateApplicationResourceLifecycleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateApplicationResourceLifecycle'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionUpdateApplicationResourceLifecycle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=UpdateApplicationResourceLifecycle']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionUpdateApplicationResourceLifecycleQueryKey>
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
      ...getActionUpdateApplicationResourceLifecycleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionUpdateApplicationResourceLifecycle<
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
                  ReturnType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$post']>,
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
    const mutationDefaults = getPostActionUpdateApplicationResourceLifecycleMutationOptions<
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

export function getActionUpdateApplicationVersionQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateApplicationVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateApplicationVersion', '/#Action=UpdateApplicationVersion', keyArgs] as const
}

export function getActionUpdateApplicationVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateApplicationVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateApplicationVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionUpdateApplicationVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateApplicationVersion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionUpdateApplicationVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateApplicationVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateApplicationVersion']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionUpdateApplicationVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionUpdateApplicationVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=UpdateApplicationVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateApplicationVersion']['$post']>,
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
    const mutationDefaults = getPostActionUpdateApplicationVersionMutationOptions<
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

export function getActionUpdateConfigurationTemplateQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateConfigurationTemplate',
    '/#Action=UpdateConfigurationTemplate',
    keyArgs,
  ] as const
}

export function getActionUpdateConfigurationTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateConfigurationTemplate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionUpdateConfigurationTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateConfigurationTemplate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionUpdateConfigurationTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateConfigurationTemplate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateConfigurationTemplate']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionUpdateConfigurationTemplateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionUpdateConfigurationTemplate<
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
                Awaited<ReturnType<(typeof client)['#Action=UpdateConfigurationTemplate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateConfigurationTemplate']['$post']>,
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
    const mutationDefaults = getPostActionUpdateConfigurationTemplateMutationOptions<
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

export function getActionUpdateEnvironmentQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateEnvironment']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateEnvironment', '/#Action=UpdateEnvironment', keyArgs] as const
}

export function getActionUpdateEnvironmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateEnvironment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateEnvironment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionUpdateEnvironmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateEnvironment'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionUpdateEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateEnvironment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateEnvironment']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionUpdateEnvironmentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionUpdateEnvironment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionUpdateEnvironmentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionUpdateTagsForResourceQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateTagsForResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateTagsForResource', '/#Action=UpdateTagsForResource', keyArgs] as const
}

export function getActionUpdateTagsForResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateTagsForResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionUpdateTagsForResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateTagsForResource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionUpdateTagsForResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateTagsForResource']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionUpdateTagsForResourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionUpdateTagsForResource<
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
                Awaited<ReturnType<(typeof client)['#Action=UpdateTagsForResource']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateTagsForResource']['$post']>,
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
    const mutationDefaults = getPostActionUpdateTagsForResourceMutationOptions<
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

export function getActionValidateConfigurationSettingsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ValidateConfigurationSettings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ValidateConfigurationSettings',
    '/#Action=ValidateConfigurationSettings',
    keyArgs,
  ] as const
}

export function getActionValidateConfigurationSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ValidateConfigurationSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ValidateConfigurationSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionValidateConfigurationSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ValidateConfigurationSettings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionValidateConfigurationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ValidateConfigurationSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ValidateConfigurationSettings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionValidateConfigurationSettingsQueryKey>
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
      ...getActionValidateConfigurationSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionValidateConfigurationSettings<
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
                  ReturnType<(typeof client)['#Action=ValidateConfigurationSettings']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ValidateConfigurationSettings']['$post']>,
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
    const mutationDefaults = getPostActionValidateConfigurationSettingsMutationOptions<
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
