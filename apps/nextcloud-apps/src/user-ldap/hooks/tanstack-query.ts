import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getPostOcsV2PhpAppsUserLdapApiV1ConfigMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/user_ldap/api/v1/config', 'POST'] as const
}

export function getPostOcsV2PhpAppsUserLdapApiV1ConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsUserLdapApiV1ConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].apps.user_ldap.api.v1.config.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpAppsUserLdapApiV1Config<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpAppsUserLdapApiV1ConfigMutationOptions<
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

export function getOcsV2PhpAppsUserLdapApiV1ConfigConfigIDQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/user_ldap/api/v1/config/:configID', keyArgs] as const
}

export function getOcsV2PhpAppsUserLdapApiV1ConfigConfigIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsUserLdapApiV1ConfigConfigIDQueryKey>
  >({
    queryKey: getOcsV2PhpAppsUserLdapApiV1ConfigConfigIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsUserLdapApiV1ConfigConfigID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsUserLdapApiV1ConfigConfigIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOcsV2PhpAppsUserLdapApiV1ConfigConfigIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsUserLdapApiV1ConfigConfigID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsUserLdapApiV1ConfigConfigIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOcsV2PhpAppsUserLdapApiV1ConfigConfigIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOcsV2PhpAppsUserLdapApiV1ConfigConfigIDMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/user_ldap/api/v1/config/:configID', 'PUT'] as const
}

export function getPutOcsV2PhpAppsUserLdapApiV1ConfigConfigIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsUserLdapApiV1ConfigConfigIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].$put(args, options),
      )
    },
  })
}

export function usePutOcsV2PhpAppsUserLdapApiV1ConfigConfigID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOcsV2PhpAppsUserLdapApiV1ConfigConfigIDMutationOptions<
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

export function getDeleteOcsV2PhpAppsUserLdapApiV1ConfigConfigIDMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/user_ldap/api/v1/config/:configID', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsUserLdapApiV1ConfigConfigIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsUserLdapApiV1ConfigConfigIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsUserLdapApiV1ConfigConfigID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOcsV2PhpAppsUserLdapApiV1ConfigConfigIDMutationOptions<
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

export function getPostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDTestMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/user_ldap/api/v1/config/:configID/test', 'POST'] as const
}

export function getPostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['test']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['test']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['test']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].test.$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['test']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['test']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDTestMutationOptions<
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

export function getPostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDCopyMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/user_ldap/api/v1/config/:configID/copy', 'POST'] as const
}

export function getPostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['copy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['copy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDCopyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['copy']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].copy.$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDCopy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['copy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['copy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDCopyMutationOptions<
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

export function getPostOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardActionMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/user_ldap/api/v1/wizard/:configID/:wizardAction',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard'][':configID'][':wizardAction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard'][':configID'][':wizardAction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard'][':configID'][':wizardAction']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_ldap.api.v1.wizard[':configID'][':wizardAction'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard'][':configID'][':wizardAction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard'][':configID'][':wizardAction']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardActionMutationOptions<
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

export function getPostOcsV2PhpAppsUserLdapApiV1WizardClearMappingsMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/user_ldap/api/v1/wizard/clearMappings', 'POST'] as const
}

export function getPostOcsV2PhpAppsUserLdapApiV1WizardClearMappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard']['clearMappings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard']['clearMappings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsUserLdapApiV1WizardClearMappingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard']['clearMappings']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.user_ldap.api.v1.wizard.clearMappings.$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsUserLdapApiV1WizardClearMappings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard']['clearMappings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard']['clearMappings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpAppsUserLdapApiV1WizardClearMappingsMutationOptions<
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
