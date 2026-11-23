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

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getActionTargetsKey() {
  return ['actionTargets'] as const
}

export function getAdministratorKey() {
  return ['administrator'] as const
}

export function getAssociationsKey() {
  return ['associations'] as const
}

export function getAssociationsSecurityControlIdKey() {
  return ['associations#SecurityControlId'] as const
}

export function getFindingAggregatorKey() {
  return ['findingAggregator'] as const
}

export function getFindingsKey() {
  return ['findings'] as const
}

export function getInsightsKey() {
  return ['insights'] as const
}

export function getInvitationsKey() {
  return ['invitations'] as const
}

export function getMasterKey() {
  return ['master'] as const
}

export function getMembersKey() {
  return ['members'] as const
}

export function getOrganizationKey() {
  return ['organization'] as const
}

export function getProductSubscriptionsKey() {
  return ['productSubscriptions'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getSecurityControlsKey() {
  return ['securityControls'] as const
}

export function getStandardsKey() {
  return ['standards'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getAdministratorQueryKey(args: InferRequestType<typeof client.administrator.$get>) {
  const { header: _, ...keyArgs } = args
  return ['administrator', '/administrator', keyArgs] as const
}

export function getAdministratorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.administrator.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdministratorQueryKey>
  >({
    queryKey: getAdministratorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.administrator.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdministrator<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.administrator.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdministratorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdministratorQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAdministratorMutationKey() {
  return ['administrator', '/administrator', 'POST'] as const
}

export function getPostAdministratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.administrator.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdministratorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.administrator.$post>) {
      return parseResponse(client.administrator.$post(args, options))
    },
  })
}

export function injectPostAdministrator<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administrator.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.administrator.$post>,
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
    const mutationDefaults = getPostAdministratorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMasterQueryKey(args: InferRequestType<typeof client.master.$get>) {
  const { header: _, ...keyArgs } = args
  return ['master', '/master', keyArgs] as const
}

export function getMasterQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.master.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMasterQueryKey>
  >({
    queryKey: getMasterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.master.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMaster<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.master.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMasterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMasterQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostMasterMutationKey() {
  return ['master', '/master', 'POST'] as const
}

export function getPostMasterMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$post>>>>>,
    TError,
    InferRequestType<typeof client.master.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMasterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.master.$post>) {
      return parseResponse(client.master.$post(args, options))
    },
  })
}

export function injectPostMaster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.$post>>>>>,
        TError,
        InferRequestType<typeof client.master.$post>,
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
    const mutationDefaults = getPostMasterMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostStandardsDeregisterMutationKey() {
  return ['standards', '/standards/deregister', 'POST'] as const
}

export function getPostStandardsDeregisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.standards.deregister.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.standards.deregister.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStandardsDeregisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.standards.deregister.$post>) {
      return parseResponse(client.standards.deregister.$post(args, options))
    },
  })
}

export function injectPostStandardsDeregister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.standards.deregister.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.standards.deregister.$post>,
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
    const mutationDefaults = getPostStandardsDeregisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostStandardsRegisterMutationKey() {
  return ['standards', '/standards/register', 'POST'] as const
}

export function getPostStandardsRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.register.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.standards.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStandardsRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.standards.register.$post>) {
      return parseResponse(client.standards.register.$post(args, options))
    },
  })
}

export function injectPostStandardsRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.standards.register.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.standards.register.$post>,
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
    const mutationDefaults = getPostStandardsRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSecurityControlsBatchGetMutationKey() {
  return ['securityControls', '/securityControls/batchGet', 'POST'] as const
}

export function getPostSecurityControlsBatchGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.securityControls.batchGet.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.securityControls.batchGet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSecurityControlsBatchGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.securityControls.batchGet.$post>) {
      return parseResponse(client.securityControls.batchGet.$post(args, options))
    },
  })
}

export function injectPostSecurityControlsBatchGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.securityControls.batchGet.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.securityControls.batchGet.$post>,
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
    const mutationDefaults = getPostSecurityControlsBatchGetMutationOptions<
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

export function getPostAssociationsBatchGetMutationKey() {
  return ['associations', '/associations/batchGet', 'POST'] as const
}

export function getPostAssociationsBatchGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.associations.batchGet.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.associations.batchGet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssociationsBatchGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.associations.batchGet.$post>) {
      return parseResponse(client.associations.batchGet.$post(args, options))
    },
  })
}

export function injectPostAssociationsBatchGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.associations.batchGet.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.associations.batchGet.$post>,
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
    const mutationDefaults = getPostAssociationsBatchGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostFindingsImportMutationKey() {
  return ['findings', '/findings/import', 'POST'] as const
}

export function getPostFindingsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.findings.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFindingsImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.findings.import.$post>) {
      return parseResponse(client.findings.import.$post(args, options))
    },
  })
}

export function injectPostFindingsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.import.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.findings.import.$post>,
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
    const mutationDefaults = getPostFindingsImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFindingsBatchupdateMutationKey() {
  return ['findings', '/findings/batchupdate', 'PATCH'] as const
}

export function getPatchFindingsBatchupdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.findings.batchupdate.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.findings.batchupdate.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchFindingsBatchupdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.findings.batchupdate.$patch>) {
      return parseResponse(client.findings.batchupdate.$patch(args, options))
    },
  })
}

export function injectPatchFindingsBatchupdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.findings.batchupdate.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.findings.batchupdate.$patch>,
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
    const mutationDefaults = getPatchFindingsBatchupdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAssociationsMutationKey() {
  return ['associations', '/associations', 'PATCH'] as const
}

export function getPatchAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.associations.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAssociationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.associations.$patch>) {
      return parseResponse(client.associations.$patch(args, options))
    },
  })
}

export function injectPatchAssociations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.associations.$patch>,
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
    const mutationDefaults = getPatchAssociationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostActionTargetsMutationKey() {
  return ['actionTargets', '/actionTargets', 'POST'] as const
}

export function getPostActionTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actionTargets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.actionTargets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTargetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.actionTargets.$post>) {
      return parseResponse(client.actionTargets.$post(args, options))
    },
  })
}

export function injectPostActionTargets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actionTargets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.actionTargets.$post>,
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
    const mutationDefaults = getPostActionTargetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostFindingAggregatorCreateMutationKey() {
  return ['findingAggregator', '/findingAggregator/create', 'POST'] as const
}

export function getPostFindingAggregatorCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.findingAggregator.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.findingAggregator.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFindingAggregatorCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.findingAggregator.create.$post>) {
      return parseResponse(client.findingAggregator.create.$post(args, options))
    },
  })
}

export function injectPostFindingAggregatorCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.findingAggregator.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.findingAggregator.create.$post>,
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
    const mutationDefaults = getPostFindingAggregatorCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostInsightsMutationKey() {
  return ['insights', '/insights', 'POST'] as const
}

export function getPostInsightsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$post>>>>>,
    TError,
    InferRequestType<typeof client.insights.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInsightsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.insights.$post>) {
      return parseResponse(client.insights.$post(args, options))
    },
  })
}

export function injectPostInsights<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.insights.$post>,
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
    const mutationDefaults = getPostInsightsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMembersQueryKey(args: InferRequestType<typeof client.members.$get>) {
  const { header: _, ...keyArgs } = args
  return ['members', '/members', keyArgs] as const
}

export function getMembersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.members.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMembersQueryKey>
  >({
    queryKey: getMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.members.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostMembersMutationKey() {
  return ['members', '/members', 'POST'] as const
}

export function getPostMembersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$post>>>>>,
    TError,
    InferRequestType<typeof client.members.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.members.$post>) {
      return parseResponse(client.members.$post(args, options))
    },
  })
}

export function injectPostMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$post>>>>>,
        TError,
        InferRequestType<typeof client.members.$post>,
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
    const mutationDefaults = getPostMembersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostInvitationsDeclineMutationKey() {
  return ['invitations', '/invitations/decline', 'POST'] as const
}

export function getPostInvitationsDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.decline.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.invitations.decline.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitationsDeclineMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invitations.decline.$post>) {
      return parseResponse(client.invitations.decline.$post(args, options))
    },
  })
}

export function injectPostInvitationsDecline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invitations.decline.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.invitations.decline.$post>,
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
    const mutationDefaults = getPostInvitationsDeclineMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteActionTargetsActionTargetArnMutationKey() {
  return ['actionTargets', '/actionTargets/:ActionTargetArn', 'DELETE'] as const
}

export function getDeleteActionTargetsActionTargetArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actionTargets)[':ActionTargetArn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.actionTargets)[':ActionTargetArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteActionTargetsActionTargetArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.actionTargets)[':ActionTargetArn']['$delete']>,
    ) {
      return parseResponse(client.actionTargets[':ActionTargetArn'].$delete(args, options))
    },
  })
}

export function injectDeleteActionTargetsActionTargetArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actionTargets)[':ActionTargetArn']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.actionTargets)[':ActionTargetArn']['$delete']>,
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
    const mutationDefaults = getDeleteActionTargetsActionTargetArnMutationOptions<
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

export function getPatchActionTargetsActionTargetArnMutationKey() {
  return ['actionTargets', '/actionTargets/:ActionTargetArn', 'PATCH'] as const
}

export function getPatchActionTargetsActionTargetArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actionTargets)[':ActionTargetArn']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.actionTargets)[':ActionTargetArn']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchActionTargetsActionTargetArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.actionTargets)[':ActionTargetArn']['$patch']>,
    ) {
      return parseResponse(client.actionTargets[':ActionTargetArn'].$patch(args, options))
    },
  })
}

export function injectPatchActionTargetsActionTargetArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actionTargets)[':ActionTargetArn']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.actionTargets)[':ActionTargetArn']['$patch']>,
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
    const mutationDefaults = getPatchActionTargetsActionTargetArnMutationOptions<
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

export function getDeleteFindingAggregatorDeleteFindingAggregatorArnMutationKey() {
  return ['findingAggregator', '/findingAggregator/delete/:FindingAggregatorArn', 'DELETE'] as const
}

export function getDeleteFindingAggregatorDeleteFindingAggregatorArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.findingAggregator.delete)[':FindingAggregatorArn']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.findingAggregator.delete)[':FindingAggregatorArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFindingAggregatorDeleteFindingAggregatorArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.findingAggregator.delete)[':FindingAggregatorArn']['$delete']
      >,
    ) {
      return parseResponse(
        client.findingAggregator.delete[':FindingAggregatorArn'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteFindingAggregatorDeleteFindingAggregatorArn<
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
                  (typeof client.findingAggregator.delete)[':FindingAggregatorArn']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.findingAggregator.delete)[':FindingAggregatorArn']['$delete']
        >,
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
    const mutationDefaults = getDeleteFindingAggregatorDeleteFindingAggregatorArnMutationOptions<
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

export function getDeleteInsightsInsightArnMutationKey() {
  return ['insights', '/insights/:InsightArn', 'DELETE'] as const
}

export function getDeleteInsightsInsightArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.insights)[':InsightArn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.insights)[':InsightArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInsightsInsightArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.insights)[':InsightArn']['$delete']>) {
      return parseResponse(client.insights[':InsightArn'].$delete(args, options))
    },
  })
}

export function injectDeleteInsightsInsightArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.insights)[':InsightArn']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.insights)[':InsightArn']['$delete']>,
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
    const mutationDefaults = getDeleteInsightsInsightArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchInsightsInsightArnMutationKey() {
  return ['insights', '/insights/:InsightArn', 'PATCH'] as const
}

export function getPatchInsightsInsightArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.insights)[':InsightArn']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.insights)[':InsightArn']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchInsightsInsightArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.insights)[':InsightArn']['$patch']>) {
      return parseResponse(client.insights[':InsightArn'].$patch(args, options))
    },
  })
}

export function injectPatchInsightsInsightArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.insights)[':InsightArn']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.insights)[':InsightArn']['$patch']>,
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
    const mutationDefaults = getPatchInsightsInsightArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostInvitationsDeleteMutationKey() {
  return ['invitations', '/invitations/delete', 'POST'] as const
}

export function getPostInvitationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.invitations.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitationsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invitations.delete.$post>) {
      return parseResponse(client.invitations.delete.$post(args, options))
    },
  })
}

export function injectPostInvitationsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invitations.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.invitations.delete.$post>,
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
    const mutationDefaults = getPostInvitationsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostMembersDeleteMutationKey() {
  return ['members', '/members/delete', 'POST'] as const
}

export function getPostMembersDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.members.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.members.delete.$post>) {
      return parseResponse(client.members.delete.$post(args, options))
    },
  })
}

