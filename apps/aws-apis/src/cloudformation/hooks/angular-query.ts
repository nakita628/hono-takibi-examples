import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionActivateOrganizationsAccessKey() {
  return ['#Action=ActivateOrganizationsAccess'] as const
}

export function getActionActivateTypeKey() {
  return ['#Action=ActivateType'] as const
}

export function getActionBatchDescribeTypeConfigurationsKey() {
  return ['#Action=BatchDescribeTypeConfigurations'] as const
}

export function getActionCancelUpdateStackKey() {
  return ['#Action=CancelUpdateStack'] as const
}

export function getActionContinueUpdateRollbackKey() {
  return ['#Action=ContinueUpdateRollback'] as const
}

export function getActionCreateChangeSetKey() {
  return ['#Action=CreateChangeSet'] as const
}

export function getActionCreateStackKey() {
  return ['#Action=CreateStack'] as const
}

export function getActionCreateStackInstancesKey() {
  return ['#Action=CreateStackInstances'] as const
}

export function getActionCreateStackSetKey() {
  return ['#Action=CreateStackSet'] as const
}

export function getActionDeactivateOrganizationsAccessKey() {
  return ['#Action=DeactivateOrganizationsAccess'] as const
}

export function getActionDeactivateTypeKey() {
  return ['#Action=DeactivateType'] as const
}

export function getActionDeleteChangeSetKey() {
  return ['#Action=DeleteChangeSet'] as const
}

export function getActionDeleteStackKey() {
  return ['#Action=DeleteStack'] as const
}

export function getActionDeleteStackInstancesKey() {
  return ['#Action=DeleteStackInstances'] as const
}

export function getActionDeleteStackSetKey() {
  return ['#Action=DeleteStackSet'] as const
}

export function getActionDeregisterTypeKey() {
  return ['#Action=DeregisterType'] as const
}

export function getActionDescribeAccountLimitsKey() {
  return ['#Action=DescribeAccountLimits'] as const
}

export function getActionDescribeChangeSetKey() {
  return ['#Action=DescribeChangeSet'] as const
}

export function getActionDescribeChangeSetHooksKey() {
  return ['#Action=DescribeChangeSetHooks'] as const
}

export function getActionDescribeOrganizationsAccessKey() {
  return ['#Action=DescribeOrganizationsAccess'] as const
}

export function getActionDescribePublisherKey() {
  return ['#Action=DescribePublisher'] as const
}

export function getActionDescribeStackDriftDetectionStatusKey() {
  return ['#Action=DescribeStackDriftDetectionStatus'] as const
}

export function getActionDescribeStackEventsKey() {
  return ['#Action=DescribeStackEvents'] as const
}

export function getActionDescribeStackInstanceKey() {
  return ['#Action=DescribeStackInstance'] as const
}

export function getActionDescribeStackResourceKey() {
  return ['#Action=DescribeStackResource'] as const
}

export function getActionDescribeStackResourceDriftsKey() {
  return ['#Action=DescribeStackResourceDrifts'] as const
}

export function getActionDescribeStackResourcesKey() {
  return ['#Action=DescribeStackResources'] as const
}

export function getActionDescribeStackSetKey() {
  return ['#Action=DescribeStackSet'] as const
}

export function getActionDescribeStackSetOperationKey() {
  return ['#Action=DescribeStackSetOperation'] as const
}

export function getActionDescribeStacksKey() {
  return ['#Action=DescribeStacks'] as const
}

export function getActionDescribeTypeKey() {
  return ['#Action=DescribeType'] as const
}

export function getActionDescribeTypeRegistrationKey() {
  return ['#Action=DescribeTypeRegistration'] as const
}

export function getActionDetectStackDriftKey() {
  return ['#Action=DetectStackDrift'] as const
}

export function getActionDetectStackResourceDriftKey() {
  return ['#Action=DetectStackResourceDrift'] as const
}

export function getActionDetectStackSetDriftKey() {
  return ['#Action=DetectStackSetDrift'] as const
}

export function getActionEstimateTemplateCostKey() {
  return ['#Action=EstimateTemplateCost'] as const
}

export function getActionExecuteChangeSetKey() {
  return ['#Action=ExecuteChangeSet'] as const
}

export function getActionGetStackPolicyKey() {
  return ['#Action=GetStackPolicy'] as const
}

export function getActionGetTemplateKey() {
  return ['#Action=GetTemplate'] as const
}

export function getActionGetTemplateSummaryKey() {
  return ['#Action=GetTemplateSummary'] as const
}

export function getActionImportStacksToStackSetKey() {
  return ['#Action=ImportStacksToStackSet'] as const
}

export function getActionListChangeSetsKey() {
  return ['#Action=ListChangeSets'] as const
}

export function getActionListExportsKey() {
  return ['#Action=ListExports'] as const
}

export function getActionListImportsKey() {
  return ['#Action=ListImports'] as const
}

export function getActionListStackInstanceResourceDriftsKey() {
  return ['#Action=ListStackInstanceResourceDrifts'] as const
}

export function getActionListStackInstancesKey() {
  return ['#Action=ListStackInstances'] as const
}

export function getActionListStackResourcesKey() {
  return ['#Action=ListStackResources'] as const
}

export function getActionListStackSetOperationResultsKey() {
  return ['#Action=ListStackSetOperationResults'] as const
}

export function getActionListStackSetOperationsKey() {
  return ['#Action=ListStackSetOperations'] as const
}

export function getActionListStackSetsKey() {
  return ['#Action=ListStackSets'] as const
}

export function getActionListStacksKey() {
  return ['#Action=ListStacks'] as const
}

export function getActionListTypeRegistrationsKey() {
  return ['#Action=ListTypeRegistrations'] as const
}

export function getActionListTypeVersionsKey() {
  return ['#Action=ListTypeVersions'] as const
}

export function getActionListTypesKey() {
  return ['#Action=ListTypes'] as const
}

export function getActionPublishTypeKey() {
  return ['#Action=PublishType'] as const
}

export function getActionRecordHandlerProgressKey() {
  return ['#Action=RecordHandlerProgress'] as const
}

export function getActionRegisterPublisherKey() {
  return ['#Action=RegisterPublisher'] as const
}

export function getActionRegisterTypeKey() {
  return ['#Action=RegisterType'] as const
}

export function getActionRollbackStackKey() {
  return ['#Action=RollbackStack'] as const
}

export function getActionSetStackPolicyKey() {
  return ['#Action=SetStackPolicy'] as const
}

export function getActionSetTypeConfigurationKey() {
  return ['#Action=SetTypeConfiguration'] as const
}

export function getActionSetTypeDefaultVersionKey() {
  return ['#Action=SetTypeDefaultVersion'] as const
}

export function getActionSignalResourceKey() {
  return ['#Action=SignalResource'] as const
}

export function getActionStopStackSetOperationKey() {
  return ['#Action=StopStackSetOperation'] as const
}

export function getActionTestTypeKey() {
  return ['#Action=TestType'] as const
}

export function getActionUpdateStackKey() {
  return ['#Action=UpdateStack'] as const
}

export function getActionUpdateStackInstancesKey() {
  return ['#Action=UpdateStackInstances'] as const
}

export function getActionUpdateStackSetKey() {
  return ['#Action=UpdateStackSet'] as const
}

export function getActionUpdateTerminationProtectionKey() {
  return ['#Action=UpdateTerminationProtection'] as const
}

export function getActionValidateTemplateKey() {
  return ['#Action=ValidateTemplate'] as const
}

export function getActionActivateOrganizationsAccessQueryKey(
  args: InferRequestType<(typeof client)['#Action=ActivateOrganizationsAccess']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ActivateOrganizationsAccess',
    '/#Action=ActivateOrganizationsAccess',
    keyArgs,
  ] as const
}

export function getActionActivateOrganizationsAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ActivateOrganizationsAccess']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ActivateOrganizationsAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ActivateOrganizationsAccess']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionActivateOrganizationsAccessQueryKey>
  >({
    queryKey: getActionActivateOrganizationsAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ActivateOrganizationsAccess'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionActivateOrganizationsAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ActivateOrganizationsAccess']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ActivateOrganizationsAccess']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ActivateOrganizationsAccess']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionActivateOrganizationsAccessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionActivateOrganizationsAccessQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionActivateOrganizationsAccessMutationKey() {
  return [
    '#Action=ActivateOrganizationsAccess',
    '/#Action=ActivateOrganizationsAccess',
    'POST',
  ] as const
}

export function getPostActionActivateOrganizationsAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ActivateOrganizationsAccess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ActivateOrganizationsAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionActivateOrganizationsAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ActivateOrganizationsAccess']['$post']>,
    ) {
      return parseResponse(client['#Action=ActivateOrganizationsAccess'].$post(args, options))
    },
  })
}

export function injectPostActionActivateOrganizationsAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ActivateOrganizationsAccess']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ActivateOrganizationsAccess']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionActivateOrganizationsAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionActivateTypeQueryKey(
  args: InferRequestType<(typeof client)['#Action=ActivateType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ActivateType', '/#Action=ActivateType', keyArgs] as const
}

