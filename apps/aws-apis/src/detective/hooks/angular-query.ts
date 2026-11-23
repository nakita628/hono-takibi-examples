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

export function getGraphKey() {
  return ['graph'] as const
}

export function getGraphsKey() {
  return ['graphs'] as const
}

export function getInvitationKey() {
  return ['invitation'] as const
}

export function getInvitationsKey() {
  return ['invitations'] as const
}

export function getMembershipKey() {
  return ['membership'] as const
}

export function getOrgsKey() {
  return ['orgs'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutInvitationMutationKey() {
  return ['invitation', '/invitation', 'PUT'] as const
}

export function getPutInvitationMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.$put>>>>>,
    TError,
    InferRequestType<typeof client.invitation.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutInvitationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invitation.$put>) {
      return parseResponse(client.invitation.$put(args, options))
    },
  })
}

export function injectPutInvitation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.invitation.$put>,
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
    const mutationDefaults = getPutInvitationMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGraphDatasourcesGetMutationKey() {
  return ['graph', '/graph/datasources/get', 'POST'] as const
}

export function getPostGraphDatasourcesGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.graph.datasources.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.graph.datasources.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGraphDatasourcesGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.graph.datasources.get.$post>) {
      return parseResponse(client.graph.datasources.get.$post(args, options))
    },
  })
}

export function injectPostGraphDatasourcesGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.graph.datasources.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.graph.datasources.get.$post>,
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
    const mutationDefaults = getPostGraphDatasourcesGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostMembershipDatasourcesGetMutationKey() {
  return ['membership', '/membership/datasources/get', 'POST'] as const
}

export function getPostMembershipDatasourcesGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.membership.datasources.get.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.membership.datasources.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMembershipDatasourcesGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.membership.datasources.get.$post>) {
      return parseResponse(client.membership.datasources.get.$post(args, options))
    },
  })
}

export function injectPostMembershipDatasourcesGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.membership.datasources.get.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.membership.datasources.get.$post>,
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
    const mutationDefaults = getPostMembershipDatasourcesGetMutationOptions<
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

export function getPostGraphMutationKey() {
  return ['graph', '/graph', 'POST'] as const
}

export function getPostGraphMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graph.$post>>>>>,
    TError,
    InferRequestType<typeof client.graph.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGraphMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.graph.$post>) {
      return parseResponse(client.graph.$post(args, options))
    },
  })
}

export function injectPostGraph<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graph.$post>>>>>,
        TError,
        InferRequestType<typeof client.graph.$post>,
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
    const mutationDefaults = getPostGraphMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGraphMembersMutationKey() {
  return ['graph', '/graph/members', 'POST'] as const
}

export function getPostGraphMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graph.members.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.graph.members.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGraphMembersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.graph.members.$post>) {
      return parseResponse(client.graph.members.$post(args, options))
    },
  })
}

export function injectPostGraphMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graph.members.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.graph.members.$post>,
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
    const mutationDefaults = getPostGraphMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGraphRemovalMutationKey() {
  return ['graph', '/graph/removal', 'POST'] as const
}

export function getPostGraphRemovalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graph.removal.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.graph.removal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGraphRemovalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.graph.removal.$post>) {
      return parseResponse(client.graph.removal.$post(args, options))
    },
  })
}

export function injectPostGraphRemoval<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graph.removal.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.graph.removal.$post>,
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
    const mutationDefaults = getPostGraphRemovalMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGraphMembersRemovalMutationKey() {
  return ['graph', '/graph/members/removal', 'POST'] as const
}

export function getPostGraphMembersRemovalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.graph.members.removal.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.graph.members.removal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGraphMembersRemovalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.graph.members.removal.$post>) {
      return parseResponse(client.graph.members.removal.$post(args, options))
    },
  })
}

export function injectPostGraphMembersRemoval<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.graph.members.removal.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.graph.members.removal.$post>,
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
    const mutationDefaults = getPostGraphMembersRemovalMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOrgsDescribeOrganizationConfigurationMutationKey() {
  return ['orgs', '/orgs/describeOrganizationConfiguration', 'POST'] as const
}

export function getPostOrgsDescribeOrganizationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.orgs.describeOrganizationConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.orgs.describeOrganizationConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgsDescribeOrganizationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.orgs.describeOrganizationConfiguration.$post>,
    ) {
      return parseResponse(client.orgs.describeOrganizationConfiguration.$post(args, options))
    },
  })
}

export function injectPostOrgsDescribeOrganizationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.orgs.describeOrganizationConfiguration.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.orgs.describeOrganizationConfiguration.$post>,
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
    const mutationDefaults = getPostOrgsDescribeOrganizationConfigurationMutationOptions<
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

export function getPostOrgsDisableAdminAccountMutationKey() {
  return ['orgs', '/orgs/disableAdminAccount', 'POST'] as const
}

export function getPostOrgsDisableAdminAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.orgs.disableAdminAccount.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.orgs.disableAdminAccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgsDisableAdminAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orgs.disableAdminAccount.$post>) {
      return parseResponse(client.orgs.disableAdminAccount.$post(args, options))
    },
  })
}

export function injectPostOrgsDisableAdminAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.orgs.disableAdminAccount.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.orgs.disableAdminAccount.$post>,
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
    const mutationDefaults = getPostOrgsDisableAdminAccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostMembershipRemovalMutationKey() {
  return ['membership', '/membership/removal', 'POST'] as const
}

export function getPostMembershipRemovalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.membership.removal.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.membership.removal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMembershipRemovalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.membership.removal.$post>) {
      return parseResponse(client.membership.removal.$post(args, options))
    },
  })
}

export function injectPostMembershipRemoval<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.membership.removal.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.membership.removal.$post>,
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
    const mutationDefaults = getPostMembershipRemovalMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOrgsEnableAdminAccountMutationKey() {
  return ['orgs', '/orgs/enableAdminAccount', 'POST'] as const
}

export function getPostOrgsEnableAdminAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.orgs.enableAdminAccount.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.orgs.enableAdminAccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgsEnableAdminAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orgs.enableAdminAccount.$post>) {
      return parseResponse(client.orgs.enableAdminAccount.$post(args, options))
    },
  })
}

export function injectPostOrgsEnableAdminAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.orgs.enableAdminAccount.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.orgs.enableAdminAccount.$post>,
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
    const mutationDefaults = getPostOrgsEnableAdminAccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGraphMembersGetMutationKey() {
  return ['graph', '/graph/members/get', 'POST'] as const
}

export function getPostGraphMembersGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graph.members.get.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.graph.members.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGraphMembersGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.graph.members.get.$post>) {
      return parseResponse(client.graph.members.get.$post(args, options))
    },
  })
}

export function injectPostGraphMembersGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.graph.members.get.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.graph.members.get.$post>,
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
    const mutationDefaults = getPostGraphMembersGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGraphDatasourcesListMutationKey() {
  return ['graph', '/graph/datasources/list', 'POST'] as const
}

export function getPostGraphDatasourcesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.graph.datasources.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.graph.datasources.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGraphDatasourcesListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.graph.datasources.list.$post>) {
      return parseResponse(client.graph.datasources.list.$post(args, options))
    },
  })
}

export function injectPostGraphDatasourcesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.graph.datasources.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.graph.datasources.list.$post>,
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
    const mutationDefaults = getPostGraphDatasourcesListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGraphsListMutationKey() {
  return ['graphs', '/graphs/list', 'POST'] as const
}

export function getPostGraphsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graphs.list.$post>>>>>,
    TError,
    InferRequestType<typeof client.graphs.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGraphsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.graphs.list.$post>) {
      return parseResponse(client.graphs.list.$post(args, options))
    },
  })
}

export function injectPostGraphsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graphs.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.graphs.list.$post>,
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
    const mutationDefaults = getPostGraphsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostInvitationsListMutationKey() {
  return ['invitations', '/invitations/list', 'POST'] as const
}