export function injectPostMembersDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.delete.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.members.delete.$post>,
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
    const mutationDefaults = getPostMembersDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostActionTargetsGetMutationKey() {
  return ['actionTargets', '/actionTargets/get', 'POST'] as const
}

export function getPostActionTargetsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actionTargets.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.actionTargets.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTargetsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.actionTargets.get.$post>) {
      return parseResponse(client.actionTargets.get.$post(args, options))
    },
  })
}

export function injectPostActionTargetsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.actionTargets.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.actionTargets.get.$post>,
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
    const mutationDefaults = getPostActionTargetsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountsQueryKey(args: InferRequestType<typeof client.accounts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts', keyArgs] as const
}

export function getAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >({
    queryKey: getAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAccountsMutationKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function getPostAccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.$post>) {
      return parseResponse(client.accounts.$post(args, options))
    },
  })
}

export function injectPostAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.accounts.$post>,
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
    const mutationDefaults = getPostAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAccountsMutationKey() {
  return ['accounts', '/accounts', 'DELETE'] as const
}

export function getDeleteAccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$delete>>>>>,
    TError,
    InferRequestType<typeof client.accounts.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.$delete>) {
      return parseResponse(client.accounts.$delete(args, options))
    },
  })
}

export function injectDeleteAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.accounts.$delete>,
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
    const mutationDefaults = getDeleteAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAccountsMutationKey() {
  return ['accounts', '/accounts', 'PATCH'] as const
}

export function getPatchAccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$patch>>>>>,
    TError,
    InferRequestType<typeof client.accounts.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.$patch>) {
      return parseResponse(client.accounts.$patch(args, options))
    },
  })
}

export function injectPatchAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.accounts.$patch>,
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
    const mutationDefaults = getPatchAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganizationConfigurationQueryKey(
  args: InferRequestType<typeof client.organization.configuration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['organization', '/organization/configuration', keyArgs] as const
}

export function getOrganizationConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organization.configuration.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.configuration.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationConfigurationQueryKey>
  >({
    queryKey: getOrganizationConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganizationConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.configuration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.configuration.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.configuration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationConfigurationQueryKey>
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
      ...getOrganizationConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostOrganizationConfigurationMutationKey() {
  return ['organization', '/organization/configuration', 'POST'] as const
}

export function getPostOrganizationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.configuration.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization.configuration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.configuration.$post>) {
      return parseResponse(client.organization.configuration.$post(args, options))
    },
  })
}

export function injectPostOrganizationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.organization.configuration.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.organization.configuration.$post>,
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
    const mutationDefaults = getPostOrganizationConfigurationMutationOptions<
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

export function getProductsQueryKey(args: InferRequestType<typeof client.products.$get>) {
  const { header: _, ...keyArgs } = args
  return ['products', '/products', keyArgs] as const
}