export function getActionActivateTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ActivateType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ActivateType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ActivateType']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionActivateTypeQueryKey>
  >({
    queryKey: getActionActivateTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ActivateType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionActivateType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ActivateType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ActivateType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ActivateType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionActivateTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionActivateTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionActivateTypeMutationKey() {
  return ['#Action=ActivateType', '/#Action=ActivateType', 'POST'] as const
}

export function getPostActionActivateTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ActivateType']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ActivateType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionActivateTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ActivateType']['$post']>) {
      return parseResponse(client['#Action=ActivateType'].$post(args, options))
    },
  })
}

export function injectPostActionActivateType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ActivateType']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ActivateType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionActivateTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionBatchDescribeTypeConfigurationsQueryKey(
  args: InferRequestType<(typeof client)['#Action=BatchDescribeTypeConfigurations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=BatchDescribeTypeConfigurations',
    '/#Action=BatchDescribeTypeConfigurations',
    keyArgs,
  ] as const
}

export function getActionBatchDescribeTypeConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchDescribeTypeConfigurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=BatchDescribeTypeConfigurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BatchDescribeTypeConfigurations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionBatchDescribeTypeConfigurationsQueryKey>
  >({
    queryKey: getActionBatchDescribeTypeConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=BatchDescribeTypeConfigurations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionBatchDescribeTypeConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchDescribeTypeConfigurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=BatchDescribeTypeConfigurations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=BatchDescribeTypeConfigurations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionBatchDescribeTypeConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionBatchDescribeTypeConfigurationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionBatchDescribeTypeConfigurationsMutationKey() {
  return [
    '#Action=BatchDescribeTypeConfigurations',
    '/#Action=BatchDescribeTypeConfigurations',
    'POST',
  ] as const
}

export function getPostActionBatchDescribeTypeConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BatchDescribeTypeConfigurations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=BatchDescribeTypeConfigurations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionBatchDescribeTypeConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=BatchDescribeTypeConfigurations']['$post']>,
    ) {
      return parseResponse(client['#Action=BatchDescribeTypeConfigurations'].$post(args, options))
    },
  })
}

export function injectPostActionBatchDescribeTypeConfigurations<
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
                ReturnType<(typeof client)['#Action=BatchDescribeTypeConfigurations']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=BatchDescribeTypeConfigurations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionBatchDescribeTypeConfigurationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionCancelUpdateStackQueryKey(
  args: InferRequestType<(typeof client)['#Action=CancelUpdateStack']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CancelUpdateStack', '/#Action=CancelUpdateStack', keyArgs] as const
}

export function getActionCancelUpdateStackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CancelUpdateStack']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CancelUpdateStack']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CancelUpdateStack']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCancelUpdateStackQueryKey>
  >({
    queryKey: getActionCancelUpdateStackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CancelUpdateStack'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCancelUpdateStack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CancelUpdateStack']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CancelUpdateStack']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CancelUpdateStack']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCancelUpdateStackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionCancelUpdateStackQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCancelUpdateStackMutationKey() {
  return ['#Action=CancelUpdateStack', '/#Action=CancelUpdateStack', 'POST'] as const
}

export function getPostActionCancelUpdateStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CancelUpdateStack']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CancelUpdateStack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCancelUpdateStackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CancelUpdateStack']['$post']>,
    ) {
      return parseResponse(client['#Action=CancelUpdateStack'].$post(args, options))
    },
  })
}

export function injectPostActionCancelUpdateStack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CancelUpdateStack']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CancelUpdateStack']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionCancelUpdateStackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionContinueUpdateRollbackQueryKey(
  args: InferRequestType<(typeof client)['#Action=ContinueUpdateRollback']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ContinueUpdateRollback', '/#Action=ContinueUpdateRollback', keyArgs] as const
}

export function getActionContinueUpdateRollbackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ContinueUpdateRollback']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ContinueUpdateRollback']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ContinueUpdateRollback']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionContinueUpdateRollbackQueryKey>
  >({
    queryKey: getActionContinueUpdateRollbackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ContinueUpdateRollback'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionContinueUpdateRollback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ContinueUpdateRollback']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ContinueUpdateRollback']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ContinueUpdateRollback']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionContinueUpdateRollbackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionContinueUpdateRollbackQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionContinueUpdateRollbackMutationKey() {
  return ['#Action=ContinueUpdateRollback', '/#Action=ContinueUpdateRollback', 'POST'] as const
}

export function getPostActionContinueUpdateRollbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ContinueUpdateRollback']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ContinueUpdateRollback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionContinueUpdateRollbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ContinueUpdateRollback']['$post']>,
    ) {
      return parseResponse(client['#Action=ContinueUpdateRollback'].$post(args, options))
    },
  })
}

export function injectPostActionContinueUpdateRollback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ContinueUpdateRollback']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ContinueUpdateRollback']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionContinueUpdateRollbackMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionCreateChangeSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateChangeSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateChangeSet', '/#Action=CreateChangeSet', keyArgs] as const
}

export function getActionCreateChangeSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateChangeSet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateChangeSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateChangeSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateChangeSetQueryKey>
  >({
    queryKey: getActionCreateChangeSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateChangeSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCreateChangeSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateChangeSet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateChangeSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateChangeSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateChangeSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionCreateChangeSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCreateChangeSetMutationKey() {
  return ['#Action=CreateChangeSet', '/#Action=CreateChangeSet', 'POST'] as const
}

export function getPostActionCreateChangeSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateChangeSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateChangeSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateChangeSetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateChangeSet']['$post']>) {
      return parseResponse(client['#Action=CreateChangeSet'].$post(args, options))
    },
  })
}

export function injectPostActionCreateChangeSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateChangeSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateChangeSet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionCreateChangeSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionCreateStackQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateStack']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateStack', '/#Action=CreateStack', keyArgs] as const
}

export function getActionCreateStackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateStack']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateStack']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateStack']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateStackQueryKey>
  >({
    queryKey: getActionCreateStackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateStack'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCreateStack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateStack']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateStack']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateStack']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateStackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionCreateStackQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionCreateStackMutationKey() {
  return ['#Action=CreateStack', '/#Action=CreateStack', 'POST'] as const
}

export function getPostActionCreateStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateStack']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateStack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateStackMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateStack']['$post']>) {
      return parseResponse(client['#Action=CreateStack'].$post(args, options))
    },
  })
}

export function injectPostActionCreateStack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateStack']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateStack']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionCreateStackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionCreateStackInstancesQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateStackInstances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateStackInstances', '/#Action=CreateStackInstances', keyArgs] as const
}

export function getActionCreateStackInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateStackInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateStackInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateStackInstances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateStackInstancesQueryKey>
  >({
    queryKey: getActionCreateStackInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateStackInstances'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCreateStackInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateStackInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateStackInstances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateStackInstances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateStackInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionCreateStackInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCreateStackInstancesMutationKey() {
  return ['#Action=CreateStackInstances', '/#Action=CreateStackInstances', 'POST'] as const
}

export function getPostActionCreateStackInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateStackInstances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateStackInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateStackInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateStackInstances']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateStackInstances'].$post(args, options))
    },
  })
}

export function injectPostActionCreateStackInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateStackInstances']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateStackInstances']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionCreateStackInstancesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionCreateStackSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateStackSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateStackSet', '/#Action=CreateStackSet', keyArgs] as const
}

export function getActionCreateStackSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateStackSet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateStackSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateStackSet']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateStackSetQueryKey>
  >({
    queryKey: getActionCreateStackSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateStackSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionCreateStackSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateStackSet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateStackSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateStackSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateStackSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionCreateStackSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionCreateStackSetMutationKey() {
  return ['#Action=CreateStackSet', '/#Action=CreateStackSet', 'POST'] as const
}

export function getPostActionCreateStackSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateStackSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateStackSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateStackSetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateStackSet']['$post']>) {
      return parseResponse(client['#Action=CreateStackSet'].$post(args, options))
    },
  })
}

export function injectPostActionCreateStackSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateStackSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateStackSet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionCreateStackSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeactivateOrganizationsAccessQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeactivateOrganizationsAccess']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeactivateOrganizationsAccess',
    '/#Action=DeactivateOrganizationsAccess',
    keyArgs,
  ] as const
}

export function getActionDeactivateOrganizationsAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeactivateOrganizationsAccess']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeactivateOrganizationsAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeactivateOrganizationsAccess']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeactivateOrganizationsAccessQueryKey>
  >({
    queryKey: getActionDeactivateOrganizationsAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeactivateOrganizationsAccess'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeactivateOrganizationsAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeactivateOrganizationsAccess']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeactivateOrganizationsAccess']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeactivateOrganizationsAccess']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeactivateOrganizationsAccessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeactivateOrganizationsAccessQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeactivateOrganizationsAccessMutationKey() {
  return [
    '#Action=DeactivateOrganizationsAccess',
    '/#Action=DeactivateOrganizationsAccess',
    'POST',
  ] as const
}

export function getPostActionDeactivateOrganizationsAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeactivateOrganizationsAccess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeactivateOrganizationsAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeactivateOrganizationsAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeactivateOrganizationsAccess']['$post']>,
    ) {
      return parseResponse(client['#Action=DeactivateOrganizationsAccess'].$post(args, options))
    },
  })
}

export function injectPostActionDeactivateOrganizationsAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeactivateOrganizationsAccess']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeactivateOrganizationsAccess']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeactivateOrganizationsAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeactivateTypeQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeactivateType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeactivateType', '/#Action=DeactivateType', keyArgs] as const
}

export function getActionDeactivateTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeactivateType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeactivateType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeactivateType']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeactivateTypeQueryKey>
  >({
    queryKey: getActionDeactivateTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeactivateType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeactivateType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeactivateType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeactivateType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeactivateType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeactivateTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeactivateTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeactivateTypeMutationKey() {
  return ['#Action=DeactivateType', '/#Action=DeactivateType', 'POST'] as const
}

export function getPostActionDeactivateTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeactivateType']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeactivateType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeactivateTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeactivateType']['$post']>) {
      return parseResponse(client['#Action=DeactivateType'].$post(args, options))
    },
  })
}

export function injectPostActionDeactivateType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeactivateType']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeactivateType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeactivateTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeleteChangeSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteChangeSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteChangeSet', '/#Action=DeleteChangeSet', keyArgs] as const
}

export function getActionDeleteChangeSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteChangeSet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteChangeSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteChangeSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteChangeSetQueryKey>
  >({
    queryKey: getActionDeleteChangeSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteChangeSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteChangeSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteChangeSet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteChangeSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteChangeSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteChangeSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeleteChangeSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteChangeSetMutationKey() {
  return ['#Action=DeleteChangeSet', '/#Action=DeleteChangeSet', 'POST'] as const
}

export function getPostActionDeleteChangeSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteChangeSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteChangeSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteChangeSetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteChangeSet']['$post']>) {
      return parseResponse(client['#Action=DeleteChangeSet'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteChangeSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteChangeSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteChangeSet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteChangeSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeleteStackQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteStack']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteStack', '/#Action=DeleteStack', keyArgs] as const
}

export function getActionDeleteStackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteStack']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteStack']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteStack']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteStackQueryKey>
  >({
    queryKey: getActionDeleteStackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteStack'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteStack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteStack']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteStack']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteStack']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteStackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionDeleteStackQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionDeleteStackMutationKey() {
  return ['#Action=DeleteStack', '/#Action=DeleteStack', 'POST'] as const
}

export function getPostActionDeleteStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteStack']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteStack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteStackMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteStack']['$post']>) {
      return parseResponse(client['#Action=DeleteStack'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteStack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteStack']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteStack']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteStackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeleteStackInstancesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteStackInstances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteStackInstances', '/#Action=DeleteStackInstances', keyArgs] as const
}

export function getActionDeleteStackInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteStackInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteStackInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteStackInstances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteStackInstancesQueryKey>
  >({
    queryKey: getActionDeleteStackInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteStackInstances'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteStackInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteStackInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteStackInstances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteStackInstances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteStackInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeleteStackInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteStackInstancesMutationKey() {
  return ['#Action=DeleteStackInstances', '/#Action=DeleteStackInstances', 'POST'] as const
}

export function getPostActionDeleteStackInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteStackInstances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteStackInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteStackInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteStackInstances']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteStackInstances'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteStackInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteStackInstances']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteStackInstances']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteStackInstancesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeleteStackSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteStackSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteStackSet', '/#Action=DeleteStackSet', keyArgs] as const
}

export function getActionDeleteStackSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteStackSet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteStackSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteStackSet']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteStackSetQueryKey>
  >({
    queryKey: getActionDeleteStackSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteStackSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeleteStackSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteStackSet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteStackSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteStackSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteStackSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeleteStackSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeleteStackSetMutationKey() {
  return ['#Action=DeleteStackSet', '/#Action=DeleteStackSet', 'POST'] as const
}

export function getPostActionDeleteStackSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteStackSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteStackSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteStackSetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteStackSet']['$post']>) {
      return parseResponse(client['#Action=DeleteStackSet'].$post(args, options))
    },
  })
}

export function injectPostActionDeleteStackSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteStackSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteStackSet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteStackSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDeregisterTypeQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeregisterType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeregisterType', '/#Action=DeregisterType', keyArgs] as const
}

export function getActionDeregisterTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeregisterType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeregisterType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeregisterType']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeregisterTypeQueryKey>
  >({
    queryKey: getActionDeregisterTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeregisterType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDeregisterType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeregisterType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeregisterType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeregisterType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeregisterTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDeregisterTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDeregisterTypeMutationKey() {
  return ['#Action=DeregisterType', '/#Action=DeregisterType', 'POST'] as const
}

export function getPostActionDeregisterTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeregisterType']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeregisterType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeregisterTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeregisterType']['$post']>) {
      return parseResponse(client['#Action=DeregisterType'].$post(args, options))
    },
  })
}

export function injectPostActionDeregisterType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeregisterType']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeregisterType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeregisterTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeAccountLimitsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeAccountLimits', '/#Action=DescribeAccountLimits', keyArgs] as const
}

export function getActionDescribeAccountLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAccountLimitsQueryKey>
  >({
    queryKey: getActionDescribeAccountLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeAccountLimits'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeAccountLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAccountLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeAccountLimitsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeAccountLimitsMutationKey() {
  return ['#Action=DescribeAccountLimits', '/#Action=DescribeAccountLimits', 'POST'] as const
}

export function getPostActionDescribeAccountLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAccountLimitsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeAccountLimits'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeAccountLimits<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAccountLimits']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeAccountLimitsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeChangeSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeChangeSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeChangeSet', '/#Action=DescribeChangeSet', keyArgs] as const
}

export function getActionDescribeChangeSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeChangeSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeChangeSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeChangeSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeChangeSetQueryKey>
  >({
    queryKey: getActionDescribeChangeSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeChangeSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeChangeSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeChangeSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeChangeSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeChangeSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeChangeSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeChangeSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeChangeSetMutationKey() {
  return ['#Action=DescribeChangeSet', '/#Action=DescribeChangeSet', 'POST'] as const
}

export function getPostActionDescribeChangeSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeChangeSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeChangeSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeChangeSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeChangeSet']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeChangeSet'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeChangeSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeChangeSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeChangeSet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeChangeSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeChangeSetHooksQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeChangeSetHooks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeChangeSetHooks', '/#Action=DescribeChangeSetHooks', keyArgs] as const
}

export function getActionDescribeChangeSetHooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeChangeSetHooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeChangeSetHooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeChangeSetHooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeChangeSetHooksQueryKey>
  >({
    queryKey: getActionDescribeChangeSetHooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeChangeSetHooks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeChangeSetHooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeChangeSetHooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeChangeSetHooks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeChangeSetHooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeChangeSetHooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeChangeSetHooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeChangeSetHooksMutationKey() {
  return ['#Action=DescribeChangeSetHooks', '/#Action=DescribeChangeSetHooks', 'POST'] as const
}

export function getPostActionDescribeChangeSetHooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeChangeSetHooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeChangeSetHooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeChangeSetHooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeChangeSetHooks']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeChangeSetHooks'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeChangeSetHooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeChangeSetHooks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeChangeSetHooks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeChangeSetHooksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeOrganizationsAccessQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeOrganizationsAccess']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeOrganizationsAccess',
    '/#Action=DescribeOrganizationsAccess',
    keyArgs,
  ] as const
}

export function getActionDescribeOrganizationsAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeOrganizationsAccess']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeOrganizationsAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeOrganizationsAccess']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeOrganizationsAccessQueryKey>
  >({
    queryKey: getActionDescribeOrganizationsAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeOrganizationsAccess'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeOrganizationsAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeOrganizationsAccess']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeOrganizationsAccess']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeOrganizationsAccess']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeOrganizationsAccessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeOrganizationsAccessQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeOrganizationsAccessMutationKey() {
  return [
    '#Action=DescribeOrganizationsAccess',
    '/#Action=DescribeOrganizationsAccess',
    'POST',
  ] as const
}

export function getPostActionDescribeOrganizationsAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeOrganizationsAccess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeOrganizationsAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeOrganizationsAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeOrganizationsAccess']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeOrganizationsAccess'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeOrganizationsAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeOrganizationsAccess']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeOrganizationsAccess']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeOrganizationsAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribePublisherQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribePublisher']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribePublisher', '/#Action=DescribePublisher', keyArgs] as const
}

export function getActionDescribePublisherQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribePublisher']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribePublisher']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribePublisher']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribePublisherQueryKey>
  >({
    queryKey: getActionDescribePublisherQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribePublisher'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribePublisher<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribePublisher']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribePublisher']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribePublisher']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribePublisherQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribePublisherQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribePublisherMutationKey() {
  return ['#Action=DescribePublisher', '/#Action=DescribePublisher', 'POST'] as const
}

export function getPostActionDescribePublisherMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribePublisher']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribePublisher']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribePublisherMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribePublisher']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribePublisher'].$post(args, options))
    },
  })
}

export function injectPostActionDescribePublisher<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribePublisher']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribePublisher']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribePublisherMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeStackDriftDetectionStatusQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeStackDriftDetectionStatus']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeStackDriftDetectionStatus',
    '/#Action=DescribeStackDriftDetectionStatus',
    keyArgs,
  ] as const
}

export function getActionDescribeStackDriftDetectionStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeStackDriftDetectionStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeStackDriftDetectionStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackDriftDetectionStatus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeStackDriftDetectionStatusQueryKey>
  >({
    queryKey: getActionDescribeStackDriftDetectionStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeStackDriftDetectionStatus'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeStackDriftDetectionStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeStackDriftDetectionStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DescribeStackDriftDetectionStatus']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DescribeStackDriftDetectionStatus']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeStackDriftDetectionStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeStackDriftDetectionStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeStackDriftDetectionStatusMutationKey() {
  return [
    '#Action=DescribeStackDriftDetectionStatus',
    '/#Action=DescribeStackDriftDetectionStatus',
    'POST',
  ] as const
}

export function getPostActionDescribeStackDriftDetectionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackDriftDetectionStatus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeStackDriftDetectionStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeStackDriftDetectionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeStackDriftDetectionStatus']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeStackDriftDetectionStatus'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeStackDriftDetectionStatus<
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
                ReturnType<(typeof client)['#Action=DescribeStackDriftDetectionStatus']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeStackDriftDetectionStatus']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeStackDriftDetectionStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeStackEventsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeStackEvents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeStackEvents', '/#Action=DescribeStackEvents', keyArgs] as const
}

export function getActionDescribeStackEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeStackEvents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeStackEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackEvents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeStackEventsQueryKey>
  >({
    queryKey: getActionDescribeStackEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeStackEvents'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeStackEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeStackEvents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeStackEvents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStackEvents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeStackEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeStackEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeStackEventsMutationKey() {
  return ['#Action=DescribeStackEvents', '/#Action=DescribeStackEvents', 'POST'] as const
}

export function getPostActionDescribeStackEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackEvents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeStackEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeStackEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeStackEvents']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeStackEvents'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeStackEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStackEvents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeStackEvents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeStackEventsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeStackInstanceQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeStackInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeStackInstance', '/#Action=DescribeStackInstance', keyArgs] as const
}

export function getActionDescribeStackInstanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeStackInstance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeStackInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackInstance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeStackInstanceQueryKey>
  >({
    queryKey: getActionDescribeStackInstanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeStackInstance'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeStackInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeStackInstance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeStackInstance']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStackInstance']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeStackInstanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeStackInstanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeStackInstanceMutationKey() {
  return ['#Action=DescribeStackInstance', '/#Action=DescribeStackInstance', 'POST'] as const
}

export function getPostActionDescribeStackInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackInstance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeStackInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeStackInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeStackInstance']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeStackInstance'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeStackInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStackInstance']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeStackInstance']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeStackInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeStackResourceQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeStackResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeStackResource', '/#Action=DescribeStackResource', keyArgs] as const
}

export function getActionDescribeStackResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeStackResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeStackResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackResource']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeStackResourceQueryKey>
  >({
    queryKey: getActionDescribeStackResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeStackResource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeStackResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeStackResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeStackResource']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStackResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeStackResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeStackResourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeStackResourceMutationKey() {
  return ['#Action=DescribeStackResource', '/#Action=DescribeStackResource', 'POST'] as const
}

export function getPostActionDescribeStackResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeStackResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeStackResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeStackResource']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeStackResource'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeStackResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStackResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeStackResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeStackResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeStackResourceDriftsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeStackResourceDrifts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeStackResourceDrifts',
    '/#Action=DescribeStackResourceDrifts',
    keyArgs,
  ] as const
}

export function getActionDescribeStackResourceDriftsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeStackResourceDrifts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeStackResourceDrifts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackResourceDrifts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeStackResourceDriftsQueryKey>
  >({
    queryKey: getActionDescribeStackResourceDriftsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeStackResourceDrifts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeStackResourceDrifts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeStackResourceDrifts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeStackResourceDrifts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStackResourceDrifts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeStackResourceDriftsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeStackResourceDriftsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeStackResourceDriftsMutationKey() {
  return [
    '#Action=DescribeStackResourceDrifts',
    '/#Action=DescribeStackResourceDrifts',
    'POST',
  ] as const
}

export function getPostActionDescribeStackResourceDriftsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackResourceDrifts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeStackResourceDrifts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeStackResourceDriftsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeStackResourceDrifts']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeStackResourceDrifts'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeStackResourceDrifts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStackResourceDrifts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeStackResourceDrifts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeStackResourceDriftsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeStackResourcesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeStackResources']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeStackResources', '/#Action=DescribeStackResources', keyArgs] as const
}

export function getActionDescribeStackResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeStackResources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeStackResources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackResources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeStackResourcesQueryKey>
  >({
    queryKey: getActionDescribeStackResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeStackResources'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeStackResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeStackResources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeStackResources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStackResources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeStackResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeStackResourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeStackResourcesMutationKey() {
  return ['#Action=DescribeStackResources', '/#Action=DescribeStackResources', 'POST'] as const
}

export function getPostActionDescribeStackResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackResources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeStackResources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeStackResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeStackResources']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeStackResources'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeStackResources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStackResources']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeStackResources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeStackResourcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeStackSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeStackSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeStackSet', '/#Action=DescribeStackSet', keyArgs] as const
}

export function getActionDescribeStackSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeStackSet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeStackSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeStackSetQueryKey>
  >({
    queryKey: getActionDescribeStackSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeStackSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeStackSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeStackSet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeStackSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStackSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeStackSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeStackSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeStackSetMutationKey() {
  return ['#Action=DescribeStackSet', '/#Action=DescribeStackSet', 'POST'] as const
}

export function getPostActionDescribeStackSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeStackSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeStackSetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeStackSet']['$post']>) {
      return parseResponse(client['#Action=DescribeStackSet'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeStackSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStackSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeStackSet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeStackSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeStackSetOperationQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeStackSetOperation']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeStackSetOperation',
    '/#Action=DescribeStackSetOperation',
    keyArgs,
  ] as const
}

export function getActionDescribeStackSetOperationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeStackSetOperation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeStackSetOperation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackSetOperation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeStackSetOperationQueryKey>
  >({
    queryKey: getActionDescribeStackSetOperationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeStackSetOperation'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeStackSetOperation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeStackSetOperation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeStackSetOperation']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStackSetOperation']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeStackSetOperationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeStackSetOperationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeStackSetOperationMutationKey() {
  return [
    '#Action=DescribeStackSetOperation',
    '/#Action=DescribeStackSetOperation',
    'POST',
  ] as const
}

export function getPostActionDescribeStackSetOperationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStackSetOperation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeStackSetOperation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeStackSetOperationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeStackSetOperation']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeStackSetOperation'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeStackSetOperation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStackSetOperation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeStackSetOperation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeStackSetOperationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeStacksQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeStacks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeStacks', '/#Action=DescribeStacks', keyArgs] as const
}

export function getActionDescribeStacksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeStacks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeStacks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeStacks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeStacksQueryKey>
  >({
    queryKey: getActionDescribeStacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeStacks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeStacks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeStacks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeStacks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStacks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeStacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeStacksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeStacksMutationKey() {
  return ['#Action=DescribeStacks', '/#Action=DescribeStacks', 'POST'] as const
}

export function getPostActionDescribeStacksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeStacks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeStacks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeStacksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeStacks']['$post']>) {
      return parseResponse(client['#Action=DescribeStacks'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeStacks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeStacks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeStacks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeStacksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeTypeQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeType', '/#Action=DescribeType', keyArgs] as const
}

export function getActionDescribeTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeType']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeTypeQueryKey>
  >({
    queryKey: getActionDescribeTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionDescribeTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionDescribeTypeMutationKey() {
  return ['#Action=DescribeType', '/#Action=DescribeType', 'POST'] as const
}

export function getPostActionDescribeTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeType']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeType']['$post']>) {
      return parseResponse(client['#Action=DescribeType'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeType']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDescribeTypeRegistrationQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeTypeRegistration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeTypeRegistration', '/#Action=DescribeTypeRegistration', keyArgs] as const
}

export function getActionDescribeTypeRegistrationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeTypeRegistration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeTypeRegistration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeTypeRegistration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeTypeRegistrationQueryKey>
  >({
    queryKey: getActionDescribeTypeRegistrationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeTypeRegistration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDescribeTypeRegistration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeTypeRegistration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeTypeRegistration']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeTypeRegistration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeTypeRegistrationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDescribeTypeRegistrationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDescribeTypeRegistrationMutationKey() {
  return ['#Action=DescribeTypeRegistration', '/#Action=DescribeTypeRegistration', 'POST'] as const
}

export function getPostActionDescribeTypeRegistrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeTypeRegistration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeTypeRegistration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeTypeRegistrationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeTypeRegistration']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeTypeRegistration'].$post(args, options))
    },
  })
}

export function injectPostActionDescribeTypeRegistration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeTypeRegistration']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeTypeRegistration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeTypeRegistrationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDetectStackDriftQueryKey(
  args: InferRequestType<(typeof client)['#Action=DetectStackDrift']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DetectStackDrift', '/#Action=DetectStackDrift', keyArgs] as const
}

export function getActionDetectStackDriftQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DetectStackDrift']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DetectStackDrift']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetectStackDrift']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDetectStackDriftQueryKey>
  >({
    queryKey: getActionDetectStackDriftQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DetectStackDrift'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDetectStackDrift<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DetectStackDrift']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DetectStackDrift']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DetectStackDrift']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDetectStackDriftQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDetectStackDriftQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDetectStackDriftMutationKey() {
  return ['#Action=DetectStackDrift', '/#Action=DetectStackDrift', 'POST'] as const
}

export function getPostActionDetectStackDriftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetectStackDrift']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DetectStackDrift']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDetectStackDriftMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DetectStackDrift']['$post']>) {
      return parseResponse(client['#Action=DetectStackDrift'].$post(args, options))
    },
  })
}

export function injectPostActionDetectStackDrift<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DetectStackDrift']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DetectStackDrift']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDetectStackDriftMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDetectStackResourceDriftQueryKey(
  args: InferRequestType<(typeof client)['#Action=DetectStackResourceDrift']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DetectStackResourceDrift', '/#Action=DetectStackResourceDrift', keyArgs] as const
}

export function getActionDetectStackResourceDriftQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetectStackResourceDrift']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DetectStackResourceDrift']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetectStackResourceDrift']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDetectStackResourceDriftQueryKey>
  >({
    queryKey: getActionDetectStackResourceDriftQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DetectStackResourceDrift'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDetectStackResourceDrift<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetectStackResourceDrift']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DetectStackResourceDrift']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DetectStackResourceDrift']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDetectStackResourceDriftQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDetectStackResourceDriftQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDetectStackResourceDriftMutationKey() {
  return ['#Action=DetectStackResourceDrift', '/#Action=DetectStackResourceDrift', 'POST'] as const
}

export function getPostActionDetectStackResourceDriftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetectStackResourceDrift']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DetectStackResourceDrift']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDetectStackResourceDriftMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DetectStackResourceDrift']['$post']>,
    ) {
      return parseResponse(client['#Action=DetectStackResourceDrift'].$post(args, options))
    },
  })
}

export function injectPostActionDetectStackResourceDrift<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DetectStackResourceDrift']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DetectStackResourceDrift']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDetectStackResourceDriftMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionDetectStackSetDriftQueryKey(
  args: InferRequestType<(typeof client)['#Action=DetectStackSetDrift']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DetectStackSetDrift', '/#Action=DetectStackSetDrift', keyArgs] as const
}

export function getActionDetectStackSetDriftQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetectStackSetDrift']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DetectStackSetDrift']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetectStackSetDrift']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDetectStackSetDriftQueryKey>
  >({
    queryKey: getActionDetectStackSetDriftQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DetectStackSetDrift'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionDetectStackSetDrift<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DetectStackSetDrift']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DetectStackSetDrift']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DetectStackSetDrift']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDetectStackSetDriftQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionDetectStackSetDriftQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionDetectStackSetDriftMutationKey() {
  return ['#Action=DetectStackSetDrift', '/#Action=DetectStackSetDrift', 'POST'] as const
}

export function getPostActionDetectStackSetDriftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DetectStackSetDrift']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DetectStackSetDrift']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDetectStackSetDriftMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DetectStackSetDrift']['$post']>,
    ) {
      return parseResponse(client['#Action=DetectStackSetDrift'].$post(args, options))
    },
  })
}

export function injectPostActionDetectStackSetDrift<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DetectStackSetDrift']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DetectStackSetDrift']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDetectStackSetDriftMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionEstimateTemplateCostQueryKey(
  args: InferRequestType<(typeof client)['#Action=EstimateTemplateCost']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=EstimateTemplateCost', '/#Action=EstimateTemplateCost', keyArgs] as const
}

export function getActionEstimateTemplateCostQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=EstimateTemplateCost']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=EstimateTemplateCost']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=EstimateTemplateCost']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionEstimateTemplateCostQueryKey>
  >({
    queryKey: getActionEstimateTemplateCostQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=EstimateTemplateCost'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionEstimateTemplateCost<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=EstimateTemplateCost']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=EstimateTemplateCost']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=EstimateTemplateCost']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionEstimateTemplateCostQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionEstimateTemplateCostQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionEstimateTemplateCostMutationKey() {
  return ['#Action=EstimateTemplateCost', '/#Action=EstimateTemplateCost', 'POST'] as const
}

export function getPostActionEstimateTemplateCostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=EstimateTemplateCost']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=EstimateTemplateCost']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionEstimateTemplateCostMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=EstimateTemplateCost']['$post']>,
    ) {
      return parseResponse(client['#Action=EstimateTemplateCost'].$post(args, options))
    },
  })
}

export function injectPostActionEstimateTemplateCost<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=EstimateTemplateCost']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=EstimateTemplateCost']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionEstimateTemplateCostMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionExecuteChangeSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=ExecuteChangeSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ExecuteChangeSet', '/#Action=ExecuteChangeSet', keyArgs] as const
}

export function getActionExecuteChangeSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ExecuteChangeSet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ExecuteChangeSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ExecuteChangeSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionExecuteChangeSetQueryKey>
  >({
    queryKey: getActionExecuteChangeSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ExecuteChangeSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionExecuteChangeSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ExecuteChangeSet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ExecuteChangeSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ExecuteChangeSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionExecuteChangeSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionExecuteChangeSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionExecuteChangeSetMutationKey() {
  return ['#Action=ExecuteChangeSet', '/#Action=ExecuteChangeSet', 'POST'] as const
}

export function getPostActionExecuteChangeSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ExecuteChangeSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ExecuteChangeSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionExecuteChangeSetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ExecuteChangeSet']['$post']>) {
      return parseResponse(client['#Action=ExecuteChangeSet'].$post(args, options))
    },
  })
}

export function injectPostActionExecuteChangeSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ExecuteChangeSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ExecuteChangeSet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionExecuteChangeSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionGetStackPolicyQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetStackPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetStackPolicy', '/#Action=GetStackPolicy', keyArgs] as const
}

export function getActionGetStackPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetStackPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetStackPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetStackPolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetStackPolicyQueryKey>
  >({
    queryKey: getActionGetStackPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetStackPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionGetStackPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetStackPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=GetStackPolicy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetStackPolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetStackPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionGetStackPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionGetStackPolicyMutationKey() {
  return ['#Action=GetStackPolicy', '/#Action=GetStackPolicy', 'POST'] as const
}

export function getPostActionGetStackPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetStackPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetStackPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetStackPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetStackPolicy']['$post']>) {
      return parseResponse(client['#Action=GetStackPolicy'].$post(args, options))
    },
  })
}

export function injectPostActionGetStackPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetStackPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetStackPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionGetStackPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionGetTemplateQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetTemplate', '/#Action=GetTemplate', keyArgs] as const
}

export function getActionGetTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetTemplateQueryKey>
  >({
    queryKey: getActionGetTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetTemplate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionGetTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=GetTemplate']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetTemplateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionGetTemplateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionGetTemplateMutationKey() {
  return ['#Action=GetTemplate', '/#Action=GetTemplate', 'POST'] as const
}

export function getPostActionGetTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetTemplateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetTemplate']['$post']>) {
      return parseResponse(client['#Action=GetTemplate'].$post(args, options))
    },
  })
}

export function injectPostActionGetTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetTemplate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetTemplate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionGetTemplateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionGetTemplateSummaryQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetTemplateSummary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetTemplateSummary', '/#Action=GetTemplateSummary', keyArgs] as const
}

export function getActionGetTemplateSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetTemplateSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetTemplateSummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetTemplateSummary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetTemplateSummaryQueryKey>
  >({
    queryKey: getActionGetTemplateSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetTemplateSummary'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionGetTemplateSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetTemplateSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=GetTemplateSummary']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetTemplateSummary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetTemplateSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionGetTemplateSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionGetTemplateSummaryMutationKey() {
  return ['#Action=GetTemplateSummary', '/#Action=GetTemplateSummary', 'POST'] as const
}

export function getPostActionGetTemplateSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetTemplateSummary']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetTemplateSummary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetTemplateSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetTemplateSummary']['$post']>,
    ) {
      return parseResponse(client['#Action=GetTemplateSummary'].$post(args, options))
    },
  })
}

export function injectPostActionGetTemplateSummary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetTemplateSummary']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetTemplateSummary']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionGetTemplateSummaryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionImportStacksToStackSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=ImportStacksToStackSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ImportStacksToStackSet', '/#Action=ImportStacksToStackSet', keyArgs] as const
}

export function getActionImportStacksToStackSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ImportStacksToStackSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ImportStacksToStackSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ImportStacksToStackSet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionImportStacksToStackSetQueryKey>
  >({
    queryKey: getActionImportStacksToStackSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ImportStacksToStackSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionImportStacksToStackSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ImportStacksToStackSet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ImportStacksToStackSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ImportStacksToStackSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionImportStacksToStackSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionImportStacksToStackSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionImportStacksToStackSetMutationKey() {
  return ['#Action=ImportStacksToStackSet', '/#Action=ImportStacksToStackSet', 'POST'] as const
}

export function getPostActionImportStacksToStackSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ImportStacksToStackSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ImportStacksToStackSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionImportStacksToStackSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ImportStacksToStackSet']['$post']>,
    ) {
      return parseResponse(client['#Action=ImportStacksToStackSet'].$post(args, options))
    },
  })
}

export function injectPostActionImportStacksToStackSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ImportStacksToStackSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ImportStacksToStackSet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionImportStacksToStackSetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListChangeSetsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListChangeSets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListChangeSets', '/#Action=ListChangeSets', keyArgs] as const
}