export function getPostInvitationsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitations.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.invitations.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitationsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invitations.list.$post>) {
      return parseResponse(client.invitations.list.$post(args, options))
    },
  })
}

export function injectPostInvitationsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invitations.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.invitations.list.$post>,
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
    const mutationDefaults = getPostInvitationsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGraphMembersListMutationKey() {
  return ['graph', '/graph/members/list', 'POST'] as const
}

export function getPostGraphMembersListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graph.members.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.graph.members.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGraphMembersListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.graph.members.list.$post>) {
      return parseResponse(client.graph.members.list.$post(args, options))
    },
  })
}

export function injectPostGraphMembersList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.graph.members.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.graph.members.list.$post>,
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
    const mutationDefaults = getPostGraphMembersListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOrgsAdminAccountslistMutationKey() {
  return ['orgs', '/orgs/adminAccountslist', 'POST'] as const
}

export function getPostOrgsAdminAccountslistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.orgs.adminAccountslist.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.orgs.adminAccountslist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgsAdminAccountslistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orgs.adminAccountslist.$post>) {
      return parseResponse(client.orgs.adminAccountslist.$post(args, options))
    },
  })
}

export function injectPostOrgsAdminAccountslist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.orgs.adminAccountslist.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.orgs.adminAccountslist.$post>,
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
    const mutationDefaults = getPostOrgsAdminAccountslistMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
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
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
        >
      >
    | undefined,
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
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>
              >
            >
          >
        | undefined,
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

export function getPostInvitationRemovalMutationKey() {
  return ['invitation', '/invitation/removal', 'POST'] as const
}

export function getPostInvitationRemovalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.removal.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.invitation.removal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitationRemovalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invitation.removal.$post>) {
      return parseResponse(client.invitation.removal.$post(args, options))
    },
  })
}

export function injectPostInvitationRemoval<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invitation.removal.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.invitation.removal.$post>,
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
    const mutationDefaults = getPostInvitationRemovalMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGraphMemberMonitoringstateMutationKey() {
  return ['graph', '/graph/member/monitoringstate', 'POST'] as const
}

export function getPostGraphMemberMonitoringstateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.graph.member.monitoringstate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.graph.member.monitoringstate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGraphMemberMonitoringstateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.graph.member.monitoringstate.$post>) {
      return parseResponse(client.graph.member.monitoringstate.$post(args, options))
    },
  })
}

export function injectPostGraphMemberMonitoringstate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.graph.member.monitoringstate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.graph.member.monitoringstate.$post>,
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
    const mutationDefaults = getPostGraphMemberMonitoringstateMutationOptions<
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
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
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
              >
            >
          >
        | undefined,
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

export function getPostGraphDatasourcesUpdateMutationKey() {
  return ['graph', '/graph/datasources/update', 'POST'] as const
}

export function getPostGraphDatasourcesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.graph.datasources.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.graph.datasources.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGraphDatasourcesUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.graph.datasources.update.$post>) {
      return parseResponse(client.graph.datasources.update.$post(args, options))
    },
  })
}

export function injectPostGraphDatasourcesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.graph.datasources.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.graph.datasources.update.$post>,
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
    const mutationDefaults = getPostGraphDatasourcesUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOrgsUpdateOrganizationConfigurationMutationKey() {
  return ['orgs', '/orgs/updateOrganizationConfiguration', 'POST'] as const
}

export function getPostOrgsUpdateOrganizationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.orgs.updateOrganizationConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.orgs.updateOrganizationConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgsUpdateOrganizationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.orgs.updateOrganizationConfiguration.$post>,
    ) {
      return parseResponse(client.orgs.updateOrganizationConfiguration.$post(args, options))
    },
  })
}

export function injectPostOrgsUpdateOrganizationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.orgs.updateOrganizationConfiguration.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.orgs.updateOrganizationConfiguration.$post>,
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
    const mutationDefaults = getPostOrgsUpdateOrganizationConfigurationMutationOptions<
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