export function getProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductsQueryKey>
  >({
    queryKey: getProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.products.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStandardsQueryKey(args: InferRequestType<typeof client.standards.$get>) {
  const { header: _, ...keyArgs } = args
  return ['standards', '/standards', keyArgs] as const
}

export function getStandardsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.standards.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStandardsQueryKey>
  >({
    queryKey: getStandardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.standards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStandards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.standards.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStandardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStandardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStandardsControlsStandardsSubscriptionArnQueryKey(
  args: InferRequestType<(typeof client.standards.controls)[':StandardsSubscriptionArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['standards', '/standards/controls/:StandardsSubscriptionArn', keyArgs] as const
}

export function getStandardsControlsStandardsSubscriptionArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.standards.controls)[':StandardsSubscriptionArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.standards.controls)[':StandardsSubscriptionArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.standards.controls)[':StandardsSubscriptionArn']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStandardsControlsStandardsSubscriptionArnQueryKey>
  >({
    queryKey: getStandardsControlsStandardsSubscriptionArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.standards.controls[':StandardsSubscriptionArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectStandardsControlsStandardsSubscriptionArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.standards.controls)[':StandardsSubscriptionArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.standards.controls)[':StandardsSubscriptionArn']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.standards.controls)[':StandardsSubscriptionArn']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStandardsControlsStandardsSubscriptionArnQueryKey>
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
      ...getStandardsControlsStandardsSubscriptionArnQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteProductSubscriptionsProductSubscriptionArnMutationKey() {
  return [
    'productSubscriptions',
    '/productSubscriptions/:ProductSubscriptionArn',
    'DELETE',
  ] as const
}

export function getDeleteProductSubscriptionsProductSubscriptionArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.productSubscriptions)[':ProductSubscriptionArn']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.productSubscriptions)[':ProductSubscriptionArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProductSubscriptionsProductSubscriptionArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.productSubscriptions)[':ProductSubscriptionArn']['$delete']
      >,
    ) {
      return parseResponse(
        client.productSubscriptions[':ProductSubscriptionArn'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteProductSubscriptionsProductSubscriptionArn<
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
                  (typeof client.productSubscriptions)[':ProductSubscriptionArn']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.productSubscriptions)[':ProductSubscriptionArn']['$delete']
        >,
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
    const mutationDefaults = getDeleteProductSubscriptionsProductSubscriptionArnMutationOptions<
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

export function getPostOrganizationAdminDisableMutationKey() {
  return ['organization', '/organization/admin/disable', 'POST'] as const
}

export function getPostOrganizationAdminDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin.disable.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization.admin.disable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationAdminDisableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.admin.disable.$post>) {
      return parseResponse(client.organization.admin.disable.$post(args, options))
    },
  })
}

export function injectPostOrganizationAdminDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.organization.admin.disable.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.organization.admin.disable.$post>,
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
    const mutationDefaults = getPostOrganizationAdminDisableMutationOptions<
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

export function getPostAdministratorDisassociateMutationKey() {
  return ['administrator', '/administrator/disassociate', 'POST'] as const
}

export function getPostAdministratorDisassociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.administrator.disassociate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.administrator.disassociate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdministratorDisassociateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.administrator.disassociate.$post>) {
      return parseResponse(client.administrator.disassociate.$post(args, options))
    },
  })
}

export function injectPostAdministratorDisassociate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.administrator.disassociate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.administrator.disassociate.$post>,
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
    const mutationDefaults = getPostAdministratorDisassociateMutationOptions<
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

export function getPostMasterDisassociateMutationKey() {
  return ['master', '/master/disassociate', 'POST'] as const
}

export function getPostMasterDisassociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master.disassociate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.master.disassociate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMasterDisassociateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.master.disassociate.$post>) {
      return parseResponse(client.master.disassociate.$post(args, options))
    },
  })
}

export function injectPostMasterDisassociate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.master.disassociate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.master.disassociate.$post>,
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
    const mutationDefaults = getPostMasterDisassociateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostMembersDisassociateMutationKey() {
  return ['members', '/members/disassociate', 'POST'] as const
}

export function getPostMembersDisassociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.members.disassociate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.members.disassociate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersDisassociateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.members.disassociate.$post>) {
      return parseResponse(client.members.disassociate.$post(args, options))
    },
  })
}

export function injectPostMembersDisassociate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.members.disassociate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.members.disassociate.$post>,
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
    const mutationDefaults = getPostMembersDisassociateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProductSubscriptionsQueryKey(
  args: InferRequestType<typeof client.productSubscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['productSubscriptions', '/productSubscriptions', keyArgs] as const
}

export function getProductSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productSubscriptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.productSubscriptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productSubscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductSubscriptionsQueryKey>
  >({
    queryKey: getProductSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.productSubscriptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProductSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.productSubscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.productSubscriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.productSubscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductSubscriptionsQueryKey>
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
      ...getProductSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostProductSubscriptionsMutationKey() {
  return ['productSubscriptions', '/productSubscriptions', 'POST'] as const
}

export function getPostProductSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.productSubscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.productSubscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProductSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.productSubscriptions.$post>) {
      return parseResponse(client.productSubscriptions.$post(args, options))
    },
  })
}

export function injectPostProductSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.productSubscriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.productSubscriptions.$post>,
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
    const mutationDefaults = getPostProductSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOrganizationAdminEnableMutationKey() {
  return ['organization', '/organization/admin/enable', 'POST'] as const
}

export function getPostOrganizationAdminEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin.enable.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization.admin.enable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationAdminEnableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.admin.enable.$post>) {
      return parseResponse(client.organization.admin.enable.$post(args, options))
    },
  })
}

export function injectPostOrganizationAdminEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin.enable.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organization.admin.enable.$post>,
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
    const mutationDefaults = getPostOrganizationAdminEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostStandardsGetMutationKey() {
  return ['standards', '/standards/get', 'POST'] as const
}