export function getActionListChangeSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListChangeSets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListChangeSets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListChangeSets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListChangeSetsQueryKey>
  >({
    queryKey: getActionListChangeSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListChangeSets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListChangeSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListChangeSets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListChangeSets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListChangeSets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListChangeSetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionListChangeSetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionListChangeSetsMutationKey() {
  return ['#Action=ListChangeSets', '/#Action=ListChangeSets', 'POST'] as const
}

export function getPostActionListChangeSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListChangeSets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListChangeSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListChangeSetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListChangeSets']['$post']>) {
      return parseResponse(client['#Action=ListChangeSets'].$post(args, options))
    },
  })
}

export function injectPostActionListChangeSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListChangeSets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListChangeSets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListChangeSetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListExportsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListExports']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListExports', '/#Action=ListExports', keyArgs] as const
}

export function getActionListExportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListExports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListExports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListExports']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListExportsQueryKey>
  >({
    queryKey: getActionListExportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListExports'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListExports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListExports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListExports']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListExports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListExportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionListExportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionListExportsMutationKey() {
  return ['#Action=ListExports', '/#Action=ListExports', 'POST'] as const
}

export function getPostActionListExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListExports']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListExports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListExportsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListExports']['$post']>) {
      return parseResponse(client['#Action=ListExports'].$post(args, options))
    },
  })
}

export function injectPostActionListExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListExports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListExports']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListExportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListImportsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListImports']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListImports', '/#Action=ListImports', keyArgs] as const
}

export function getActionListImportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListImports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListImports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListImports']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListImportsQueryKey>
  >({
    queryKey: getActionListImportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListImports'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListImports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListImports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListImports']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListImports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListImportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionListImportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionListImportsMutationKey() {
  return ['#Action=ListImports', '/#Action=ListImports', 'POST'] as const
}

export function getPostActionListImportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListImports']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListImports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListImportsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListImports']['$post']>) {
      return parseResponse(client['#Action=ListImports'].$post(args, options))
    },
  })
}

export function injectPostActionListImports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListImports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListImports']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListImportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListStackInstanceResourceDriftsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListStackInstanceResourceDrifts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListStackInstanceResourceDrifts',
    '/#Action=ListStackInstanceResourceDrifts',
    keyArgs,
  ] as const
}

export function getActionListStackInstanceResourceDriftsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListStackInstanceResourceDrifts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListStackInstanceResourceDrifts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListStackInstanceResourceDrifts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListStackInstanceResourceDriftsQueryKey>
  >({
    queryKey: getActionListStackInstanceResourceDriftsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListStackInstanceResourceDrifts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListStackInstanceResourceDrifts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListStackInstanceResourceDrifts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListStackInstanceResourceDrifts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=ListStackInstanceResourceDrifts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListStackInstanceResourceDriftsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionListStackInstanceResourceDriftsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionListStackInstanceResourceDriftsMutationKey() {
  return [
    '#Action=ListStackInstanceResourceDrifts',
    '/#Action=ListStackInstanceResourceDrifts',
    'POST',
  ] as const
}

export function getPostActionListStackInstanceResourceDriftsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListStackInstanceResourceDrifts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListStackInstanceResourceDrifts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListStackInstanceResourceDriftsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListStackInstanceResourceDrifts']['$post']>,
    ) {
      return parseResponse(client['#Action=ListStackInstanceResourceDrifts'].$post(args, options))
    },
  })
}

export function injectPostActionListStackInstanceResourceDrifts<
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
                ReturnType<(typeof client)['#Action=ListStackInstanceResourceDrifts']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListStackInstanceResourceDrifts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListStackInstanceResourceDriftsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListStackInstancesQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListStackInstances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListStackInstances', '/#Action=ListStackInstances', keyArgs] as const
}

export function getActionListStackInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListStackInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListStackInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListStackInstances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListStackInstancesQueryKey>
  >({
    queryKey: getActionListStackInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListStackInstances'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListStackInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListStackInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListStackInstances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListStackInstances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListStackInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionListStackInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionListStackInstancesMutationKey() {
  return ['#Action=ListStackInstances', '/#Action=ListStackInstances', 'POST'] as const
}

export function getPostActionListStackInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListStackInstances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListStackInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListStackInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListStackInstances']['$post']>,
    ) {
      return parseResponse(client['#Action=ListStackInstances'].$post(args, options))
    },
  })
}

export function injectPostActionListStackInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListStackInstances']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListStackInstances']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListStackInstancesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListStackResourcesQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListStackResources']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListStackResources', '/#Action=ListStackResources', keyArgs] as const
}

export function getActionListStackResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListStackResources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListStackResources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListStackResources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListStackResourcesQueryKey>
  >({
    queryKey: getActionListStackResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListStackResources'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListStackResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListStackResources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListStackResources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListStackResources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListStackResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionListStackResourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionListStackResourcesMutationKey() {
  return ['#Action=ListStackResources', '/#Action=ListStackResources', 'POST'] as const
}

export function getPostActionListStackResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListStackResources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListStackResources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListStackResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListStackResources']['$post']>,
    ) {
      return parseResponse(client['#Action=ListStackResources'].$post(args, options))
    },
  })
}

export function injectPostActionListStackResources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListStackResources']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListStackResources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListStackResourcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListStackSetOperationResultsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListStackSetOperationResults']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListStackSetOperationResults',
    '/#Action=ListStackSetOperationResults',
    keyArgs,
  ] as const
}

export function getActionListStackSetOperationResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListStackSetOperationResults']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListStackSetOperationResults']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListStackSetOperationResults']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListStackSetOperationResultsQueryKey>
  >({
    queryKey: getActionListStackSetOperationResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListStackSetOperationResults'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListStackSetOperationResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListStackSetOperationResults']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListStackSetOperationResults']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListStackSetOperationResults']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListStackSetOperationResultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionListStackSetOperationResultsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionListStackSetOperationResultsMutationKey() {
  return [
    '#Action=ListStackSetOperationResults',
    '/#Action=ListStackSetOperationResults',
    'POST',
  ] as const
}

export function getPostActionListStackSetOperationResultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListStackSetOperationResults']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListStackSetOperationResults']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListStackSetOperationResultsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListStackSetOperationResults']['$post']>,
    ) {
      return parseResponse(client['#Action=ListStackSetOperationResults'].$post(args, options))
    },
  })
}

export function injectPostActionListStackSetOperationResults<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListStackSetOperationResults']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListStackSetOperationResults']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListStackSetOperationResultsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListStackSetOperationsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListStackSetOperations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListStackSetOperations', '/#Action=ListStackSetOperations', keyArgs] as const
}

export function getActionListStackSetOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListStackSetOperations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListStackSetOperations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListStackSetOperations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListStackSetOperationsQueryKey>
  >({
    queryKey: getActionListStackSetOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListStackSetOperations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListStackSetOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListStackSetOperations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListStackSetOperations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListStackSetOperations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListStackSetOperationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionListStackSetOperationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionListStackSetOperationsMutationKey() {
  return ['#Action=ListStackSetOperations', '/#Action=ListStackSetOperations', 'POST'] as const
}

export function getPostActionListStackSetOperationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListStackSetOperations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListStackSetOperations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListStackSetOperationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListStackSetOperations']['$post']>,
    ) {
      return parseResponse(client['#Action=ListStackSetOperations'].$post(args, options))
    },
  })
}

export function injectPostActionListStackSetOperations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListStackSetOperations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListStackSetOperations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListStackSetOperationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListStackSetsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListStackSets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListStackSets', '/#Action=ListStackSets', keyArgs] as const
}

export function getActionListStackSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListStackSets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListStackSets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListStackSets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListStackSetsQueryKey>
  >({
    queryKey: getActionListStackSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListStackSets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListStackSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListStackSets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListStackSets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListStackSets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListStackSetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionListStackSetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionListStackSetsMutationKey() {
  return ['#Action=ListStackSets', '/#Action=ListStackSets', 'POST'] as const
}

export function getPostActionListStackSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListStackSets']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListStackSets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListStackSetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListStackSets']['$post']>) {
      return parseResponse(client['#Action=ListStackSets'].$post(args, options))
    },
  })
}

export function injectPostActionListStackSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListStackSets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListStackSets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListStackSetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListStacksQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListStacks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListStacks', '/#Action=ListStacks', keyArgs] as const
}

export function getActionListStacksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListStacks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListStacks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListStacks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListStacksQueryKey>
  >({
    queryKey: getActionListStacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListStacks'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectActionListStacks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListStacks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListStacks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListStacks']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListStacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionListStacksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionListStacksMutationKey() {
  return ['#Action=ListStacks', '/#Action=ListStacks', 'POST'] as const
}

export function getPostActionListStacksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListStacks']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListStacks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListStacksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListStacks']['$post']>) {
      return parseResponse(client['#Action=ListStacks'].$post(args, options))
    },
  })
}

