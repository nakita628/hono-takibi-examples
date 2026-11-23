import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getOcsKey() {
  return ['ocs'] as const
}

export function getGetIndexPhpSettingsAdminLogDownloadKey() {
  return ['index.php', '/index.php/settings/admin/log/download'] as const
}

export function useGetIndexPhpSettingsAdminLogDownload<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['index.php']['settings']['admin']['log']['download']['$get']>
          >
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
        ? getGetIndexPhpSettingsAdminLogDownloadKey()
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
                (typeof client)['index.php']['settings']['admin']['log']['download']['$get']
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
          client['index.php'].settings.admin.log.download.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexPhpSettingsAdminLogDownload<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['index.php']['settings']['admin']['log']['download']['$get']>
          >
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
        ? getGetIndexPhpSettingsAdminLogDownloadKey()
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
                (typeof client)['index.php']['settings']['admin']['log']['download']['$get']
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
          client['index.php'].settings.admin.log.download.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpSettingsApiDeclarativeValueKey() {
  return ['ocs', '/ocs/v2.php/settings/api/declarative/value', 'POST'] as const
}

export function usePostOcsV2PhpSettingsApiDeclarativeValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['settings']['api']['declarative']['value']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['settings']['api']['declarative']['value']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpSettingsApiDeclarativeValueKey()
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
            (typeof client.ocs)['v2.php']['settings']['api']['declarative']['value']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].settings.api.declarative.value.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpSettingsApiDeclarativeValueSensitiveKey() {
  return ['ocs', '/ocs/v2.php/settings/api/declarative/value-sensitive', 'POST'] as const
}

export function usePostOcsV2PhpSettingsApiDeclarativeValueSensitive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['settings']['api']['declarative']['value-sensitive']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['settings']['api']['declarative']['value-sensitive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpSettingsApiDeclarativeValueSensitiveKey()
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
            (typeof client.ocs)['v2.php']['settings']['api']['declarative']['value-sensitive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].settings.api.declarative['value-sensitive'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpSettingsApiDeclarativeFormsKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['settings']['api']['declarative']['forms']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/settings/api/declarative/forms', keyArgs] as const
}

export function useGetOcsV2PhpSettingsApiDeclarativeForms<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['settings']['api']['declarative']['forms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['settings']['api']['declarative']['forms']['$get']
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
        ? getGetOcsV2PhpSettingsApiDeclarativeFormsKey(args)
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
                (typeof client.ocs)['v2.php']['settings']['api']['declarative']['forms']['$get']
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
          client.ocs['v2.php'].settings.api.declarative.forms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpSettingsApiDeclarativeForms<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['settings']['api']['declarative']['forms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['settings']['api']['declarative']['forms']['$get']
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
        ? getGetOcsV2PhpSettingsApiDeclarativeFormsKey(args)
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
                (typeof client.ocs)['v2.php']['settings']['api']['declarative']['forms']['$get']
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
          client.ocs['v2.php'].settings.api.declarative.forms.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