export function getPostStandardsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.standards.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStandardsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.standards.get.$post>) {
      return parseResponse(client.standards.get.$post(args, options))
    },
  })
}

export function injectPostStandardsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.standards.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.standards.get.$post>,
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
    const mutationDefaults = getPostStandardsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFindingAggregatorGetFindingAggregatorArnQueryKey(
  args: InferRequestType<(typeof client.findingAggregator.get)[':FindingAggregatorArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['findingAggregator', '/findingAggregator/get/:FindingAggregatorArn', keyArgs] as const
}

export function getFindingAggregatorGetFindingAggregatorArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.findingAggregator.get)[':FindingAggregatorArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.findingAggregator.get)[':FindingAggregatorArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.findingAggregator.get)[':FindingAggregatorArn']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFindingAggregatorGetFindingAggregatorArnQueryKey>
  >({
    queryKey: getFindingAggregatorGetFindingAggregatorArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.findingAggregator.get[':FindingAggregatorArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFindingAggregatorGetFindingAggregatorArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.findingAggregator.get)[':FindingAggregatorArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.findingAggregator.get)[':FindingAggregatorArn']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.findingAggregator.get)[':FindingAggregatorArn']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindingAggregatorGetFindingAggregatorArnQueryKey>
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
      ...getFindingAggregatorGetFindingAggregatorArnQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostFindingsMutationKey() {
  return ['findings', '/findings', 'POST'] as const
}

export function getPostFindingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.$post>>>>>,
    TError,
    InferRequestType<typeof client.findings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFindingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.findings.$post>) {
      return parseResponse(client.findings.$post(args, options))
    },
  })
}

export function injectPostFindings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.findings.$post>,
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
    const mutationDefaults = getPostFindingsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFindingsMutationKey() {
  return ['findings', '/findings', 'PATCH'] as const
}

export function getPatchFindingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.$patch>>>>>,
    TError,
    InferRequestType<typeof client.findings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchFindingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.findings.$patch>) {
      return parseResponse(client.findings.$patch(args, options))
    },
  })
}

export function injectPatchFindings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findings.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.findings.$patch>,
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
    const mutationDefaults = getPatchFindingsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getInsightsResultsInsightArnQueryKey(
  args: InferRequestType<(typeof client.insights.results)[':InsightArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['insights', '/insights/results/:InsightArn', keyArgs] as const
}

export function getInsightsResultsInsightArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights.results)[':InsightArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights.results)[':InsightArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.insights.results)[':InsightArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsResultsInsightArnQueryKey>
  >({
    queryKey: getInsightsResultsInsightArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights.results[':InsightArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectInsightsResultsInsightArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights.results)[':InsightArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.insights.results)[':InsightArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.insights.results)[':InsightArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsResultsInsightArnQueryKey>
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
      ...getInsightsResultsInsightArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostInsightsGetMutationKey() {
  return ['insights', '/insights/get', 'POST'] as const
}

export function getPostInsightsGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.insights.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInsightsGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.insights.get.$post>) {
      return parseResponse(client.insights.get.$post(args, options))
    },
  })
}

export function injectPostInsightsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.insights.get.$post>,
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
    const mutationDefaults = getPostInsightsGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getInvitationsCountQueryKey(
  args: InferRequestType<typeof client.invitations.count.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['invitations', '/invitations/count', keyArgs] as const
}

export function getInvitationsCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.invitations.count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInvitationsCountQueryKey>
  >({
    queryKey: getInvitationsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invitations.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInvitationsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.invitations.count.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invitations.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvitationsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvitationsCountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostMembersGetMutationKey() {
  return ['members', '/members/get', 'POST'] as const
}

export function getPostMembersGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.get.$post>>>>>,
    TError,
    InferRequestType<typeof client.members.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.members.get.$post>) {
      return parseResponse(client.members.get.$post(args, options))
    },
  })
}

export function injectPostMembersGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.get.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.members.get.$post>,
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
    const mutationDefaults = getPostMembersGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostMembersInviteMutationKey() {
  return ['members', '/members/invite', 'POST'] as const
}

export function getPostMembersInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.invite.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.members.invite.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersInviteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.members.invite.$post>) {
      return parseResponse(client.members.invite.$post(args, options))
    },
  })
}