export function injectPostActionListStacks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListStacks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListStacks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListStacksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListTypeRegistrationsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListTypeRegistrations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListTypeRegistrations', '/#Action=ListTypeRegistrations', keyArgs] as const
}

export function getActionListTypeRegistrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListTypeRegistrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTypeRegistrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListTypeRegistrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListTypeRegistrationsQueryKey>
  >({
    queryKey: getActionListTypeRegistrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListTypeRegistrations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListTypeRegistrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListTypeRegistrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListTypeRegistrations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTypeRegistrations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListTypeRegistrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionListTypeRegistrationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionListTypeRegistrationsMutationKey() {
  return ['#Action=ListTypeRegistrations', '/#Action=ListTypeRegistrations', 'POST'] as const
}

export function getPostActionListTypeRegistrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListTypeRegistrations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListTypeRegistrations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListTypeRegistrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListTypeRegistrations']['$post']>,
    ) {
      return parseResponse(client['#Action=ListTypeRegistrations'].$post(args, options))
    },
  })
}

export function injectPostActionListTypeRegistrations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTypeRegistrations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListTypeRegistrations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListTypeRegistrationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListTypeVersionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListTypeVersions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListTypeVersions', '/#Action=ListTypeVersions', keyArgs] as const
}

export function getActionListTypeVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTypeVersions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTypeVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListTypeVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListTypeVersionsQueryKey>
  >({
    queryKey: getActionListTypeVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListTypeVersions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionListTypeVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTypeVersions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListTypeVersions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTypeVersions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListTypeVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionListTypeVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionListTypeVersionsMutationKey() {
  return ['#Action=ListTypeVersions', '/#Action=ListTypeVersions', 'POST'] as const
}

export function getPostActionListTypeVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListTypeVersions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListTypeVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListTypeVersionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListTypeVersions']['$post']>) {
      return parseResponse(client['#Action=ListTypeVersions'].$post(args, options))
    },
  })
}

export function injectPostActionListTypeVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTypeVersions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListTypeVersions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListTypeVersionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionListTypesQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListTypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListTypes', '/#Action=ListTypes', keyArgs] as const
}

export function getActionListTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTypes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTypes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListTypesQueryKey>
  >({
    queryKey: getActionListTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListTypes'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectActionListTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTypes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListTypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTypes']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionListTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionListTypesMutationKey() {
  return ['#Action=ListTypes', '/#Action=ListTypes', 'POST'] as const
}

export function getPostActionListTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTypes']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListTypes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListTypesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListTypes']['$post']>) {
      return parseResponse(client['#Action=ListTypes'].$post(args, options))
    },
  })
}

export function injectPostActionListTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTypes']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListTypes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListTypesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionPublishTypeQueryKey(
  args: InferRequestType<(typeof client)['#Action=PublishType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PublishType', '/#Action=PublishType', keyArgs] as const
}

export function getActionPublishTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PublishType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PublishType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PublishType']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPublishTypeQueryKey>
  >({
    queryKey: getActionPublishTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PublishType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionPublishType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PublishType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=PublishType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PublishType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPublishTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionPublishTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionPublishTypeMutationKey() {
  return ['#Action=PublishType', '/#Action=PublishType', 'POST'] as const
}

export function getPostActionPublishTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PublishType']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PublishType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPublishTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PublishType']['$post']>) {
      return parseResponse(client['#Action=PublishType'].$post(args, options))
    },
  })
}

export function injectPostActionPublishType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PublishType']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PublishType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionPublishTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionRecordHandlerProgressQueryKey(
  args: InferRequestType<(typeof client)['#Action=RecordHandlerProgress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RecordHandlerProgress', '/#Action=RecordHandlerProgress', keyArgs] as const
}

export function getActionRecordHandlerProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RecordHandlerProgress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RecordHandlerProgress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RecordHandlerProgress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRecordHandlerProgressQueryKey>
  >({
    queryKey: getActionRecordHandlerProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RecordHandlerProgress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionRecordHandlerProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RecordHandlerProgress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RecordHandlerProgress']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RecordHandlerProgress']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRecordHandlerProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionRecordHandlerProgressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionRecordHandlerProgressMutationKey() {
  return ['#Action=RecordHandlerProgress', '/#Action=RecordHandlerProgress', 'POST'] as const
}

export function getPostActionRecordHandlerProgressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RecordHandlerProgress']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RecordHandlerProgress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRecordHandlerProgressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RecordHandlerProgress']['$post']>,
    ) {
      return parseResponse(client['#Action=RecordHandlerProgress'].$post(args, options))
    },
  })
}

export function injectPostActionRecordHandlerProgress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RecordHandlerProgress']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=RecordHandlerProgress']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionRecordHandlerProgressMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionRegisterPublisherQueryKey(
  args: InferRequestType<(typeof client)['#Action=RegisterPublisher']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RegisterPublisher', '/#Action=RegisterPublisher', keyArgs] as const
}

export function getActionRegisterPublisherQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RegisterPublisher']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RegisterPublisher']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RegisterPublisher']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRegisterPublisherQueryKey>
  >({
    queryKey: getActionRegisterPublisherQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RegisterPublisher'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionRegisterPublisher<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RegisterPublisher']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RegisterPublisher']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RegisterPublisher']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRegisterPublisherQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionRegisterPublisherQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionRegisterPublisherMutationKey() {
  return ['#Action=RegisterPublisher', '/#Action=RegisterPublisher', 'POST'] as const
}

export function getPostActionRegisterPublisherMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RegisterPublisher']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RegisterPublisher']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRegisterPublisherMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RegisterPublisher']['$post']>,
    ) {
      return parseResponse(client['#Action=RegisterPublisher'].$post(args, options))
    },
  })
}

export function injectPostActionRegisterPublisher<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RegisterPublisher']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=RegisterPublisher']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionRegisterPublisherMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionRegisterTypeQueryKey(
  args: InferRequestType<(typeof client)['#Action=RegisterType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RegisterType', '/#Action=RegisterType', keyArgs] as const
}

export function getActionRegisterTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RegisterType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RegisterType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RegisterType']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRegisterTypeQueryKey>
  >({
    queryKey: getActionRegisterTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RegisterType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionRegisterType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RegisterType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RegisterType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RegisterType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRegisterTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionRegisterTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionRegisterTypeMutationKey() {
  return ['#Action=RegisterType', '/#Action=RegisterType', 'POST'] as const
}

export function getPostActionRegisterTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RegisterType']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RegisterType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRegisterTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=RegisterType']['$post']>) {
      return parseResponse(client['#Action=RegisterType'].$post(args, options))
    },
  })
}

export function injectPostActionRegisterType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RegisterType']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=RegisterType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionRegisterTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionRollbackStackQueryKey(
  args: InferRequestType<(typeof client)['#Action=RollbackStack']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RollbackStack', '/#Action=RollbackStack', keyArgs] as const
}

export function getActionRollbackStackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RollbackStack']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RollbackStack']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RollbackStack']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRollbackStackQueryKey>
  >({
    queryKey: getActionRollbackStackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RollbackStack'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionRollbackStack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RollbackStack']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RollbackStack']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RollbackStack']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRollbackStackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionRollbackStackQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionRollbackStackMutationKey() {
  return ['#Action=RollbackStack', '/#Action=RollbackStack', 'POST'] as const
}

export function getPostActionRollbackStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RollbackStack']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RollbackStack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRollbackStackMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=RollbackStack']['$post']>) {
      return parseResponse(client['#Action=RollbackStack'].$post(args, options))
    },
  })
}

export function injectPostActionRollbackStack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RollbackStack']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=RollbackStack']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionRollbackStackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionSetStackPolicyQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetStackPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetStackPolicy', '/#Action=SetStackPolicy', keyArgs] as const
}

export function getActionSetStackPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetStackPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetStackPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetStackPolicy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetStackPolicyQueryKey>
  >({
    queryKey: getActionSetStackPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetStackPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSetStackPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetStackPolicy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SetStackPolicy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetStackPolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetStackPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionSetStackPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSetStackPolicyMutationKey() {
  return ['#Action=SetStackPolicy', '/#Action=SetStackPolicy', 'POST'] as const
}

export function getPostActionSetStackPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetStackPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetStackPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetStackPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=SetStackPolicy']['$post']>) {
      return parseResponse(client['#Action=SetStackPolicy'].$post(args, options))
    },
  })
}

export function injectPostActionSetStackPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetStackPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetStackPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionSetStackPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionSetTypeConfigurationQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetTypeConfiguration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetTypeConfiguration', '/#Action=SetTypeConfiguration', keyArgs] as const
}

export function getActionSetTypeConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetTypeConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetTypeConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetTypeConfiguration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetTypeConfigurationQueryKey>
  >({
    queryKey: getActionSetTypeConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetTypeConfiguration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSetTypeConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetTypeConfiguration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SetTypeConfiguration']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetTypeConfiguration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetTypeConfigurationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionSetTypeConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSetTypeConfigurationMutationKey() {
  return ['#Action=SetTypeConfiguration', '/#Action=SetTypeConfiguration', 'POST'] as const
}

export function getPostActionSetTypeConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetTypeConfiguration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetTypeConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetTypeConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetTypeConfiguration']['$post']>,
    ) {
      return parseResponse(client['#Action=SetTypeConfiguration'].$post(args, options))
    },
  })
}

