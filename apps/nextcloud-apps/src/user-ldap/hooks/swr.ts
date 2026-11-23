import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getPostOcsV2PhpAppsUserLdapApiV1ConfigKey() {
  return ['ocs', '/ocs/v2.php/apps/user_ldap/api/v1/config', 'POST'] as const
}

export function usePostOcsV2PhpAppsUserLdapApiV1Config<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsUserLdapApiV1ConfigKey()
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
            (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config']['$post']
          >
        },
      ) =>
        parseResponse(client.ocs['v2.php'].apps.user_ldap.api.v1.config.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsUserLdapApiV1ConfigConfigIDKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/user_ldap/api/v1/config/:configID', keyArgs] as const
}

export function useGetOcsV2PhpAppsUserLdapApiV1ConfigConfigID<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsUserLdapApiV1ConfigConfigIDKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsUserLdapApiV1ConfigConfigID<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsUserLdapApiV1ConfigConfigIDKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsUserLdapApiV1ConfigConfigIDKey() {
  return ['ocs', '/ocs/v2.php/apps/user_ldap/api/v1/config/:configID', 'PUT'] as const
}

export function usePutOcsV2PhpAppsUserLdapApiV1ConfigConfigID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsUserLdapApiV1ConfigConfigIDKey()
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
            (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsUserLdapApiV1ConfigConfigIDKey() {
  return ['ocs', '/ocs/v2.php/apps/user_ldap/api/v1/config/:configID', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsUserLdapApiV1ConfigConfigID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsUserLdapApiV1ConfigConfigIDKey()
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
            (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDTestKey() {
  return ['ocs', '/ocs/v2.php/apps/user_ldap/api/v1/config/:configID/test', 'POST'] as const
}

export function usePostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['test']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDTestKey()
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
            (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['test']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].test.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDCopyKey() {
  return ['ocs', '/ocs/v2.php/apps/user_ldap/api/v1/config/:configID/copy', 'POST'] as const
}

export function usePostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['copy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsUserLdapApiV1ConfigConfigIDCopyKey()
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
            (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['copy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].copy.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardActionKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/user_ldap/api/v1/wizard/:configID/:wizardAction',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard'][':configID'][':wizardAction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardActionKey()
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
            (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard'][':configID'][':wizardAction']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.user_ldap.api.v1.wizard[':configID'][':wizardAction'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsUserLdapApiV1WizardClearMappingsKey() {
  return ['ocs', '/ocs/v2.php/apps/user_ldap/api/v1/wizard/clearMappings', 'POST'] as const
}

export function usePostOcsV2PhpAppsUserLdapApiV1WizardClearMappings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard']['clearMappings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsUserLdapApiV1WizardClearMappingsKey()
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
            (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard']['clearMappings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.user_ldap.api.v1.wizard.clearMappings.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