export function injectPostMembersInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.invite.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.members.invite.$post>,
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
    const mutationDefaults = getPostMembersInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFindingAggregatorListQueryKey(
  args: InferRequestType<typeof client.findingAggregator.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['findingAggregator', '/findingAggregator/list', keyArgs] as const
}

export function getFindingAggregatorListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingAggregator.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.findingAggregator.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.findingAggregator.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFindingAggregatorListQueryKey>
  >({
    queryKey: getFindingAggregatorListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.findingAggregator.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFindingAggregatorList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findingAggregator.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.findingAggregator.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.findingAggregator.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindingAggregatorListQueryKey>
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
      ...getFindingAggregatorListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getInvitationsQueryKey(args: InferRequestType<typeof client.invitations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['invitations', '/invitations', keyArgs] as const
}

export function getInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.invitations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvitationsQueryKey>
  >({
    queryKey: getInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invitations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.invitations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvitationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getOrganizationAdminQueryKey(
  args: InferRequestType<typeof client.organization.admin.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['organization', '/organization/admin', keyArgs] as const
}

export function getOrganizationAdminQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organization.admin.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationAdminQueryKey>
  >({
    queryKey: getOrganizationAdminQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.admin.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrganizationAdmin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.admin.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.admin.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationAdminQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationAdminQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSecurityControlsDefinitionsQueryKey(
  args: InferRequestType<typeof client.securityControls.definitions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['securityControls', '/securityControls/definitions', keyArgs] as const
}

export function getSecurityControlsDefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.securityControls.definitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.securityControls.definitions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.securityControls.definitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecurityControlsDefinitionsQueryKey>
  >({
    queryKey: getSecurityControlsDefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.securityControls.definitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSecurityControlsDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.securityControls.definitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.securityControls.definitions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.securityControls.definitions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecurityControlsDefinitionsQueryKey>
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
      ...getSecurityControlsDefinitionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAssociationsSecurityControlIdQueryKey(
  args: InferRequestType<(typeof client)['associations#SecurityControlId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['associations#SecurityControlId', '/associations#SecurityControlId', keyArgs] as const
}

export function getAssociationsSecurityControlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['associations#SecurityControlId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['associations#SecurityControlId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['associations#SecurityControlId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsSecurityControlIdQueryKey>
  >({
    queryKey: getAssociationsSecurityControlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['associations#SecurityControlId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAssociationsSecurityControlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['associations#SecurityControlId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['associations#SecurityControlId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['associations#SecurityControlId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssociationsSecurityControlIdQueryKey>
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
      ...getAssociationsSecurityControlIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':ResourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:ResourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>) {
      return parseResponse(client.tags[':ResourceArn'].$post(args, options))
    },
  })
}

export function injectPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
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
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function injectDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
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
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
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

export function getPatchFindingAggregatorUpdateMutationKey() {
  return ['findingAggregator', '/findingAggregator/update', 'PATCH'] as const
}

export function getPatchFindingAggregatorUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.findingAggregator.update.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.findingAggregator.update.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchFindingAggregatorUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.findingAggregator.update.$patch>) {
      return parseResponse(client.findingAggregator.update.$patch(args, options))
    },
  })
}

export function injectPatchFindingAggregatorUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.findingAggregator.update.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.findingAggregator.update.$patch>,
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
    const mutationDefaults = getPatchFindingAggregatorUpdateMutationOptions<
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

export function getPatchStandardsControlStandardsControlArnMutationKey() {
  return ['standards', '/standards/control/:StandardsControlArn', 'PATCH'] as const
}

export function getPatchStandardsControlStandardsControlArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.standards.control)[':StandardsControlArn']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.standards.control)[':StandardsControlArn']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchStandardsControlStandardsControlArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.standards.control)[':StandardsControlArn']['$patch']>,
    ) {
      return parseResponse(client.standards.control[':StandardsControlArn'].$patch(args, options))
    },
  })
}

export function injectPatchStandardsControlStandardsControlArn<
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
                ReturnType<(typeof client.standards.control)[':StandardsControlArn']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.standards.control)[':StandardsControlArn']['$patch']>,
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
    const mutationDefaults = getPatchStandardsControlStandardsControlArnMutationOptions<
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