export function injectPostActionSetTypeConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetTypeConfiguration']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetTypeConfiguration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionSetTypeConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionSetTypeDefaultVersionQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetTypeDefaultVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetTypeDefaultVersion', '/#Action=SetTypeDefaultVersion', keyArgs] as const
}

export function getActionSetTypeDefaultVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetTypeDefaultVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetTypeDefaultVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetTypeDefaultVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetTypeDefaultVersionQueryKey>
  >({
    queryKey: getActionSetTypeDefaultVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetTypeDefaultVersion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSetTypeDefaultVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetTypeDefaultVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SetTypeDefaultVersion']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetTypeDefaultVersion']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetTypeDefaultVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionSetTypeDefaultVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSetTypeDefaultVersionMutationKey() {
  return ['#Action=SetTypeDefaultVersion', '/#Action=SetTypeDefaultVersion', 'POST'] as const
}

export function getPostActionSetTypeDefaultVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetTypeDefaultVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetTypeDefaultVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetTypeDefaultVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetTypeDefaultVersion']['$post']>,
    ) {
      return parseResponse(client['#Action=SetTypeDefaultVersion'].$post(args, options))
    },
  })
}

export function injectPostActionSetTypeDefaultVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetTypeDefaultVersion']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetTypeDefaultVersion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionSetTypeDefaultVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionSignalResourceQueryKey(
  args: InferRequestType<(typeof client)['#Action=SignalResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SignalResource', '/#Action=SignalResource', keyArgs] as const
}

export function getActionSignalResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SignalResource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SignalResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SignalResource']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSignalResourceQueryKey>
  >({
    queryKey: getActionSignalResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SignalResource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionSignalResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SignalResource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SignalResource']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SignalResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSignalResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionSignalResourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionSignalResourceMutationKey() {
  return ['#Action=SignalResource', '/#Action=SignalResource', 'POST'] as const
}

export function getPostActionSignalResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SignalResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SignalResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSignalResourceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=SignalResource']['$post']>) {
      return parseResponse(client['#Action=SignalResource'].$post(args, options))
    },
  })
}

export function injectPostActionSignalResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SignalResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SignalResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionSignalResourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionStopStackSetOperationQueryKey(
  args: InferRequestType<(typeof client)['#Action=StopStackSetOperation']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StopStackSetOperation', '/#Action=StopStackSetOperation', keyArgs] as const
}

export function getActionStopStackSetOperationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StopStackSetOperation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StopStackSetOperation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StopStackSetOperation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStopStackSetOperationQueryKey>
  >({
    queryKey: getActionStopStackSetOperationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=StopStackSetOperation'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionStopStackSetOperation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StopStackSetOperation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=StopStackSetOperation']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=StopStackSetOperation']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionStopStackSetOperationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionStopStackSetOperationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionStopStackSetOperationMutationKey() {
  return ['#Action=StopStackSetOperation', '/#Action=StopStackSetOperation', 'POST'] as const
}

export function getPostActionStopStackSetOperationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StopStackSetOperation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=StopStackSetOperation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionStopStackSetOperationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=StopStackSetOperation']['$post']>,
    ) {
      return parseResponse(client['#Action=StopStackSetOperation'].$post(args, options))
    },
  })
}

export function injectPostActionStopStackSetOperation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=StopStackSetOperation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=StopStackSetOperation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionStopStackSetOperationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionTestTypeQueryKey(
  args: InferRequestType<(typeof client)['#Action=TestType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TestType', '/#Action=TestType', keyArgs] as const
}

export function getActionTestTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TestType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=TestType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TestType']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTestTypeQueryKey>
  >({
    queryKey: getActionTestTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=TestType'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectActionTestType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TestType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=TestType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TestType']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionTestTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionTestTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionTestTypeMutationKey() {
  return ['#Action=TestType', '/#Action=TestType', 'POST'] as const
}

export function getPostActionTestTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TestType']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TestType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTestTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=TestType']['$post']>) {
      return parseResponse(client['#Action=TestType'].$post(args, options))
    },
  })
}

export function injectPostActionTestType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TestType']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=TestType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionTestTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionUpdateStackQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateStack']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateStack', '/#Action=UpdateStack', keyArgs] as const
}

export function getActionUpdateStackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateStack']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateStack']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateStack']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateStackQueryKey>
  >({
    queryKey: getActionUpdateStackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateStack'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionUpdateStack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateStack']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateStack']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateStack']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateStackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionUpdateStackQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionUpdateStackMutationKey() {
  return ['#Action=UpdateStack', '/#Action=UpdateStack', 'POST'] as const
}

export function getPostActionUpdateStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateStack']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateStack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateStackMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=UpdateStack']['$post']>) {
      return parseResponse(client['#Action=UpdateStack'].$post(args, options))
    },
  })
}

export function injectPostActionUpdateStack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateStack']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UpdateStack']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionUpdateStackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionUpdateStackInstancesQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateStackInstances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateStackInstances', '/#Action=UpdateStackInstances', keyArgs] as const
}

export function getActionUpdateStackInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateStackInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateStackInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateStackInstances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateStackInstancesQueryKey>
  >({
    queryKey: getActionUpdateStackInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateStackInstances'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionUpdateStackInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateStackInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateStackInstances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateStackInstances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateStackInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionUpdateStackInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionUpdateStackInstancesMutationKey() {
  return ['#Action=UpdateStackInstances', '/#Action=UpdateStackInstances', 'POST'] as const
}

export function getPostActionUpdateStackInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateStackInstances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateStackInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateStackInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateStackInstances']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateStackInstances'].$post(args, options))
    },
  })
}

export function injectPostActionUpdateStackInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateStackInstances']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UpdateStackInstances']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionUpdateStackInstancesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionUpdateStackSetQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateStackSet']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateStackSet', '/#Action=UpdateStackSet', keyArgs] as const
}

export function getActionUpdateStackSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateStackSet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateStackSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateStackSet']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateStackSetQueryKey>
  >({
    queryKey: getActionUpdateStackSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateStackSet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionUpdateStackSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UpdateStackSet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateStackSet']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateStackSet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateStackSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionUpdateStackSetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionUpdateStackSetMutationKey() {
  return ['#Action=UpdateStackSet', '/#Action=UpdateStackSet', 'POST'] as const
}

export function getPostActionUpdateStackSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateStackSet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateStackSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateStackSetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=UpdateStackSet']['$post']>) {
      return parseResponse(client['#Action=UpdateStackSet'].$post(args, options))
    },
  })
}

export function injectPostActionUpdateStackSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateStackSet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UpdateStackSet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionUpdateStackSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionUpdateTerminationProtectionQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateTerminationProtection']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateTerminationProtection',
    '/#Action=UpdateTerminationProtection',
    keyArgs,
  ] as const
}

export function getActionUpdateTerminationProtectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateTerminationProtection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateTerminationProtection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateTerminationProtection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateTerminationProtectionQueryKey>
  >({
    queryKey: getActionUpdateTerminationProtectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateTerminationProtection'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionUpdateTerminationProtection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateTerminationProtection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateTerminationProtection']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateTerminationProtection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateTerminationProtectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionUpdateTerminationProtectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionUpdateTerminationProtectionMutationKey() {
  return [
    '#Action=UpdateTerminationProtection',
    '/#Action=UpdateTerminationProtection',
    'POST',
  ] as const
}

export function getPostActionUpdateTerminationProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateTerminationProtection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateTerminationProtection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateTerminationProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateTerminationProtection']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateTerminationProtection'].$post(args, options))
    },
  })
}

export function injectPostActionUpdateTerminationProtection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateTerminationProtection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UpdateTerminationProtection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionUpdateTerminationProtectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActionValidateTemplateQueryKey(
  args: InferRequestType<(typeof client)['#Action=ValidateTemplate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ValidateTemplate', '/#Action=ValidateTemplate', keyArgs] as const
}

export function getActionValidateTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ValidateTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ValidateTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ValidateTemplate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionValidateTemplateQueryKey>
  >({
    queryKey: getActionValidateTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ValidateTemplate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectActionValidateTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ValidateTemplate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ValidateTemplate']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ValidateTemplate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionValidateTemplateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getActionValidateTemplateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostActionValidateTemplateMutationKey() {
  return ['#Action=ValidateTemplate', '/#Action=ValidateTemplate', 'POST'] as const
}

export function getPostActionValidateTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ValidateTemplate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ValidateTemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionValidateTemplateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ValidateTemplate']['$post']>) {
      return parseResponse(client['#Action=ValidateTemplate'].$post(args, options))
    },
  })
}

export function injectPostActionValidateTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ValidateTemplate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ValidateTemplate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionValidateTemplateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
